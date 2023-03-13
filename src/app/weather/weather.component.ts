import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

wdata={
  lname:"",
  humidity:"",
  temp:"",
  windspeed:"",
  description:""
}


constructor(private service:WeatherService){}
ngOnInit(): void{

}
fetchWeather(inpt:any){
  console.log(inpt.value);
  this.service.findWeather(inpt.value).then(res=>res.json()).then(data=>{
    
    this.wdata.lname=data.name
    this.wdata.humidity=data.main.humidity
    this.wdata.temp=data.main.temp
    this.wdata.windspeed=data.wind.speed
    this.wdata.description=data.weather[0].description
  }
  )
  
  
}



}
