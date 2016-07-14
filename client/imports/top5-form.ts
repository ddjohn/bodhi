console.log("Loading <top5-form.ts>...");

import "reflect-metadata";
import {Component} from "@angular/core";
import {Mongo} from "meteor/mongo";
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';

import {Top5} from "/collections/top5.ts"; 

@Component({
  selector: "top5-form",
  template: `
    <form [ngFormModel]="form" #f="ngForm" (submit)="add(f.value)">
      <label>Category</label>
      <input class="form-control" type="text" ngControl="category">
      <label>Name</label>
      <input class="form-control" type="text" ngControl="name">
      <p>&nbsp;</p>
      <button class="btn btn-default">Add</button>
    </form>
  `,
})

export class Top5Form { 
  form: ControlGroup;

  constructor() {
    let fb = new FormBuilder();

    this.form = fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  add(form) {
    if (this.form.valid) {
      Top5.insert({
        category: form.category,
        name: form.name,
      });

      (<Control>this.form.controls['category']).updateValue('');
      (<Control>this.form.controls['name']).updateValue('');
    }
  }
}
