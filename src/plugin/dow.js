

export default function gettext (formsetting, data) {
  let text = `
<template>
  <div>
    <showforms :data="data" @save='save' :defaultData='defaultData'/>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        data: {
          formsetting: ${JSON.stringify(formsetting)},
          forms: ${JSON.stringify(data)},
        },
        defaultData: {
          name:1,
          age:2
        }
      };
    },
    methods: {
      save(data) {
        // 通过校验时 返回 用户提交的表单数据  未通过时 返回false
        if (data) {
          console.log(data)
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
`
  return text
}
