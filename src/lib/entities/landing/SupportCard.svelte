<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { option } = $props();
</script>

<div role="listitem" class="max-w-md home_blog-list_item w-dyn-item">
	<div class="home_blog-list_item-link">
		<div class="home_blog-list_image-wrapper">
			<img
				src="{option.img}"
				loading="lazy"
				alt=""
				sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 28vw"
				class="home_blog-list_image"
			/>
		</div>
		<div class="home_blog-list_item-content">
			<div class="home_blog-list_item-content-top">
				
				<div class="home_blog-list_title-wrapper">
					<h3 class="heading-style-h5">{option.title}</h3>
				</div>
				<!-- <div class="text-size-regular">
					{option.shortDesc}
				</div> -->
			</div>
			<div class="home_blog-list_button-wrapper">
				<a href="#" class="button is-link is-icon w-inline-block">
					<div>Wesprzeć</div>
					<div class="icon-embed-xxsmall w-embed">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
						</svg>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
