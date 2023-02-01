var minimumTotal = function(triangle) {
  var len = triangle.length;
  var len2 = 0;
  var res = Number.MAX_SAFE_INTEGER;
  var dp = Array(len);

  for (var i = 0; i < len; i++) {
    len2 = triangle[i].length;
    dp[i] = Array(len2).fill(0);
    for (var j = 0; j < len2; j++) {
      dp[i][j] = getMinParent(dp, i, j) + triangle[i][j];
      if (i === (len - 1)) res = Math.min(res, dp[i][j]);
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};

var getMinParent = function (dp, i, j) {
  var left = 0;
  var right = 0;

  if (i === 0) return 0;

  if (j === 0) left = Number.MAX_SAFE_INTEGER;
  else left = dp[i - 1][j - 1];

  if (j === dp[i - 1].length) right = Number.MAX_SAFE_INTEGER;
  else right = dp[i - 1][j];

  return Math.min(left, right);
};