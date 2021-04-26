import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ChatAppStep';
  public messageHistory = '';

  public onSubmitMessage(message: string): void {
    // console.log(message);
    this.messageHistory += message;
  }
}
