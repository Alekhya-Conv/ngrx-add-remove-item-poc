import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {itemReducer} from './reducers/item.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      items: itemReducer
    })
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
