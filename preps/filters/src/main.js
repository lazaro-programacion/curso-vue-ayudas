import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter(
  'capitalizeAll',
  function (value) {
    if (!value) return ''
    const allWords = value.split(' ');
    console.log(allWords)
    return allWords.reduce(
      (acc, act) => acc + act.charAt(0).toUpperCase() + act.slice(1) + " ",
      ""
    )
  }
)

new Vue({
  render: h => h(App),
}).$mount('#app')
