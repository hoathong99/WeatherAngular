// export class WeatherData {
//     userId: number;
//     id: number;
//     title: string;
// }
class _coord{
    lon : number;
    lat : number;
}
class _weather{
    id : number;
    main : string;
    description : string;
    icon : string;
}

class _wind{
    speed : number;
    deg : number;
    gust : number;
}
class _main{
    temp : number;
    feels_like : number;
    temp_min : number;
    temp_max : number;
    pressure : number;
    humidity : number;
    sea_level : number;
    grnd_level : number;
}
class _cloud{
    all : number;
}
class _sys{
    type : number;
    id : number;
    country : string;
    sunrise : number;
    sunset : number;
}

export class WeatherData {
    model_id : number;
    coord : _coord;
    weathers : _weather;
    main : _main;
    visibility : number;
    wind : _wind;
    clouds : _cloud;
    dt : number;
    sys : number;
    timezone : number;
    id : number;
    name : string;
    cod : number;
}



