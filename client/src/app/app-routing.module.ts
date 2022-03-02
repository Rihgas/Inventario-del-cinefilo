import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { RegisterMovieComponent } from './components/register-movie/register-movie.component';
import { RegisterSerieComponent } from './components/register-serie/register-serie.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
    {path:'', component:HomeComponent},
    {path: 'tu-lista', component: FilmsListComponent},
    {path: 'registrar-pelicula', component: RegisterMovieComponent},
    {path: 'editar-pelicula/:id', component: RegisterMovieComponent},
    {path: 'registrar-serie', component: RegisterSerieComponent},
    {path: 'editar-serie', component: RegisterSerieComponent},
    {path: 'galeria', component: GalleryComponent},
    {path:'404', component: Page404Component},
    {path:'**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
