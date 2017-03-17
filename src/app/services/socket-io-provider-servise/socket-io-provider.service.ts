import { Injectable } from '@angular/core';

@Injectable()
export class socketIoProviderService {
  private _socket = io.connect('http://localhost:3000');

  get(): any {
    return this._socket;
  }
}
