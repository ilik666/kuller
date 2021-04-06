document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Polifil - float an array
	 */
	// if (!Array.prototype.flat) Array.prototype.flat = function () {
	// 	return (function f(arr) {
	// 	return arr.reduce(
	// 			(a, v) =>
	// 	Array.isArray(v)
	// 				? a.concat(f(v))
	// 				: a.concat(  v )
	// 			, []
	// 		)
	// 	})(this)
	// };

	/**
	 * Bounce animate for button
	 */
	// function createRipple(e) {
	// 	const button = e.target.closest('.g-btn');
	// 	const ripple = document.querySelectorAll(".ripple");
	// 	if (ripple) ripple.forEach( el => el.remove() )
	// 	const circle = document.createElement("span");
	// 	const diameter = Math.max(button.clientWidth, button.clientHeight);
	// 	const radius = diameter / 2;
	// 	circle.style.width = circle.style.height = `${diameter}px`;
	// 	circle.style.left = `${e.offsetX - radius }px`;
	// 	circle.style.top = `${e.offsetY - radius }px`;
	// 	circle.classList.add("ripple");
	// 	button.appendChild(circle);
	// }
	// const buttons = document.querySelectorAll('.g-btn');
	// if(buttons.length) buttons.forEach( el => el.addEventListener('click', createRipple) )


})