import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title:String = 'wTher';
  public subtitle: String = 'you like it or not';
  
  constructor() { }

  ngOnInit() {
  }

}
