import { CreateStockComponent } from "./create-stock/create-stock.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StockItemComponent } from "./stock-item/stock-item.component";
import { StockListComponent } from "./stock-list/stock-list.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "stock-list",
    component: StockListComponent,
  },
  {
    path: "create-stock",
    component: CreateStockComponent,
  },
  {
    path: "contact-us",
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
