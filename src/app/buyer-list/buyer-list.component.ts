import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  private buyerId: number;
  constructor(private routeInfo:ActivatedRoute) {}

  ngOnInit() {
    this.routeInfo.params.subscribe((param:Params) => this.buyerId=param["id"])
    this.buyerId = this.routeInfo.snapshot.params["id"];
  }

}
