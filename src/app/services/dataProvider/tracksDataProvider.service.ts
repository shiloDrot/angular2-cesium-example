import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionType } from 'angular2-cesium';
import { convertToCesiumObj } from '../dataCovertor/convertToCesiumObject';
import { socketIoProviderService } from '../socket-io-provider-servise/socket-io-provider.service';

@Injectable()
export class TracksDataProvider {
	private _socket;

	constructor(socketIoProviderService: socketIoProviderService) {
		this._socket = socketIoProviderService.get();
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
