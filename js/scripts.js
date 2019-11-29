

Vue.component ("slide", {
    template: '<carousel :data=getTemplate()></carousel>',
    data () {
        return {

        }
    },
    props: {
        items: []
    },

    methods: {
        getTemplate () {
            var result = [];
            this.items.forEach(element => {
                result.push('<div class="item-img"><img src='+element+' alt=""></div>');
            });
            return result;
        }
    }

})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!',
        show: false,
        data: [
            "test1",
            "test2"
        ]
    },
})