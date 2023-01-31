import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../environments/environment";



@Injectable({
  providedIn: "root",
})
export class AuthService {
 
  currentUser$: BehaviorSubject<any>;
  baseUrl: any = environment.baseurl;
  token: any;
  user: any;
  socket: any;

  constructor(
    private httpClient: HttpClient,
    private _toastrService: ToastrService,
  ) {
    this.currentUser$ = new BehaviorSubject(null);
    this.token = localStorage.getItem("accessToken");
  }


  async logOut() {
    localStorage.clear();
  }

  post(endPoint: string, reqBody: any) {
    return this.httpClient.post(`${this.baseUrl}${endPoint}`, reqBody);
  }

  successMsg(message: string | undefined) {
    this._toastrService.success(message, "", {
      closeButton: true,
      timeOut: 3000,
    });
  }

  errorMsg(message: string | undefined) {
    this._toastrService.error(message, "", {
      closeButton: true,
      timeOut: 3000,
    });
  }
}
