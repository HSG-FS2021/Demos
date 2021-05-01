import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css'],
})
export class NicknameComponent implements OnInit {
  public nickname = '';
  public message = '';

  constructor() {}

  public ngOnInit(): void {}

  public createNickname(nickname: string): void {
    // alert(nickname);
    Person.Nickname = nickname;
    this.message = `nickname: '${nickname}' created`;
  }
}
