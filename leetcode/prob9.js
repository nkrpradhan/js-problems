async function pr() {
  return new Promise((resolve) => {
    setTimeout(resolve, 400, "HI");
  });
}

async function pr2() {
  return new Promise((resolve) => {
    setTimeout(resolve, 4000, "pr2");
  });
}

// const res = pr().then((val) => console.log("then", Date.now(), val));
// const res2 = pr2().then((val) => console.log("then2", Date.now(), val));
async function callpr() {
  let i = 0;
  const t = Date.now();
  while (i < 1) {
    i++;
    console.log(Date.now() - t);
     pr();
    console.log(Date.now() - t);
     pr2();
    console.log(Date.now() - t);
    
  }
}
callpr();
