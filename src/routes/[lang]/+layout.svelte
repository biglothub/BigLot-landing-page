<script lang="ts">
	import { locale } from 'svelte-i18n';

	let { data, children } = $props();

	$effect(() => {
		locale.set(data.lang);
	});
</script>

{@render children()}
