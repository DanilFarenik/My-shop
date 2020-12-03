import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iProductData } from '../app.component';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
	@Input() product: any;
	@Output() exit: EventEmitter<any> = new EventEmitter<iProductData>();

	size: number = 0;

	errorMessage: string = "";

	flag: boolean = false;
	flagBlur: boolean = false;

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

			this.exit.emit({
				name: this.product.title,
				price: this.product.price,
				size: this.size,
				minSize: this.product.minSize
			});
		}
	}

	errorList() {
		this.flagBlur = false
		this.flag = true;
		this.errorMessage = `
				Данный размер заказа недоступен!!!
				Минимальный размер заказа ${this.product.minSize}, максимальний 99
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
