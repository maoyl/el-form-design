
import assembly from './assembly'
export default class MTimepicker extends assembly{
  constructor (
    type='Timeselect',
    name='固定时间',
    col=24,
    key='Timeselect'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','disabled','placeholder','pickeroptions','clearable',
    'prefixicon'
    ]
    this.disabled = false
    this.placeholder = '请输入' + this.name
    this.clearable = false
    this.prefixicon = 'el-icon-time'

    this.pickeroptions = {
      start: '09:00',
      end: '18:00',
      step: '00:15'
    }

    

    // 校验
    this.rules = [
      { required: false, message: '请输入' + this.name , trigger: 'change' },
    ]
  }
 
}