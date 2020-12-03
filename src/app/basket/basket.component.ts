import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { iProductData } from '../app.component';
import { iData } from '../basket-form/basket-form.component';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnChanges, OnInit {
	@Input() products!: Array<iProductData>;
	@Output() deleteProduct = new EventEmitter<string>()

	cost: number = 0;

	flag: boolean = false;

	ngOnInit(): void {
		this.fullCost();
		console.log(this.products.length);

		if (!this.products.length) {
			this.flag = true;
		}
	}

	fullCost() {
		this.cost = 0;
		for (let item of this.products) {
			this.cost += item.size * item.price;
		}
	}

	delete(event: string) {
		this.deleteProduct.emit(event);
	}

	ngOnChanges(changes: SimpleChanges) {
		this.fullCost();
		if (this.products.length) {
			this.flag = false;
		} else {
			this.flag = true;
		}
	}


	sendingData(event: iData) {
		if (!this.flag) {
			let dataSend: [iData, Array<iProductData>] = [event, this.products];
			console.log(dataSend);


		} else {
			alert("Карзина пуста")
		}
	}
}
