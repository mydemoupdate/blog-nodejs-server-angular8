import { CommonModule } from '@angular/common';
import { GrdFilterPipe } from './grd-filter.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
   GrdFilterPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [GrdFilterPipe]
})
export class PipeModule { }