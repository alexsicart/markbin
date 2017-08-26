import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
    Meteor.publish('bins', function() {
        //Filtering the access to one user
      return Bins.find({ ownerId: this.userId });
    });
});
