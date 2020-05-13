import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {MovieListResolveService} from './services/resolve/movie-list-resolve.service';
import {MovieListComponent} from './components/movie-list/movie-list.component';


const routes: Routes = [
  // {
  //   path: '', component: HeaderComponent, children: [
  //     // {path: '', component: MovieListComponent, resolve: {list: MovieListResolveService}}
  //
  //   ]
  // },
  {path: '', loadChildren: () => import('./modules/movie-container/movie-container.module').then(m => m.MovieContainerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
