function stringChop(str, size) {
  // your code here
	let n = str.length;
	let ans=[];
	for(let i=size;i<n;i+=size){
		ans.push(str.slice(i-size,i));
	}
	let findex = (n%size)*(-1);
	ans.push(str.slice(findex,n));
	return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
