import { Component, EventEmitter, Input, Output } from '@angular/core';

import { iProductData } from '../app.component';

@Component({
	selector: 'app-basket-item',
	templateUrl: './basket-item.component.html',
	styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {
	@Input() product!: iProductData;

	@Output() reSize = new EventEmitter();
	@Output() deleteItem = new EventEmitter<string>()

	validator(target: any) {
		if (parseInt(target.value) < this.product.minSize || !parseInt(target.value)) {
			target.value = this.product.minSize;
			this.product.size = this.product.minSize;
		} else if (parseInt(target.value) > 99) {
			target.value = 99;
			this.product.size = 99;
		}

		this.reSize.emit();
	}
	post() {
		if (this.product.size > 99) {
			this.product.size = 99;
		}
		this.reSize.emit();
	}

	remuveItem() {
		if (confirm("Вы точно хотите удалить данный заказ?")) {
			localStorage.removeItem(this.product.name)

			this.deleteItem.emit(this.product.name);
		}
	}
}
