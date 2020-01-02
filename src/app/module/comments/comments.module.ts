import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports: [CommentsComponent]
})
export class CommentsModule { }
