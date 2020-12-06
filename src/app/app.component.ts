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
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'My-Shop';
}


