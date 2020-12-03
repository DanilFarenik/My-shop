import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './products/products.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { BasketComponent } from './basket/basket.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { BasketFormComponent } from './basket-form/basket-form.component';

import { SeathcPipe } from './pipe/searhc.pipe';
import { SpecialOrderComponent } from './special-order/special-order.component';
import { CommentsComponent } from './comments/comments.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    CardComponent,
    ProductsComponent,
    SeathcPipe,
    ProductPageComponent,
    ErrorListComponent,
    BasketComponent,
    BasketItemComponent,
    BasketFormComponent,
    SpecialOrderComponent,
    CommentsComponent,
    NewCommentsComponent,
    ShowCommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
