function transPose(matrix) {
  const columns = matrix.reduce((acc, curr) => {
    for(let j = 0; j < curr.length; j++) {
      acc[j].push(curr[j]);
    }
    return acc
  }, [[],[],[],[]])
  return columns
}

function calcClue(row) {
  let max = 0
  let clue = 0
  for(let i = 0; i < row.length; i++) {
    if(row[i] > max) {
      clue++;
      max = row[i];
    }
  }
  
  return clue;
}

function calcClues(city) {
  const transPosedCity = transPose(city);
  const topClues = transPosedCity.map( row => calcClue(row))
  const rightClues = city.map( row => calcClue(row.slice().reverse()))
  const buttomClues = transPosedCity.map( row => calcClue(row.slice().reverse())).reverse()
  const leftClues = city.map( row => calcClue(row)).reverse()
  return [...topClues, ...rightClues, ...buttomClues, ...leftClues]
}

function cluesAreRight(givenClues, calculatedClues) {
  for(let i = 0; i < givenClues.length; i++) {
    if(givenClues[i] !== 0 && givenClues[i] !== calculatedClues[i]) {
      return false;
    }
  }
  return true;
}

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        if(value != 0) {
          valuesSoFar[value] = true;
        }
    }
    return false;
}

function hasSame(matrix) {
  const t = transPose(matrix)
  for(let i = 0; i < matrix.length; i++) {
    if(hasDuplicates(matrix[i])) {
      return true;
    }
    if(hasDuplicates(t[i])) {
      return true;
    }
  }
  return false;
}

function copyCity(city) {
  return city.map(row => row.slice())
}

function fillOnePositionWithOptions(city, y, x, clues) {
  for(let i = 1; i <= 4; i++) {
    let cityCopy = copyCity(city)
    cityCopy[y][x] = i;

    if(!hasSame(cityCopy)){
      filledCity = fill(cityCopy, clues)

      if(filledCity) {
        return filledCity;
      }

    }
  }
}

function getCorrectCity(clues, city) {
    if(cluesAreRight(clues, calcClues(city)) && !hasSame(city)){
      return city;
    }
    return null;
}

function isFull(x, y) {
  return x === -1 || y === -1;
}

function searchZeroPosition(matrix) {
  let x, y = -1;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] == 0){
        y = i;
        x = j;
        break;
      }
    }
  }

  return {x:x, y:y};
}

function fill(city, clues) {
  const {x, y} = searchZeroPosition(city);

  if(isFull(x, y)) {
    return getCorrectCity(clues, city);
  } else {
    return fillOnePositionWithOptions(city, y, x, clues)
  }
}

function solvePuzzle (clues) {
  const city = [[0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]];
  return fill(city, clues)
}

module.exports = solvePuzzle;