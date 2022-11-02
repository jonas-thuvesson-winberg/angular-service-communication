import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuButtonComponent } from '../menu/menu-button/menu-button.component';
import { MenuComponent } from '../menu/menu.component';
import { ToggleStateService } from '../toggle-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [MenuComponent, MenuButtonComponent],
  providers: [ToggleStateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor() {}
}
