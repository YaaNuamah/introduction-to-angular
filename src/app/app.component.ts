import { Component } from '@angular/core';
import { CryptoService} from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Services';
    imgUrl = "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
     
    coins = [];

    constructor(private cryptoservice: CryptoService) {
      this.coins = cryptoservice.getMyItems()
    }
}
