import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';
import { httpService } from './http.service';
import { SlotCategoryNavBarInfo } from '../const/slots';
import {
  IGame,
  IProviderDetails,
  IProviderList,
  ISlot,
  ISlotCategory,
  ISlotProvider,
} from '../interfaces/slot-data.interface';

@Injectable({
  providedIn: 'root',
})
export class SlotService extends httpService {
  totalGames: Subject<number | undefined> = new Subject<number | undefined>();

  getCategories(): Observable<ISlotCategory> {
    return this.get<ISlotCategory>(`/v2/slot/categories?include=games`);
  }

  getProvidersList(): Observable<IProviderDetails[]> {
    return this.get<IProviderList>(`?type=slot&platform=desktop`).pipe(
      map((res) => res.data)
    );
  }
  getSlotsByProvider(provider: string): Observable<IGame[]> {
    return this.get<ISlotProvider>(`/v2/slot/providers/${provider}`).pipe(
      map((provider) => provider.data.games)
    );
  }

  getGames(
    filterType = 'category',
    filter = 'web:popular'
  ): Observable<IGame[]> {
    if (filterType === 'provider') {
      return this.getSlotsByProvider(filter);
    } else {
      return this.getCategories().pipe(
        map(
          (category) =>
            category.data.filter((item) => item.category === filter)[0]
              ?.games ?? []
        )
      );
    }
  }

  getTotalGames(): Observable<ISlot[]> {
    return this.getCategories().pipe(
      map((res) =>
        res.data.filter((item) =>
          ['web:popular', 'web:new_games', 'web:buy_bonus'].includes(
            item.category
          )
        )
      ),
      tap((filteredSlot) => {
        filteredSlot.forEach((slotItem) => {
          const matchingSlot = SlotCategoryNavBarInfo.find(
            (slot) => slot.filter === slotItem.category
          );
          if (matchingSlot) {
            matchingSlot.totalGames = slotItem.totalGames;
          }
        });
      })
    );
  }
}
