import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params["searchTerm"]){
        this.foods = this.foodService.getAllFoodsBySearchTerm(params["searchTerm"]);
          console.log(this.foods);
        } else if (params["tag"]) {
          this.foods = this.foodService.getAllFoodsByTag(params["tag"]);
        } else {
          this.foods = this.foodService.getAll();
        }
    });
  }
}
