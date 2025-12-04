let count = 0;
let btn = document.getElementById("btn");
let disp = document.getElementById("display");	
btn.onclick = function () {
	count++;
	disp.innerHTML = count;
}

let re = document.getElementById("r");
re.onclick = function () {
	count = 0;
	disp.innerHTML = count;
}

let times = document.getElementById("times");
times.onclick = function () {
	count *= 10;
	disp.innerHTML = count;
}


let p = document.getElementById("ps");
let subm = document.getElementById("subm");
subm.onclick = function() {
	let firstname = document.getElementById("fname").value;
	let lastname = document.getElementById("lname").value;
	let sentence = "Hi " + firstname + " " + lastname + ".";
	p.innerHTML = sentence;
}
