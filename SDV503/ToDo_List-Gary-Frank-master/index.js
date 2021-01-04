class Task{
    constructor(task){
        this.task = task;
        this.next = null;
    }
}

class ToDoList{
    constructor(head, tail){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(task){
        var newNode = new Task(task);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; //++ = increment  -- = decriment
        return this
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){// length keeps track of the length of the list (resets the list)
            this.head = null;
            this.tail = null;
        }
        return current
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current
    }
}


let toDoList = new ToDoList();
console.log(toDoList);

console.log(toDoList.push("Go to SDV class"));
console.log(toDoList.pop());

console.log(toDoList);

console.log(toDoList.get(0));




