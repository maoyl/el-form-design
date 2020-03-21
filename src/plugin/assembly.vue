<template>
  <el-card class="assemblycont">
      <div class="assemblycontzzc" :style="{'z-index':zzcindex}"></div>
      <!-- 组件 -->
      <el-row :gutter="10">
        <el-col :span="12" v-for='(item,index) in data' :key="index">
          <div class="assemblycont_item" 
            draggable 
            @click="click(item)"
            @dragstart="dragstart(item)"
            @dragend="dragend">
            {{item.name}}
          </div>
        </el-col>
      </el-row>
      <!-- 垃圾桶 -->
      <div class="lajitongdiv" 
        :style="{'z-index':zzcindex+1}" 
        @dragover="dragover" 
        @dragleave="dragleave"
        @drop="drop" 
        @dragover.prevent>
        <svg t="1584024586503" v-if='!lj' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2016" width="200" height="200"><path d="M652.8 834.56c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m-128 0c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m281.6-614.4h-153.6v-51.2c0-28.16-23.04-51.2-51.2-51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2c0 28.16 23.04 51.2 51.2 51.2v460.8c0 56.32 46.08 102.4 102.4 102.4h358.4c56.32 0 102.4-46.08 102.4-102.4v-460.8c28.16 0 51.2-23.04 51.2-51.2v-51.2c0-28.16-23.04-51.2-51.2-51.2z m-358.4-25.6c0-15.36 10.24-25.6 25.6-25.6h102.4c15.36 0 25.6 10.24 25.6 25.6v25.6h-153.6v-25.6z m307.2 640c0 28.16-23.04 51.2-51.2 51.2h-358.4c-28.16 0-51.2-23.04-51.2-51.2v-460.8h460.8v460.8z m25.6-512h-512c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h512c15.36 0 25.6 10.24 25.6 25.6 0 12.8-10.24 25.6-25.6 25.6z m-384 512c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z" p-id="2017" fill="#1296db"></path></svg>
        <svg t="1584029734035" v-if='lj' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6049" width="200" height="200"><path d="M652.8 834.56c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m-128 0c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m281.6-614.4h-153.6v-51.2c0-28.16-23.04-51.2-51.2-51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2c0 28.16 23.04 51.2 51.2 51.2v460.8c0 56.32 46.08 102.4 102.4 102.4h358.4c56.32 0 102.4-46.08 102.4-102.4v-460.8c28.16 0 51.2-23.04 51.2-51.2v-51.2c0-28.16-23.04-51.2-51.2-51.2z m-358.4-25.6c0-15.36 10.24-25.6 25.6-25.6h102.4c15.36 0 25.6 10.24 25.6 25.6v25.6h-153.6v-25.6z m307.2 640c0 28.16-23.04 51.2-51.2 51.2h-358.4c-28.16 0-51.2-23.04-51.2-51.2v-460.8h460.8v460.8z m25.6-512h-512c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h512c15.36 0 25.6 10.24 25.6 25.6 0 12.8-10.24 25.6-25.6 25.6z m-384 512c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z" p-id="6050" fill="#d4237a"></path></svg>
      </div>
  </el-card>
</template>

<script>
import MInput from './assembly/input'
import MTextarea from './assembly/textarea'
import MInputNumber from './assembly/inputNumber'
import MSelect from './assembly/select'
import Mtable from './assembly/tableform'
import Mswitch from './assembly/switch'
import MSlider from './assembly/slider'
import Mtimeselect from './assembly/timeselect'
import MTimepicker from './assembly/timepicker'
import MDatePicker from './assembly/datePicker'
import MRadio from './assembly/radio'
import MCheckbox from './assembly/checkbox'
export default {
  props: {
    drag2: {
      type: String,
      default: () => {
        return '1'
      }
    }
  },
  components: {
  },
  data() {
    return {
      lj: false,
      data: [
        {type: 'input', name: '文本框'},
        {type: 'Textarea', name: '文本域'},
        {type: 'InputNumber', name: '计数器'},
        {type: 'Select', name: '下拉框'},
        {type: 'Switch', name: '开关'},
        {type: 'Slider', name: '滑块'},
        {type: 'Timeselect', name: '固定时间'},
        {type: 'Timepicker', name: '任意时间'},
        {type: 'DatePicker', name: '日期'},
        {type: 'Radio', name: '单选'},
        {type: 'Checkbox', name: '多选'},
        {type: 'TableForm', name: '表格'}
      ]
    }
  },
  created () {
  },
  computed:{
    zzcindex () {
      return this.drag2 === '1' ? -10 : 10
    }
  },
  methods: {
    click (item) {
      this.$emit('setcom', this.getobj(item))
      this.$emit('addcom')
    },
    getobj (data){
      let obj = {}
      if (data.type === 'input') {
        obj = new MInput()
      } else if (data.type === 'Textarea') {
        obj = new MTextarea()
      } else if (data.type === 'InputNumber') {
        obj = new MInputNumber()
      } else if (data.type === 'Select') {
        obj = new MSelect()
      } else if (data.type === 'Switch') {
        obj = new Mswitch()
      } else if (data.type === 'Slider') {
        obj = new MSlider()
      } else if (data.type === 'Timeselect') {
        obj = new Mtimeselect()
      } else if (data.type === 'Timepicker') {
        obj = new MTimepicker()
      } else if (data.type === 'DatePicker') {
        obj = new MDatePicker()
      } else if (data.type === 'Radio') {
        obj = new MRadio()
      } else if (data.type === 'Checkbox') {
        obj = new MCheckbox()
      } else if (data.type === 'TableForm') {
        obj = new Mtable()
      }
      return obj
    },
    dragstart (data) {
      this.$emit("setdrag", {type: 'drag1', value : '2'});
      let obj = this.getobj(data)
      this.$emit('setcom', obj)
    },
    dragend () {
      this.$emit('reset')
    },
    drop () {
      this.lj = false
      this.$emit('deletecom')
    },
    dragover () {
      this.lj = true
    },
    dragleave () {
      this.lj = false
    }
  }
};
</script>

<style scoped>
.assemblycont{
  position: relative;
  min-height: 700px;
}
.assemblycontzzc{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
}

.assemblycont_item{
  background: #f1f2fd;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: pointer;
  cursor: move;
  font-size: 14px
}
.assemblycont_item:hover{
  
  border: 1px dashed #579ff8;
  color: #579ff8;
  transition: 0.3s;
}
.imgclass{
  
  width: 200px;
  height: 200px;
}
.lajitongdiv{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
