import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  @Output() menuClicked = new EventEmitter();

  collapse() {
    this.isExpanded = false;
  }

  menuButtonClicked() {
    this.menuClicked.emit();
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
