import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as signalR from "@aspnet/signalr";

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

console.log('starting ....');

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];


//todo where do we put this to enable the base url to work
const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:63315/librarieshub")
  //.withUrl(getBaseUrl() + "librarieshub")
  .build();


connection.on("ReceiveMessage", (username: string, message: string) => {
  console.log(message + 'haha');
});

connection.on("LibraryCreated", libraryCreatedEvent => {
  //todo cause the service to reload
  console.log('hello');
  console.log(`Library created  with id ${libraryCreatedEvent.LibraryId}.`);
});

connection.start().catch(err => document.write(err));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
