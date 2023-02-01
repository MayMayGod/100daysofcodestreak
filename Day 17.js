var reverseBetween = function(head, m, n) {
  var newHead = new ListNode(0);
  var now = newHead;
  var tmp = null;
  var reverseLast = null;
  var reverseHead = null;
  var reverseNow = null;
  var i = 0;

  newHead.next = head;

  while (now) {
    tmp = now.next;

    if (i === m - 1) {
      reverseHead = now;
    }

    if (i === m) {
      reverseLast = now;
      reverseNow = now;
    }

    if (i > m && i <= n) {
      now.next = reverseNow;
      reverseNow = now;
    }

    if (i === n) {
      reverseLast.next = tmp;
      reverseHead.next = reverseNow;
    }

    now = tmp;
    i++;
  }

  return newHead.next;
};