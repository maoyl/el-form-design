
export default class assembly {
  constructor (type,name,col,key){
    this.id = type + new Date().getTime()
    this.type = type
    this.name = name
    this.col = col
    this.key = key
  }
}