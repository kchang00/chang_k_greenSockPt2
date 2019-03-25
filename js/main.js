(() => {
	let badge = document.querySelector('img');

	function animImage() {
		// element, time, properties
		// TweenMax.to(el, time, {props});
		
		TweenMax.to(badge, 1.7, 
			{ 	scakeX: 1.025, 
				scaleY: 1.025, 
				rotation: 50, 
				ease:Elastic.easeInOut, 
				onComplete: animFooterText
			});
	}

	function animFooterText() {
		TweenMax.to('h3', 0.7, 
			{ 	scakeX: 2, 
				scaleY: 2,  
				ease:Bounce.easeOut, 
			});
	}


	// animImage();
	badge.addEventListener('mouseover', animImage);

})();