import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noter';

  leftNavOpen: boolean = true;
  rightNavOpen: boolean = true;
  leftContentMargin = 240;
  rightContentMargin = 240;

  toggledLeft() {
    this.leftNavOpen = !this.leftNavOpen;

    if (!this.leftNavOpen) {
      this.leftContentMargin = 80 //todo make these shared with css
    }
    else {
      this.leftContentMargin = 240
    }
    console.log('left toggled');
  }

  toggledRight() {
    this.rightNavOpen = !this.rightNavOpen;

    if (!this.rightNavOpen) {
      this.rightContentMargin = 80
    }
    else {
      this.rightContentMargin = 240
    }
    console.log('right toggled');
  }

}
