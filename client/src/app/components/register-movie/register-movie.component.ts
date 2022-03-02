import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-movie',
  templateUrl: './register-movie.component.html',
  styleUrls: ['./register-movie.component.css']
})
export class RegisterMovieComponent implements OnInit {

  movieForm: FormGroup;
  title = 'Registra la pelicula';
  action = 'Registrar';
  justNumber = /^[0-9]*$/;
  justEsNumbers = /^[0-5]*$/;
  justUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  imgUrl = 'https://www.elcineenlasombra.com/wp-content/uploads/2018/10/pelicula-rodar-FB.jpg';
  id: any | null;

  constructor(private fb: FormBuilder, private movieService: MovieService, private router: Router, private idMoviePath: ActivatedRoute ) {
    this.movieForm = this.fb.group({
      name_movie: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(this.justNumber)]],
      director: ['', Validators.nullValidator],
      rate: ['', [Validators.required, Validators.pattern(this.justEsNumbers)]],
      date_watched: ['', Validators.required],
      times_watched: ['1', [Validators.required, Validators.pattern(this.justNumber)]],
      image_mov: [this.imgUrl, [Validators.required, Validators.pattern(this.justUrl)]]
    })

    this.id = this.idMoviePath.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.actionRequested();
  }

  movieInfo(){
    console.log(this.movieForm);
    const data_movie_form: Movie = {
      name_movie: this.movieForm.get('name_movie')?.value,
      genre: this.movieForm.get('genre')?.value,
      year: this.movieForm.get('year')?.value,
      director: this.movieForm.get('director')?.value,
      rate: this.movieForm.get('rate')?.value,
      date_watched: this.movieForm.get('date_watched')?.value,
      times_watched: this.movieForm.get('times_watched')?.value,
      image_mov: this.movieForm.get('image_mov')?.value
    }
    console.log(data_movie_form)
    if(this.id === null){
      this.movieService.postMovie(data_movie_form).subscribe(data => {
        this.router.navigate(['/tu-lista']);
        Swal.fire({
          icon: 'success',
          title: 'Dato guardado',
          text: 'La pelicula se creo correctamente'
        })
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Algo esta pasando',
          text: ' Comuniquese con el administrador'
        })
        console.log(error)
      })
    } else {
      this.movieService.putMovie(this.id, data_movie_form).subscribe(data => {
        this.router.navigate(['/tu-lista']);
        Swal.fire({
          icon: 'success',
          title: 'Dato actualizado',
          text: 'La pelicula se cambio correctamente'
        })
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Algo esta pasando',
          text: 'Comuniquese con el administrador'
        })
        console.log(error)
      })
    }
  }

  actionRequested(){
    if(this.id !== null){
      this.title = "Editar Pelicula";
      this.action = "Editar";
      this.movieService.getMovie(this.id).subscribe(data => {
        this.movieForm.setValue({
          name_movie: data.name_movie,
          genre: data.genre,
          year: data.year,
          director: data.director,
          rate: data.rate,
          date_watched: data.date_watched,
          times_watched: data.times_watched,
          image_mov: data.image_mov
        })
      }, error => {
        console.log(error)
      })
    }
  }

}
