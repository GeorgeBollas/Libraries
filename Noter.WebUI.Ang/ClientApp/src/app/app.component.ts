import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noter';

  leftNavOpen: boolean = true;
  contentMargin = 240;

  toggled() {
    this.leftNavOpen = !this.leftNavOpen;

    if (!this.leftNavOpen) {
      this.contentMargin = 70
    }
    else {
      this.contentMargin = 240

    }
    console.log('toggled');
  }
}
