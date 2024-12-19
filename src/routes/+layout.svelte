<script lang="ts">
	import NavBar from '$lib/components/nav-bar.svelte';
	import SubNav from '$lib/components/sub-nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<NavBar />
<SubNav />
{@render children()}
