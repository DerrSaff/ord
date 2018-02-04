import * as Meteor from 'meteor/meteor';
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from '../imports/ui/App';

Meteor.Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('app'))
})
