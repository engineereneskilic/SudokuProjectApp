//Load Boards from file or manually
// İlgili dizinin ilk elemanı o dizinin seviyesine göre soru türetir. İkinci elemanı ise cevaptır.
const easy = [

	"6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
	"685329174971485326234761859362574981549618732718293465823946517197852643456137298",

	"-8-7-1-3-4-9-------5--6-4187----9---8--61-5---35----29-6-4-7-9-1----8--4-2--5--7-",
	"286741935419385762357962418741529386892613547635874129568437291173298654924156873",

	"-5-314-6-87---94-36435-7192--78-521-41-9------25-619-779-25-84---4-96--5-3-1-867-",
	"259314768871629453643587192967835214418972536325461987796253841184796325532148679",

	"3-54-2-6-49-76-1-86--1-3245--39--58-96--587-3-813-4-92-5-6-14--2--549-7-149--73-6",
	"315482967492765138678193245723916584964258713581374692857631429236549871149827356",

	"-392-87156-8--1----5-93-8467-4-1--5881-64-37--2-8-51-45-3-9--21-415-3--79--12-58-",
	"439268715678451239152937846794312658815649372326875194583796421241583967967124583",

	"9-6-13--8-58----9--3-----1--6-8--92---34-91---49--6-3--9-----8--1----67-4--96-3-1",
	"976513248158642793234798516761835924823479165549126837697351482315284679482967351",

	"15-7---9-3--91--6------4-1--8-5----6-9-8-7-4-6----2-7--3-4------6--79--2-4---3-89",
	"156738294324915867879624513487591326293867145615342978932486751568179432741253689",

	"-----3--44-5---1-----91--7-23--5-7---1-8-6-2---8-3--91-4--98-----2---9-85--3-----",
	"791523864425687139863914275234159786917846523658732491146298357372465918589371642",

	"-59--27--74----62112-7---93-7--23---6329-7814---81--7-51---4-89983----65--45--13-",
	"359162748748395621126748593871423956632957814495816372517634289983271465264589137",

	"--35--4-----6---9--75-----2-4-----571-62-39-829-----3-4-----31--3---5-----2--47--",
	"623589471814627593975341862348916257156273948297458136489762315731895624562134789",

	"--4-9--25-6---349---3248--16----7-5-59-----73-3-8----98--4159---197---4-24--6-1--",
	"784691325162573498953248761621937854598124673437856219876415932319782546245369187",
	

];
const medium = [
	"--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
	"619472583243985617587316924158247369926531478734698152891754236365829741472163895",

	"---8---7--42---65-96---------9--6-2-82--1--36-3-2--9---------95-95---41--8---3---",
	"513864279742931658968725341459386127827419536631257984376142895295678413184593762",

	"--6-739-81-7--5-3-9-----1-----524--1---------7--931-----2-----6-9-3--7-26-145-8--",
	"246173958187695234953248167869524371315867429724931685432789516598316742671452893",

	"---3---7---95---42-7-4--98------2--7--31-56--1--9------68--3-5-53---17---1---8---",
	"2453891766895173423714269854968325178231756941579648239687432515342918768712658439",

	"-7--2-9---4-8-6----12---3--------87--6-972-5--25--------1---29----5-4-3---7-6--1-",
	"876123945543896721912745386394651872168972453725438169651387294289514637437269518",

	"1--6---2-----2---1-4-1----59-3--8-6---74-13---1-5--7-97----9-1-5---1-----3---5--8",
	"179654823385927641642183975953278164867491352214536789728349516596812437431765298",

	"63--------2---89--48-62----26--------14---76--------49----31-78--17---3--------95",
	"639517824127348956485629317263974581914852763758163249596231478841795632372486195",

	"9---5-4-828--6-----------7-8-1--3----9-7-6-3----5--8-9-1-----------2--866-5-3---7",
	"976351428283467591154298673861943752592786134437512869318679245749125386625834917",

	"7-----2-6-12------8---2--45-7-18-4--9---5---8--8-63-7-29--7---3------68-1-5-----4",
	"754891236312645897869327145673189452921754368548263971296478513437512689185936724",

	"6-5--------928-6-----5----4--4--9--69-76-48-25--1--9--7----3-----8-123--------2-9",
	"625431798149287653873596124284379516917654832536128947752963481498712365361845279",

	"-4---1--3----5--7956---28-41--27--8--82---96--3--18--73-61---9847--8----8--5---4-",
	"947861253218453679563792814194276385782345961635918427356124798471689532829537146"

];
const hard = [
	"-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
	"712583694639714258845269173521436987367928415498175326184697532253841769976352841",

	"-5--316-8--37--54-9-6-----12-4---------5-2---------2-76-----7-4-95--68--3-812--6-",
	"457931628123768549986254371274689153831572496569413287612895734795346812348127965",

	"--71---5--6-----7----7--3-43--4--52--2-8-5-4--84--3--61-5--2----7-----6--4---91--",
	"497138652263954871851726394319467528726815943584293716135672489978341265642589137",

	"--392-6--8-7--1----9--------58----29-4-----5-32----78--------4----8--9-1--1-752--",
	"413928675867351492295746813758634129149287356326519784682193547574862931931475268",

	"-----3-------6--549-175--6-49---65-8---------2-75---43-1--372-974--2-------6-----",
	"6542839178729613549317548624931765281853427962675981435164372897498256313286194755",

	"---2-6-8----4982---83------9-----5-6-1-----3-3-4-----1------71---8615----4-9-2---",
	"459236187176498253283157694927381546815764932364529871692843715738615429541972368",

	"----96----6----4--589--7---35---4----18---65----1---43---4--196--2----3----58----",
	"124396587763815429589247361357624918418973652296158743875432196942761835631589274",

	"9---25--8--18----5---3---2-5---1--93-3-----8-89--3---4-7---9---4----37--2--64---1",
	"943725618721864935658391427567418293134972586892536174376159842415283769289647351",

	"-6---7-392-3-----8----3----6-8--4--159--7--424--9--6-7----6----3-----9-594-8---7-",
	"864127539213495768759638124678254391591376842432981657127569483386742915945813276",

	"87----5639----5----2--7----7-2----4---92416---6----9-2----8--7----3----6658----19",
	"874192563916435728325678491782963145539241687461857932193586274247319856658724319",

	"--83---67-4----5--7-5-9-8---9--8-------2-9-------6--2---2-5-6-1--6----3-45---72--",
	"128345967649728513735196842297481356563279184814563729382954671976812435451637298"
	
];

//Create Variables
var timer;
var timeRemaining;
var lives;
var selectedNum;
var selectedTile;
var disableSelect;
var oddnumber;
var evennumber;
//Theme
let currentTheme = null;



window.onload = function () {
	//Run start game function when button is clicked
	id("sodoku_game_section").classList.add("hidden_c");

	id("start-btn").addEventListener("click", startGame);

	//Add event listener to each number in number container
	for (let i = 0; i < id("number-container").children.length; i++) {
		id("number-container").children[i].addEventListener("dragstart", function () {
		
			//event.dataTransfer.setData("Text", event.target.id);
			//if selecting is not disabled
			
			
			if (!disableSelect) {
				// if number or board tile is already selected
				
				if (this.classList.contains("selected_light") || this.classList.contains("selected_dark")) {
					if (currentTheme === "light") this.classList.remove("selected_light"); else this.classList.remove("selected_dark")
					selectedNum = null; // seçilen sayı yok olmamalı
				} else { // if selecting is enable //Note: Yalnızca bir tane seçili mavi kutu görebilmeliyiz.
					// Deselect all other numbers
					for (let i = 0; i < 9; i++) {

						if (currentTheme === "light") id("number-container").children[i].classList.remove("selected_light"); else id("number-container").children[i].classList.remove("selected_dark");
					}
					//Select it and update selectedNum Variable
					if (currentTheme === "light") { this.classList.add("selected_light"); } else { this.classList.add("selected_dark"); }
					selectedNum = this;
					updateMove();
				}
			}
			

		});
	}

	this.changeTheme();
}

function startGame() {
	console.log("start game");

	id("sodoku_game_section").classList.add("show_c");

	id("timer").textContent = "Timer: ";
	//alert("tıkladın");
	let board;
	//Choose board difficulty

	do {
		oddnumber = Math.floor(Math.random() * 11); /*0 between 10 generate random number*/
	} while (oddnumber % 2 == 1); // number is even until

	if (id("diff-1").checked) { board = easy[oddnumber]; lives = 7; }
	else if (id("diff-2").checked) { board = medium[oddnumber]; lives = 5; }
	else if (id("diff-3").checked) { board = hard[oddnumber]; lives = 3; }
	//set lives to .. and enable selecting numbers and tiles
	
	disableSelect = false;
	id("lives").textContent = "Lives Remaining: " + lives;
	//Creates board on difficulty
	generateBoard(board);

	//Starts the timer
	startTimer();
	
	//Show number container
	id("number-container").classList.remove("hidden");
}

function startTimer() {
	// Sets time remaining based on input
	if (id("time-1").checked) timeRemaining = 180;
	else if (id("time-2").checked) timeRemaining = 300;
	else if (id("time-3").checked) timeRemaining = 600;

	//Sets timer for first second
	id("timer").textContent = timeConversion(timeRemaining);
	//Sets timer to update every second
	timer = setInterval(function () {
		timeRemaining--;
		// if no time remaining end the game
		if (timeRemaining === 0) endGame();
		id("timer").textContent = timeConversion(timeRemaining);
	},1000)
	
}

//Converts seconds into string of MM:SS format
function timeConversion(time) {
	let minutes = Math.floor(time / 60);
	if (minutes < 10) minutes = "0" + minutes; /*çift karakter*/
	let seconds = time % 60;
	if (seconds < 10) seconds = "0" + seconds;
	return minutes + ":" + seconds;
}

function generateBoard(board) {
	//Access all of the tiles
	
	//Clear previous board
	clearPrevious();
	//Let used to increment tile ids
	let idCount = 0;

	//81 tiles add dragable
	/*
	for (let i = 0; i < id("number-container").children.length; i++) {
		id("number-container").children[i].addEventListener("dragstart", function (event) {
			//alert("sürüklenme başladı");
			event.dataTransfer.setData("Text", event.target.id);
		});
	}
	*/
	//Create 81 tiles
	for (let i = 0; i < 81; i++) {
		//Create a new paragraph element
		var tile = document.createElement("p");
		//tile.id = i;
		//tile.name = "tile" + i.toString();
		// if the tile is not supposed to be blank
		if (board.charAt(i) != "-") {
			// set tile text to correct number
			tile.textContent = board.charAt(i);
		} else {
			//add click event listener to tile so it is equal -
			tile.addEventListener("click", function (event) {
				//alert(event);
				///alert("bırakıldı");
				
				//if selecting is not disabled
				if (!disableSelect) {
					// if the tile is already selected
					if (this.classList.contains("selected_light") || this.classList.contains("selected_dark")) {
						//Then remove selection
						if (currentTheme == "light") this.classList.remove("selected_light"); else this.classList.remove("selected_dark");
						selectedTile = null;
					} else {
						//Deselect all other tiles
						for (let i = 0; i < 81; i++) {
							if (currentTheme == "light") qsa(".tile")[i].classList.remove("selected_light"); else qsa(".tile")[i].classList.remove("selected_dark"); 
						}
						//for (let k = 0;k<)
						//Add selection and update variable
						if (currentTheme == "light") this.classList.add("selected_light"); else this.classList.add("selected_dark"); 
						/*
						event.preventDefault();
						var data = event.dataTransfer.getData("Text");
						event.target.appendChild(document.getElementById(data));
						*/
						selectedTile = this;
						updateMove();
					}
				}
			});
		}

		//Assign tile id
		tile.id = idCount;
		//Increment for next tile
		idCount++;
		//Add tile class to all tiles
		//add tile to board
		
		tile.classList.add("tile");
		
		// 1-) Sudoku tahtasının dokuza ayrılmış kutularını işaretliyoruz
		//    a-) 18-26 sayı kutuları ve 43-53 arasındaki kutuların altına kalın çizgi koyulmalı
		if (tile.id > 17 && tile.id < 27 || (tile.id > 44 & tile.id < 54) || (tile.id > 71 & tile.id < 82)) {
			tile.classList.add("bottomBorder"); // ilgili nesnelere kalın çizgi classımızı ekledik.
		}
		
		//  b-) dikey ayraçlar için tek tek kutu seçmek çok uzundu bunuda gelen kutu numarası dokuza bölündüğünde üç ve dokuza bölündüğünda 6 kalanı veren bir sayıysa
		// işte o sayının sağ tarafı kalın çizgi olmak zorundadır. Bu örüntüyü düşünerek bulduk
		if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6 || (tile.id + 1) % 9 == 0 ) {
			tile.classList.add("rightBorder");
		}

		if ((tile.id + 1) % 9 == 1) {
			tile.classList.add("leftBorder");
		}

		if (tile.id > -1 & tile.id < 9) {
			tile.classList.add("topBorder");
		}

		
		
		id("board").appendChild(tile);
		
	}
}
function updateMove() {
	// if a tile and a number is selected
	if (selectedTile && selectedNum) {
		// Set the tile to the correct number
		
		selectedTile.textContent = selectedNum.textContent;
		//alert(selectedTile.id);
		// if the number matches the corresponding number in the solution key
		if (checkCorrect(selectedTile)) { // kullanıcı sayıyı doğru koydu tüm seçimlerini kaldır artık
			//Deselect the tiles
			if (currentTheme == "light") selectedTile.classList.remove("selected_light"); else selectedTile.classList.remove("selected_dark"); 
			if (currentTheme == "light") selectedNum.classList.remove("selected_light"); else selectedNum.classList.remove("selected_dark");
			selectedTile.classList.add("correct");
			selectedNum = null;
			selectedTile = null;

			//Check if board is completed
			if (checkDone()) {
				endGame();
			}

		} else { // if the number does not match the solution key
			//Disable selecting new numbers for one second
			disableSelect = true;
			//Make the tile turn red
			selectedTile.classList.add("incorrect");
			// Run in one second
			// yanlış yaptığında anında işlev yapma 1 saniye
			// bekleki kullanıcı gözü farketsin
			setTimeout(function () {
				//Subtract lives by one
				lives--;
				// If no lives left end the game
				if (lives === 0) {
					endGame();
				} else {// if lives is not equal to zero
					//Update lives text
					id("lives").textContent = "Lives Remaining: " + lives;
					//Renable selecting numbers and tiles
					disableSelect = false;
				}
				//Restore tile color and remove selected from both
				selectedTile.classList.remove("incorrect");
				if (currentTheme == "light") selectedTile.classList.remove("selected_light"); else selectedTile.classList.remove("selected_dark"); 
				if (currentTheme == "light") selectedNum.classList.remove("selected_light"); else selectedNum.classList.remove("selected_dark"); 
				//Clear the tiles text and clear selected variables
				selectedTile.textContent = "";
				selectedTile = null;
				selectedNum = null;

			}, 1000);
		}
	}

}

// Boş kutu kontrolü
function checkDone() {
	let tiles = qsa(".tile");

	for (let i = 0; i < tiles.length; i++) {
		if (tiles[i].textContent === "") return false;
	}
	return true;
}

function endGame() {
	//Disable moves and stop the timer
	disableSelect = true;
	clearTimeout(timer);
	//Display win or loss massage
	if (lives === 0 || timeRemaining === 0) {
		id("lives").textContent = "You lost !";
	} else {
		id("lives").textContent("You won !");
	}
}

//Kullanıcının yerleştirdiği sayı
function checkCorrect(tile) {
	// Sudoku oyunu gereği yerleştirilen sayının satır ve sütunlarında
	// aynı sayı olmaması gerekir. Bunun kontrolü yapılmalı.
	//Set solution based on difficulty selection
	if (oddnumber != null) evennumber = oddnumber + 1;
	let solution;
	if (id("diff-1").checked) solution = easy[evennumber];
	else if (id("diff-2").checked) solution = medium[evennumber];
	else if (id("diff-3").checked) solution = hard[evennumber];
	// if tile's number is equal to solution's number
	if (solution.charAt(tile.id) === tile.textContent) return true;
	else return false;
}



function clearPrevious() {
	var tiles = qsa(".tile");

	//Remove each tile
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].remove();
	}

	// If there is a timer clear it
	if (timer) clearTimeout(timer);
	//left Deselect any numbers
	for (let i = 0; i < id("number-container").children.length; i++) {
		if (currentTheme == "light") id("number-container").children[i].classList.remove("selected_light"); else id("number-container").children[i].classList.remove("selected_dark");
	}
	//Clear selected variables
	selectedTile = null; // seçilen kutu
	selectedNum = null; // tutup seçilen sayıs
}

function id(id) {

	return document.getElementById(id);
}

function qs(selector) {
	return document.querySelector(selector);
}

function qsa(selector) {
	return document.querySelectorAll(selector);
}

function changeTheme(radio) {
	
	
	//Sets theme based on input
	if (id("theme-1").checked) {
		qs("body").classList.remove("dark");
		id("game-header").classList.remove("dark");
		id("welcome").classList.remove("dark");
		id("username").classList.remove("dark");
		id("setup-game").classList.remove("dark");
		id("timer_div").classList.remove("dark");
		id("lives_div").classList.remove("dark");

		qs("footer").classList.remove("dark");

		id("number-container").classList.remove("dark");
		for (let i = 0; i < id("number-container").children.length; i++) {
			id("number-container").children[i].classList.remove("dark");	
		}

		if (selectedTile != null) selectedTile.classList.remove("selected_dark");
		for (let i = 0; i < 81; i++) {

			qsa(".tile")[i].classList.remove("dark");
		}
		currentTheme = "light";
	} else if (id("theme-2").checked) {
		qs("body").classList.add("dark");
		id("game-header").classList.add("dark");
		id("welcome").classList.add("dark");
		id("username").classList.add("dark");
		id("setup-game").classList.add("dark");
		id("timer_div").classList.add("dark");
		id("lives_div").classList.add("dark");
		

		qs("footer").classList.add("dark");

		id("number-container").classList.add("dark");
		for (let i = 0; i < id("number-container").children.length; i++) {
			id("number-container").children[i].classList.add("dark");
		}

		for (let i = 0; i < 81; i++) {
			qsa(".tile")[i].classList.add("dark");
		}
		currentTheme = "dark";
	}
}

/*drag and drop*/
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}



