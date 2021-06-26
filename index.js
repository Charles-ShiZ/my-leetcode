/*
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/
const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
};
function add(l1, l2) {
  if (!l1 && !l2) return null;
  const sum = l1.val + l2.val;
  if (sum >= 10) {
    const next = add(l1.next, l2.next);
    if (next) {
      next.val++;
      return {
        val: sum % 10,
        next: next
      };
    } else {
      return {
        val: sum % 10,
        next: {
          val: 1,
          next: null
        }
      };
    }
  }
  return {
    val: sum,
    next: add(l1.next, l2.next)
  };
}
console.log(JSON.stringify(add(l1, l2)));
add(l1, l2);
