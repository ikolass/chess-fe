import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {NgxChessBoardView} from 'ngx-chess-board';
import {ChessService} from "../../service/chess.service";
import {HistoryMove} from "ngx-chess-board/lib/history-move-provider/history-move";
import {MoveChange} from "ngx-chess-board/lib/engine/outputs/move-change/move-change";
import {ChessModel} from "../model/chess.model";
import {parseBoardFen, parseFen} from 'chessops/fen';
import {Chess} from 'chessops/chess';


@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})


export class ChessComponent implements OnInit {
  pieceMoveHistory: HistoryMove[] = [];
  lastMove: EventEmitter<MoveChange> | undefined

  @ViewChild('board', {static: false})
  board!: NgxChessBoardView;

  constructor(private chessService: ChessService,
              private ref: ChangeDetectorRef,
              //private fen: fen
  ) {
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();

  }

  ngOnInit(): void {
    this.chessService.getpiece().subscribe()
  }

  reset() {
    this.board.reset();
  }


  lastMoves() {
    this.pieceMoveHistory = []
    this.pieceMoveHistory.push(this.board.getMoveHistory()[this.board.getMoveHistory().length - 1])
    const locationX = this.findLocationX(this.pieceMoveHistory[0].move.slice(2, 3))
    const fena = this.board.getFEN()
    const setup = parseFen(fena).unwrap();
    const chain = parseFen(fena).chain
    const map = parseFen(fena)
    const ok = parseFen(fena).isOk
    const a = parseBoardFen(fena)

   // const pos = Chess.fromSetup(setup).unwrap();


    const moves: ChessModel = {
      pieceDto: {
        locationX: locationX,
        locationY: Number(this.pieceMoveHistory[0].move.slice(3)),
        color: this.pieceMoveHistory[0].color.toUpperCase(),
        pieceType: this.pieceMoveHistory[0].piece.toUpperCase(),
      },
      color: this.pieceMoveHistory[0].color.toUpperCase(),
    }


    this.chessService.pieceMove(moves).subscribe(res => {
      console.log(res);
    })

  }

  findLocationX(location: string): any {
    switch (location) {
      case 'a': {
        return 0;
        break
      }
      case 'b': {
        return 1;
        break
      }
      case 'c': {
        return 2;
        break
      }
      case 'd': {
        return 3;
        break
      }
      case 'e': {
        return 4;
        break
      }
      case 'f': {
        return 5;
        break
      }
      case 'g': {
        return 6;
        break
      }
      case 'h': {
        return 7;
        break
      }
    }
  }
}
