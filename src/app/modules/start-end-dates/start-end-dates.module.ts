import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StartEndDatesDurationComponent } from './start-end-dates-duration/start-end-dates-duration.component';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule, MatNativeDateModule
  ],
  declarations: [StartEndDatesDurationComponent],
  exports: [StartEndDatesDurationComponent]
})
export class StartEndDatesModule { }