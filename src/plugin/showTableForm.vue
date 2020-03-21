<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="0"
    class="demo-dynamic"
    size='mini'
  >
    <el-table
        :stripe='data.stripe'
        :border="data.border"
        :data="dynamicValidateForm.domains"
        class="tb-edit"
        style="width: 100%"
        highlight-current-row
      >
        <el-table-column type="index" width="50" align="center"></el-table-column>
        <el-table-column align="center"  width="200" v-for="(item, index) in data.column" :key="'column'+ index">
          <template slot="header">
              <div>
                <span style="color:#F56C6C" v-if='item.rules.length > 0 && item.rules[0].required'>*</span>
                <span>{{item.name}}</span>
              </div>
          </template>
          <template scope="scope">
            <div>
              <el-form-item
                :key="scope.$index"
                :rules="item.rules"
                :prop="'domains.' + scope.$index + '.' + item.key"
              >
                <FromItem :item='item' :form='scope.row'/>
                <!-- <el-input v-model="scope.row[item.key]"></el-input> -->
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
      <el-button style="margin-top:10px" @click="()=> this.dynamicValidateForm.domains.push(JSON.parse(JSON.stringify(this.obj)))">添加一行</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import FromItem from './formitem'
export default {
  components: {
    FromItem
  },
  props: {
    // 表单对象
    form: {
      type: Object,
      default: () => {
        return {
          [data.key]: []
        }
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
    }
  },
  computed: {
    column() {
      return this.data.column
    }
  },
  data() {
    return {
      obj: {},
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  created () {
    this.init()
  },
  methods: {
    // 初始化默认值
    init () {
      let obj = {}
      this.column.map(item => {
        if (item.type === 'Checkbox') {
          obj[item.key] = []
        }
      })
      this.obj = obj
      this.dynamicValidateForm.domains.push(obj)
    },
    submitForm(formName) {
      console.log(this.dynamicValidateForm)
      let ret = true
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('settabledata',{field:this.data.key, data:this.dynamicValidateForm.domains})
        } else {
          console.log("error submit!!");
          ret = false
          // return false;
        }
      });
      return ret
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    }
  }
};
</script>

<style>
</style>
