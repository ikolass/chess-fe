import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChessComponent} from './chess/chess.component';
import {ChessRouterModule} from "./chess/chess.router";
import {NgxChessBoardModule} from "ngx-chess-board";
import {ChessService} from "../service/chess.service";

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChessRouterModule,
    NgxChessBoardModule.forRoot()
  ],
  providers: [AppComponent,
  ChessService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
