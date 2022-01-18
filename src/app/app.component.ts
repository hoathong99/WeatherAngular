import { Component } from '@angular/core';
import { ConfigService } from './Config/config.service';
import { WeatherData } from './Models/WeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'clientside';
  constructor( private _configApiService : ConfigService){
  }
  // data : WeatherData[];
  
  // ngOnInit(){
  //   this._configApiService.getcomments().subscribe(
  //     data => {
  //       this.data = data
  //     }
  //   )
  // };
}
