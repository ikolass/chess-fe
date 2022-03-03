import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChessModel} from "../app/model/chess.model";

@Injectable()
export class ChessService {

  constructor(private http: HttpClient) {
  }

  pieceMove(chessModel: ChessModel): Observable<any> {
    return this.http.post( 'http://localhost:8080/api/move', chessModel)
  }

  getpiece():Observable<any>{
    return this.http.get('http://localhost:8080/api/start-board')
  }

}
