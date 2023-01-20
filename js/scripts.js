const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Che figata Vue.Js',
            img: '../img/vue-logo.png',
            centerText: 'align-center font-50',
        }
    }
}).mount('#app');