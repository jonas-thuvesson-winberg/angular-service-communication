import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleStateService } from '../toggle-state.service';
import { SectionToggleComponent } from './section-toggle/section-toggle.component';
import { SectionComponent } from './section.component';

@NgModule({
  imports: [CommonModule],
  providers: [ToggleStateService],
  declarations: [SectionComponent, SectionToggleComponent],
  exports: [SectionComponent, SectionToggleComponent],
})
export class SectionModule {}
