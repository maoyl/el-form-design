
import assembly from './assembly'
export default class MInput extends assembly{
  constructor (
    type='Input',
    name='文本框',
    col=24,
    key='Input'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','minlength','maxlength','showwordlimit','placeholder',
      'clearable','showpassword','disabled','prefixicon','suffixicon','prepend','append'
    ]
    this.minlength = 0
    this.maxlength = 100
    this.showwordlimit = true
    this.placeholder = '请输入' + this.name
    this.clearable = true
    this.showpassword	 = false
    this.disabled = false
    this.prefixicon = 'el-icon-edit'
    this.suffixicon = ''
    this.prepend = ''
    this.append = ''
    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
  deleterules (index) {
    this.rules.splice(index+1, 1)
  }
  addrules (data) {
    this.rules.push(data)
  }

}