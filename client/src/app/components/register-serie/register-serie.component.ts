import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/serie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-serie',
  templateUrl: './register-serie.component.html',
  styleUrls: ['./register-serie.component.css']
})
export class RegisterSerieComponent implements OnInit {

  serieForm: FormGroup;
  title = 'Registrar Serie';
  action = 'Registrar';
  justUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  justNumber = /^[0-9]*$/;
  justEsNumbers = /^[0-5]*$/;
  imgUrl = 'https://familyandmedia.eu/wp-content/uploads/2017/07/52889_ppl.jpg';
  id: string | null;

  constructor(private fb: FormBuilder, private serie_service: SerieService, private router: Router, private idSeriePath: ActivatedRoute) {
    this.serieForm = this.fb.group({
      name_serie: ['', Validators.required],
      genre: ['', Validators.required],
      seasons: ['1', [Validators.required, Validators.pattern(this.justNumber)]],
      episodes: ['1', [Validators.required, Validators.pattern(this.justNumber)]],
      eps_watched: ['1', [Validators.required, Validators.pattern(this.justNumber)]],
      cre_year: ['', [Validators.required, Validators.pattern(this.justNumber)]],
      creator: ['', Validators.nullValidator],
      rate: ['0', [Validators.required, Validators.pattern(this.justEsNumbers)]],
      last_date_watched: ['', Validators.required],
      image_ser: [this.imgUrl, [Validators.required, Validators.pattern(this.justUrl)]]
    })

    this.id = this.idSeriePath.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.actionRequested();
  }

  serieInfo(){
    console.log(this.serieForm);
    const data_serie_form: Serie = {
      name_serie: this.serieForm.get('name_serie')?.value,
      genre: this.serieForm.get('genre')?.value,
      seasons: this.serieForm.get('seasons')?.value,
      episodes: this.serieForm.get('episodes')?.value,
      eps_watched: this.serieForm.get('eps_watched')?.value,
      cre_year: this.serieForm.get('cre_year')?.value,
      creator: this.serieForm.get('creator')?.value,
      rate: this.serieForm.get('rate')?.value,
      last_date_watched: this.serieForm.get('last_date_watched')?.value,
      image_ser: this.serieForm.get('image_ser')?.value
    }
    console.log(data_serie_form)
    if(this.id === null){
      this.serie_service.postSerie(data_serie_form).subscribe(data => {
        this.router.navigate(['/tu-lista']);
        Swal.fire({
          icon: 'success',
          title: 'Dato guardado',
          text: 'La serie se creo correctamente'
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
      this.serie_service.putSerie(this.id, data_serie_form).subscribe(data => {
        this.router.navigate(['/tu-lista']);
        Swal.fire({
          icon: 'success',
          title: 'Dato actualizado',
          text: 'La serie se cambio correctamente'
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
      this.title = "Editar Serie";
      this.action = "Editar";
      this.serie_service.getSerie(this.id).subscribe(data => {
        let creator = (data.creator !== undefined) ? data.creator: 'No se'
        this.serieForm.setValue({
          name_serie: data.name_serie,
          genre: data.genre,
          seasons: data.seasons,
          episodes: data.episodes,
          eps_watched: data.eps_watched,
          cre_year: data.cre_year,
          creator: creator,
          rate: data.rate,
          last_date_watched: data.last_date_watched,
          image_ser: data.image_ser
        })
      }, error => {
        console.log(error)
      })
    }
  }

}
