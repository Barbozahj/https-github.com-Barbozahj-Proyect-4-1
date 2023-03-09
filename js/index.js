	let sections = new Array(3);
	sections[0] = "home";
	sections[1] = "aboutme";
	sections[2] = "skills";
	/*sections[3] = "portfolio";
	sections[4] = "blog";*/

	alertSize();
	function alertSize() {
  	var myWidth = 0, myHeight = 0;
  	if( typeof( window.innerWidth ) == 'number' ) {
		//No-IE
    	myWidth = window.innerWidth;
   		myHeight = window.innerHeight;
  	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
   		//IE 6+
    	myWidth = document.documentElement.clientWidth;
    	myHeight = document.documentElement.clientHeight;
  	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    	//IE 4 compatible
    	myWidth = document.body.clientWidth;
    	myHeight = document.body.clientHeight;
  	}
	  let display;
			let card_menu = document.getElementById("card_menu")
			display = card_menu.style.display;

			if (display == "none") {
				card_menu.style.display = "block";
			} else {
				card_menu.style.display = "none";
			}
}
	function displayMenu(){
			let display;
			let card_menu = document.getElementById("card_menu")
			display = card_menu.style.display;

			if (display == "none") {
				card_menu.style.display = "block";
			} else {
				card_menu.style.display = "none";
			}
		}
	

	function setColors(i){
		let bkgr_body;
		let bkgr_menu; 
		let buscar;
	if (sections[i] == "home"){
		bkgr_body = "#000000";
		bkgr_menu = "#228E04";

	}
	else{
		bkgr_body = "#000000";
		bkgr_menu = "#228E04";
	}
	buscar = document.getElementById(sections[i]);
	buscar.style.background = bkgr_body;
	let menu = document.getElementsByTagName("header")[0];
	menu.style.background = bkgr_menu;
	}	

	function navSection(nav){
		let buscar;
		let show;
		
		for (let i = 0; i<2; i++) {
			buscar = document.getElementById(sections[i]);
			buscar.style.display = "none";

			if (sections[i] == nav) {
				buscar.style.display = "block";	
				setColors(i);
			}
		}

	}
	function displaySection(nav){
	
		let buscar;
		let show;

		for (let i = 0; i<2; i++) {
			buscar = document.getElementById(sections[i]);
			show = buscar.style.display;
			
			if (show == "block") {
				buscar.style.display = "none";
				if (nav == "next"){
				i++;
				if(i>3) i=0;
			}
			if (nav == "prev"){
				i--;
				if(i<0) i=2;
			}
			buscar = document.getElementById(sections[i]);
			buscar.style.display = "block";
			break;
		}
		setColors(i)
	}
	}
	function displayFormContact(status){
			let form = document.getElementById("contact_form1")
			form.style.display = status;
	}