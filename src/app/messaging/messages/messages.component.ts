import { Component, OnInit } from '@angular/core';
import { Message } from '../interfaces';
import { ContentMessageService } from '../services/content-message.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	messages: Message[] = []

	constructor(private service: ContentMessageService) { }

	ngOnInit(): void {
		this.getAll();
	}

	getAll(): void {
		this.service.getMessages().subscribe(messages => this.messages = messages);
	}

	delete(message: Message): void {
		if (confirm('Voulez-vous supprimer ce message ?')) {
			this.service.deleteMessage(message.id).subscribe(messages => this.messages = messages);
		}
	}
}
