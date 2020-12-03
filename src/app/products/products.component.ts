import { Component, EventEmitter, Output } from '@angular/core';
import { HTTPService } from '../service/http.service';

import { iError } from '../error-list/error-list.component';
import { iProductData } from '../app.component';

export interface iProduct {
	title: string,
	id?: number,
	img: string,
	price: number,
	body: string,
	minSize?: number
}

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
	providers: [HTTPService]
})
export class ProductsComponent {
	@Output() exportProduct = new EventEmitter<iProductData>();

	products: any;

	searchstr: string = "";

	productPage: any = [];

	flag: boolean = false;

	errorFlag: boolean = true;

	errorHttpMes: iError = {
		title: '402',
		body: 'Проблема доступа к серверу!!'
	};


	constructor(private HTTPService: HTTPService) { }

	exports(event: any) {
		this.exportProduct.emit(event)
	}

	ngOnInit() {
		this.HTTPService.getPraducts().subscribe(products => {
			this.products = products;
			console.log(products);
		}, (error) => {
			this.errorFlag = false;
		})
	}

	open(p: any) {
		this.flag = true;
		this.productPage = p
	}
}
