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
  fileType : String[] = []  // reviewSheet , yumitori


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
      
      
      if((fileEle && currentTarget.files[0].type == "text/csv") || (fileEle && event.dataTransfer.files[0].type=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
        fileEle.innerHTML = currentTarget.files[0].name;
        this.fileType.push(fileTypeName);
      }      
    }
  }

  drophandler(event:any,fileTypeName:string) {
    event.stopPropagation();
    event.preventDefault();

    console.log("File Type Name",fileTypeName);
    
    console.log(event.dataTransfer.files[0]);
    
    if(event.dataTransfer.files.length) {
      const fileEle = document.getElementById(fileTypeName);
      console.log("Current Class",fileEle);

      
      if((fileEle && event.dataTransfer.files[0].type == "text/csv") ||  (fileEle && event.dataTransfer.files[0].type=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
        this.fileType.push(fileTypeName);
        fileEle.innerHTML = event.dataTransfer.files[0].name;
      }      
    }
  }
}