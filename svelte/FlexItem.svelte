<script>
	/** Take up available/leftover space by this proportion (in relation to other flex items) */
	export let grow = 0;
	/** Shrink used space if necessary by this proportion (in relation to other flex items) */
	export let shrink = 1;
	/** Default size before remaining space is distributed (auto = width/height) */
	export let basis = 'auto';
	/**
	 * Shrink and expand as necessary
	 * Use basis to allocate initial size (0% will distribute items equally regardless of size)
	 * Easy shorthand to make item responsive (grow = 1)
	 */
	export let dynamic = false;
	/**
	 * Neither shrink nor expand
	 * Use basis to allocate initial size (auto is recommended in this mode)
	 * Easy shorthand to make item static (shrink = 0)
	 */
	export let fixed = false;
</script>

<!--
	@component
	An elegant CSS Flex item wrapper
-->

<div
	class="flex"
	class:flex-auto={dynamic}
	class:flex-none={fixed}
	style={[
		grow !== 0 && `flex-grow: ${grow}`,
		shrink !== 1 && `flex-shrink: ${shrink}`,
		basis !== 'auto' && `flex-basis: ${basis}`,
	]
		.filter(Boolean)
		.join(';')}>
	<slot />
</div>
