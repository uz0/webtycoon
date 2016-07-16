import { DATA } from './dictionary';

export default class TextGenerator {

  constructor() {
    this.data = DATA;
  }

  article() {
    return `${this.data.fullName()} ${this.data.verb()} ${this.data.noun()}`;
  }

  advert() {
    return `${this.data.adjective()} of ${this.data.noun()}? Click here!`;
  }

  name() {
    return this.data.names[Math.floor(Math.random() * this.data.names.length)];
  }

  lastname() {
    return this.data.lastnames[Math.floor(Math.random() * this.data.lastnames.length)];
  }

  fullName() {
    return this.name() + ' ' + this.lastname();
  }

  adjective() {
    return this.data.adjectives[Math.floor(Math.random() * this.data.lastnames.length)];
  }

  noun() {
    return this.data.nouns[Math.floor(Math.random() * this.data.nouns.length)];
  }

  verb() {
    return this.data.verbs[Math.floor(Math.random() * this.data.verbs.length)];
  }
}
