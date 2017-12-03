import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pizzas: any[];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getPizzas().subscribe(item => {
      this.pizzas = item.map(pizza => {
        return {
          name: pizza['name'],
          toppings: pizza['toppings']
        };
      });
    });
  }
}
