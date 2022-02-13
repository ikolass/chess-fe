import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxChessBoardView} from 'ngx-chess-board';
import {ChessService} from "../../service/chess.service";
import {ChessModel} from "../model/chess.model";
import {Color} from "ngx-chess-board/lib/models/pieces/color";
import {PieceType} from "../model/piece.enum";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})

export class ChessComponent implements OnInit {

  @ViewChild('board', {static: false})
  board!: NgxChessBoardView;

  constructor(private chessService: ChessService) {
  }

  ngOnInit(): void {
  }

  reset() {
    this.board.reset();
  }

  movePiece() {
    const move: ChessModel = {
      pieceDto: {
        locationX: 1,
        locationY: 2,
        color: Color.WHITE,
        pieceType: PieceType.KING,
      },
      color: Color.WHITE
    }
    this.chessService.pieceMove(move).subscribe(res => {
      console.log(res);
    })
  }
}
