import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleStateService } from '../toggle-state.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ToggleStateService],
})
export class SectionContainerComponent {}
