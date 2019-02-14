import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';

@NgModule({
  declarations: [CreateComponent, ReadComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponent,
    ReadComponent
  ]
})
export class SharedModule { }
