<script lang="ts">
	import { Header, Footer } from '$widgetsLanding';
	// , categories
	import { navigation } from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="">
	<Header {navigation}/>

	<main>
		{@render children()}
	</main>

	<!--  {categories} -->
	<Footer {navigation}/>
</div>


<style lang="postcss">
</style>
