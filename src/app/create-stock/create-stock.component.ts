import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Stock } from "./../model/stock";
import { StockService } from "../service/stock.service";
// import { MessageService } from "../service/message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-stock",
  templateUrl: "./create-stock.component.html",
  styleUrls: ["./create-stock.component.css"],
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  public confirmed = false;
  public message = null;
  public exchanges = ["NYSE", "NASDAQ", "OTHER"];
  constructor(private stockService: StockService, private router: Router) {
    this.initializeStock();
  }
  ngOnInit(): void {}
  initializeStock() {
    this.stock = {
      name: "",
      code: "",
      price: 0,
      previousPrice: 0,
      exchange: "NASDAQ",
      favorite: false,
    };
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  createStock(stockForm) {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock).subscribe(
        (result: any) => {
          this.message = result.msg;
          this.initializeStock();
        },
        (err) => {
          this.message = err.error.msg;
        }
      );
    } else {
      this.message = "Stock form is in an invalid state";
    }
    this.router.navigateByUrl("/stock-list");
  }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public confirmed = false;
// public exchanges = ["NYSE", "NASDAQ", "OTHER"];
// message;
// constructor(
//   private stockService: StockService,
//   public messageService: MessageService
// ) {
//   this.stock = new Stock("", "", 0, 0, "NASDAQ");
//   this.messageService.message = "Component Level: Hello Message Service";
// }

// setStockPrice(price) {
//   this.stock.price = price;
//   this.stock.previousPrice = price;
// }
// createStock(stockForm) {
//   if (stockForm.valid) {
//     this.stockService.createStock(this.stock).subscribe(
//       (result: any) => {
//         this.message = result.msg;
//         this.stock = new Stock("", "", 0, 0, "NASDAQ");
//       },
//       (err) => {
//         this.message = err.msg;
//       }
//     );
//   } else {
//     console.error("Stock form is in an invalid state");
//   }

//   const created = this.stockService.createStock(this.stock);
//   if (created) {
//     this.messageService.message =
//       "Successfully created stock with stock code: " + this.stock.code;
//     this.stock = new Stock("", "", 0, 0, "NASDAQ");
//   } else {
//     this.messageService.message =
//       "Stock with stock code: " + this.stock.code + " already exists";
//   }
// } else {
//   this.error = "Stock form is in an invalid state";
// }

// !CODE FOR SERVICE
// public stock: Stock;
// public message = null;
// public error = null;
// public confirmed = false;
// public stockForm: FormGroup;
// public exchanges = ["NYSE", "NASDAQ", "OTHER"];

// constructor(
//   private stockService: StockService,
//   public messageService: MessageService,
//   private fb: FormBuilder
// ) {
//   this.createForm();
//   this.stock = new Stock("", "", 0, 0, "NASDAQ");
//   // this.createStock(this.stockForm);
// }
// ngOnInit(): void {}
// createForm() {
//   this.stockForm = this.fb.group({
//     name: [null, Validators.required],
//     code: [null, [Validators.required, Validators.minLength(2)]],
//     price: [null, [Validators.required, Validators.min(0)]],
//     exchange: [null, [Validators.required]],
//     notablePeople: this.fb.array([]),
//   });
// }
// get notablePeople(): FormArray {
//   return this.stockForm.get("notablePeople") as FormArray;
// }
// get name() {
//   return this.notablePeople.get("name");
// }
// addNotablePerson() {
//   this.notablePeople.push(
//     this.fb.group({
//       name: ["", Validators.required],
//       title: ["", Validators.required],
//     })
//   );
// }
// removeNotablePerson(index: number) {
//   this.notablePeople.removeAt(index);
// }
// resetForm() {
//   this.stockForm.reset();
//   this.message = null;
//   this.messageService.message = null;
//   this.error = null;
// }
// setStockPrice(price) {
//   this.stock.price = price;
//   this.stock.previousPrice = price;
// }
// createStock(stockForm) {
//   if (stockForm.valid) {
//     const created = this.stockService.createStock(stockForm.value);
//     if (created) {
//       this.message = `Successfully created stock with code : "${stockForm.value.code}"`;
//     } else {
//       this.messageService.message = `Stock with stock code: "${stockForm.value.code}" already exists`;
//     }
//   } else {
//     console.error("Stock Form is in an invalid state");
//     this.error = "Stock Form is in an invalid state";
//   }
// }

// onSubmit() {
//   this.stock = Object.assign({}, this.stockForm.value);
//   if (this.stockForm.valid) {
//     console.log("Creating stock ", this.stock);
//   } else {
//     console.error("Stock form is in an invalid state");
//   }
// }
// FormArraySubmit() {
//   console.log("FormArray SUBMIT");
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public stock: Stock;
// public confirmed = false;
// public exchanges = ["NYSE", "NASDAQ", "OTHER"];
// private stock: Stock;
// public stockForm: FormGroup;
// counter = 0;
// //  Dependency Injection
// constructor(private fb: FormBuilder) {

//   this.createForm();
//   this.stock = new Stock("Test " + this.counter++, "TST", 20, 10, "");
// }
// ngOnInit(): void {}
// createForm() {
//   this.stockForm = this.fb.group({
//     name: [null, Validators.required],
//     code: [null, [Validators.required, Validators.minLength(2)]],
//     price: [0, [Validators.required, Validators.min(0)]],
//   });
// }
// loadStockFromServer() {
//   this.stock = new Stock(
//     "Load from server " + this.counter++,
//     "LFS",
//     0,
//     200,
//     "ASC"
//   );
//   const stockFormModel = Object.assign({}, this.stock);
//   delete stockFormModel.previousPrice;
//   delete stockFormModel.favorite;
//   delete stockFormModel.exchange;
//   this.stockForm.setValue(stockFormModel);
// }
// patchStockForm() {
//   this.stock = new Stock(
//     `Patch Value ${this.counter++}`,
//     "PV",
//     100,
//     10,
//     "ASC2"
//   );
//   this.stockForm.patchValue({
//     code: 25,
//   });
// }
// resetForm() {
//   this.stockForm.reset();
// }
// onSubmit() {
//   this.stock = Object.assign({}, this.stockForm.value);
//   console.log("Saving stock", this.stock);
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public stockForm: FormGroup;
// //  Dependency Injection
// constructor(private fb: FormBuilder) {
//   this.stock = new Stock("", "", 0, 0, "");
//   this.createForm();
// }
// ngOnInit(): void {}
// /* Skipping irrelevant code here */
// get name() {
//   return this.stockForm.get("name");
// }
// get price() {
//   return this.stockForm.get("price");
// }
// get code() {
//   return this.stockForm.get("code");
// }
// // !

// createForm() {
//   this.stockForm = this.fb.group({
//     name: [null, Validators.required],
//     code: [null, [Validators.required, Validators.minLength(2)]],
//     price: [0, [Validators.required, Validators.min(0)]],
//   });
// }
// onSubmit() {
//   console.log("Stock Form Value", this.stockForm.value);
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public stockForm: FormGroup = new FormGroup({
//     name: new FormControl(null, Validators.required),
//     code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
//     price: new FormControl(0, [Validators.required, Validators.min(0)]),
//   });
//   onSubmit() {
//     console.log("Stock Form Value", this.stockForm.value);
//   }

//   createStock(stockForm) {
//     // console.log(stockForm.value.stock);
//     // console.log("Stock form", stockForm.value);

//     if (stockForm.valid) {
//       this.stock = stockForm.value.stock;
//       console.log("Creating stock ", this.stock);
//     } else {
//       console.error("Stock form is in an invalid state");
//     }
//   }
//   setStockPrice(price) {
//     this.stock.price = price;
//     this.stock.previousPrice = price;
//     // console.log(price);
//   }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public nameControl = new FormControl();
// public codeControl = new FormControl();
// public priceControl = new FormControl();
// public exchangeControl = new FormControl();
// onSubmit() {
//   console.log(
//     `Stock Name is ${this.nameControl.value}
//      stockCode is ${this.codeControl.value}
//      stockPrice is ${this.priceControl.value}
//      stockExchange is ${this.exchangeControl.value}`
//   );
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *************************************************
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public stock: Stock;
// public confirmed = false;
// public exchanges = ["NYSE", "NASDAQ", "OTHER"];
// constructor() {
//   this.stock = new Stock("", "", 0, 0, "NASDAQ");
// }
// ngOnInit(): void {
//   // this.show();
// }
// show(stockName) {
//   console.log(stockName);
//   console.log("asyncValidator__ " + stockName.asyncValidator);
//   console.log("Dirty__" + stockName.dirty);
//   console.log("Disable__" + stockName.disabled);
//   console.log("enable__" + stockName.enabled);
//   console.log("errors__" + stockName.errors);
//   console.log("errors__" + stockName.errors.required);
//   console.log("errors__" + stockName.errors.minlength);
//   console.log("formDirective__" + stockName.formDirective);
//   console.log("Invalid__" + stockName.invalid);
//   console.log("path__" + stockName.path);
//   console.log("pristine__" + stockName.pristine);
//   console.log("status__" + stockName.status);
//   console.log("statusChanges__" + stockName.statusChanges);
//   console.log("Touched__" + stockName.touched);
//   console.log("Untouched__" + stockName.untouched);
//   console.log("valid__" + stockName.valid);
//   console.log("validator__" + stockName.validator);
//   console.log("pending__" + stockName.pending);
//   console.log("Value__" + stockName.value);
//   console.log("ValueChange__" + stockName.valueChanges);
// }
// setStockPrice(price) {
//   this.stock.price = price;
//   this.stock.previousPrice = price;
//   console.log(price);
// }
// createStock(stockForm) {
//   // console.log("Stock form", stockForm.value);
//   if (stockForm.valid) {
//     this.stock = stockForm.value.stock;
//     console.log("Creating stock ", this.stock);
//   } else {
//     console.error("Stock form is in an invalid state");
//   }
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public stock: Stock;
// public confirmed = false;
// public exchanges = ["NYSE", "NASDAQ", "OTHER"];
// constructor() {
//   this.stock = new Stock("", "", 0, 0, "NASDAQ");
// }
// ngOnInit(): void {}

// setStockPrice(price) {
//   this.stock.price = price;
//   this.stock.previousPrice = price;
//   console.log(price);
// }
// createStock(stockForm) {
//   // console.log("Stock form", stockForm);
//   if (stockForm.valid) {
//     console.log("Creating stock ", this.stock);
//   } else {
//     console.error("Stock form is in an invalid state");
//   }
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// public stock: Stock;
// public confirmed = false;
// constructor() {
//   this.stock = new Stock("test", "", 0, 0, "NASDAQ");
// }
// ngOnInit(): void {}

// setStockPrice(price) {
//   this.stock.price = price;
//   this.stock.previousPrice = price;
// }

// createStock() {
//   console.log("Creating stock ", this.stock);
//  }
