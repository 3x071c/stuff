<script>
	/** Bolden the text */
	export let bold = false;
	/**
	 * The tag to render as
	 * Supported: span, p, h1-6
	 */
	export let as = 'span';
	/** Apply the Flow font, which acts as a placeholder/skeleton */
	export let skeleton = false;
	/** Additional top-level classes */
	export let classNames = '';
</script>

<!--
	@component
	Text html wrapper
-->

{#if as === 'span'}
	<span class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</span>
{:else if as === 'p'}
	<p class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</p>
{:else if as === 'h1'}
	<h1 class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</h1>
{:else if as === 'h2'}
	<h2 class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</h2>
{:else if as === 'h3'}
	<h3 class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</h3>
{:else if as === 'h4'}
	<h4 class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</h4>
{:else if as === 'h5'}
	<h2 class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</h2>
{:else if as === 'h6'}
	<h6 class={classNames} class:font-bold={bold} class:flow={skeleton}>
		<slot />
	</h6>
{/if}
