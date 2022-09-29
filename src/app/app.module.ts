import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StockItemComponent } from "./stock-item/stock-item.component";
// import { TestComponentComponent } from "./test-component/test-component.component";
import { CreateStockComponent } from "./create-stock/create-stock.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StockListComponent } from "./stock-list/stock-list.component";

import { StockService } from "./service/stock.service";
import { MessageService } from "./service/message.service";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,

    StockItemComponent,

    CreateStockComponent,

    StockListComponent,

    HomeComponent,

    NavBarComponent,

    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StockService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
