import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    if(confirm('Are you sure you want to clear all messages?')) {
      this.messages = [];
    }
  }
}
