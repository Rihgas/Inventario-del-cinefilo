export class Serie{
    _id?: any;
    name_serie: string;
    genre: string;
    seasons: number;
    episodes: number;
    eps_watched: number;
    cre_year: string;
    creator?: string;
    rate: number;
    last_date_watched: string;
    image_ser: string;
  
    constructor( 
      nameSerie: string, 
      genreSerie: string, 
      seasonsSerie: number, 
      episodesSerie: number, 
      epsWatSerie: number, 
      creYearSerie: string, 
      creatorSerie: string, 
      rateSerie: number,
      lastDateSerie: string,
      imageSerie: string){

      this.name_serie = nameSerie;
      this.genre = genreSerie;
      this.seasons = seasonsSerie;
      this.episodes = episodesSerie;
      this.eps_watched = epsWatSerie;
      this.cre_year = creYearSerie;
      this.creator = creatorSerie;
      this.rate = rateSerie;
      this.last_date_watched = lastDateSerie;
      this.image_ser = imageSerie;
    }
  }