import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  providers: [
    AuthService
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthService) {

  }

}
