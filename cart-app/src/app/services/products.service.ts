import {Injectable} from '@angular/core';
import {Product} from '../classes/product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => {
        return _.find((item: Product) => {
          return item.id === id;
        });
      });
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'AC Delco', price: 123.09},
      <Product>{id: 2, name: 'Gas 134a', price: 99.09},
      <Product>{id: 3, name: 'AUC Gen Comp', price: 23.67},
      <Product>{id: 4, name: 'TOYO Evap Gen', price: 99.09},
    ]);
  }
}
