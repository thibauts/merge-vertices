
function mergeVertices(cells, positions) {

  function hashPosition(position) {
    return JSON.stringify(position);
  }

  var positionLookup = {};
  positions.forEach(function(position) {
    positionLookup[hashPosition(position)] = position;
  });

  var keys = Object.keys(positionLookup);

  var indexLookup = {};
  var index = 0;
  keys.forEach(function(key) {
    indexLookup[key] = index;
    index++;
  });

  cells = cells.map(function(cell) {
    return cell.map(function(index) {
      var hash = hashPosition(positions[index])
      return indexLookup[hash];
    })
  });

  positions = keys.map(function(key) {
    return positionLookup[key];
  });

  return {
    cells: cells,
    positions: positions
  };
}

module.exports = mergeVertices;