import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
})
export class ChatHistoryComponent implements OnInit {
  @Input() history = '';
  @Input() history2: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
