import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Product} from '../../../classes/product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'spa-expcheckout',
  templateUrl: './expcheckout.component.html',
  styleUrls: ['./expcheckout.component.css']
})
export class ExpcheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
