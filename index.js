function isInteresting(number, awesomePhrases) {
  console.log("args::", number, "--", awesomePhrases);
  if (number < 98) {
    return 0;
  }
  if (
    allZeroes(number) ||
    sameNum(number) ||
    incremental(number) ||
    decremental(number) ||
    pallindrome(number) ||
    arrCheck(number, awesomePhrases)
  ) {
    return 2;
  }
  if (
    allZeroes(number + 1) ||
    sameNum(number + 1) ||
    incremental(number + 1) ||
    decremental(number + 1) ||
    pallindrome(number + 1) ||
    arrCheck(number + 1, awesomePhrases)
  ) {
    return 1;
  }
  if (
    allZeroes(number + 2) ||
    sameNum(number + 2) ||
    incremental(number + 2) ||
    decremental(number + 2) ||
    pallindrome(number + 2) ||
    arrCheck(number + 2, awesomePhrases)
  ) {
    return 1;
  }
  return 0;
}
function allZeroes(number) {
  if (number < 100) {
    return false;
  }
  const str = number.toString();
  console.log(str.substr(1));
  if (str.substr(1).match(/^0+$/g)) {
    console.log("allZeroes", number, true);
    return true;
  } else return false;
}
console;
function sameNum(number) {
  if (number < 100) {
    return false;
  }
  if (number.toString().match(/^([0-9])\1*$/)) {
    console.log("sameNum", number, true);
    return true;
  } else return false;
}

function decremental(number) {
  if (number < 100) {
    return false;
  }
  console.log("decremental initial", number);

  let flag = false;
  const str = number.toString().split("");

  for (let i = 0; i < str.length - 1; i++) {
    if (parseInt(str[i]) - 1 === parseInt(str[i + 1])) {
      console.log("if", str[i]);
      flag = true;
    } else {
      console.log("else", str[i]);
      flag = false;
      break;
    }
  }
  console.log(flag);
  return flag;
}
function incremental(number) {
  if (number < 100) {
    return false;
  }
  console.log("incremental initial", number);

  let flag = false;
  const str = number.toString().split("");

  for (let i = 0; i < str.length - 1; i++) {
    if (
      parseInt(str[i]) + 1 === parseInt(str[i + 1]) ||
      (parseInt(str[i]) === 9 && parseInt(str[i + 1]) === 0)
    ) {
      console.log("if", str[i]);
      flag = true;
    } else {
      console.log("else", str[i]);
      flag = false;
      break;
    }
  }
  console.log(flag);
  return flag;
}
function pallindrome(number) {
  if (number < 100) {
    return false;
  }
  const revnum = number.toString().split("").reverse().join("");
  if (number.toString() === revnum) {
    console.log("pallindrome", number, true);
    return true;
  }
  return false;
}
function arrCheck(number, awesomePhrases) {
  if (awesomePhrases.includes(number)) {
    console.log("arrCheck", number, true);
    return true;
  }
  return false;
}

console.log("interesting--", isInteresting(120, []));
