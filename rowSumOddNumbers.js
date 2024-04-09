//     1
//   3  5
//  7  9  11
// 13 15 17 19

// S0 = 0
// S1 = 1
// S2 = 2
// S3 = 4
// S4 = 7
// First term of nth row , S(n)=S(n-1)+(n-1), where S(0)=0, S(1)=1;
// Sum from first term of nth row, and then sum until end of row term, aka until firstTerm(n+1)-1,
// i.e at row 3,,, first term=4, last term=4th row first term-1=(7-1)=6

function rowSumOddNumbers(n) {
	// TODO
	const firstTermInnthRow=(n)=>{
		if(n==0) return 0;
		if(n==1) return 1;
		else return firstTermInnthRow(n-1)+(n-1) ;
	}
	

	let sum=0;
	for(let i=firstTermInnthRow(n);i<firstTermInnthRow(n+1);i++){
		sum+=2*i-1;

	}
		
	return sum;
}

rowSumOddNumbers(42)