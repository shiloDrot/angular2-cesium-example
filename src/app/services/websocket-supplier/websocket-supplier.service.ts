export class WebSocketSupplierService {
  private _socket = io.connect('http://localhost:3000');

  get(): any {
    return this._socket;
  }
}
