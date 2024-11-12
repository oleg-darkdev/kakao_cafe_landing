<script lang="ts">
	import { Header, Footer } from '$widgetsLanding';
	import { navigation, categories } from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="">
	<Header {navigation}/>

	<main>
		{@render children()}
	</main>

	<Footer {navigation} {categories}/>
</div>


<style lang="postcss">
</style>
