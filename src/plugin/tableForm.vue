<template>
  <div class="cont">
    <!-- <p>{{startindex}}</p>
    <span>{{drag1}}</span>
    <span>{{drag2}}</span>
    <span>{{drag3}}</span> -->
    <div class="contdiv" 
      :style="contdivstyle" 
      @dragenter="dragenter"
      @dragleave="dragleave"
      @dragover="dragover" 
      @drop="drop" 
      @dragover.prevent
    ></div>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="0"
      class="demo-dynamic"
      size='mini'
      >
      <el-table
        empty-text='拖动左侧的组件到表格中'
        :key="tablekey"
        :border='data.border'
        :data="dynamicValidateForm.domains"
        class="tb-edit"
        style="width: 100%"
        highlight-current-row
        >
          <el-table-column align="center" type="index" width="50"></el-table-column>
          <el-table-column align="center" v-for="(item,index) in data.column"  :label="item.name + (item.rules.length > 0 ? '(必填)':'(可选)') " :key="'column'+index">
            <template slot="header">
              <div class="headeritem">
                <span style="color:#F56C6C" v-if='item.rules.length > 0 && item.rules[0].required'>*</span>
                <span>{{item.name}}</span>
                <i class="el-icon-setting icons" @click.stop="set(item)"></i>
                <i class="el-icon-delete icons" @click.stop="del(item)"></i>
              </div>
            </template>
            <template scope="scope">
              <div>
                <el-form-item
                  :key="scope.$index"
                  :rules="item.rules"
                  :prop="'domains.' + scope.$index + '.' + item.key"
                >
                  <FormItem item='item' />
                </el-form-item>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" fixed="right">
            <template scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="removeDomain(scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      <el-form-item>
        <!-- <el-button @click="()=> this.dynamicValidateForm.domains.push({})">add</el-button>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import FormItem from './formitem'
export default {
  components: {
    FormItem
  },
  props: {
    // 被选中的 id值
    drag1: {
      type: String,
      default: () => {
        return '1'
      }
    },
    drag2: {
      type: String,
      default: () => {
        return '1'
      }
    },
    // 1 没有拖动到 表格中  2 已经拖动到表格中
    drag3: {
      type: String,
      default: () => {
        return '1'
      }
    },
    // 用来判断是否是中间内容的拖动 为 -1 时 就不是  大于 0 的 都是 (此时不进行处理)
    startindex: {
      type: Number,
      default: () => {
        return -1
      }
    },
    field: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 表格的对象
    data: {
      type: Object,
      default: () => {
        return {
          column: []
        }
      }
    },
    // 左侧被拉动的组件 如果在table 中放开 则添加到table 中
    com: {
      type: Object
    }
  },
  computed: {
    column () {
      return this.data.column
    },
    contdivstyle(){
      let obj = {}
      // obj.background = this.drag3 === '1' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.2)'
      // 左侧或者 中间拖动的时候 要 大等于 10
      obj['z-index'] =  this.drag1 !== '1' ? 100 : -1

      return obj
    }
  },
  data() {
    return {
      tablekey: 'tablekey' + new Date().getTime(),
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  methods: {
    dragenter () {
      console.log('进入目标>>>')
      // this.$emit('setmub', true)
    },
    dragover () {
      // 当在表格上滑动的时候
      this.$emit('setdrag3', '2')
      // console.log('在表格上>>>')
    },
    dragleave () {
      this.$emit('setdrag3', '1')
      console.log('移出目标>>>')
      // this.$emit('setmub', false)
    },
    drop () {
      // todo 进行添加操作 并且 hxindex 置为 -3
      if (['TableForm','p','Divider'].indexOf(this.com.type) == -1 ) {
        this.data.addcolumn(this.com)
      } else if (this.startindex === '-1') {
        // 中间的拖动到表格中 不处理
      } else {
        this.$message.error('不能在表格中添加表格')
      }
      this.$emit('chonzhihxindex')
      console.log(this.data)
      console.log('方>>>')
    },
    submitForm(formName) {
      console.log(this.dynamicValidateForm)
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.dynamicValidateForm)
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    set (data) {
      this.$emit('clickitem', data)
    },
    del (data) {
      this.data.deletecolumn(data.id)
    }
  },
  watch: {
    data: {
      handler() {
        this.tablekey = 'tablekey' + new Date().getTime()
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.headeritem {
  /* background: red; */
}
.cont{
  position: relative;
  width: 100%;
  height: 117px;
  /* background: blue; */
}
.contdiv{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* bottom: 40px; */
  bottom: 0;
  z-index: 100;
  transition: all 0.5s;
  border-radius: 3px;
  overflow: hidden;
}
.icons {
  text-align: right;
  z-index: 10000;
  cursor: pointer;
}
.icons:hover{
  color: red;
}
</style>
