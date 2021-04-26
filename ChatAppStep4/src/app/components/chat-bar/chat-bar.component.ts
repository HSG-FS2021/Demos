import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {
  @Output() public submitMessage = new EventEmitter<string>();
  public chatMessage = '';
  public errorMessage = '';

  public addMessage(message: string): void {
    if (!message?.trim()) {
      this.errorMessage = 'Bitte Text erfassen!';
      this.chatMessage = '';

      // alert(this.errorMessage);
      // console.log(this.errorMessage);

      return;
    }

    if (!Person.Nickname) {
      this.errorMessage = 'Bitte Nickname erfassen!';
      // alert('Bitte Nickname erfassen!');
      // console.log('Bitte Nickname erfassen!');

      return;
    }

    const timestamp: string = new Date().toLocaleDateString('de');
    const messageToSend = `<p class='nickname'>${Person.Nickname}<p><p>${message} - ${timestamp}<p>`;

    // alert(message);
    // console.log(message);

    this.submitMessage.emit(messageToSend);
    this.chatMessage = '';
    this.errorMessage = '';
  }
}
