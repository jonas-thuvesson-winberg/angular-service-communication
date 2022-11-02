import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleStateService } from '../../toggle-state.service';

@Component({
  selector: 'app-section-toggle',
  templateUrl: './section-toggle.component.html',
  styleUrls: ['./section-toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionToggleComponent {
  constructor(private readonly sectionToggleService: ToggleStateService) {}

  protected isOpen = false;

  protected toggle(): void {
    this.isOpen = !this.isOpen;
    this.sectionToggleService.broadcastToggleState(this.isOpen);
  }
}
