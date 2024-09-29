class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        var newNode = new Node();
        newNode.value = value;

        if (this.head == null){
            return newNode;
        }

         // Traverse the list until the last node is reached
        let curr = this.head;
        while (curr.next != null){
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    prepend(value) {
        var newNode = new Node();
        newNode.value = value;

        if(this.head == null){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

        return this.head;
    }

    size() {
        if(this.head == null){
            return null;
        }

        var length = 0;
        let curr = this.head;
        while(this.next != null){
            length++;
            curr = curr.next;
        }
        return length;
    }

    head() {
        if(this.head == null){
            return null;
        }

        return this.head;
    }

    tail() {
        if(this.head == null){
            return null;
        }
        
        //A temporary node to help in the traversal
        var temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }

        return temp;
    }

    //returns the node at the given index
    at(index) {
        if(this.head == null){
            return null;
        }

        var temp = this.head;
        //Iterate upto the node at the index
        for(let i = 0; i <= index; i++){
            temp = temp.next;
        }
        return temp;
    }

    pop() {
        if(this.head == null){
            return null;
        }

        if(this.head.next == null){
            this.head = null;
            return null;
        }

        let second_last = this.head;
        while(second_last.next.next != null){
            second_last = second_last.next;
        }

        second_last = null;

        return this.head;
    }

    contains(value) {
        if(this.head == null){
            return null;
        }

        let curr = this.head;
        while(curr.next != null){
            if (curr.value == value){
                return true;
            }
        }
        return false;
    }

    find(value) {
        if(this.head == null){
            return null;
        }

        let temp = this.head;
        for(let i = 0; temp.next!= null; i++){
            if (temp.value == value){
                return i;
            }
        }
        //If not found
        return null;
    }

    toString() {
        if(this.head == null){
            return null;
        }

        let curr = this.head;
        //Log the values up to the second last node
        while(curr.next.next != null){
            console.log(curr.value," -> ");
        }
        console.log(curr.next.value);
        return this.head;
    }

    insertAt(value, index){
        if(this.head == null){
            return null;
        }

        let temp = this.head;
        let count = 0;
        while(temp.next != null){
            if (count == index){
                temp.value = value;
            }
            count++;
        }
        return this.head;
    }

    removeAt(index){
        if(this.head == null){
            return null;
        }

        let temp = this.head;
        let count = 0;
        while(temp.next != null){
            //When at the node before the selected index, remove the next node
            if (count == index - 1){
                temp.next = null;
            }
            count++;
        }
    }
}

class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

export {LinkedList, Node};