import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-order',
  templateUrl: './special-order.component.html',
  styleUrls: ['./special-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialOrderComponent implements OnInit {

  @Input() text!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
