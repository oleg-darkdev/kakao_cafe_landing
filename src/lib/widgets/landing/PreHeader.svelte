<script lang="ts">
	import { fade } from 'svelte/transition';

	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let showInfoPanel = $state(true);
</script>

{#if showInfoPanel}
	<section
		style="display:block"
		class="banner10_component"
	>
		<div class="padding-global">
			<div class="banner10_content-wrapper">
				<div class="banner10_content text-weight-semibold">
					<div><a href="/quest">Quest po Warszawie</a> z naszą kawą!</div>
				</div>
				<button
					on:click={(showInfoPanel = !showInfoPanel)}
					class="banner10_close-button w-inline-block"
				>
					<div class="icon-embed-small w-embed">
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 32 33"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.8354 22.864L22.3639 23.3354C22.1036 23.5957 21.6815 23.5957 21.4211 23.3354L16 17.9142L10.5788 23.3353C10.3185 23.5957 9.89638 23.5957 9.63603 23.3353L9.16462 22.8639C8.90427 22.6036 8.90427 22.1815 9.16462 21.9211L14.5858 16.5L9.16462 11.0788C8.90427 10.8185 8.90427 10.3964 9.16462 10.136L9.63602 9.66463C9.89637 9.40428 10.3185 9.40428 10.5788 9.66463L16 15.0858L21.4211 9.66462C21.6815 9.40427 22.1036 9.40427 22.3639 9.66462L22.8354 10.136C23.0957 10.3964 23.0957 10.8185 22.8354 11.0788L17.4142 16.5L22.8354 21.9211C23.0957 22.1815 23.0957 22.6036 22.8354 22.864Z"
								fill="currentColor"
							></path>
						</svg>
					</div>
				</button>
			</div>
		</div>
	</section>
{/if}

<style lang="postcss">
</style>
