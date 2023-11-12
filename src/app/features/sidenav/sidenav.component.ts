import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'groceteria-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input('appCount') appCount: any;
  constructor() {}

  ngOnInit(): void {}
}
