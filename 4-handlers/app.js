Vue.createApp({
    data() {
        return {
            counter: 0
        }
    }
}).mount('#basic-event')

Vue.createApp({
    data(){
        return{
            name: "Vue.js"
        }
    },
    methods: {
        greet(event) {
            alert('Hello ' + this.name + "!")
        if (event) {
            alert(event.target.tagName)
        }
        }
    }
}).mount("#event-with-method")

Vue.createApp({
    methods: {
        say(message){
            alert(message)
        }
    }
}).mount('#inline-handler')

Vue.createApp({
    data(){
        return {
            message: " "
        }
    }
}).mount("#v-model-basic")

Vue.createApp({
    data(){
        return {
            message: " "
        }
    }
}).mount("#v-model-textarea")

Vue.createApp({
    data(){
        return{
            checked: false
        }

    }
}).mount("#v-model-checkbox")

Vue.createApp({
    data(){
        return {
            selected: " "
        }
    }
}).mount('#v-model-select')

Vue.createApp({
    data(){
        return {
            selected: "A",
            options: [
                {text: "One", value: "A"},
                {text: "Two", value: "B"},
                {text: "Three", value: "C"}
            ]
        }
    }
}).mount("#v-model-select-dynamic")