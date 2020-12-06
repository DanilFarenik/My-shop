import { Component, OnInit } from '@angular/core';

import { iData } from '../basket-form/basket-form.component';

import { HTTPService } from '../service/http.service';

@Component({
	selector: 'app-special-order',
	templateUrl: './special-order.component.html',
	styleUrls: ['./special-order.component.scss'],
	providers: [HTTPService]
})
export class SpecialOrderComponent implements OnInit {

	constructor(private HTTPService: HTTPService) { }

	ngOnInit(): void {
	}

	flagError: boolean = false;

	sendingData(event: iData) {
		let arr = [event];

		this.HTTPService.postOrder(arr).subscribe(
			res => {
				this.flagError = false;
				console.log(res);
			},
			error => {
				this.flagError = true;
			});
	}

}
