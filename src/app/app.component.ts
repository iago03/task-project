import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlotService } from './shared/services/slot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent, HttpClientModule],
  providers: [HttpClient, HttpClientModule, SlotService],
})
export class AppComponent {}
