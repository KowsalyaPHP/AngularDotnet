import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: Http) { }

  public LoginDetail(LoginValue:any) {
    const params = new URLSearchParams();
    params.set('username', LoginValue.username);
    params.set('password', LoginValue.password);

    const login_url = AppComponent.urlPath + 'MVCwithWebApi/ValuesController';
    
    return this.http.post(login_url, params)
      .map(response => response.json()['data']).map(data => {
        if (data != '')
          return data;
        else
          return 'No data';
      });
  } 

}
