import { StockService } from "./../service/stock.service";
import { Component, OnInit } from "@angular/core";
import { Stock } from "../model/stock";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  startWith,
  share,
} from "rxjs/operators";

@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.css"],
})
export class StockListComponent implements OnInit {
  public stocks$: Observable<Stock[]>;
  public searchString = "";
  private searchTerms: Subject<string> = new Subject();
  constructor(private stockService: StockService) {
    console.log(this.searchString);
  }

  ngOnInit() {
    // this.stocks$ = this.stockService.getStocks(this.searchString);
    this.stocks$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => this.stockService.getStocks(query)),
      share()
    );
  }
  search() {
    // this.stocks$ = this.stockService.getStocks(this.searchString);
    this.searchTerms.next(this.searchString);
  }
}

// public stocks: Stock[];
// public stocks$: Observable<Stock[]>;
// // !DEPENDENCY INJECTION OF SERVICE
// constructor(private serviceService: StockService) {}
// ngOnInit() {
//   //  this.stockService.getStocks().subscribe(stocks=>{
//   // this.stocks=stocks})
//   this.stocks$ = this.serviceService.getStocks();
// }
// onToggleFavorite(stock: Stock) {
//   console.log("Favorite for stock ", stock, " was triggered");
//   // stock.favorite = !stock.favorite;
//   this.serviceService.toggleFavorite(stock);
// }
