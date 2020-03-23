# el-form-design

> 一个基于element ui的可拖拽生成表单的表单设计器
[看效果](http://m.qpic.cn/psc?/V10C0jZ80UJ9iM/lX1BhdNAWy*lo8EgHnGEzihSwKnHB3YqbAJpP53ydihTS3i6VZ8WpbUr9HRpz7G14y3uAfFP3jvtFDBLMrYF5pCbMM7aIh.F5T*cS4ryQms!/b&bo=VwJSAQAAAAACl7U!&rf=viewer_4)
***
[先看Demo](http://www.maoyl.top/Demo/elformdesigndemo/index.html#/)   [Demo源码](https://github.com/maoyl/el-form-design-demo)
***
有任何意见建议或者问题请在我 [博客](http://www.maoyl.top/#/Home)  下留言 或者提 issues 我将尽最大努力解决 

## 使用方法

``` bash
# 1.安装 
npm install el-form-design
# or
yarn install el-form-design

# 2. 导入 

import elformdesign from 'el-form-design'
# 因为是基于 element ui 的 所以可能需要用户提前安装 element ui 并全部导入
Vue.use(ElementUI);
Vue.use(elformdesign);

# 3 使用 
# 直接在页面中 使用 <formdesign/> 标签 即可展示出 表单编辑页面
<formdesign/>
```

## 示列代码 (表单设计页面)
``` bash

<template>
  <div>
    // save方法为触发保存的回调  返回的是设计好的表单的json 数据 
    <formdesign  @save='saveform'/>
  </div>
</template>

<script>
export default {
  methods: {
    saveform (data) {
      console.log(data)
    }
  }
};
</script>
```

## 示列代码 (表单展示页面)
``` bash
<template>
  <div class="cont">
    # 出入的 data 为表单设计页面设计好的表单数据  save方法为用户点击提交按钮的回调
    <showforms :data="data" @save='save'/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  created(){
  },
  data () {
    return {
      data:{"formsetting":{"labelPosition":"left","labelwidth":80,"formsize":"small"},"forms":[{"id":"Input1584811420088","type":"Input","name":"文本框","col":24,"key":"Input1584811420088","showFrom":["name","col","key","minlength","maxlength","showwordlimit","placeholder","clearable","showpassword","disabled","prefixicon","suffixicon","prepend","append"],"minlength":0,"maxlength":100,"showwordlimit":true,"placeholder":"请输入文本框","clearable":true,"showpassword":false,"disabled":false,"prefixicon":"el-icon-edit","suffixicon":"","prepend":"","append":"","rules":[{"required":false,"message":"请输入文本框","trigger":"change"}]},{"id":"Select1584811421108","type":"Select","name":"下拉框","col":24,"key":"Select1584811421108","showFrom":["name","col","key","multiple","collapsetags","placeholder","clearable","disabled","filterable","allowcreate","datatype","option","url"],"multiple":false,"collapsetags":false,"disabled":false,"filterable":false,"allowcreate":false,"placeholder":"请输入下拉框","clearable":true,"datatype":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请输入下拉框","trigger":"change"}]},{"id":"Textarea1584811420385","type":"Textarea","name":"文本域","col":24,"key":"Textarea1584811420385","showFrom":["name","col","key","rows","minlength","maxlength","showwordlimit","placeholder","clearable","disabled"],"rows":1,"minlength":0,"maxlength":100,"showwordlimit":true,"placeholder":"请输入文本域","clearable":true,"disabled":false,"rules":[{"required":false,"message":"请输入文本域","trigger":"change"}]},{"id":"InputNumber1584811420795","type":"InputNumber","name":"计数器","col":24,"key":"InputNumber1584811420795","showFrom":["name","col","key","min","max","step","stepstrictly","precision","disabled","controlsposition","placeholder"],"min":0,"max":10000,"step":1,"stepstrictly":false,"precision":1,"disabled":false,"controlsposition":"right","placeholder":"请输入计数器","rules":[{"required":false,"message":"请输入计数器","trigger":"change"}]},{"id":"Checkbox1584811424408","type":"Checkbox","name":"多选","col":24,"key":"Checkbox1584811424408","showFrom":["name","col","key","disabled","checkboxtype","datatype","option","url","min","max"],"checkboxtype":"fang","disabled":false,"min":0,"max":2,"datatype":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请输入多选","trigger":"change"}]},{"id":"Switch1584811421758","type":"Switch","name":"开关","col":24,"key":"Switch1584811421758","showFrom":["name","col","key","disabled","activetext","inactivetext","activecolor","inactivecolor"],"disabled":false,"activetext":"开","inactivetext":"关","activecolor":"#409EFF","inactivecolor":"#C0CCDA","rules":[{"required":false,"message":"请输入开关","trigger":"change"}]},{"id":"Slider1584811422063","type":"Slider","name":"滑块","col":24,"key":"Slider1584811422063","showFrom":["name","col","key","min","max","disabled","step","showstops","showinput","range"],"min":0,"max":100,"disabled":false,"step":1,"showstops":false,"showinput":false,"range":false,"rules":[{"required":false,"message":"请输入滑块","trigger":"change"}]},{"id":"Timeselect1584811422665","type":"Timeselect","name":"固定时间","col":24,"key":"Timeselect1584811422665","showFrom":["name","col","key","disabled","placeholder","pickeroptions","clearable","prefixicon"],"disabled":false,"placeholder":"请输入固定时间","clearable":false,"prefixicon":"el-icon-time","pickeroptions":{"start":"09:00","end":"18:00","step":"00:15"},"rules":[{"required":false,"message":"请输入固定时间","trigger":"change"}]},{"id":"Timepicker1584811423017","type":"Timepicker","name":"任意时间","col":24,"key":"Timepicker1584811423017","showFrom":["name","col","key","disabled","placeholder","clearable","prefixicon","isrange","startplaceholder","endplaceholder","rangeseparator"],"disabled":false,"placeholder":"请输入任意时间","clearable":false,"prefixicon":"el-icon-time","isrange":false,"startplaceholder":"开始时间","endplaceholder":"结束时间","rangeseparator":"至","rules":[{"required":false,"message":"请输入任意时间","trigger":"change"}]},{"id":"DatePicker1584811423587","type":"DatePicker","name":"日期","col":24,"key":"DatePicker1584811423587","showFrom":["name","col","key","disabled","placeholder","clearable","prefixicon","datetype","startplaceholder","endplaceholder","rangeseparator"],"placeholder":"请输入日期","clearable":false,"disabled":false,"prefixicon":"el-icon-time","datetype":"date","startplaceholder":"开始时间","endplaceholder":"结束时间","rangeseparator":"至","rules":[{"required":false,"message":"请输入日期","trigger":"change"}]},{"id":"Radio1584811423989","type":"Radio","name":"单选","col":24,"key":"Radio1584811423989","showFrom":["name","col","key","disabled","radiotype","datatype","option","url"],"radiotype":"yuan","disabled":false,"datatype":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请输入单选","trigger":"change"}]},{"id":"TableForm1584811404926","type":"TableForm","name":"表格","col":24,"key":"TableForm1584811404926","showFrom":["name","col","key","border","stripe"],"border":true,"stripe":false,"rules":[],"column":[{"id":"Input1584811404926","type":"Input","name":"文本框","col":24,"key":"Input1584811404926","showFrom":["name","col","key","minlength","maxlength","showwordlimit","placeholder","clearable","showpassword","disabled","prefixicon","suffixicon","prepend","append"],"minlength":0,"maxlength":100,"showwordlimit":true,"placeholder":"请输入文本框","clearable":true,"showpassword":false,"disabled":false,"prefixicon":"el-icon-edit","suffixicon":"","prepend":"","append":"","rules":[{"required":false,"message":"请输入文本框","trigger":"change"}]},{"id":"Textarea1584811408850","type":"Textarea","name":"文本域","col":24,"key":"Textarea1584811408850","showFrom":["name","col","key","rows","minlength","maxlength","showwordlimit","placeholder","clearable","disabled"],"rows":1,"minlength":0,"maxlength":100,"showwordlimit":true,"placeholder":"请输入文本域","clearable":true,"disabled":false,"rules":[{"required":false,"message":"请输入文本域","trigger":"change"}]},{"id":"InputNumber1584811409966","type":"InputNumber","name":"计数器","col":24,"key":"InputNumber1584811409966","showFrom":["name","col","key","min","max","step","stepstrictly","precision","disabled","controlsposition","placeholder"],"min":0,"max":10000,"step":1,"stepstrictly":false,"precision":1,"disabled":false,"controlsposition":"right","placeholder":"请输入计数器","rules":[{"required":false,"message":"请输入计数器","trigger":"change"}]},{"id":"Select1584811411105","type":"Select","name":"下拉框","col":24,"key":"Select1584811411105","showFrom":["name","col","key","multiple","collapsetags","placeholder","clearable","disabled","filterable","allowcreate","datatype","option","url"],"multiple":false,"collapsetags":false,"disabled":false,"filterable":false,"allowcreate":false,"placeholder":"请输入下拉框","clearable":true,"datatype":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请输入下拉框","trigger":"change"}]},{"id":"Switch1584811412361","type":"Switch","name":"开关","col":24,"key":"Switch1584811412361","showFrom":["name","col","key","disabled","activetext","inactivetext","activecolor","inactivecolor"],"disabled":false,"activetext":"开","inactivetext":"关","activecolor":"#409EFF","inactivecolor":"#C0CCDA","rules":[{"required":false,"message":"请输入开关","trigger":"change"}]},{"id":"Slider1584811413461","type":"Slider","name":"滑块","col":24,"key":"Slider1584811413461","showFrom":["name","col","key","min","max","disabled","step","showstops","showinput","range"],"min":0,"max":100,"disabled":false,"step":1,"showstops":false,"showinput":false,"range":false,"rules":[{"required":false,"message":"请输入滑块","trigger":"change"}]},{"id":"Timeselect1584811414533","type":"Timeselect","name":"固定时间","col":24,"key":"Timeselect1584811414533","showFrom":["name","col","key","disabled","placeholder","pickeroptions","clearable","prefixicon"],"disabled":false,"placeholder":"请输入固定时间","clearable":false,"prefixicon":"el-icon-time","pickeroptions":{"start":"09:00","end":"18:00","step":"00:15"},"rules":[{"required":false,"message":"请输入固定时间","trigger":"change"}]},{"id":"Timepicker1584811415546","type":"Timepicker","name":"任意时间","col":24,"key":"Timepicker1584811415546","showFrom":["name","col","key","disabled","placeholder","clearable","prefixicon","isrange","startplaceholder","endplaceholder","rangeseparator"],"disabled":false,"placeholder":"请输入任意时间","clearable":false,"prefixicon":"el-icon-time","isrange":false,"startplaceholder":"开始时间","endplaceholder":"结束时间","rangeseparator":"至","rules":[{"required":false,"message":"请输入任意时间","trigger":"change"}]},{"id":"DatePicker1584811416509","type":"DatePicker","name":"日期","col":24,"key":"DatePicker1584811416509","showFrom":["name","col","key","disabled","placeholder","clearable","prefixicon","datetype","startplaceholder","endplaceholder","rangeseparator"],"placeholder":"请输入日期","clearable":false,"disabled":false,"prefixicon":"el-icon-time","datetype":"date","startplaceholder":"开始时间","endplaceholder":"结束时间","rangeseparator":"至","rules":[{"required":false,"message":"请输入日期","trigger":"change"}]},{"id":"Radio1584811417865","type":"Radio","name":"单选","col":24,"key":"Radio1584811417865","showFrom":["name","col","key","disabled","radiotype","datatype","option","url"],"radiotype":"yuan","disabled":false,"datatype":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请输入单选","trigger":"change"}]},{"id":"Checkbox1584811418763","type":"Checkbox","name":"多选","col":24,"key":"Checkbox1584811418763","showFrom":["name","col","key","disabled","checkboxtype","datatype","option","url","min","max"],"checkboxtype":"fang","disabled":false,"min":0,"max":2,"datatype":"option","url":"","option":[{"value":"Beijing","label":"北京"},{"value":"Shanghai","label":"上海"},{"value":"Tianjin","label":"天津"},{"value":"ChongQing","label":"重庆"}],"rules":[{"required":false,"message":"请输入多选","trigger":"change"}]}]}]}
    }
  },
  methods: {
    save (data) {
      // 通过校验时 返回 用户提交的表单数据  未通过时 返回false
      if (data) {
        console.log(data)
      }
    }
  }
}
</script>

<style scoped>
.cont{
  width:800px;
  margin: 20px auto
}
</style>
```

## todoList
- [x] 增加分割线，文字
- [ ] 增加正则校验
- [ ] 增加接口配置 单选多选下拉框 内容
