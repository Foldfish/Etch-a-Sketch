const grid = document.querySelector("#Grid");
const resizebtn = document.querySelector('#Resizebtn');
const valuebtn = document.querySelector("#GridSize");
var Crazy = false;
var GridSize = 5;
var Colors = ["#F99CC", "#FFCC33", "#00CCFF", "#CC66FF", "#33FFCC", "#FFCCFF", "#CCCCFF", "#99CCFF"];
const Crazybtn = document.querySelector("#Crazybtn");

const btn = document.querySelector('#Resetbtn');

document.querySelector("#Grid").style.grid = generate();

	console.log("geberate "+generate());
createGrid();

Crazybtn.addEventListener("click", function(){
		Crazy = true;
});

btn.addEventListener('click', function() {
	resetGrid();
	createGrid();
	
});


function resetGrid(){
	while(grid.hasChildNodes()){
		grid.removeChild(grid.childNodes[0]);
	}
	Crazy = false;
}

function createGrid(){

			console.log("creando grid " + GridSize);
	
	for (var i = 0; i < GridSize * GridSize; i++){
		const node = document.createElement('div');
		node.className = 'node';
		grid.appendChild(node);
		node.addEventListener('mouseover', (a) => {
			if(Crazy == true){
				a.target.style.background = GoRandom();
			}else{
				a.target.style.background = "#00CCCC";
			}
		});
	}
}

function GoRandom(){
	let Randomness = Colors[Math.floor(Math.random() * Colors.length)];
	return Randomness;
}
resizebtn.addEventListener('click', function(){
	resize();
});

function resize(){
	 GridSize = valuebtn.value;
	while(GridSize <=0 || GridSize >= 65 || GridSize % 1 != 0){
		GridSize = prompt("Set the size of the grid between whole number 1 to 64");
	}

	GridSize = Math.floor(GridSize);
	document.querySelector('#Grid').style.grid = generate();
	resetGrid();
	createGrid();
}
function generate(){		//da formato de tabla a los div
	var columns = "";
	var rows = "";
	for(var i = 0; i < GridSize; i++){
		rows += "1fr ";
		columns += " 1fr";	
	}
	rows += "/ ";
	rows = rows.concat(columns);
	return rows;

}
