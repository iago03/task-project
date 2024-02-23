import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { SlotService } from 'src/app/shared/services/slot.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  isButtonVisible!: boolean;
  games = toSignal(
    this.activatedRoute.queryParams.pipe(
      switchMap(({ filterType, filter }) =>
        this.slotService.getGames(filterType, filter)
      )
    ),
    { initialValue: [] }
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private slotService: SlotService
  ) {}

  identify(index: number, item: any) {
    return item.gameId;
  }
}
