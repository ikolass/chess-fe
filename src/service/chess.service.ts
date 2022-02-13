import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {ChessModel} from "../app/model/chess.model";

@Injectable()
export class ChessService {

  constructor(private http: HttpClient) {
  }

  pieceMove(chessModel: ChessModel): Observable<any> {
    return this.http.post(environment.baseUrl + 'api /move', chessModel)
  }

}
