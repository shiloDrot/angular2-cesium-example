import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionType } from '../../../../node_modules/angular2-cesium';
import { convertToCesiumObj } from '../dataCovertor/convertToCesiumObject';
import { WebSocketSupplier } from '../webSocketSupplier/webSocketSupplier';

@Injectable()
export class TracksDataProvider {
	private _socket;

	constructor(webSocketSupplier: WebSocketSupplier) {
		this._socket = webSocketSupplier.get();
	}

	get() {
		return Observable.create((observer) => {
			this._socket.on('lines', (data) => {
				data.forEach(
					(acNotification) => {
						let action;
						if (acNotification.action === 'ADD_OR_UPDATE') {
							action = ActionType.ADD_UPDATE;
						}
						else if (acNotification.action === 'DELETE') {
							action = ActionType.DELETE
						}
						acNotification.actionType = action;
						acNotification.entity = convertToCesiumObj(acNotification.entity);
						observer.next(acNotification);
					});
			});
		});
	}
}
