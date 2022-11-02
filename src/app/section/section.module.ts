import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerComponent } from './section-container.component';
import { SectionContentComponent } from './section-content/section-content.component';
import { SectionToggleComponent } from './section-toggle/section-toggle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SectionContainerComponent,
    SectionContentComponent,
    SectionToggleComponent,
  ],
  exports: [
    SectionContainerComponent,
    SectionToggleComponent,
    SectionContentComponent,
  ],
})
export class SectionModule {}
