<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'


	let {item} = $props()
</script>

<div class="home_features-list_slide w-slide">
	<div class="home_features-list_item">
		<div class="home_features-list_image-wrapper">
			<!-- home_features-list_image -->
			<img
				loading="lazy"
				sizes="(max-width: 479px) 70vw, (max-width: 767px) 62vw, (max-width: 991px) 37vw, 20vw"
				src="/images/menu/{item.img}"
				alt="{item.title} img"
				class="rounded-lg"
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
