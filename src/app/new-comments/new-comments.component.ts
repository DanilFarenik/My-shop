import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieService } from "../service/cookies.service";


export interface iComment {
	name: string,
	text: string,
	id?: number,
	date: string
}

@Component({
	selector: 'app-new-comments',
	templateUrl: './new-comments.component.html',
	styleUrls: ['./new-comments.component.scss'],
	providers: [CookieService]
})
export class NewCommentsComponent implements OnInit {

	@Output() setComment = new EventEmitter<iComment>()

	name: string = this.cookieService.cookie.name ?? "";
	text: string = "";

	nameError: boolean = false;
	textError: boolean = false;

	constructor(private cookieService: CookieService) { }
	ngOnInit(): void {
	}

	validator() {
		this.nameError = false;
		this.textError = false;

		if (this.name.length < 4 || this.name.length > 20) {
			this.nameError = true;
		}

		if (this.text.length < 20 || this.text.length > 500) {
			this.textError = true;
		}

		if (this.nameError || this.textError) return;

		this.setComment.emit({
			name: this.name,
			text: this.text,
			date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
		})
	}
}
