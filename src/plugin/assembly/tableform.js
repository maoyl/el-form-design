
import assembly from './assembly'
import Minput from './input'
export default class MInputNumber extends assembly{
  constructor (
    type='TableForm',
    name='表格',
    col=24,
    key='TableForm'+ new Date().getTime()
  ) {
    super(type,name,col,key);
    this.showFrom = ['name', 'col', 'key','border','stripe']

    this.border = true
    this.stripe = false
    // 表格的校验在内部的组件中
    this.rules = []
    // 表单表头
    this.column = [new Minput()]
    // { key: 'name', type: 'input',label: '名称', rules:[{ required: true, message: '名称不能为空', trigger: 'change'}] },
    // { key: 'name2', type: 'input',label: '名称2', rules:[{ required: true, message: '名称不能为空', trigger: 'change'}] },
  }
  addcolumn (data) {
    this.column.push(data)
  }
  deletecolumn (id) {
    this.column = this.column.filter(item => item.id != id)
  }
}