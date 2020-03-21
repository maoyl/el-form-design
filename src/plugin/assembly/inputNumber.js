
import assembly from './assembly'
export default class MInputNumber extends assembly{
  constructor (
    type='InputNumber',
    name='计数器',
    col=24,
    key='InputNumber'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','min','max',
      'step','stepstrictly','precision','disabled','controlsposition','placeholder'
    ]
    this.min = 0
    this.max = 10000
    this.step = 1
    this.stepstrictly = false
    this.precision = 1
    this.disabled = false
    this.controlsposition = 'right'
    this.placeholder = '请输入' + this.name
    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
}