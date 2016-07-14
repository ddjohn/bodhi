console.log("Loading <top5-list.ts>...");

/* Framework */
import "reflect-metadata";
import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {Mongo} from "meteor/mongo";
import {MeteorComponent} from 'angular2-meteor';
import {InjectUser} from 'angular2-meteor-accounts-ui';

/* Stuff */
import {Top5} from "/collections/top5.ts"; 
import {Top5Form} from "./top5-form.ts"; 

@Component({
  selector: "top5-list",
  template: `
  <div *ngIf="user">
    <top5-form></top5-form>
    <hr>
  </div>

  <h2>Top5 - List</h2>
  <table class="table table-hover">
    <tr>
      <th>Category</th>
      <th>Name</th>
      <th *ngIf="user">Actions</th>
    </tr>
    <tr *ngFor="let i of top5">
      <td>{{i.category}}</td>
      <td *ngIf="user"><a [routerLink]="['/top5', i._id]">{{i.name}}</a></td>
      <td *ngIf="!user">{{i.name}}</td>
      <td *ngIf="user"><button (click)="remove(i)">X</button></td>
    </tr>
  </table>
  `,
  directives: [Top5Form, ROUTER_DIRECTIVES],
})

@InjectUser("user")

export class Top5List extends MeteorComponent { 
   user: Mongo.user;
   top5: Mongo.Cursor<Top5>;

   constructor() {
     super();

     console.log("main::constructor");
     this.subscribe('top5', () => {
       this.top5 = Top5.find();
     }, true);
   }

  remove(i) {
    Top5.remove(i._id);
  }
}
