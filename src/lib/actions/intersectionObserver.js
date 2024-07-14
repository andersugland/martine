export function intersectionObserver(node) {
	let options = {
		root: null,
		threshold: 0.4
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove('fade-out');

				if (entry.target.classList.contains('fade-delayed')) {
					entry.target.classList.add('fade-in-delayed');
				} else {
					entry.target.classList.add('fade-in');
				}
			} else {
				//do nothing for now
			}
		});
	}, options);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
