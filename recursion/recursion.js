const recusrion = (str) => {
  let newStr = str.split("");
  for(let i=0; i<newStr.length; i++)
  
  const iterateNumer = (i) => {
    console.log(i);
    if (i !== 0) {
      iterateNumer(newStr);
    }
  };

  iterateNumer(newStr);
};

recusrion("my name is ankit");
