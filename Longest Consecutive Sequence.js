var longestConsecutive = function(nums) {
  var map = {};
  var max = 0;
  var start = 0;
  var end = 0;
  var num = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    num = nums[i];
    if (map[num]) continue;
    start = map[num - 1] ? map[num - 1].start : num;
    end = map[num + 1] ? map[num + 1].end : num;
    map[num] = { start: num, end: num };
    map[start].end = end;
    map[end].start = start;
    max = Math.max(end - start + 1, max);
  }
  return max;
};