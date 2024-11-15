<script lang="ts">
	import { fade } from 'svelte/transition';

	// import {  } from '$shared';
	let { navigation } = $props();

	let showMenu = $state(false);
</script>

<div class="navbar9_component w-nav" data-w-id="643f7b28-0097-e68b-64b0-8bb2dc0b97c8" role="banner">
	<div class="navbar9_container">
		<a href="/" aria-current="page" class="navbar9_logo-link w-nav-brand w--current">
			<img src="images/logo.svg" loading="lazy" alt="primary logo" class="h-12 w-24" />
		</a>
		<nav role="navigation" class="navbar9_menu-desc w-nav-menu">
			<div class="navbar9_menu-left">
				{#each navigation as { title, link }}
					<a href={link} class="navbar9_link w-nav-link">{title}</a>
				{/each}
			</div>
			<div class="navbar9_menu-right">
				<!-- <a href="#" class="button is-secondary is-small hide w-button">Learn More</a>
				<a href="#" class="button is-small w-button">Zamówić coś</a> -->
				<!-- <div class="button-group"> -->
				<a href="#menu" class="button w-button">Nasze menu</a>
				<a href="#gamification" class="button is-secondary w-button">Rozrywki</a>
				<!-- </div> -->
			</div>
		</nav>

		{#if showMenu}
			<nav
				on:click={() => (showMenu = !showMenu)}
				transition:fade={{ delay: 250, duration: 300 }}
				role="navigation"
				class="navbar9_menu-mobile w-nav-menu"
			>
				<div class="flex w-full flex-col justify-center justify-center">
					{#each navigation as { title, link }}
						<a href={link} class="navbar9_link w-nav-link">{title}</a>
					{/each}
				</div>
				<div class="navbar9_menu-right">
					<a href="#menu" class="button w-button">Nasze menu</a>
					<a href="#gamification" class="button is-secondary w-button">Rozrywki</a>
				</div>
			</nav>
		{/if}
		<div on:click={() => (showMenu = !showMenu)} class="navbar9_menu-button w-nav-button">
			<div class="menu-icon">
				<div class="menu-icon_line-top"></div>
				<div class="menu-icon_line-middle">
					<div class="menu-icon_line-middle-inner"></div>
				</div>
				<div class="menu-icon_line-bottom"></div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
