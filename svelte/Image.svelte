<script>
	/** Should the image be contained within its parent? */
	export let contain = false;
	/** Should the width scale to fit (dynamic) or take up 100% (fixed)? */
	export let scaleWidth = false;
	/** Should the height scale to fit (dynamic) or take up 100% (fixed)? */
	export let scaleHeight = false;
	/** The image source attribute (treat like <img> src) */
	export let src;
	/** The image alt attribute for accessibility (treat like <img> alt) */
	export let alt;
</script>

<!--
@component
Extends the html <img> tag with special props and functionality
-->

<img
	{src}
	{alt}
	class="{contain ? 'object-contain h-full w-full' : ''} {scaleWidth ? 'w-auto' : 'w-full'} {scaleHeight
		? 'h-auto'
		: 'h-full'}" />
