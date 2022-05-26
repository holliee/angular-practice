import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

//The @Component() definition also exports the class, ProductAlertsComponent, which handles //functionality for the component
@Component({

  //The selector, app-product-alerts, identifies the component. By convention, Angular component //selectors begin with the prefix app-, followed by the component name.
  selector: 'app-product-alerts',

  //The template and style filenames reference the component's HTML and CSS
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }

  ngOnInit() {
  }
}
