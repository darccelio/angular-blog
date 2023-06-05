import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() horizontalPhotoCover: string;

  @Input() cardTitle: string;

  @Input() id: number;

  constructor() {}

  ngOnInit(): void {

  }

}
