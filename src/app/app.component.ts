import { Component } from '@angular/core';

export interface iProductData {
	name: string,
	price: number,
	size: number,
	minSize: number,
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'My-Shop';

	productsData: Array<iProductData> = this.handlerLocalStorage();

	newProduct(event: iProductData) {
		let flag = true;

		this.productsData.forEach(item => {
			console.log(item.name, event.name);

			if (item.name == event.name) {
				flag = false;
			}
		})

		if (event && flag) this.productsData = [...this.productsData, event];
	}

	handlerLocalStorage(): Array<iProductData> {
		let data: Array<iProductData> = [];

		for (let item in localStorage) {
			try {
				if (typeof localStorage[item] == "string") {
					let tmp: iProductData = JSON.parse(localStorage[item]);
					tmp["name"] = item;

					data.push(tmp)
				}
			} catch { }
		}

		return data;
	}

	delete(event: string) {
		this.productsData = this.productsData.filter((item: any) => event != item.name)
	}
}


