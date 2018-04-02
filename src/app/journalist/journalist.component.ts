import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journalist',
  templateUrl: './journalist.component.html',
  styleUrls: ['./journalist.component.css']
})
export class JournalistComponent implements OnInit {

  @Input() name: string;
  heroes  = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {
  
  } 


  ngOnInit() {
  } 

 
}
