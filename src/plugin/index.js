
import formdesign from './formDesign.vue'
import showform from './ShowForms.vue'

let test = {}
test.install = function (Vue, options) {
  Vue.component(formdesign.name, formdesign)
  Vue.component(showform.name, showform)
}
export default test