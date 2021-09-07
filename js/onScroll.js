export const onScroll = (node, { triggers = undefined, classNames, checkAll = true, mode = 'visible' }) => {
	const _classNames = Array.isArray(classNames) ? classNames : [classNames];
	const every = !(checkAll === false);
	const check = ['enter', 'visible', 'invisible', 'leave'].includes(mode) ? mode : 'visible';
	let observables;
	if (triggers === Object(triggers)) {
		const observable = document.createElement('div');
		observable.classList.add('observable');
		observable.style = triggers;
		document.body.appendChild(observable);
		observables = [observable];
	} else if (typeof triggers === 'string') {
		observables = [...document.querySelectorAll(triggers)];
	} else if (typeof triggers === 'undefined') {
		observables = [node];
	} else {
		throw new Error('Unknown trigger passed to onScroll action!');
	}
	const match = every
		? (entries, test) => entries.every((entry) => test(entry))
		: (entries, test) => entries.some((entry) => test(entry));
	const condition = (entry) => {
		switch (check) {
			case 'enter':
				return entry.boundingClientRect.y > 0;
			case 'visible':
				return entry.isIntersecting;
			case 'invisible':
				return !entry.isIntersecting;
			case 'leave':
				return entry.boundingClientRect.y < 0;
			default:
				throw new Error('Unknown mode passed to onScroll action!');
		}
	};
	const store = new WeakMap();
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			store.set(entry.target, entry);
		});
		requestAnimationFrame(() => {
			const items = observables.map((observable) => store.get(observable));
			if (match(items, condition)) {
				node.classList.add(..._classNames);
			} else {
				node.classList.remove(..._classNames);
			}
		});
	});
	if (!Array.isArray(observables)) {
		throw new Error('Invalid trigger type in onScroll action internals!');
	}
	observables.forEach((observable) => observer.observe(observable));
	return {
		destroy() {
			observer.disconnect();
			node.classList.remove(..._classNames);
		},
	};
};
