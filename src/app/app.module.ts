import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpaceTradersRoutingModule } from './app-routing.module';
import { SpaceTradersComponent } from './app.component';
import { PlayerComponent } from 'components/Player/Player';
import { LoansComponent } from 'components/Loans/Loans';
import { GoodsComponent } from 'components/Goods/Goods';
import { ShipsComponent } from 'components/Ships/Ships';

@NgModule({
  declarations: [
    SpaceTradersComponent,
    PlayerComponent,
    LoansComponent,
    GoodsComponent,
    ShipsComponent
  ],
  imports: [
    BrowserModule,
    SpaceTradersRoutingModule
  ],
  providers: [],
  bootstrap: [SpaceTradersComponent]
})
export class SpaceTradersModule { }
