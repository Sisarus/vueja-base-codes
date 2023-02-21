const app = Vue.createApp({})

app.component('button-counter', {
    data(){
        return {
            count: 0
        }
    },
    template:
    `<button v-on:click="count++">
    You clicked me {{ count }} times.
    </button>`
})



app.mount('#components-demo')

const app1 = Vue.createApp({})

app1.component('blog-post', {
    props: ['title'],
    template: `<h4>{{ title }}</h4>`
})

app1.mount("#blog-post-demo")

const App2 = {
    data() {
      return {
        posts: [
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' }
        ]
      }
    }
  }
  
  const app2 = Vue.createApp(App2)
  
  app2.component('blog-post', {
    props: ['title'],
    template: `<h4>{{ title }}</h4>`
  })
  
  app2.mount('#blog-posts-demo1')