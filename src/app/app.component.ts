import { Component } from '@angular/core';
import {StoreServiceService} from './store-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private storeBlog: StoreServiceService) {}

  public getCategories(){
    return this.storeBlog.getCategories();
  }

  public getSkills(){
    return this.storeBlog.getSkills();
  }

  public getAboutMe(){
    return this.storeBlog.getAboutMe();
  }
  public getPortfolio(){
    return this.storeBlog.getPortfolio();
  }


  ngOnInit(): void {
  }

}
