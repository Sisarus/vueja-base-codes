const RenderHtmlApp = {
    data(){
        return {
            rawHtml :'<span style="color: red"> This should be red.</span>'
        }
    }
}

Vue.createApp(RenderHtmlApp).mount('#example1')

Vue.createApp({
    data() {
        return {
            author:{
                firstName: 'John',
                lastName: 'Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 3 - The Mystery'
                ]
            }
        }
    },
    computed:{
        publishedBookMessage(){
            return this.author.books.length > 0 ? 'Yes': 'No'
        },
        fullName: {
            get() {
                return this.author.firstName + " " + this.author.lastName
            },
            set(newValue) {
                const names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
}).mount('#computed-basics')
// vm.fullName = 'John Doe' asettaa arvonja jakautuu etunimeen ja sukunimeen.

const watchExampleVM = Vue.createApp({
    data() {
        return {
            question: '',
            answer: 'Questions usually contains a question mark ;-)'
        }
    },
    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1){
                this.getAnswer()
            }
        }
    },
    methods: {
        getAnswer(){
            this.answer = 'Thinking...'
            axios
              .get('https://yesno.wtf/api')
              .then(response => {
                this.answer = response.data.answer
              })
            .catch(error => {
                this.answer = 'Error! Cloud not reach the API.' + error;
            })
        }
    }
}).mount('#watch-example')

const vm = Vue.createApp({
    data() {
      return {
        firstName: 'Foo',
        lastName: 'Bar'
      }
    },
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      }
    }
  }).mount('#demo')