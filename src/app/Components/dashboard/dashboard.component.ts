import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/Models/WeatherData';
import { ConfigService } from 'src/app/Config/config.service';
import {HubConnection, HubConnectionBuilder} from '@aspnet/signalr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _client: HubConnection;
  data : WeatherData[];

  constructor(private _configApiService : ConfigService) { 
    // this._client = new HubConnectionBuilder().withUrl("https://localhost:7224//ShareHub").build();
    // this._client.on("ReceivedWeatherData", DeserializedWeatherData => {
    //   this.data.push(DeserializedWeatherData);
    // });
  }

  ngOnInit(): void {
    this._configApiService.getcomments().subscribe(
      data => {
        this.data = data;
        // this._client.start();
      }
    )
  };
}
