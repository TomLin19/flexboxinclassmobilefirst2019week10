(() =>{
	console.log("fired!");

	let mobileNav = document.querySelector(".nav")
	    navPanel = document.querySelector('#burgerCon');

	function toggleNa() {
		console.log('should show nav dropdown');
		navPanel.classList.toggle('show-mobile-nav');

	}

	mobileNav.addEventListener('click',toggleNa);
})();