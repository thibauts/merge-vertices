merge-vertices
==============
### Merges mesh vertices having identical coordinates

Merges vertices having equal coordinates and reindexes the faces.

Install
-------

```bash
$ npm install merge-vertices
```

Usage
-----

```javascript
var mergeVertices = require('merge-vertices');

var mesh = {
  cells: [
    [0, 1, 2],
    [3, 4, 5]
  ],
  positions: [
    [ 0, 0, 0],
    [ 1, 0, 0],
    [ 0, 1, 0],
    [ 0, 0, 0],
    [-1, 0, 0],
    [ 0, 1, 0]
  ]
}

mesh = mergeVertices(mesh.cells, mesh.positions);

console.log(mesh);
/*
{ 
  cells: [ 
    [0, 1, 2], 
    [0, 3, 2] 
  ],
  positions: [ 
    [ 0, 0, 0], 
    [ 1, 0, 0], 
    [ 0, 1, 0], 
    [-1, 0, 0] 
  ] 
}
*/
```
