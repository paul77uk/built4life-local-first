<script lang="ts">
	import NavBar from '$lib/components/nav-bar.svelte';
	import SubNav from '$lib/components/sub-nav.svelte';
	import '../app.css';
	import { isStoragePersisted, persist } from '$lib/db';

	let { children } = $props();

	$effect(() => {
		(async () => {
			const status = await isStoragePersisted();
			if (!status) {
				console.log('Storage not persisted');
			} else {
				await persist();
				console.log('Storage persisted');
			}
		})();
	});
</script>

<NavBar />
<SubNav />
{@render children()}
