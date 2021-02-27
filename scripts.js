let inp = document.getElementById("textbox");
let submit = document.querySelector(".button");
let container = document.querySelector(".container");
let cont = document.querySelector(".cont");


submit.addEventListener("click",()=>{
	if(inp.value!==""){
		let div = document.createElement('div');
		div.class='box';
		div.setAttribute("style","padding:1px;border:1px solid green;position:relative;overflow:auto;");
		var btn = document.createElement("div");
		btn.setAttribute("style","background-color:Transparent;position:relative;right:2px;bottom:2px;left: 20%;width: 60%;")
		btn.innerHTML="X";
		btn.addEventListener("click",()=>{
			div.remove();
		});
	
		div.innerHTML=inp.value;
		cont.appendChild(div);
		div.appendChild(btn);
		inp.value="";
	}

})