import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as signalR from "@aspnet/signalr";

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];


//tod where do we put this to enable the base url to work
const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:63315/librarieshub")
  //.withUrl(getBaseUrl() + "librarieshub")
  .build();

connection.start().catch(err => document.write(err));

connection.on("ReceiveMessage", (username: string, message: string) => {
  console.log(message);
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
