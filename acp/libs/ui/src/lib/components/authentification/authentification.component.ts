import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentification/authentification.service'
@Component({
  selector: 'acp-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor(authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
