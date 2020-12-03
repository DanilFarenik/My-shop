import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CookieService } from '../service/cookies.service'

export interface iData {
	email: string,
	tel: string,
	lastName: string,
	firstName: string,
	text?: string,
}

@Component({
	selector: 'app-basket-form',
	templateUrl: './basket-form.component.html',
	styleUrls: ['./basket-form.component.scss'],
	providers: [CookieService]
})
export class BasketFormComponent {
	@Output() data = new EventEmitter<iData>();

	@Input() setings: boolean = false;

	textError: string = '';

	mapName: any = {
		firstName: "Имя: ",
		lastName: "Фамилия: ",
		tel: "Телефон: ",
		email: "Email: ",
		text: "Текст заказа: "
	}

	mapError: any = {
		minlength: "несответствует min Size; ",
		maxlength: "несответствует max Size; ",
		required: "поле обязательно для ввода; ",
		pattern: "не коректно pзадано значение; "
	}

	cookie: any = this.cookieService.cookie;

	firstNameValue: string = this.cookie.firstName ?? '';
	lastNameValue: string = this.cookie.lastName ?? '';
	telValue: string = this.cookie.tel ?? '';
	emailValue: string = this.cookie.email ?? '';
	textValue: string = '';

	flagError: boolean = false;

	constructor(private cookieService: CookieService) { }

	validator(...checkError: any[]): string | void {
		this.textError = '';

		if (!this.setings) {
			checkError = checkError.filter(item => item.name != "text");
		}

		for (let item of checkError) {
			if (item.errors) {
				this.textError += this.mapName[item.name];

				for (let err in item.errors) {
					this.textError += this.mapError[err];
				}
				this.textError += `\n`;
				this.flagError = true;
			}
		}

		if (!this.flagError) {
			let parameters: iData = {
				firstName: this.firstNameValue,
				lastName: this.lastNameValue,
				tel: this.telValue,
				email: this.emailValue
			};

			this.cookieService.setCookieData(parameters);

			if (this.textValue) {
				parameters["text"] = this.telValue;
			}

			this.data.emit(parameters);
		}
	}

	valTel(event: any) {
		let { value } = event.target;

		if (value.length === 3 || value.length === 7) {
			event.target.value += "-";
		}

		if (!"1234567890".includes(value[value.length - 1]) || value.length > 12) {
			event.target.value = value.slice(0, value.length - 1);
			this.telValue = value.slice(0, value.length - 1);
		};
	}
}
