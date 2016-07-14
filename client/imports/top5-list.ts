console.log("Loading <top5-list.ts>...");

/* Framework */
import "reflect-metadata";
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES }  from '@angular/router';
import {Mongo} from "meteor/mongo";
import {MeteorComponent} from 'angular2-meteor';
import {InjectUser} from 'angular2-meteor-accounts-ui';
import {PaginationService, PaginatePipe, PaginationControlsCmp} from 'angular2-pagination';

/* Stuff */
import {Top5} from "/collections/top5.ts"; 
import {Top5Form} from "./top5-form.ts"; 

@Component({
  selector: "top5-list",
  viewProviders: [PaginationService],
  template: `
  <div *ngIf="user">
    <top5-form></top5-form>
    <hr>
  </div>

  <input type="text" #searchtext placeholder="Search...">
  <button type="button" (click)="search(searchtext.value)">Search</button>

  <h2>Top5 - List</h2>
  <table class="table table-hover">
    <tr>
      <th>Category</th>
      <th>Name</th>
      <th *ngIf="user">Actions</th>
    </tr>
    <tr *ngFor="let i of top5 | paginate:{currentPage:1, itemsPerPage:pageSize, totalItems:30}">
      <td>{{i.category}}</td>
      <td *ngIf="user"><a [routerLink]="['/top5', i._id]">{{i.name}}</a></td>
      <td *ngIf="!user">{{i.name}}</td>
      <td *ngIf="user"><button (click)="remove(i)">X</button></td>
    </tr>
  </table>
  <pagination-controls (change)="onPageChanged($event.page)"></pagination-controls>
  `,
  directives: [Top5Form, ROUTER_DIRECTIVES, PaginationControlsCmp],
  pipes: [PaginatePipe],
})

@InjectUser("user")

export class Top5List extends MeteorComponent { 
   user: Mongo.user;
   top5: Mongo.Cursor<Top5>;
   pageSize: number = 5;
   nameOrder: number = 1;
   curPage: ReactiveVar<number> = new ReactiveVar<number>(1);

   constructor() {
     super();

     console.log("main::constructor");

     let options = {
       limit: this.pageSize,
       skip: (this.curPage - 1) * this.pageSize,
       sort: { name: this.nameOrder }
     };

     this.subscribe('top5s', options, () => {
       this.top5 = Top5.find({}, {sort: {name:this.nameOrder}});
     }, true);
   }

  remove(i) {
    Top5.remove(i._id);
  }

  search(value: string) {
    if (value) {
      this.top5 = Top5.find({name: value});
    } else {
      this.top5 = Top5.find();
    }
  }

 onPageChanged(page: number) {
    console.log("page: " + page);
    this.curPage.set(page);
  }
}
