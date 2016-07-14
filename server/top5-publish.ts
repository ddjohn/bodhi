console.log("Loading <top5-publish.ts>...");

/* Framework */
import {Top5} from '../collections/top5.ts';
import {Meteor} from 'meteor/meteor';
 
Meteor.publish('top5', function() {
  console.log("publish...");
  return Top5.find();
});
