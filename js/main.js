(() =>{
	console.log("fired!");
    
    // set up your variable stack -> make connections to the elements you're interacting with on the page 
	let mobileNav = document.querySelector(".nav"),
	    navPanel = document.querySelector('#burgerCon'),

	    // select All of the nav panel anchor tages (the a elements)
	    navLinks = navPanel.querySelectorAll('a');
    

	function toggleNa(event) {
		// e is the event object.by default, anchor tages try to navigate somewhere. we don't want that to 
		// so preevnt that default behaviour and write your own 
		
		event.preventDefault();

		console.log('should show nav dropdown');
		// this should only fire when you click on an anchor 


		if (this,nodeName =="A"){
		debugger;
		
		// 	// we clicked on an  anchor tag, so do some navigation
		// 	window.scroll({

		// 		top:this.offsetTop,
		// 		effect:'smooth'
		// 	})
		}

		navPanel.classList.toggle('show-mobile-nav');

	}

	mobileNav.addEventListener('click',toggleNa);
	navLinks.forEach(link => link.addEventListener('click',toggleNav));
})();