const parallax = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: '.overlay',
        start: 'top top',
        end: 'center',
        scrub: 5
    }
});

parallax
.to('.sky', {
	y: -10 * 0.9,
	ease: 'none',
	duration: 1
})
.to('.pahad', {
	y: -10 * 1.5,
	ease: 'none',
	delay: '-1',
	duration: 1
})
.to('.pahadman', {
	y: -10 * 2.5,
	ease: 'none',
	delay: '-1',
	duration: 1.5
})
.to('.overlay', {
  opacity: 0,
  ease: "none",
  delay: 0.5,
  duration: 2
})

const t = gsap.timeline({
	scrollTrigger: {
		trigger: ".page-two",
		start: "top center",
		toggleActions: 'play pause resume reverse'
	}
});

t.from('.boxes', {
		stagger: .3,
		opacity: 0,
		delay: .1,
		duration: 1,
		ease: 'Expo.easeInOut'
	})
	.from('.boxes ul li', {
		stagger: .1,
		opacity: 0,
		duration: 1.5,
		ease: 'Expo.easeInOut'
	})
	.from('.boxes .text', {
		y: 10,
		opacity: 0,
		duration: 1.5,
		ease: 'Expo.easeInOut'
	})