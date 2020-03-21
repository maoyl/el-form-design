
import assembly from './assembly'
export default class MDatePicker extends assembly{
  constructor (
    type='DatePicker',
    name='日期',
    col=24,
    key='DatePicker'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','disabled','placeholder','clearable',
    'prefixicon','datetype','startplaceholder','endplaceholder','rangeseparator'
    ]
    this.placeholder = '请输入' + this.name
    this.clearable = false
    this.disabled = false
    this.prefixicon = 'el-icon-time'
    this.datetype = 'date'
    this.startplaceholder = '开始时间'
    this.endplaceholder = '结束时间'
    this.rangeseparator = '至'

    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
 
}