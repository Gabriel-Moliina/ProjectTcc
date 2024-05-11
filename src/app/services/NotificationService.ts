// notification.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  alerts: { type: string, message: string, show: boolean }[] = [];

  constructor() { }

  showAlert(type: string, message: string): void {
    const alert = { type, message, show: true };
    this.alerts.push(alert);
    setTimeout(() => {
      this.removeAlert(alert);
    }, 7000);
  }

  private removeAlert(alert: { type: string, message: string, show: boolean }): void {
    alert.show = false;
    setTimeout(() => {
      this.alerts = this.alerts.filter(a => a !== alert);
    }, 500);
  }
}
