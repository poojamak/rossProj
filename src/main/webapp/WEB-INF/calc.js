function calc(numb1, numb2)
{
    function print(numb) {
      var precision = 14;
      document.write(math.format(numb, precision) + '<br>');
    }
print(numb1+numb2)
return numb1+numb2;
}
function addMatr(matrixA, matrixB) {
  var rowsA = matrixA.length;
  var colsA = matrixA[0].length;
  matrixC = new Array(rowsA);

  for (var i=0; i < rowsA; i++) {
    matrixC[i] = new Array(colsA);
    for (var j=0; j < colsA; j++) {
      matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return matrixC;
}

function swapRows(matrix, rowA, rowB) {
  var tmp = matrix[rowA];
  matrix[rowA] = matrix[rowB];
  matrix[rowB] = tmp;
  return matrix;
}
function isSquare(matrix) {
  return matrix.length == matrix[0].length;
}
function multiplyMatr(matrixA, matrixB) {
  var rowsA = matrixA.length;
  var rowsB = matrixB.length;
  var colsB = matrixB[0].length;
  matrixC = new Array(rowsA);

  for (var i=0; i < rowsA; i++) {
    matrixAns[i] = new Array(colsB);
  }

  for (var k=0; k < colsB; k++) {
    for (var i=0; i < rowsA; i++) {
      var temp = new Array(0,1);
      for (var j=0; j < rowsB; j++) {
        temp = add( temp, (matrixA[i][j] * matrixB[j][k]) );
      }
      matrixAns[i][k] = temp;
    }
  }
  return matrixAns;
}
function canBeMult(matrixA, matrixB) {
  var colsA = matrixA[0].length;
  var rowsB = matrixB.length;
  if (colsA != rowsB) {
    return false;
  }
  return true;
}

function canBeAdd(matrixA, matrixB) {
  if (matrixA.length != matrixB.length ||
      matrixA[0].length != matrixB[0].length) {
        return false;
  }
  return true;
}


