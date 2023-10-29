import { Component } from '@angular/core';
import {brackets} from "./objects/brackets";
import {Phone} from "./entities/phone";
import {ServiceFunctions} from "./services/service-functions";
@Component({
  selector: 'app-root', //* set name for getting component
  templateUrl: './app.component.html', //* set template html file
  styleUrls: ['./app.component.css'] //* set style css file
})
class AppComponent extends Phone {

  private title : string = 'AppComponent class was working';
  protected readonly JSON = JSON;
  protected readonly serviceFunctions = new ServiceFunctions(); // created object class


  public getTitle() : string {
    return this.title;
  }

  public getBrackets() : any {
    return brackets;
  }

}

export {
  AppComponent

}
