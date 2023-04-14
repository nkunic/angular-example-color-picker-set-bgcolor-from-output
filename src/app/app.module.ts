import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ColorPickerModule } from './color-picker/color-picker.module';

import { BadgeModule } from './badge/badge.module';


@NgModule({
  imports: [BrowserModule, FormsModule, ColorPickerModule, BadgeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
