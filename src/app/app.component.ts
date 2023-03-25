import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project_food-website';

  constructor(){}

  ngOnInit(): void {
    Aos.init();
  }

  onActivate(event: any){
    window.scroll(0,0);
  }

}
