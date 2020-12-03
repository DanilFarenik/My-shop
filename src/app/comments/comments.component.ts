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

	comments!: iComment[];

	constructor(
		private httpService: HTTPService
	) { }

	ngOnInit(): void {
		this.httpService.getComment().subscribe(
			res => {

			},
			err => {

			}
		)
	}

	pushComment(data: iComment) {
		this.comments.push(data);
	}

}
