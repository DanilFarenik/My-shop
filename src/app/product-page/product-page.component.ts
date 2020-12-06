import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iProductData } from '../app.component';
import { ProductsService } from "../service/products.service";


@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss'],
	providers: [ProductsService]
})
export class ProductPageComponent {
	@Input() product: any;
	@Output() exit = new EventEmitter();

	size: number = 0;

	errorMessage: string = "";

	flag: boolean = false;
	flagBlur: boolean = false;

	constructor(public ProductsService: ProductsService) { }

	exitEvent(e: any) {
		if (e.target.localName == "section") this.exit.emit(null);
	}

	validator() {
		if (this.size < this.product.minSize || this.size > 99) {
			this.errorList();
		} else if (this.flagBlur) {
			localStorage.setItem(this.product.title, JSON.stringify({
				price: this.product.price,
				size: this.size,
				minSize: this.product.minSize
			}));

			this.ProductsService.newProduct({
				name: this.product.title,
				price: this.product.price,
				size: this.size,
				minSize: this.product.minSize
			})
			this.exit.emit();
		}
	}

	errorList() {
		this.flagBlur = false
		this.flag = true;
		this.errorMessage = `
				Даний розмір замовлення недоступний!!!
				Мінімальний розмір замовлення ${this.product.minSize}, максимальний 99
			`;
	}

	inputValid(e: any) {
		if (+e.target.value < this.product.minSize || +e.target.value > 99) {
			this.errorList();
		} else {
			this.flagBlur = true
		}
	}
}
