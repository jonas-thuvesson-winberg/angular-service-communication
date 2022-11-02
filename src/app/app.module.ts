import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionModule } from './section/section.module';

@NgModule({
  imports: [BrowserModule, HeaderComponent, SectionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
