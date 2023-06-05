import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() horizontalPhotoCover: string | undefined;
  @Input() cardTitle: string;
  @Input() summary: string | undefined;
  @Input() id: number;

  constructor() {}

  ngOnInit(): void {

  }
}
