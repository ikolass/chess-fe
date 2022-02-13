import {Color} from "ngx-chess-board/lib/models/pieces/color";
import {PieceType} from "./piece.enum";

export interface ChessModel {
  pieceDto: PieceDto
  color: Color
}

export interface PieceDto {
  locationX: number;
  locationY: number;
  color: Color;
  pieceType: PieceType;
}