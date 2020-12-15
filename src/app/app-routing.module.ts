import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';

import { TitleComponent } from './title/title.component';
import { SpecialOrderComponent } from './special-order/special-order.component';
import { ProductsComponent } from './products/products.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'basket', component: BasketComponent },
  { path: "order", component: SpecialOrderComponent },
  { path: "products", component: ProductsComponent },
  { path: "comments", component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TitleComponent,
  BasketComponent,
  SpecialOrderComponent,
  ProductsComponent,
  CommentsComponent
]