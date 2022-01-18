import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ConfigService {
  
  constructor(private http: HttpClient) { }

  getcomments(): Observable<any> {
    // return this.http.get("http://api.openweathermap.org/data/2.5/weather?id=1562822&appid=ca86f2f359eb1e4afef8ff6a2e1d1559");
    return this.http.get("https://localhost:7224/api/DeserializedWeatherDatas");
    // return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

}
