import db from './db'

export default class Morphology {
  constructor(text) {
    this.text = text
  }
  split_sentence(){
    return this.text.split(' ')
  }
}
