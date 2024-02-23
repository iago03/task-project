import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarItem } from 'src/app/shared/const/side-bar-items';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  sidebarItems = SideBarItem;
}
