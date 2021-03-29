import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent {
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

    alert(message);
    console.log(message);

    this.chatMessage = '';
    this.errorMessage = '';
  }
}
