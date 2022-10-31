class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class ListNode {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //insert last node
  insertLast(data) {
    let temp = new Node(data);
    let current = this.head;

    //if empty
    if (this.head == null) {
      this.insertFirst(data);
      return;
    }
    while (current.next) {
      current = current.next;
    }

    current.next = temp;
    this.size++;
  }

  //insert at index
  insertAtIndex(data, index) {
    let node = new Node(data);
    let previous, current;
    current = this.head;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
  }

  //get at index
  getAtindex(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.val;
  }

  // remove at index
  removeAtIndex(index) {
    let current = this.head;
    let previous;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }

  //clear list

  //print list data
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const ln = new ListNode();
ln.insertFirst(100);
ln.insertFirst(200);
ln.insertFirst(300);
ln.insertLast(400);
//ln.insertAtIndex(15, 2);

ln.removeAtIndex(2);
ln.printList();
//console.log(ln.getindex(3));
