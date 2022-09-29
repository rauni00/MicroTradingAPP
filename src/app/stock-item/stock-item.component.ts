import { StockService } from "./../service/stock.service";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Stock } from "../model/stock";

@Component({
  selector: "app-stock-item",
  templateUrl: "./stock-item.component.html",
  styleUrls: ["./stock-item.component.css"],
})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;
  constructor(private stockService: StockService) {}
  ngOnInit(): void {}

  onToggleFavorite(event) {
    this.stockService
      .toggleFavorite(this.stock)
      .subscribe((stock) => (this.stock.favorite = !this.stock.favorite));
  }
}
// @Input() public stock: Stock;
// @Output() private toggleFavorite: EventEmitter<Stock>;
// constructor() {
//   this.toggleFavorite = new EventEmitter<Stock>();
// }
// ngOnInit(): void {}

// onToggleFavorite(event) {
//   this.toggleFavorite.emit(this.stock);
// }
// changeStockPrice() {
//   this.stock.price += 5;
// }
// changeStockPrice2() {
//   this.stock.price -= 5;
// }
// trackStockByCode(stock) {
//   return stock.code;
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this.stock = [
//   new Stock("Tata Consultancy Services", "TCS", 85, 80),
//   new Stock("Tata", "TCS", 85, 80),
//   new Stock("Hindustan Computers Limited", "HCL", 60, 80),
//   new Stock("GOGGLE", "G", 75, 80),
//   new Stock("Hindustan", "H", 63, 80),
//   new Stock(" Computers", "C", 80, 80),
//   new Stock("Limited", "HCL", 40, 80),
// ];
// !
// this.stocktyle = {
// public stocktyle;
// color: this.stock.isPositiveChange() ? "green" : "red",
// "font-size": this.stock.checkPrice() ? "1.2em" : "0.8em",
// };
// !
// toggleFavorite(event, index) {
//   console.log(
//     "We are toggling the favorite state for this stock",
//     index,
//     event
//   );
//   this.stock[index].favorite = !this.stock[index].favorite;
// }

// !
// this.name = "Tata Consultancy Services";
// this.code = "TSC";
// this.price = 75;
// this.previousPrice = 80;
// this.positiveCharge = this.price >= this.previousPrice;
// this.favorite = false;
// !==========================================================================================---------
// this.stockClasses = {
//   positive: this.stock.isPositiveChange(),
//   negative: !this.stock.isPositiveChange(),
//   "large-change": largeChange,
//   "small-change": !largeChange,
// };

// this.dataArray = this.stock.Data;
// let diff = this.stock.price / this.stock.previousPrice - 1;
// let largeChange = Math.abs(diff) > 0.01;
// largeChange ? "1.2em" : "0.8em",
