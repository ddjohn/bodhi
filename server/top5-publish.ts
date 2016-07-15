console.log("Loading <top5-publish.ts>...");

/* Framework */
import {Top5} from '../collections/top5.ts';
import {Meteor} from 'meteor/meteor';
import {Counts} from 'meteor/tmeasday:publish-counts';
 
Meteor.publish('top5s', function(options: Object) {
  console.log("any-publish...");
  Counts.publish(this, 'numberOf', Top5.find({}), {noReady: true});

  return Top5.find({}, options);
});

Meteor.publish('top5', function(id: string) {
  console.log("one-publish...");
  return Top5.find({_id: id}, {});
});
