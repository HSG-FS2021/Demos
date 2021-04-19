import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {
  @Output() submitMessage = new EventEmitter();
  public chatMessage = '';
  public errorMessage = '';

  public addMessage(message: string): void {
    if (!message?.trim()) {
      this.errorMessage = 'Bitte Text erfassen!';
      this.chatMessage = '';

      alert(this.errorMessage);
      console.log(this.errorMessage);

      return;
    }

    const timestamp: string = new Date().toLocaleString('de');
    const messageToSend = `${message} - ${timestamp}<br>`;

    // alert(message);
    // console.log(message);

    this.submitMessage.emit(messageToSend);
    this.chatMessage = '';
    this.errorMessage = '';
  }
}
