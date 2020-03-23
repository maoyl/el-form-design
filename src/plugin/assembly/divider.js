
import assembly from './assembly'
export default class MDivider extends assembly{
  constructor (
    type='Divider',
    name='',
    col=24,
    key='Divider'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['col','text','contentposition'
    ]
    this.text = ''
    this.contentposition = 'center'
    this.rules = [
    ]
  }
}