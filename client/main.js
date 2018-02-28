import Meteor from 'meteor/meteor';
import React from "react";
import ReactDOM from "react-dom";

import App from '../imports/ui/App';
const { I18n } = require('react-i18nify');
import translations from "../imports/i18n/i18n"

Meteor.Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('app'))
  I18n.setTranslations(translations);
  I18n.setLocale('en');
})