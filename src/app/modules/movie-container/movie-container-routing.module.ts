import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieContainerComponent} from './movie-container.component';
import {MovieListComponent} from '../../components/movie-list/movie-list.component';
import {MovieListResolveService} from '../../services/resolve/movie-list-resolve.service';
import {MovieDetailsComponent} from '../../components/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: '', component: MovieContainerComponent, resolve: {list: MovieListResolveService}, children: [
      {path: 'page/:id', component: MovieListComponent, resolve: {list: MovieListResolveService}},
      {path: 'movie/:id', component: MovieDetailsComponent},
      {
        path: '',
        redirectTo: 'page/1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieContainerRoutingModule {
}
