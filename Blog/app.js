const app = Vue.createApp({
    data(){
        return {
            posts: [
                {id:1 , title: "My journey with Vue"},
                {id:2 , title: "Blogging with Vue"},
                {id:3 , title: "Why Vue is so fun"}
            ],
            postFontSize: 1
        }
    }
})

app.component('blog-post', {
    props: ['title'],
    template: `
    <div class="blog-text"><h4>{{ title }}</h4>
    <button @click="$emit('enlargeText')">Enlarge text</button>
    </div>`
})

app.mount('#blog-posts-events-demo')

const app1 = Vue.createApp({})

app1.component('alert-box', {
    template: `
    <div class="demo-alert-box">
    <strong>Error!</strong>
    <slot></slot>
    </div>`
})

app1.mount('#slots-demo')

const app2 = Vue.createApp({
    data() {
        return {
            currentTab: 'Home',
            tabs:['Home', 'Posts', 'Archive']
        }
    },
    computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
})

app2.component('tab-home', {
    template: `<div class="demo-tab">Home component</div>`
})
app2.component('tab-posts', {
    template: `<div class="demo-tab">Posts component</div>`
})
app2.component('tab-archive', {
    template: `<div class="demo-tab">Archive component</div>`
})

app2.mount('#dynamic-component-demo')