//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_intro = new Swiper('.intro__slider', {
	effect: 'fade',
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	loop: true,
	lazy: true,
	// Arrows
	navigation: {
		nextEl: '.intro__arrow--next',
		prevEl: '.intro__arrow--prev',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let slider_brands = new Swiper('.brands__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	spaceBetween: 79,
	grabCursor: true,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	lazy: true,
	// Dotts
	pagination: {
		el: '.brands__pagination',
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 79,
			autoHeight: true,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 79,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 79,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 79,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});


let slider_products;
let sliderProductInit = false;

if (document.querySelector('.products-swiper')) {
	function sliderInit() {
		slider_products = new Swiper(".products-swiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			breakpoints: {
				400: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
				1250: {
					slidesPerView: 4,
				},
			},
			pagination: {
				el: ".products-swiper-pagination",
				clickable: true,
			},
			on: {
				lazyImageReady: function () {
					ibg();
				},
			}
		});
	}

	if (window.matchMedia("(max-width: 1250px)").matches) {
		sliderInit();
		sliderProductInit = true;
	}

	window.addEventListener('resize', function (e) {
		if (window.matchMedia("(max-width: 1250px)").matches && !sliderProductInit) {
			sliderInit();
			sliderProductInit = true;
		} else if (window.matchMedia("(min-width: 1250px)").matches && sliderProductInit) {
			sliderProductInit = false;
			slider_products.destroy(true, true);
		}
	})
}



let slider_single_product = new Swiper('.single-product', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	grabCursor: true,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	lazy: true,
	// Dotts
	pagination: {
		el: '.single-product-pagination',
		clickable: true,
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});
