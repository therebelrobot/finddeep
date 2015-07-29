var FindDeep = function _finddeep (id, container) {
  for (var item in container) {
    var results
    if (item === id) {
      results = {}
      results.path = item
      results.value = container[item]
      return results
    }
    if (typeof container[item] === 'object') {
      var recursive = FindDeep(id, container[item])
      if (recursive) {
        recursive.path = item + '.' + recursive.path
        return recursive
      }
    }
  }
  return false
}

module.exports = FindDeep
