const LinkedList = require("./linked-list");

const li = new LinkedList.fromValues(10, 20, 30, 40, 50);
li.removeHead();
li.print();
