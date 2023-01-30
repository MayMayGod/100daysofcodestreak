var searchMatrix = function(matrix, target) {
  var n = matrix.length;
  var m = (matrix[0] || []).length;
  var x = m - 1;
  var y = 0;
  var tmp = 0;
  while (x >= 0 && y < n) {
    tmp = matrix[y][x];
    if (target === tmp) {
      return true;
    } else if (target > tmp) {
      y++;
    } else {
      x--;
    }
  }
  return false;
};