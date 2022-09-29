
export interface Stock {
name: string;
code: string;
price: number;
previousPrice: number;
exchange: string;
favorite: boolean;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// export class Stock {
//   favorite = false;
//   notablePeople: Person[];
//   constructor(
//     public name: string,
//     public code: string,
//     public price: number,
//     public previousPrice: number,
//     public exchange: string
//   ) {
//     this.notablePeople = [];
//   }
//   isPositiveChange(): boolean {
//     return this.price >= this.previousPrice;
//   }
// }
// export class Person {
//   name: string;
//   title: string;
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export class Stock {
//   favorite: boolean = false;
//   constructor(
//     public name: string,
//     public code: string,
//     public price: number,
//     public previousPrice: number,
//     public exchange: string
//   ) {}

//   isPositiveChange(): boolean {
//     return this.price >= this.previousPrice;
//   }
//   checkPrice() {
//     if (this.price >= this.previousPrice) return true;
//     else this.price <= this.previousPrice;
//     return false;
//   }
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Data = [
//   {
//     name: "Tata Consultancy Services",
//     code: "TCS",
//     price: 85,
//     previousPrice: 80,
//   },
//   {
//     name: "Hindustan Computers Limited",
//     code: "HCL",
//     price: 60,
//     previousPrice: 80,
//   },
//   {
//     name: "GOGGLE",
//     code: "G",
//     price: 85,
//     previousPrice: 80,
//   },
// ];
