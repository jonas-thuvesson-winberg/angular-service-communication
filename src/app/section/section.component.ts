import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleStateService } from '../toggle-state.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  constructor(protected readonly sectionToggleService: ToggleStateService) {}
}
