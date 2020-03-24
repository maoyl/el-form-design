<template>
  <div>
  <el-row :gutter="10">
    <el-col :span='6'>
      <Assembly 
        :drag2='drag2'
        @addcom='addcom'
        @setcom='setcom' 
        @setdrag='setdrag'
        @deletecom='deletecom'
        @reset='reset'/>
    </el-col>
    <el-col :span='12'>
      <Forms 
        ref='forms'
        :fromData='data'
        :formsetting='formsetting'
        :drag1='drag1'
        :drag2='drag2'
        :com='com'
        @setdrag='setdrag'
        @reset='reset'
        @setdelcom='setdelcom'
        @addcom='addcom'
        @jiaohuan='jiaohuan'
        @setformcom='setformcom'
        @setdialogVisible='setdialogVisible'
        @save='save'
        @qingkong='qingkong'
        @downloadvue='downloadvue'
      />
    </el-col>
    <el-col :span="6">
      <AttrFrom
        :fields='fields'
        :form='formcom'
        :formsetting='formsetting'
        :drag2='drag2'
        @deletecom='deletecom'
      />
    </el-col>
  </el-row>
  <el-dialog
    title="预览表单"
    v-if='dialogVisible'
    :visible.sync="dialogVisible"
    width="70%"
    :before-close="handleClose">
    <ShowFrom :data='{formsetting:formsetting,forms:data}'/>
  </el-dialog>
  </div>
</template>

<script>
import dow from './dow'
import Assembly from './assembly'
import Forms from './forms'
import AttrFrom from './attributeform'
import ShowFrom from './ShowForms'
export default {
  name: 'formdesign',
  components: {
    Assembly, Forms, AttrFrom, ShowFrom
  },
  props: {
    formdata: {
      type: Object
    },
    fields: {
      type: Array,
      default: () => {
        return [
          {label: '姓名', value: 'name'},
          {label: '年龄', value: 'age'},
        ]
      }
    }
  },
  data() {
    return {
      // 是否正在拖动左侧的组件 1 没有动  2 已经拖动没有进入中间的界面  3拖动进入中间的页面 4 进入设计页面中的组件
      drag1: '1',
      // 是否正在拖动中间的组件 1 没有动  2 已经拖动没有进度其他组件  3 进入其他组件
      drag2: '1',
      // 左边 被操作的组件
      com: {},
      // 中间正在被拖动的组件的 如果拖动到垃圾桶 将会删除它
      delcom: {},
      // 表单列表
      data: [],
      // 表单设置
      formsetting: {
        labelPosition: 'left',
        labelwidth: 80,
        formsize: 'small'
      },
      // 中间被点击的组件
      formcom: {
        showFrom: [],
        rules: []
      },
      dialogVisible: false,
    };
  },
  created () {
    // 当传入props 值时 设置进入当前的data
    if(this.formdata &&  this.formdata.formsetting && this.formdata.forms){ 
      this.formsetting = this.formdata.formsetting
      this.data = this.formdata.forms
    }
  },
  mounted () {
  },
  methods: {
    // 左边的全部重置 左边的结束拖动时调用
    reset () {
      this.drag1 = '1'
      this.drag2 = '1'
      // 重置中间的横线
      this.$refs.forms.chonzhihxindex()
    },
    // 预览的 对话框
    setdialogVisible() {
      this.dialogVisible = true
    },
    handleClose () {
      this.dialogVisible = false
    },
    // 设置拖动状态
    setdrag (data) {
      this[data.type] = data.value  
    },
    // 设置操作的组件
    setcom (data) {
      this.com = data
    },
    setdelcom (data) {
      this.delcom = data
    },
    setformcom (data) {
      this.formcom = data
    },
    // 清空
    qingkong() {
      this.data = []
      this.formcom = {
        showFrom: [],
        rules: []
      }
    },
    // 删除
    deletecom () {
      // 如果删除的是 被选中的 则把 选中的也清空
      if (this.delcom.id === this.formcom.id) {
        this.formcom = {
          showFrom: [],
          rules: []
        }
      }
      this.data = this.data.filter(item => item.id !== this.delcom.id)
    },
    // 增加一个组件
    addcom (index = -1) {
      if (index == -1) {
        this.data.push(this.com)
      } else {
        this.data.splice(index, 0, this.com)
      }
    },
    // 交换位置
    jiaohuan(start, end) {
      let arr =  this.data
      // JSON.parse(JSON.stringify(this.data))
      let aa = arr[start]
      arr[start] = arr[end]
      arr[end] = aa
      this.data = arr
    },
    save () {
      this.$emit('save', {formsetting:this.formsetting,forms:this.data})
    },
    // 下载
    download(filename, text) {
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    downloadvue () {
      let filename = 'hello.vue'
      let text = dow(this.formsetting,this.data)
      console.log(text)
      this.download(filename, text)
    }
  }
}
</script>

<style>
</style>
