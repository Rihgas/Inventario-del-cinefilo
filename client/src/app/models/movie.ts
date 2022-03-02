export class Movie{
    _id?: any;
    name_movie: string;
    genre: string;
    year: number;
    director?: string;
    rate: number;
    date_watched: string;
    times_watched: number;
    image_mov?: string;
  
    constructor(nameMovie: string, genreMovie: string, yearMovie: number, directorMovie: string, rateMovie: number, dateMovie: string, timesMovie: number, imageMovie: string){
      this.name_movie = nameMovie;
      this.genre = genreMovie;
      this.year = yearMovie;
      this.director = directorMovie;
      this.rate = rateMovie;
      this.date_watched = dateMovie;
      this.times_watched = timesMovie;
      this.image_mov = imageMovie;
    }
  }