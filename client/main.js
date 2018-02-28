import Meteor from 'meteor/meteor';
import React from "react";
import ReactDOM from "react-dom";

import App from '../imports/ui/App';
const { I18n } = require('react-i18nify');

Meteor.Meteor.startup(() => {
  ReactDOM.render(<App/>, document.getElementById('app'))

  I18n.setTranslations({
    en: {
      ui: {
        title: 'Ord Knowledge Base',
        search: 'Search',
        home: 'Home',
        dictionary: 'Dictionary',
        about: 'About'
      }
    },
    ru: {
      ui: {
        title: 'База знаний Ord',
        search: 'Поиск',
        home: 'Поиск',
        dictionary: 'Словарь',
        about: 'О проекте'
      }
    }
  });
  
  I18n.setLocale('en');
})