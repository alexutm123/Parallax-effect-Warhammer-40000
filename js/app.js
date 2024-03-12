document.addEventListener("DOMContentLoaded", function() {
	var lazyImages = document.querySelectorAll("div.slider__layer[data-src]");
	var observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				var image = entry.target;
				image.style.backgroundImage = 'url(' + image.getAttribute('data-src') + ')';
				image.classList.add('visible');
				observer.unobserve(image);
			}
		});
	}, { rootMargin: "0px 0px 50px 0px" });

	lazyImages.forEach(function(image) {
		observer.observe(image);
	});
});


new Swiper('.slider', {
	// direction: 'vertical',
	// freeMode: true,
	speed: 2400,
	parallax: true,
	spaceBetween: 18,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	}
})
