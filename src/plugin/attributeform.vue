<template>
  <el-card class="attrcont">
    <div class="attrcontzzc" :style="{'z-index':zzcindex}"></div>
    <el-tabs :class="formclass" v-model="activeName" type="card">
      <el-tab-pane label="字段设置" name="1">
        <el-form :model="form" label-width="80px" size='small'>
          <el-form-item v-if='form.showFrom.indexOf("key") !== -1 && fieldsdata.length == 0' label="字段名称">
            <el-input v-model="form.key"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("key") !== -1 && fieldsdata.length > 0' label="字段名称">
            <el-select  style="width:100%" v-model="form.key" allow-create filterable>
              <el-option  v-for='(item,index) in fieldsdata' :key="index" :label="item.value" :value="item.value">
                <span style="float: left">{{ item.value }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("name") !== -1' label="中文名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("col") !== -1' label="栅格格数">
            <el-input-number :min="1" :max="24" v-model="form.col"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("rows") !== -1' label="默认行数">
            <el-input-number :min="1" :max="10" v-model="form.rows"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("minlength") !== -1' label="最小长度">
            <el-input-number :min="0" v-model="form.minlength"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("maxlength") !== -1' label="最大长度">
            <el-input-number :min="0" v-model="form.maxlength"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("showwordlimit") !== -1' label="字数统计">
            <el-switch v-model="form.showwordlimit" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("placeholder") !== -1' label="占位内容">
            <el-input v-model="form.placeholder"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("clearable") !== -1' label="可否清空">
            <el-switch v-model="form.clearable" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("showpassword") !== -1' label="密码框">
            <el-switch v-model="form.showpassword" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("disabled") !== -1' label="是否禁用">
            <el-switch v-model="form.disabled" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("prefixicon") !== -1' label="头部图标">
            <el-input v-model="form.prefixicon"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("suffixicon") !== -1' label="尾部图标">
            <el-input v-model="form.suffixicon"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("prepend") !== -1' label="前置内容">
            <el-input v-model="form.prepend"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("append") !== -1' label="后置内容">
            <el-input v-model="form.append"></el-input>
          </el-form-item>
          <!-- number -->
          <el-form-item v-if='form.showFrom.indexOf("min") !== -1' label="最小值">
            <el-input-number v-model="form.min"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("max") !== -1' label="最大值">
            <el-input-number v-model="form.max"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("step") !== -1' label="步长">
            <el-input-number :precision="2" v-model="form.step"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("stepstrictly") !== -1' label="只能是步长的倍数">
            <el-switch v-model="form.stepstrictly" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("precision") !== -1' label="精确小数点后几位">
            <el-input-number :min="0" :max="5" :step="1" stepstrictly v-model="form.precision"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("controlsposition") !== -1' label="按钮位置">
            <el-select v-model="form.controlsposition">
              <el-option label="两边" value=""></el-option>
              <el-option label="右边" value="right"></el-option>
            </el-select>
          </el-form-item>
          <!-- 下拉框 -->
          <el-form-item v-if='form.showFrom.indexOf("multiple") !== -1' label="可否多选">
            <el-switch v-model="form.multiple" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("filterable") !== -1' label="可否搜索">
            <el-switch v-model="form.filterable" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("allowcreate") !== -1 && form.filterable' label="可否创建选项">
            <el-switch v-model="form.allowcreate" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("collapsetags") !== -1 && form.multiple' label="选择内容全部展示">
            <el-switch v-model="form.collapsetags" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
             
          <!-- 开关 -->
          <el-form-item v-if='form.showFrom.indexOf("width") !== -1' label="开关宽度">
            <el-input-number :min="40" :max="100" :step="1"  v-model="form.width"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("activetext") !== -1' label="打开时的文字描述">
            <el-input v-model="form.activetext"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("inactivetext") !== -1' label="关闭时的文字描述">
            <el-input v-model="form.inactivetext"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("activecolor") !== -1' label="打开时背景色">
            <el-color-picker v-model="form.activecolor" show-alpha></el-color-picker>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("inactivecolor") !== -1' label="关闭时背景色">
            <el-color-picker v-model="form.inactivecolor" show-alpha></el-color-picker>
          </el-form-item>
          <!-- 滑块 -->
          <el-form-item v-if='form.showFrom.indexOf("showstops") !== -1' label="显示间断">
            <el-switch v-model="form.showstops" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("showinput") !== -1' label="输入框">
            <el-switch v-model="form.showinput" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("range") !== -1' label="范围选择">
            <el-switch v-model="form.range" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>

          <!-- 时间选择器 固定时间 -->
          <el-form-item v-if='form.showFrom.indexOf("pickeroptions") !== -1' label="开始时间">
            <el-time-picker
              v-model="form.pickeroptions.start"
              placeholder="开始时间"
              value-format='HH:mm'  
              format='HH:mm'  
            >
            </el-time-picker>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("pickeroptions") !== -1' label="结束时间">
            <el-time-picker
              v-model="form.pickeroptions.end"
              placeholder="结束时间"
              value-format='HH:mm'  
              format='HH:mm'  
            >
            </el-time-picker>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("pickeroptions") !== -1' label="步长">
            <el-time-picker
              v-model="form.pickeroptions.step"
              :picker-options="{
                selectableRange: '00:01:00 - 06:00:00'
              }"
              placeholder="步长"
              value-format='HH:mm'
              format='HH:mm'  
            >
            </el-time-picker>
          </el-form-item>

           <!-- 时间选择器 任意时间 -->
          <el-form-item v-if='form.showFrom.indexOf("isrange") !== -1' label="范围选择">
            <el-switch v-model="form.isrange" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("startplaceholder") !== -1 && form.isrange' label="开始位置占位符">
            <el-input v-model="form.startplaceholder"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("endplaceholder") !== -1 && form.isrange' label="结束位置占位符">
            <el-input v-model="form.endplaceholder"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("rangeseparator") !== -1 && form.isrange' label="分隔符">
            <el-input v-model="form.rangeseparator"></el-input>
          </el-form-item>

          <!-- 分割线 和 文字 -->
          <el-form-item v-if='form.showFrom.indexOf("text") !== -1' label="文字">
            <el-input v-model="form.text"></el-input>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("contentposition") !== -1 ' label="文字位置">
            <el-select style="width:100%" v-model="form.contentposition" placeholder="请选择">
              <el-option label="左" value="left"></el-option>
              <el-option label="中" value="center"></el-option>
              <el-option label="右" value="right"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("fontsize") !== -1' label="文字大小">
            <el-input-number :min="12" :max="100" :step="1"  v-model="form.fontsize"></el-input-number>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("textcolor") !== -1' label="文字颜色">
            <el-color-picker v-model="form.textcolor" show-alpha></el-color-picker>
          </el-form-item>

          
          

          <!-- 日期选择 -->
          <el-form-item v-if='form.showFrom.indexOf("datetype") !== -1 ' label="选择单位">
            <el-select style="width:100%" v-model="form.datetype" placeholder="请选择">
              <el-option label="年月日-单个" value="date"></el-option>
              <el-option label="年周-单个" value="week"></el-option>
              <el-option label="年月-单个" value="month"></el-option>
              <el-option label="年-单个" value="year"></el-option>
              <el-option label="多日期" value="dates"></el-option>
              <el-option label="年月日时分秒-单个" value="datetime"></el-option>
              <el-option label="年月日时分秒-范围" value="datetimerange"></el-option>
              <el-option label="年月日-范围" value="daterange"></el-option>
              <el-option label="年月-范围" value="monthrange"></el-option>
            </el-select>
          </el-form-item>
          <div v-if='form.datetype=="datetimerange"||form.datetype=="daterange"||form.datetype=="monthrange" '>
            <el-form-item v-if='form.showFrom.indexOf("startplaceholder") !== -1 ' label="开始位置占位符">
              <el-input v-model="form.startplaceholder"></el-input>
            </el-form-item>
            <el-form-item v-if='form.showFrom.indexOf("endplaceholder") !== -1 ' label="结束位置占位符">
              <el-input v-model="form.endplaceholder"></el-input>
            </el-form-item>
            <el-form-item v-if='form.showFrom.indexOf("rangeseparator") !== -1 ' label="分隔符">
              <el-input v-model="form.rangeseparator"></el-input>
            </el-form-item>
          </div>
          
          <!-- 单选 -->
          <el-form-item v-if='form.showFrom.indexOf("radiotype") !== -1 ' label="展示类型">
            <el-select style="width:100%" v-model="form.radiotype" placeholder="请选择">
              <el-option label="圆圈" value="yuan"></el-option>
              <el-option label="按钮" value="button"></el-option>
            </el-select>
          </el-form-item>

          <!-- 多选 -->
          <el-form-item v-if='form.showFrom.indexOf("checkboxtype") !== -1 ' label="展示类型">
            <el-select style="width:100%" v-model="form.checkboxtype" placeholder="请选择">
              <el-option label="方块" value="fang"></el-option>
              <el-option label="按钮" value="button"></el-option>
            </el-select>
          </el-form-item>

          <!-- options -->
          <el-form-item v-if='form.showFrom.indexOf("datatype") !== -1 ' label="数据类型">
            <el-select style="width:100%" v-model="form.datatype" placeholder="请选择">
              <el-option label="配置数据" value="option"></el-option>
              <el-option label="接口数据" value="url"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("url") !== -1 && form.datatype === "url" ' label="接口地址">
            <el-input v-model="form.url"></el-input>
          </el-form-item>
          <el-table
            v-if='form.showFrom.indexOf("option") !== -1 && form.datatype == "option" '
            border
            :data="form.option"
            class="tb-edit"
            style="width: 100%"
            highlight-current-row
            size='mini'
          >
            <el-table-column label="显示值">
              <template scope="scope">
                <el-input
                  size="mini"
                  v-model="scope.row.label"
                  placeholder="请输入内容"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="传递值">
              <template scope="scope">
                <el-input
                  size="mini"
                  v-model="scope.row.value"
                  placeholder="请输入内容"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button v-if='form.showFrom.indexOf("option") !== -1 && form.datatype == "option" ' size='mini' @click="addoption" style="margin-top:10px">增加选项</el-button>
            

          <!-- 表格 -->
          <el-form-item v-if='form.showFrom.indexOf("border") !== -1' label="是否边框">
            <el-switch v-model="form.border" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item v-if='form.showFrom.indexOf("stripe") !== -1' label="斑马纹">
            <el-switch v-model="form.stripe" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="校验设置" name="2">
        <el-form v-if='form.rules.length > 0' :model="form" label-width="80px" size='small'>
          <el-form-item label="是否必填">
            <el-switch v-model="form.rules[0].required" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label="提示信息" v-if='form.rules[0].required'>
            <el-input v-model="form.rules[0].message"></el-input>
          </el-form-item>

           <el-table
            v-if='this.form.rules.length > 1'
            border
            :data="form.rules.filter((v,i) => i != 0 )"
            class="tb-edit"
            style="width: 100%"
            highlight-current-row
            size='mini'
          >
            <el-table-column label="正则表达式">
              <template scope="scope">
                <el-input
                  disabled
                  size="mini"
                  v-model="scope.row.pattern"
                  placeholder="请输入内容"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="错误提示">
              <template scope="scope">
                <el-input
                  size="mini"
                  disabled
                  v-model="scope.row.message"
                  placeholder="请输入内容"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="form.deleterules(scope.$index)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button style="margin-top:5px" v-if='form.rules[0].required' @click="dialogVisible=true" size="small">添加正则校验</el-button>

        </el-form>
      </el-tab-pane>
      <el-tab-pane label="表单设置" name="3">
        <el-form :model="formsetting" label-width="80px" size='small'>
          <el-form-item label="对齐方式">
            <el-select style="width:100%" v-model="formsetting.labelPosition" placeholder="请选择">
              <el-option label="左对齐" value="left"></el-option>
              <el-option label="右对齐" value="right"></el-option>
              <el-option label="顶对齐" value="top"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="字段宽度">
            <el-input-number style="width:100%" :min="80" :max="200" :step="1" stepstrictly v-model="formsetting.labelwidth"></el-input-number>
          </el-form-item>
          <el-form-item label="组件尺寸">
            <el-select style="width:100%" v-model="formsetting.formsize" placeholder="请选择">
              <el-option label="大" value="medium"></el-option>
              <el-option label="中" value="small"></el-option>
              <el-option label="小" value="mini"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="lajitongdiv" :style="{'z-index':zzcindex+1}" @dragover="dragover" @dragleave="dragleave" @drop="drop"  @dragover.prevent>
      <svg t="1584024586503" v-if='!lj' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2016" width="200" height="200"><path d="M652.8 834.56c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m-128 0c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m281.6-614.4h-153.6v-51.2c0-28.16-23.04-51.2-51.2-51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2c0 28.16 23.04 51.2 51.2 51.2v460.8c0 56.32 46.08 102.4 102.4 102.4h358.4c56.32 0 102.4-46.08 102.4-102.4v-460.8c28.16 0 51.2-23.04 51.2-51.2v-51.2c0-28.16-23.04-51.2-51.2-51.2z m-358.4-25.6c0-15.36 10.24-25.6 25.6-25.6h102.4c15.36 0 25.6 10.24 25.6 25.6v25.6h-153.6v-25.6z m307.2 640c0 28.16-23.04 51.2-51.2 51.2h-358.4c-28.16 0-51.2-23.04-51.2-51.2v-460.8h460.8v460.8z m25.6-512h-512c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h512c15.36 0 25.6 10.24 25.6 25.6 0 12.8-10.24 25.6-25.6 25.6z m-384 512c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z" p-id="2017" fill="#1296db"></path></svg>
      <svg t="1584029734035" v-if='lj' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6049" width="200" height="200"><path d="M652.8 834.56c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m-128 0c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z m281.6-614.4h-153.6v-51.2c0-28.16-23.04-51.2-51.2-51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2h-153.6c-28.16 0-51.2 23.04-51.2 51.2v51.2c0 28.16 23.04 51.2 51.2 51.2v460.8c0 56.32 46.08 102.4 102.4 102.4h358.4c56.32 0 102.4-46.08 102.4-102.4v-460.8c28.16 0 51.2-23.04 51.2-51.2v-51.2c0-28.16-23.04-51.2-51.2-51.2z m-358.4-25.6c0-15.36 10.24-25.6 25.6-25.6h102.4c15.36 0 25.6 10.24 25.6 25.6v25.6h-153.6v-25.6z m307.2 640c0 28.16-23.04 51.2-51.2 51.2h-358.4c-28.16 0-51.2-23.04-51.2-51.2v-460.8h460.8v460.8z m25.6-512h-512c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h512c15.36 0 25.6 10.24 25.6 25.6 0 12.8-10.24 25.6-25.6 25.6z m-384 512c15.36 0 25.6-10.24 25.6-25.6v-307.2c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v307.2c0 12.8 10.24 25.6 25.6 25.6z" p-id="6050" fill="#d4237a"></path></svg>
    </div>

    <el-dialog
      title="正则校验"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">

      <el-form :model="regular" label-width="120px" size='small'>
        <el-form-item label="正则表达式" >
          <el-input v-model="regular.pattern"></el-input>
        </el-form-item>
        <el-form-item label="提示信息" >
          <el-input v-model="regular.message"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="saveregular" size="small" >确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import MInput from './assembly/input'
import MTextarea from './assembly/textarea'
export default {
  props: {
    // 中间是否拖动
    drag2: {
      type: String,
      default: () => {
        return '1'
      }
    },
    // 组件对象
    form: {
      type: Object,
      default: () => {
        return {
          // 展示字段
          showFrom: [],
          // 校验
          rules: []
        }
      }
    },
    formsetting: {
      type: Object
    },
    // 传递过来的可选字段
    fields: {
       type: Array,
       default: () => {
         return []
       }
    }
  },
  components: {
  },
  data() {
    return {
      activeName: '1',
      formclass: '',
      // 垃圾桶
      lj: false,
      // 正则
      regular: {
        pattern: '/^[1][3,4,5,7,8][0-9]{9}$/',
        message: '请输入正确的手机号'
      },
      dialogVisible: false
    }
  },
  created () {
  },
  computed:{
    fieldsdata () {
      let ret = []
      // 是数组      
      if (Array.isArray(this.fields)) {
        ret = this.fields
      }
      return ret
    },
    zzcindex () {
      return this.drag2 === '1' ? -10 : 10
    }
  },
  methods: {
    drop () {
      this.lj = false
      this.$emit('deletecom')
    },
    dragover () {
      this.lj = true
      console.log('滑动时')
    },
    dragleave () {
      this.lj = false
      console.log('出去了')
    },
    // 删除选项
    handleDelete (index) {
     
      this.form.deleteOption(index)
    },
    addoption () {
      this.form.addoption()
    },
    saveregular () {
      let { pattern , message } = this.regular
      if (!pattern || !message) {
        this.$message.error('请填写完正则表达式及未通过表达式时的提示信息!');
        return
      }
      let isreg;
      try{
        isreg = eval(pattern) instanceof RegExp
      }catch(e){
        isreg = false
      }
      if (isreg === true){
        let aa = pattern.substring(1,pattern.length-1)
        let data = {
          "pattern": new RegExp(aa),
          "message": message
        }
        this.form.addrules(data)
        this.dialogVisible = false
      } else {
        this.$message.error('您的正则表达式不正确!');
      }
    },
    handleClose () {
      this.dialogVisible = false
    }
  },
  watch: {
    form: function () {
      let thiz = this
      this.formclass = 'animated bounceInRight'
      let timer = setTimeout(function () {
        thiz.formclass = ''
        window.clearTimeout(timer)
      }, 1000)
      console.log('bianhua')
    }
  }
};
</script>

<style scoped>
.attrcont{
  position: relative;
  min-height: 700px;
}
.attrcontzzc{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
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
