import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(count) {
    if(confirm('Are you sure you want to delete messages?')) {
      if(count){
        this.messages.splice(0, count);
      }
      else {
        this.messages = [];
      }
    }
  }
}
