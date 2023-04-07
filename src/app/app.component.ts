import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myform';
  uploadedRs = false;
  uploadedYu = false;
  fileType = 'reviewSheet'  // reviewSheet , yumitori

  options: AnimationOptions = {
    path: '/assets/133744-3d-hologram.json'
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  fileHandler(event:any) {
    let currentTarget = (event.target) as HTMLInputElement
    console.log("Current",currentTarget.files);
  }

  uploadFile(event:any,fileTypeName:string) {

    let currentTarget = (event.target) as HTMLInputElement

    if(currentTarget.files?.length) {
      const fileEle = document.getElementById(fileTypeName);
      console.log("Current Class",fileEle);
      
      
      if(fileEle && currentTarget.files[0].type == "text/csv") {
        fileEle.innerHTML = currentTarget.files[0].name;
        this.fileType = fileTypeName;
      }      
    }
  }

  drophandler(event:any,fileTypeName:string) {
    event.stopPropagation();
    event.preventDefault();

    console.log("File Type Name",fileTypeName);
    

    if(event.dataTransfer.files.length) {
      const fileEle = document.getElementById(fileTypeName);
      console.log("Current Class",fileEle);

      
      if(fileEle && event.dataTransfer.files[0].type == "text/csv") {
        this.fileType = fileTypeName;
        fileEle.innerHTML = event.dataTransfer.files[0].name;
      }      
    }
  }
}