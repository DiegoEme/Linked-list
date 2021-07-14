const LinkedList = require("./linked-list");

describe("#insertAtHead", () => {
  it("it adds the element to the beginning of the list", () => {
    const li = new LinkedList();
    li.insertAtHead(1);
    const oldHead = li.head;
    li.insertAtHead(2);

    expect(li.head.value).toBe(2);
    expect(li.head.next).toBe(oldHead);
    expect(li.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    it("it returns null", () => {
      const li = LinkedList.fromValues(10, 20);

      expect(li.getByIndex(-1)).toBe(null);
    });
  });

  describe("with index greater than list length", () => {
    it("it returns null", () => {
      const li = LinkedList.fromValues(10, 20);

      expect(li.getByIndex(5)).toBe(null);
    });
  });

  describe("with index 0", () => {
    it("it returns the head", () => {
      const li = LinkedList.fromValues(10, 20);

      expect(li.getByIndex(0).value).toBe(10);
    });
  });
  describe("with index in the middle", () => {
    it("it returns the element at that index", () => {
      const li = LinkedList.fromValues(10, 20, 30, 40);

      expect(li.getByIndex(2).value).toBe(30);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    it("it does not insert anything", () => {
      const li = LinkedList.fromValues(10, 20);
      li.insertAtIndex(-1, 30);
      expect(li.length).toBe(2);
    });
  });

  describe("with index greater than list length", () => {
    it("it does not insert anything", () => {
      const li = LinkedList.fromValues(10, 20);
      li.insertAtIndex(5, 30);
      expect(li.length).toBe(2);
    });
  });

  describe("with index 0", () => {
    it("inset at the head", () => {
      const li = LinkedList.fromValues(10, 20);
      li.insertAtIndex(0, 30);
      expect(li.head.value).toBe(30);
      expect(li.head.next.value).toBe(10);
      expect(li.length).toBe(3);
    });
  });

  describe("with index in the middle", () => {
    it("inset at given index", () => {
      const li = LinkedList.fromValues(10, 20, 30, 40);
      li.insertAtIndex(2, 1000);
      const node = li.getByIndex(2);

      expect(node.value).toBe(1000);
      expect(node.next.value).toBe(30);
      expect(li.length).toBe(5);
    });
  });
});

describe("#removeHead", () => {
  it("removes the head", () => {
    const li = new LinkedList.fromValues(10, 20, 30);
    li.removeHead();

    expect(li.head.value).toBe(20);
    expect(li.length).toBe(2);
  });
});

describe("#removeAtIndex", () => {
  describe("with index less than 0", () => {
    it("it does not remove anything", () => {
      const li = LinkedList.fromValues(10, 20);
      li.removeAtIndex(-1);
      expect(li.length).toBe(2);
    });
  });

  describe("with index greater than list length", () => {
    it("it does not remove anything", () => {
      const li = LinkedList.fromValues(10, 20);
      li.removeAtIndex(5);
      expect(li.length).toBe(2);
    });
  });

  describe("with index 0", () => {
    it("remove the head", () => {
      const li = LinkedList.fromValues(10, 20, 30);
      li.removeAtIndex(0);

      expect(li.head.value).toBe(20);
      expect(li.head.next.value).toBe(30);
      expect(li.length).toBe(2);
    });
  });

  describe("with index in the middle", () => {
    it("remove at given index", () => {
      const li = LinkedList.fromValues(10, 20, 30, 40);
      li.removeAtIndex(2);
      const node = li.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(li.length).toBe(3);
    });
  });
});
