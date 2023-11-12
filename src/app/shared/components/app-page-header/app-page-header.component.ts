import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'groceteria-app-page-header',
  templateUrl: './app-page-header.component.html',
  styleUrls: ['./app-page-header.component.scss'],
})
export class AppPageHeaderComponent implements OnInit {
  public pageName: string;
  public pageIcon: string;

  private pageIconMap = {
    ['Dashboard']: 'dashboard',
    ['Api clients']: 'devices'
  }

  constructor(private breadCrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumb.breadcrumbs$.subscribe(page => {
      const pageLabel = page[0]?.label as string;
      this.pageIcon = this.pageIconMap[pageLabel];
      this.pageName = pageLabel
    })
  }
}
