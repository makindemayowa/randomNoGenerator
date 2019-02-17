const getRandom = quantity => {
  const randNos = [];
  for (let index = 0; index < quantity; index++) {
    randNos.push(Math.floor(100000000 + Math.random() * 900000000));
  }
  return randNos;
};

const getUniqueNos = randNos => {
  return [...new Set(randNos)];
};

const concatRandNos = (arr1, arr2) => {
  return arr1.concat(arr2);
};

export const sortAsc = randNos => {
  return randNos.sort((a, b) => a - b);
};

export const sortDesc = randNos => {
  return randNos.sort((a, b) => b - a);
};

export const getMaxNo = randNos => {
  const sortedArr = sortDesc(randNos);
  return sortedArr[0];
};

export const getMinNo = randNos => {
  const sortedArr = sortAsc(randNos);
  return sortedArr[0];
};

export const generateNos = quantity => {
  if (quantity <= 0) {
    return "Please enter a positive no";
  }
  if (quantity > 10000) {
    return "You can only generate a maximum of 10000 numbers at a time";
  }
  const randNos = getRandom(quantity);
  const uniqueNos = getUniqueNos(randNos);
  let resp;
  do {
    if (uniqueNos.length === quantity) {
      resp = uniqueNos;
    } else {
      const newquantity = quantity - uniqueNos.length;
      const newRandNos = getRandom(newquantity);
      const concatedArr = concatRandNos(uniqueNos, newRandNos);
      const newUniqueNos = getUniqueNos(concatedArr);
      resp = newUniqueNos;
    }
  } while (resp.length !== quantity);
  localStorage.removeItem("phoneNumbers");
  localStorage.setItem("phoneNumbers", JSON.stringify(resp));
  return resp;
};
