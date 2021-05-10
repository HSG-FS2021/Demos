import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ChatMessage } from 'src/app/components/shared/models/chat-message';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private actionUrl = 'http://localhost:3000/history';
  // private actionUrl = 'http://hsgapi.azurewebsites.net/history';

  constructor(private httpClient: HttpClient) {}

  public addToHistory(message: ChatMessage): Observable<ChatMessage> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.httpClient.post<ChatMessage>(this.actionUrl, message, options);
  }

  public getHistory(): Observable<ChatMessage[]> {
    return this.httpClient.get<ChatMessage[]>(this.actionUrl);
  }
}
