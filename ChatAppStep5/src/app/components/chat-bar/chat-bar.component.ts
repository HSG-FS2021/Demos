import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { ChatMessage } from '../shared/models/chat-message';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  public chatMessage = '';
  public errorMessage = '';

  constructor(private chatService: ChatService) {}

  public ngOnInit(): void {}

  public addMessage(message: string): void {
    if (!message) {
      // alert('Bitte Text erfassen!');
      this.errorMessage = 'Bitte Text erfassen!';
      return;
    }

    if (!Person.Nickname) {
      // alert('Bitte Nickname erfassen!');
      this.errorMessage = 'Bitte Nickname erfassen!';
      return;
    }

    const messageToSend: ChatMessage = {
      message,
      nickName: Person.Nickname,
    };

    this.chatService.addToHistory(messageToSend).subscribe(
      (response: ChatMessage) => {
        this.chatMessage = '';
      },
      (error: any) => {
        // console.log(error);
        this.errorMessage = error;
      }
    );
  }
}
