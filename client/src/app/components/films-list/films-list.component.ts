import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  movieList: Movie[] = [];
  serieList: Serie[] = [];

  constructor(private movie_service: MovieService, private serie_service: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.gettingMovies()
    this.gettingSeries()
  }

  gettingMovies(){
    this.movie_service.getMovies().subscribe(data => {
      console.log(data)
      if (this.movieList === null) {
        data = 0;
      }
      this.movieList = data;
    }, error => {
      console.log(error);
    })
  }

  gettingSeries(){
    this.serie_service.getSeries().subscribe(data => {
      console.log(data);
      this.serieList = data;
    }, error => {
      console.log(error);
    });
  }

  removeMovie(id: String){
    Swal.fire({
      title: 'En serio desea eliminarlo?',
      text: "Esta accion no se podra deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.movie_service.deleteMovie(id).subscribe(data => {
          this.gettingMovies()
          Swal.fire({
            icon: 'success',
            title: 'Producto eliminado',
            timer: 2000
          });
          this.gettingMovies();
          console.log(data);
        }, error => {
          console.log(error)
        })
      }
    })
  }

  delettingSerie(id: String){
    Swal.fire({
      title: 'En serio desea eliminarlo?',
      text: "Esta accion no se podra deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gettingSeries();
        this.serie_service.deleteSerie(id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Producto eliminado',
            timer: 2000
          });
          console.log(data);
        }, error => {
          console.log(error)
        })
      }
    })
  }
}
