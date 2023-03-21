import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent {

  tableData: any = {}
  retrieveTableData$: any

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.retrieveTableData()
  }

  retrieveTableData() {
    this.retrieveTableData$ = this.api.getData().subscribe(res =>{
      this.tableData = res
    })
  }

  ngOnDestroy() {
     this.retrieveTableData$.unsubscribe()
  }
}
