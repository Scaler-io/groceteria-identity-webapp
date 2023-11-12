import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'groceteria-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input('list') list: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
