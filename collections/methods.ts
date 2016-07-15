console.log("Loading <mail.ts>...");

import {Email} from 'meteor/email';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
  mail: function(text: string) {
    check(text, String);

    this.unblock();

    Email.send({
	from: "ddjohn@gmail.com",
	to: "ddjohn@gmail.com",
	subject: "ddjohn@gmail.com",
	text: text
    });
  },
});
