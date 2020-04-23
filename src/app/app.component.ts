import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding Example using Two Way Binding';
    imgUrl = "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
    
    onSave($event) {
      console.log("Save button is clicked!", $event);
   }

   fullName: String = "Hello Frederick";

}
