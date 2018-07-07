import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Chat} from '../interfaces/apidata.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  public message = new Subject<string>()
  public message2 = new Subject<string>()
  constructor() { }

  publishMessage(message: Chat) {
    const msg = JSON.stringify(message);
    this.message.next(msg);
  }
  publishMessage2(message: Chat) {
    const msg = JSON.stringify(message);
    this.message2.next(msg);
  }
}
