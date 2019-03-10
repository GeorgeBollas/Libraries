import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
  }



  ngOnInit() {
    this.route.paramMap.subscribe(p => this.id = +p.get('id')); //+ trick to convert to number
  }

}
