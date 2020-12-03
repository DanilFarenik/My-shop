import { Component, Input } from '@angular/core';

export interface iError {
  title: string,
  body: string
}

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent {

  @Input() errorMessege: iError = {
    title: '404',
    body: 'ERROR'
  };

}
