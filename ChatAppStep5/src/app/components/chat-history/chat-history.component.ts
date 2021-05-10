import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { ChatMessage } from '../shared/models/chat-message';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
})
export class ChatHistoryComponent implements OnInit {
  public history = '';
  public histories: ChatMessage[] = [];

  @ViewChild('scrollFrame') private scrollFrame!: ElementRef<HTMLElement>;

  constructor(private chatService: ChatService) {}

  public ngOnInit(): void {
    this.scrollTo();

    setInterval(() => {
      this.getHistory();
    }, 2000);
  }

  public itsMe(nickname: string): boolean {
    if (!Person?.Nickname) {
      return false;
    }

    return Person.Nickname.toLowerCase() === nickname.toLowerCase();
  }

  private getHistory(): void {
    this.chatService.getHistory().subscribe(
      (response: ChatMessage[]) => {
        this.histories = response;
        this.scrollTo();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  private scrollTo(): void {
    console.log(this.scrollFrame?.nativeElement?.scrollHeight);
    this.scrollFrame?.nativeElement?.scroll({
      top: this.scrollFrame?.nativeElement?.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
