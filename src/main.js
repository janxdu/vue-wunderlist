// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WunderlistSDK from 'wunderlist'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

var wunderlistSDK = new WunderlistSDK({
  'accessToken': '',
  'clientID': '0e17a2d8066dd9317ac6'
});

wunderlistSDK.initialized.done(
  function(){
    wunderlistSDK.http.lists.all().done(function(listData){
      console.log(listData)
    });
  }
);
