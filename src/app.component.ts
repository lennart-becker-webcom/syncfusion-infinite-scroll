import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from './order.service';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';
import { AsyncPipe } from '@angular/common';
import {
  GridModule,
  SortService,
  GroupService,
  PageService,
  InfiniteScrollService,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [SortService, GroupService, PageService, InfiniteScrollService],
  standalone: true,
  imports: [GridModule, AsyncPipe],
})
export class AppComponent {
  public data: Observable<DataStateChangeEventArgs>;
  public pageOptions: Object;
  public state: DataStateChangeEventArgs;

  constructor(private service: OrdersService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    console.log('API Call');
    this.service.execute(state);
  }

  public ngOnInit(): void {
    let state = { skip: 0, take: 10 };
    this.service.execute(state);
  }
}
