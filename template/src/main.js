import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery';

new Vue({
  el: '#app',
  render: h => h(App)
})



$.ajax({
    type: "GET"
    ,url: "/test"
    ,dataType: "json"
    ,success: function(msg){
        console.log(msg)
   }
});
