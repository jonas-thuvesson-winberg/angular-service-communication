import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleStateService } from '../../toggle-state.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.less'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonComponent {
  constructor(private readonly menuState: ToggleStateService) {}

  protected open = false;

  public toggleOpenState(): void {
    this.open = !this.open;
    this.menuState.broadcastToggleState(this.open);
  }
}
