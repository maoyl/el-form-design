
import assembly from './assembly'
export default class MSwitch extends assembly{
  constructor (
    type='Switch',
    name='开关',
    col=24,
    key='Switch'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','disabled','activetext','inactivetext',
    'activecolor','inactivecolor'
    ]
    this.disabled = false
    this.activetext = '开'
    this.inactivetext = '关'
    this.activecolor = '#409EFF'
    this.inactivecolor = '#C0CCDA'

    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
 
}