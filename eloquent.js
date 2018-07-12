MINIMUM

function min(a, b) {
	return Math.min(a, b)
}


RECURSION

function isEven(n) {
	if (n == 0) {
      return true;
    } else if (n == 1) {
      return false;
    } else if (n == -1) {
      return false;  
    } else  {
      return isEven(n - 2);
	}
}


BEAN COUNTING

Part 1:

function countBs(string) {
	let b = 0
    for(let i = 0; i < string.length; i++) {
      if(string[i] === "B") {
      b += 1;
      }
    }
  return b
}  

Part 2:

function countChar(string, char) {
	let b = 0
    for(let i = 0; i < string.length; i++) {
      if(string[i] === char) {
      b += 1;
      }
    }
  return b
}  