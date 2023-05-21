class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addItem(val) {
    const node = new Node(val);
    let curr = this.head;
    if (this.head === null) {
      this.head = node;
      return;
    }
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = node;
  }
  peek() {
    let curr = this.head;
    while (curr != null) {
      console.log("val", curr.val);
      curr = curr.next;
    }
  }
}

const linked = new LinkedList();
linked.addItem(10);
linked.addItem(20);
linked.addItem(30);

linked.peek();
