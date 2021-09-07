<script>
	/** The link destination (treat like <a> href) */
	export let href;

	const regex = /^(?:https?:\/\/)?[0-9A-Za-z-]{2,65}(?!\.html)(?:\.[a-z]{1,10}){1,2}\/?.*/; // matches most outgoing http urls
	const outgoing = regex.test(href);
</script>

<!--
@component
Extends the html <a> tag with special props and functionality
-->

<a
	{href}
	target={outgoing ? '_blank' : undefined}
	rel={outgoing ? 'external noopener noreferrer' : 'prefetch'}
	sveltekit:prefetch={!outgoing || undefined}><slot /></a>
