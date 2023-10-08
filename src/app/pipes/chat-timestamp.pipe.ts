import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jacTimestamp'
})
export class ChatTimestampPipe implements PipeTransform {

  transform(timestamp: Date): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (this.isSameDay(timestamp, today)) {
      // Display time for messages sent today
      return this.formatTime(timestamp);
    } else if (this.isSameDay(timestamp, yesterday)) {
      // Display "Yesterday" and time for messages sent yesterday
      return `Yesterday, ${this.formatTime(timestamp)}`;
    } else {
      // Display date and time for messages sent on other days
      return `${this.formatDate(timestamp)}, ${this.formatTime(timestamp)}`;
    }
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  private formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

}
