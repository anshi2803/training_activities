class Todo{
    constructor(id, task, status){
        this.id=id;
        this.task=task;
        this.status=status;
    }
}
class todolist{
    constructor(){
        this.todos=[]
    }
    addtodo(data){

        // const num= Math.floor(Math.random()*100);
        // const todo= new Todo(num, data, 'pending');
        const todo = new Todo(Date.now(),data, "pending");
        this.todos.push(todo);
    }

    removetode(task){
        this.todos= this.todos.filter(item => item.task !== task)
    }
    getalltodos(){
        return this.todos;
    }
    updatestatus(name){
        this.todos=this.todos.map(item =>{
            if(item.task == name){
                item.status=item.status==='pending'?'completed' : 'pending';
            }
            return item;
        })
    }
}

const list=new todolist();
list.addtodo('Complete course');
list.addtodo('make website');
//list.removetode('Complete course')
console.log(list.getalltodos());

list.updatestatus('Complete course');
console.log(list.getalltodos());
