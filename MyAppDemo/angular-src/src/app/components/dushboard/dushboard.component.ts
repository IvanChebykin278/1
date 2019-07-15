import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import "@ui5/webcomponents/dist/Table";
//import { ColumnConfig } from 'material-dynamic-table';

@Component({
  selector: 'app-dushboard',
  templateUrl: './dushboard.component.html',
  styleUrls: ['./dushboard.component.css']
})
export class DushboardComponent implements OnInit {

  constructor(private authService: AuthService) { }
  data: Object[] = [];
  // columns: ColumnConfig[] = [
  //   {
  //     name: 'name',
  //     displayName: 'Product',
  //     type: 'string'
  //   },
  //   {
  //     name: 'manufacturer',
  //     displayName: 'Manufacturer',
  //     type: 'string'
  //   },
  //   {
  //     name: 'price',
  //     displayName: 'Price',
  //     type: 'number'
  //   }
  // ];

  ngOnInit() {
    this.authService.getAppliancesList().subscribe(applianesList => {
      for(var i = 0; i < applianesList.data.length; i++) {
        let appliane = {
          name: applianesList.data[i].name,
          manufacturer: applianesList.data[i].manufacturer,
          price: applianesList.data[i].price
        };

        this.data.push(appliane);
      }
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
