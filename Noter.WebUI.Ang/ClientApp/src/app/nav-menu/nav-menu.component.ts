import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  //todo should we use subject rather than event emitter
  @Output() leftMenuClicked = new EventEmitter();
  @Output() rightMenuClicked = new EventEmitter();

}
