import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'myform';

  fileHandler(event:any) {
    let currentTarget = (event.target) as HTMLInputElement
    console.log("Current",currentTarget.files);
    
  }

  uploadFile(event:any) {

    let currentTarget = (event.target) as HTMLInputElement
    if(currentTarget.files) {
      console.log(currentTarget.files[0]);
    }
    console.log("Event ==> ",currentTarget.files);
    
  }
}