import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}

  public pages: any[] = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Planner Sheet', url: '/planner-sheet', icon: 'folder-outline' },
    { title: 'Charts', url: '/charts', icon: 'pie-chart-outline' },
    { title: 'Settings', url: '/settings', icon: 'settings-outline' },
  ];

  constructor() {}
}