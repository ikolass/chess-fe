import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ChessService {

  constructor(private http: HttpClient) {
  }

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getService(): Observable<any> {
    return this.http.get<any>(environment.baseUrl)
  }
}
