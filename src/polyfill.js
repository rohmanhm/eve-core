Promise.each = function(arr, fn) { // take an array and a function
  // invalid input
  if(!arr || !arr.length) return Promise.reject(new Error("Non array passed to each"))
  // empty case
  if(arr.length === 0) return Promise.resolve()
  return arr.reduce(function(prev, cur) {
    return prev.then(() => fn(cur))
  }, Promise.resolve())
}