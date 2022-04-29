const  App = {
    data(){
        return{
            toDo: '',
            toDoList : []
        }
    },
    methods: {
        addToDO(newTodo) {
            if(newTodo!=='') {
                this.toDoList.push(newTodo);
                this.toDo = ''
            }
        },
        removeItem(itemId){
            this.toDoList.splice(itemId,1)
        }

    }

}
Vue.createApp(App).mount('#app')
