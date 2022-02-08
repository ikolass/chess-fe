import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChessComponent} from "./chess.component";
import {AppComponent} from "../app.component";

const chessRouter: Routes = [
  {path: '', component: AppComponent},
  {path: 'chess', component: ChessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(chessRouter)],
  exports: [RouterModule]
})
export class ChessRouterModule {
}
