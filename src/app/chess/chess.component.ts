import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxChessBoardService} from "ngx-chess-board";
import {NgxChessBoardView} from 'ngx-chess-board';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})

export class ChessComponent implements OnInit {

  @ViewChild('board', {static: false})
  board!: NgxChessBoardView;
  constructor(private ngxChessBoardService: NgxChessBoardService) {
  }

  ngOnInit(): void {
  }
  reset() {
    this.board.reset();
  }

}
