import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { iProductData } from '../app.component';
import { iData } from '../basket-form/basket-form.component';

import { HTTPService } from '../service/http.service';
import { ProductsService } from "../service/products.service";

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss'],
	providers: [HTTPService, ProductsService]
})
export class BasketComponent implements OnChanges, OnInit {
	cost: number = 0;

	flag: boolean = false;

	flagErrorSend: boolean = false;


	constructor(
		private HTTPService: HTTPService,
		public ProductsService: ProductsService
	) { }
	ngOnInit(): void {
		this.fullCost();

		if (!this.ProductsService.products.length) {
			this.flag = true;
		}
	}

	fullCost() {
		this.cost = 0;

		for (let item of this.ProductsService.products) {
			this.cost += item.size * item.price;
		}
	}

	delete(event: string) {
		this.ProductsService.delete(event)
	}

	ngOnChanges(changes: SimpleChanges) {
		this.fullCost();
		if (this.ProductsService.products.length) {
			this.flag = false;
		} else {
			this.flag = true;
		}
	}

	sendingData(event: iData) {
		if (!this.flag) {
			let dataSend: [iData, Array<iProductData>] = [event, this.ProductsService.products];
			this.HTTPService.postOrder(dataSend).subscribe(
				(res: any) => {
					this.flagErrorSend = false;
				},
				error => {
					this.flagErrorSend = true;
				}
			)
		} else {
			alert("Карзина пуста")
		}
	}
}
