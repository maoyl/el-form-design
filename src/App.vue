<template>
  <div>
    <!-- <formdesign @save="saveform" /> -->
    <showforms :data="data" @save='save' :defaultData='defaultData'/>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  created() {},
  data() {
    return {
      data: {
        formsetting: {
          labelPosition: "left",
          labelwidth: 80,
          formsize: "small"
        },
        forms: [
          {
            id: "Input1584954140298",
            type: "Input",
            name: "文本框",
            col: 24,
            key: "name",
            showFrom: [
              "name",
              "col",
              "key",
              "minlength",
              "maxlength",
              "showwordlimit",
              "placeholder",
              "clearable",
              "showpassword",
              "disabled",
              "prefixicon",
              "suffixicon",
              "prepend",
              "append"
            ],
            minlength: 0,
            maxlength: 100,
            showwordlimit: true,
            placeholder: "请输入文本框",
            clearable: true,
            showpassword: false,
            disabled: false,
            prefixicon: "el-icon-edit",
            suffixicon: "",
            prepend: "",
            append: "",
            rules: [
              { required: false, message: "请输入文本框", trigger: "change" }
            ]
          },
          {
            id: "Input1584954140435",
            type: "Input",
            name: "文本框",
            col: 24,
            key: "age",
            showFrom: [
              "name",
              "col",
              "key",
              "minlength",
              "maxlength",
              "showwordlimit",
              "placeholder",
              "clearable",
              "showpassword",
              "disabled",
              "prefixicon",
              "suffixicon",
              "prepend",
              "append"
            ],
            minlength: 0,
            maxlength: 100,
            showwordlimit: true,
            placeholder: "请输入文本框",
            clearable: true,
            showpassword: false,
            disabled: false,
            prefixicon: "el-icon-edit",
            suffixicon: "",
            prepend: "",
            append: "",
            rules: [
              { required: false, message: "请输入文本框", trigger: "change" }
            ]
          }
        ],
       
      },
      defaultData: {
        name:1,
        age:2
      }
    };
  },
  methods: {
    saveform(data) {
      console.log(JSON.stringify(data));
    },
    save(data) {
      // 通过校验时 返回 用户提交的表单数据  未通过时 返回false
      if (data) {
        console.log(data);
      }
    }
  }
};
</script>

<style scoped>
.cont {
  width: 800px;
  margin: 20px auto;
}
</style>
