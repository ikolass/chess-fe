export interface ChessModel {
  pieceDto: PieceDto
  color: string
}

export interface PieceDto {
  locationX: number;
  locationY: number;
  color: string;
  pieceType: string;
}
