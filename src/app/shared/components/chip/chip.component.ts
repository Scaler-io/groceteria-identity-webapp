import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'groceteria-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input('color') color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
