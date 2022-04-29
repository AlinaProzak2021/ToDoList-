const App = {
    data() {
        return {
            toDo: '',
            toDoList: []
        }
    },
    methods: {
        addToDO(newTodo) {

            this.toDoList.push(newTodo);
            this.toDo = ''

        },
        removeItem(itemId) {
            this.toDoList.splice(itemId, 1)
        }

    },
    computed: {
        isInputEmpty() {
            return this.toDo === '';
        },
        isEmptyList() {
            return this.toDoList.length === 0;
        }

    }

}
Vue.createApp(App).mount('#app')
