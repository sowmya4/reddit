import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit-app';
  addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement){
   console.log(`newtitle ${newtitle.value}`);
   console.log("newlink",newlink.value);
   return false;

  }
}
