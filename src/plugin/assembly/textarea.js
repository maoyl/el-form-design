
import assembly from './assembly'
export default class MTextarea extends assembly{
  constructor (
    type='Textarea',
    name='文本域',
    col=24,
    key='Textarea'+ new Date().getTime(),
    rows=1
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','rows','minlength','maxlength','showwordlimit','placeholder',
      'clearable','disabled',
    ]
    this.rows = rows
    this.minlength = 0
    this.maxlength = 100
    this.showwordlimit = true
    this.placeholder = '请输入' + this.name
    this.clearable = true
    this.disabled = false
    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
}