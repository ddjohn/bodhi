console.log("Loading <top5>...");

/* Framework */
import {Mongo} from "meteor/mongo";
import {Meteor} from 'meteor/meteor';

export const Top5 = new Mongo.Collection<Top5>("top5");

Top5.allow({
  insert: function() {
    let user = Meteor.user();
    
    return !!user;
  },
  update: function() {
    let user = Meteor.user();
    
    return !!user;
  },
  remove: function() {
    let user = Meteor.user();
    
    return !!user;
  }
});
