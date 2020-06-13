import { Component, OnInit } from '@angular/core';
import { faHandsHelping, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faHandsHelping = faHandsHelping;
  faUser = faUser;
  faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
