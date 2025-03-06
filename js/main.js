function reduce(arr, callbackFn, initialValue) {
  let acc = initialValue;
  for (let i = startIndex; i < arr.length; i++) {
    acc = callbackFn(acc, arr[i]);
  }

  return acc;
}

//other homework

document.querySelector(".card-title").textContent = cardData.title;