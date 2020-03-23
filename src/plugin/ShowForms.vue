
<template>
  <div>
    <el-form :key="formkey" ref="showform" :model="form"  :label-position="data.formsetting.labelPosition" :label-width="data.formsetting.labelwidth+'px'" :size="data.formsetting.formsize">
      <el-row :gutter="10">
        <el-col v-for="(item,index) in data.forms" :key="index" :span="item.col">
          <el-form-item 
            v-if='["TableForm","Divider","p"].indexOf(item.type) == -1 '
            :label="item.name"
            :prop='item.key'
            :rules='item.rules'
          >
            <Formitem :item="item" :form='form'/>
          </el-form-item>
          <el-divider v-if="item.type === 'Divider'" :content-position='item.contentposition'>{{item.text}}</el-divider>
          <p v-if="item.type === 'p'"  :style="{'text-align': item.contentposition,'font-size':item.fontsize+'px',color:item.textcolor}">{{item.text}}</p>
          <el-form-item 
            v-if='item.type==="TableForm"'
            :label="item.name"
            :prop='item.key' 
            :rules='item.rules'
          >
            <showTableForm :ref="item.id" :form='form' :data="item" @settabledata='settabledata'/>
          </el-form-item>
        </el-col>
        <el-col :span='24'>
          <el-form-item>
            <el-button type="primary" @click="submitForm('showform')">确定</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>      
</template>

<script>
// 初始化form 
// 1 下拉框多选时为 数组
// 2 开关进入之后 默认 false
// 3 滑块范围选择时为数组
// 4 多选 需要初始化为 数组
import Formitem from './formitem'
import showTableForm from './showTableForm'
export default {
  name: "showforms",
  components: {
    Formitem, showTableForm
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          formsetting: {
            labelPosition: 'left',
            labelwidth: 80,
            formsize: 'small'
          },
          forms: []
        }
      }
    },
    defaultData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      formkey:'formkey',
      form: {}
    };
  },
  created () {
    this.initform()
  },
  methods: {
    initform() {
      let obj = this.defaultData
      this.data.forms.map(item => {
        if (item.type === 'Checkbox') {
          obj[item.key] = []
        }
      })
      this.form = obj
    },  
    // 设置table 的数据
    settabledata (data) {
      this.form[data.field] = data.data
    },
    submitForm(formName) {
      let pd = true
      // 调用表格的提交按钮
      for (let k in this.$refs) {
        if (k != 'showform') {
          let pdt = this.$refs[k][0].submitForm('dynamicValidateForm')
          if (!pdt) {
            pd = false
          }
          console.log(pd,'...')
        }
      }
      // 当前表单的校验
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (pd) {
            this.$emit('save', this.form)
          }
        } else {
          console.log('error submit!!');
          this.$emit('save', false)
          return false;
        }
      });
    }
  },
  computed: {
  },
  watch: {
    data: {
      handler() {
        this.formkey = 'formkey' + new Date().getTime()
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
