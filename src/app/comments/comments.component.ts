import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../service/http.service';

import { iComment } from "../new-comments/new-comments.component";

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss'],
	providers: [HTTPService]
})
export class CommentsComponent implements OnInit {

	comments: iComment[] = [];

	flagError: boolean = false;

	constructor(
		private httpService: HTTPService
	) { }

	ngOnInit(): void {
		this.httpService.getComment().subscribe(
			res => {
				for (let item of res) {
					this.comments.push(item)
				}

				this.flagError = false;
			},
			err => {
				this.flagError = true;
			}
		)
	}

	pushComment(data: iComment) {
		this.httpService.postComment(data).subscribe(
			res => {
				this.comments.push(data);
				this.flagError = false;
			},
			err => {
				this.flagError = true;
			}
		)
	}
}
