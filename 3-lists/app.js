
  Vue.createApp({
    data() {
      return {
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    }
  }).mount('#array-rendering')

  Vue.createApp({
    data() {
      return {
        parentMessage: 'Parent',
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    }
  }).mount('#array-with-index')

  Vue.createApp({
    data() {
      return {
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        }
      }
    }
  }).mount('#v-for-object')

  Vue.createApp({
    data() {
      return {
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2020-03-22'
        }
      }
    }
  }).mount('#v-for-object2')

  Vue.createApp({
    data() {
      return {
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2020-03-22'
        }
      }
    }
  }).mount('#v-for-object3')


  Vue.createApp({
      data(){
          return{
              lista: [
                  'push()',
                'pop()',
                'shift()',
                'unshift()',
                'splice()',
                'sort()',
                'reverse()'
              ]
          }
      }
  }).mount('#mutaatio')


  Vue.createApp({
    data() {
      return {
        numbers: [ 1, 2, 3, 4, 5 ]
      }
    },
    computed: {
      evenNumbers() {
        return this.numbers.filter(number => number % 2 === 0)
      }
    }
  }).mount('#suodatettu')

  Vue.createApp({
    data() {
      return {
        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
      }
    },
    methods: {
      even(numbers) {
        return numbers.filter(number => number % 2 === 0)
      }
    }
  }).mount('#sisainen')

  Vue.createApp({}).mount('#range')

  const app = Vue.createApp({
    data(){
      return {
        newTodoText:"",
        todos: [
          {
            id:1,
            title: "Do the dishes"
          },
          {
            id:2,
            title: "Take out the trash"
          },
          {
            id:3,
            title: "Mow the lawn"
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo(){
        this.todos.push({
          id: this.nextTodoId++,
          title:this.newTodoText
        })
        this.newTodoText = ""
      }
    }
  })

  app.component('todo-item', {
    template: `
            <li>
              {{ title }}
              <button v-on:click="$emit('remove')">Remove</button>
            </li>
          `,
    props: ['title'],
    emits: ['remove']
  })
  
  app.mount('#todo-list-example')