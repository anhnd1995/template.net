
var count = 0;
var jewel, stone;

function stoneNum(jewelTypes, stoneTypes){    
    jewelTypes.forEach(countJewels);
}

function countJewels(item){
	
	for (let i = 0; i < this.stone.length; i++) { 
    	if (this.stone[i] === item) count ++;
    }
}

function myFunction() {
    this.jewel = document.getElementById("jewel").value.split('');
    this.stone = document.getElementById("stone").value.split('');
    stoneNum(this.jewel, this.stone);
    document.getElementById("count").innerHTML = count;
}