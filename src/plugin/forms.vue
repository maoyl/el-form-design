<template>
  <el-card class="elcard">
    <div slot="header" class="clearfix">
      <span>表单设计</span>
      <el-button style="float: right; padding: 3px 0;margin-left:5px" type="text" @click="save">保存</el-button>
      <el-button style="float: right; padding: 3px 0;margin-left:5px" type="text" @click="yulan">预览</el-button>
      <el-button style="float: right; padding: 3px 0;margin-left:5px" type="text" @click="()=>this.$emit('downloadvue')">下载源码</el-button>
   </div>
    <div
      class="elcardzz"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="dropfun"
      @dragover.prevent
      :style="styleCard"
    ></div>
    <!-- <span>{{drag1}} {{drag2}} {{drag3}} {{startindex}} {{endindex}}</span> -->
    <div class="formscont">
      <div v-if="hxindex== -1 && drag3 !== '2'" class="hxdiv"></div>
      <el-form  :model="from" :label-position="formsetting.labelPosition" :label-width="formsetting.labelwidth+'px'" :size="formsetting.formsize">
        <el-row :gutter="10">
          <el-col v-for="(item,index) in fromData" :key="index" :span="item.col">
            <div
              class="formitem"
              :style="{'background': startindex == index ? 'rgba(255,0,0,0.2)' : endindex == index ? 'rgba(0,0,255,0.2)' :''}"
            >
              <div
                class="formitem2"
                :style="{...styleitem,border: actid === item.id ? '1px solid red' : ''}"
                draggable
                @dragstart="dragstart(index,item)"
                @dragend="dragend(index)"
                @dragover="dragover2(index)"
                @dragleave="dragleave2(index)"
                @drop="dropfun2(index)"
                @dragover.prevent
                @click="clickitem(item)"
              >
                <!-- <div class="formitemzz"></div> -->
                <div class="hxdiv" v-if="hxindex==index && drag3 !== '2'"></div>

                <el-form-item 
                  v-if='["TableForm","Divider","p"].indexOf(item.type) == -1 '
                  :label="item.name"
                  :prop='item.key'
                  :rules='item.rules'
                  v-model="from[item.key]"
                >
                  <FormItem :item='item' :form='from'/>
                </el-form-item>
                <el-divider v-if="item.type === 'Divider'" :content-position='item.contentposition'>{{item.text}}</el-divider>
                <p v-if="item.type === 'p'"  :style="{'text-align': item.contentposition,'font-size':item.fontsize+'px',color:item.textcolor}">{{item.text}}</p>
                <el-form-item v-if='item.type==="TableForm"' :label="item.name">
                  <div>
                    <tableForm
                      :com='com'
                      :data='item' 
                      :drag1='drag1'
                      :drag2='drag2'
                      :drag3='drag3' 
                      :startindex='startindex' 
                      @setdrag3='setdrag3'
                      @chonzhihxindex='chonzhihxindex'
                      @clickitem='clickitem'
                      />
                  </div>
                </el-form-item>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div v-if="hxindex== -2 && drag3 !== '2'" class="hxdiv"></div>
    </div>
    <!-- <el-button @click="sub">sub</el-button> -->
  </el-card>
</template>

<script>
import tableForm from './tableForm'
import FormItem from './formitem'
export default {
  name: "forms",
  components: {
    tableForm, FormItem
  },
  // 是否正在拖动组件
  props: {
    drag1: {
      type: String,
      default: () => {
        return "1";
      }
    },
    drag2: {
      type: String,
      default: () => {
        return "1";
      }
    },
    fromData: {
      type: Array,
      default: () => {
        return [{ name: "111" }];
      }
    },
    formsetting: {
      type: Object,
      default: () => {
        return {
          labelPosition: 'left',
          labelwidth: 80,
          formsize: 'small'
        }
      }
    },
    // 左侧正在被拖动的组件
    com: {
      type: Object
    },
    height: {
      type: Number,
      default: () => {
        return 600
      }
    }
  },
  data() {
    return {
      startindex: -1,
      endindex: -1,
      // 表单的值
      from: {},
      // 拖动到表格  1 没有  2 有
      drag3: '1',
      // -3 为没有 -2 为大的div的下面 -1 为大的div的上面  其他为 小组件
      hxindex: -3,
      // 被点击选中的id值
      actid: '0'
    };
  },
  created () {
    this.initfrom()
    console.log(111)
  },
  methods: {
    // Checkbox 需要提前初始化
    initfrom() {
      let obj = {}
      this.fromData.map(item => {
        if (item.type === 'Checkbox') {
          obj[item.key] = []
        }
      })
      this.from = obj
    },  
    // 拖动到表格
    setdrag3(data){
      this.drag3 = data
    },
    // 重置数据
    centerreset () {
      this.startindex = -1 
      this.endindex = -1
      this.drag3 = '1'
      this.hxindex = -3
      this.actid = 0
    },
    chonzhihxindex () {
      this.hxindex = -3
    },
    // 大div 中滑动时
    dragover() {
      // 中间没有拖动时
      if (this.drag2 === "1") {
        this.$emit("setdrag", {type:'drag1',value: '3'});
        // 一个都没有时 在上面 否则在下面
        if (this.fromData.length === 0) {
          this.hxindex = -1;
        } else {
          this.hxindex = -2;
        }
      }
    },
    // 离开大div时 
    dragleave() {
      // 当进入到小div中时  或者在操作小div 时 不处理
      if (this.drag1 == "4" || this.drag2 != "1") {
        return;
      }
      this.$emit("setdrag", {type:'drag1',value: '2'});
      this.hxindex = -3;
    },
    // 在div 中放下时
    dropfun() {
      // 不是中间的拖动时 者添加到中间的表单中
      if (this.drag2 === "1") {
        this.$emit("addcom");
        this.hxindex = -3;
      }
      this.drag3 = '1'
    },
    // 在组件中的
    dragstart(index, data) {
      this.$emit("setdrag", { type:'drag2',value: '2' });
      this.$emit('setdelcom', data)
      this.startindex = index;
      console.log("开始拖动 小div", index);
    },
    dragend() {
      // 重置数据
      console.log('中间的end ------------')
      this.startindex = -1;
      this.endindex = -1;
      this.drag3 = '1'
      this.$emit("reset");
    },
    // 在组件中滑动
    dragover2(index) {
      // 处理 从左侧拖动到中间组件的逻辑
      if (this.drag2 === "1" && this.drag1 !== "1") {
        this.$emit("setdrag", { type:'drag1',value: '4' });
        this.hxindex = index;
        // todo 增加横线
      }
      // 中间拖动进入到 中间的其他组件
      if (this.drag1 === "1" && this.drag2 !== "1") {
        if (index !== this.startindex) {
          this.endindex = index;
          this.$emit("setdrag", { type:'drag2',value: '3' });
        } else {
          this.endindex = -1;
        }
      }
    },
    dragleave2(index) {
      this.endindex = -1;
    },
    dropfun2(index) {
      // 中间的进行拖动交换
      if (this.drag1 === "1") {
        this.$emit("setdrag", { type:'drag2',value: '1' });
        if (
          this.startindex !== this.endindex &&
          this.startindex != -1 &&
          this.endindex != -1
        ) {
          this.$emit("jiaohuan", this.startindex, this.endindex);
        }
      }
      // 从左侧进入到小div中放下  并且没有进入到表格中时 进行对应位置的添加
      if (this.drag1 === "4" && this.drag3 != '2') {
        this.$emit("addcom", index);
        this.hxindex = -3;
      }
      this.drag3 = '1'
    },
    // 选中中间的组件
    clickitem (data) {
      console.log('data..')
      console.log(data)
      this.actid = data.id
      this.$emit('setformcom', data)
    },
    sub() {
      alert(JSON.stringify(this.from));
    },
    // 预览
    yulan(){
      this.$emit('setdialogVisible', true)
    },
    // 保存
    save () {
      this.$emit('save')
    }
  },
  computed: {
    // 中间的大的div
    styleCard: function() {
      // drag1 是否正在拖动左侧的组件 1 没有动 2 已经拖动没有进入中间的界面  3拖动进入中间的页面 4 进入设计页面中的组件
      // drag2 是否正在拖动中间的组件 1 没有动  2 已经拖动没有进度其他组件  3 进入其他组件
      let sty = { background: "rgb(0,0,0,0)" };
      if (this.drag1 == "2") {
        // sty.background = 'rgb(0,0,0,0.1)'
      } else if (this.drag1 == "3") {
        // sty.background = 'rgb(0,0,0,0.5)'
        // sty["z-index"] = 10;
      }
      return sty;
    },
    styleitem: function() {
      let sty = { "z-index": 100 };
      // if (this.drag2 == '2') {
      // }
      return sty;
    }
  },
  watch: {
    // fromData 变化时初始化表单
    fromData () {
      this.initfrom()
    },  
    // fromData: {
    //   handler() {
    //   },
    //   deep: true
    // }
  }
};
</script>

<style scoped>
.elcard {
  position: relative;
  min-height: 600px;
}

.elcardzz {
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
}

.formscont {
  min-height: 600px;
}
.formitem {
  position: relative;
  padding: 3px;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
}
.formitem2 {
  position: relative;
  padding: 3px;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px dashed #3a88ed;
  cursor: move;
}
.formitem2:hover {
  border: 1px dashed red;
  transition: 0.5s;
}
.formitemzz {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.hxdiv {
  width: 100%;
  height: 2px;
  background: red;
  border-radius: 2px;
}

.icons1 {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
