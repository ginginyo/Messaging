import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class ContentMessageService {

	constructor(private http: HttpClient) {
		
	}

	getMessages(): Observable<Message[]> {
		return this.http.get<Message[]>('http://localhost:666/messages');
	}

	deleteMessage(id: number): Observable<Message[]> {
		return this.http.delete<Message[]>(`http://localhost:666/messages/${id}`)
	}
}
