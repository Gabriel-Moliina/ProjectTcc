// app-notification.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../services/NotificationService';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  imports: [CommonModule]
})
export class NotificationComponent implements OnInit {

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  showAlert(type: string, message: string): void {
    this.notificationService.showAlert(type, message);
  }

  removeAlert($alert:any):void{
    this.notificationService.removeAlert($alert);
  }
}
