
import assembly from './assembly'
export default class MP extends assembly{
  constructor (
    type='p',
    name='',
    col=24,
    key='p'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['col','text','contentposition','fontsize','textcolor'
    ]
    this.text = '某某表单'
    this.contentposition = 'center'
    this.fontsize = 18
    this.textcolor = '#333'
    this.rules = [
    ]
  }
}