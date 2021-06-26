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
      val: 4,
      next: null
    }
  }
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 7,
      next: {
        val: 7,
        next: {
          val: 1,
          next: null
        }
      }
    }
  }
};

function addTwoNumbers(l1, l2) {
  function add(l1, l2, carry) {
    if (!l1 && !l2) {
      if (carry)
        return {
          val: carry,
          next: null
        };
      else return null;
    }
    if (!l1) l1 = { val: 0, next: null };
    if (!l2) l2 = { val: 0, next: null };

    const sum = l1.val + l2.val + carry;
    const val = sum >= 10 ? sum % 10 : sum;
    const _carry = Number(sum >= 10);

    return {
      val: val,
      next: add(l1.next, l2.next, _carry)
    };
  }
  return add(l1, l2, 0);
}
console.log(addTwoNumbers(l1, l2));
