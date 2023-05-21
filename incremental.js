function incremental(number) {
  console.log("seq initial", number);
  if (number < 10) {
    return false;
  }

  let flag = false;
  const str = number.toString().split("");

  for (let i = 0; i < str.length-1; i++) {
    if (parseInt(str[i]) + 1 === parseInt(str[i + 1])) {
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
console.log(incremental(12));
