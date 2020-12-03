import { Component, Input, OnInit } from '@angular/core';
import { iComment } from '../new-comments/new-comments.component';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.scss']
})
export class ShowCommentComponent implements OnInit {
  @Input() comm!: iComment;

  constructor() { }

  ngOnInit(): void {
  }

}
