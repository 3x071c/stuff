<script>
	/** The id & class for this observable */
	export let identifier;
</script>

<!--
@component
This is an invisible, 0px size pixel for use as a JavaScript anchor element, f.e. as an onScroll trigger
-->
<div class="w-0 h-0 {identifier}" id={identifier} />
