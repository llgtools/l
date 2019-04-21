function flatten(array: any[], depth = 1, res = []) {
  for (const val of array) {
    if (depth > 0 && Array.isArray(val)) {
      if (depth > 1) {
        flatten(val, depth - 1, res);
      } else {
        res.push(...val);
      }
    } else {
      res.push(val);
    }
  }
  return res;
}

export default flatten;
