import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleStateService } from '../../toggle-state.service';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContentComponent {
  constructor(protected readonly sectionToggleService: ToggleStateService) {}
}
