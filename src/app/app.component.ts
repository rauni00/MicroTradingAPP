import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Stock Market App";
  ngOnInit(): void {}
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import { Stock } from "./model/stock";
// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"],
// })
// export class AppComponent implements OnInit {
//   title = "MicroTradingAPP";
//   public stockObj: Stock;
//   ngOnInit(): void {
//     this.stockObj = new Stock("Tata Consultancy Services", "TCS", 85, 80);
//     // [
//     //   new Stock("Tata Consultancy Services", "TCS", 85, 80),
//     //   new Stock("Tata", "TCS", 85, 80),
//     //   new Stock("Hindustan Computers Limited", "HCL", 60, 80),
//     //   new Stock("GOGGLE", "G", 75, 80),
//     //   new Stock("Hindustan", "H", 63, 80),
//     //   new Stock(" Computers", "C", 80, 80),
//     //   new Stock("Limited", "HCL", 40, 80),
//     // ];
//   }
//   onToggleFavorite(stock: Stock) {
//     console.log("Favorite for stock", stock, "was Triggered");
//     this.stockObj.favorite = !this.stockObj.favorite;
//   }
// }
