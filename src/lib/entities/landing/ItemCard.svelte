<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'


	let {item} = $props()
</script>

<div class="home_features-list_slide w-slide">
	<div class="home_features-list_item">
		<div class="home_features-list_image-wrapper">
			<!-- https://cdn.prod.website-files.com/66a3c8794154857fba1b61c8/66a3d0437900d58be8cfcbec_bowl4.avif -->
			<img
				loading="lazy"
				sizes="(max-width: 479px) 70vw, (max-width: 767px) 62vw, (max-width: 991px) 37vw, 20vw"
				src="{item.img}"
				alt="{item.title} img"
				class="home_features-list_image"
			/>
		</div>
		<div class="spacer-xsmall"></div>
		<div class="home_features-list_title-wrapper">
			<div class="text-size-large text-weight-semibold text-all-caps">{item.title}</div>
		</div>
		<div class="spacer-xsmall"></div>
		<p>
			{item.shortDesc}
		</p>
		<div class="spacer-small"></div>
		<a href="#" class="button is-secondary is-small w-button">Zamówiс</a>
	</div>
</div>

<style lang="postcss">
</style>
