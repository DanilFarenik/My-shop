import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { iProduct } from "../products/products.component";

@Injectable({ providedIn: 'root' })
export class ProductService {
    readonly url = 'http://localhost:3000';

    products: iProduct[] = [];

    constructor(private http: HttpClient) { }

    getPraducts() {
        return this.http.get(this.url + '/card');
    }
}