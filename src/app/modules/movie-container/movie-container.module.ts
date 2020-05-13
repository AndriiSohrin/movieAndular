import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieContainerRoutingModule } from './movie-container-routing.module';
import { MovieContainerComponent } from './movie-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MovieContainerComponent],
  imports: [
    CommonModule,
    MovieContainerRoutingModule,
    NgbModule,
  ]
})
export class MovieContainerModule { }
