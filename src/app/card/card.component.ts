import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})

export class CardComponent {

	@Input() product: any;

	getUrlImag(image: string): string {
		return `url("${image}")`;
	}
}
