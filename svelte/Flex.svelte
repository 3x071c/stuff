<script>
	/** Should the flex direction/main axis be horizontal (row) or vertical (column)? */
	export let column = false;
	$: row = !column;
	/** Should the flex container wrap if items overflow? */
	export let wrap = false;
	$: nowrap = !wrap;
	/** Align items at the start of both axis (top left) */
	export let start = false;
	$: justifyStart = start;
	/** Align items at the start of the cross axis (vertical (row)/horizontal (column)) */
	export let itemsStart = start;
	/** Center items along both axis (center center) */
	export let center = false;
	/** Center items along the center of the main axis (horizontal (row)/vertical (column)) */
	export let justifyCenter = center;
	/** Center items along the center of the cross axis (vertical (row)/horizontal (column)) */
	export let itemsCenter = center;
	/** Align items at the end of both axis (bottom right) */
	export let end = false;
	/** Align items at the end of the main axis (horizontal (row)/vertical (column)) */
	export let justifyEnd = end;
	/** Align items at the end of the cross axis (vertical (row)/horizontal (column)) */
	export let itemsEnd = end;
	/** Distribute items as far apart from each other as possible along the main axis (horizontal (row)/vertical (column)) */
	export let justifyBetween = false;
	/** Distribute items with equal spacing along the main axis (horizontal (row)/vertical (column)) */
	export let justifyAround = false;
	/** Distribute items evenly along the main axis (horizontal (row)/vertical (column)) */
	export let justifyEvenly = false;
	/** Don't take up 100% width and height */
	export let nofill = false;
	$: fill = !nofill;
	/** Additional classes */
	export let classNames = '';
</script>

<!--
	@component
	An elegant CSS Flex wrapper
-->

<div
	class="flex {classNames}"
	class:w-full={fill}
	class:h-full={fill}
	class:flex-col={column}
	class:flex-row={row}
	class:flex-wrap={wrap}
	class:flex-no-wrap={nowrap}
	class:justify-start={justifyStart}
	class:items-start={itemsStart}
	class:justify-center={justifyCenter}
	class:items-center={itemsCenter}
	class:justify-end={justifyEnd}
	class:items-end={itemsEnd}
	class:justify-between={justifyBetween}
	class:justify-around={justifyAround}
	class:justify-evenly={justifyEvenly}>
	<slot />
</div>
