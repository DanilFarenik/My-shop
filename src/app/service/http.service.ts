import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { iProductData } from '../app.component';
import { iData } from '../basket-form/basket-form.component';
import { iComment } from '../new-comments/new-comments.component';

import { iProduct } from "../products/products.component";

@Injectable({ providedIn: 'root' })
export class HTTPService {
    readonly url = 'http://localhost:3000';

    products: iProduct[] = [];

    constructor(private http: HttpClient) { }

    getPraducts() {
        return this.http.get(this.url + '/card');
    }

    postOrder(data: [iData, Array<iProductData>] | iData[]) {
        return this.http.post(this.url + "/order", data);
    }

    getComment() {
        return this.http.get<iComment[]>(this.url + "/comment");
    }

    postComment(comm: iComment) {
        return this.http.post(this.url + "/postComment", comm);
    }
}