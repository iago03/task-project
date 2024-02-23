import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { SlotService } from 'src/app/shared/services/slot.service';
import { SlotCategoryNavBarInfo } from 'src/app/shared/const/slots';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  isExpanded = false;
  categoryNavBarInfo = SlotCategoryNavBarInfo;
  providers = toSignal(this.slotService.getProvidersList());
  getTotalGames = toSignal(this.slotService.getTotalGames());
  currentFilter = signal('');

  constructor(
    private slotService: SlotService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe((params) => {
        this.currentFilter.set(params['filter']);
      });
  }

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
