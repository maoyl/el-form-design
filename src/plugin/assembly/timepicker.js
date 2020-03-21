
import assembly from './assembly'
export default class MTimepicker extends assembly{
  constructor (
    type='Timepicker',
    name='任意时间',
    col=24,
    key='Timepicker'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','disabled','placeholder','clearable',
    'prefixicon','isrange','startplaceholder','endplaceholder','rangeseparator'
    ]
    this.disabled = false
    this.placeholder = '请输入' + this.name
    this.clearable = false
    this.prefixicon = 'el-icon-time'

    this.isrange = false
    this.startplaceholder = '开始时间'
    this.endplaceholder = '结束时间'
    this.rangeseparator = '至'

    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
 
}