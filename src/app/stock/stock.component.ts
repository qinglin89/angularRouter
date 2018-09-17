import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stockId:number;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.stockId = this.routeInfo.params.subscribe((params: Pramas) => this.stockId = params["id"])
    this.stockId = this.routeInfo.snapshot.params["id"];
  }

}
