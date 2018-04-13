
import Vue from 'vue';
import iView from 'iview';
import comApp from './components/app.vue';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

let myVue = new Vue({
    el: '#myVue',
    template: "<app></app>",
    components: {
        app: comApp
    },
    mounted () {
    }
});