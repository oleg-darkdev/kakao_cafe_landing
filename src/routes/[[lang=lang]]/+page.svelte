<script lang="ts">
	// import { boardgamesList, categories } from '$sharedData';
	// import { LineDivider, SmallContaciDivider } from '$sharedUi';
	import {
		Faq,
		PreHeader,
		Quest,
		Hero,
		PopularItems,
		Blog,
		ExploreMenu,
		About,
		VisitUs,
		Stats,
		Contact
	} from '$widgetsLanding';
</script>

<svelte:head>
	<title>Puzzle Management | Home</title>
	<meta name="description" content="" />
</svelte:head>

<div class="page-wrapper">
	<PreHeader />

	<main class="main-wrapper">
		<Hero />

		<PopularItems />

		<ExploreMenu>
			<Quest />
		</ExploreMenu>

		<About />

		<Stats />

		<section class="section_home_testimonial">
			<div class="padding-global">
				<div class="container-large">
					<div class="padding-section-large more-top">
						<div class="max-width-large"></div>
					</div>
				</div>
			</div>
			<div class="wave-border-wrapper absolute-top">
				<div class="icon-embed-custom w-embed">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="100%"
						zoomAndPan="magnify"
						viewBox="0 0 1440 809.999993"
						height="100%"
						preserveAspectRatio="xMidYMid meet"
						version="1.0"
						aria-hidden="true"
						role="img"
					>
						<defs>
							<clipPath id="78a241b69c">
								<path
									d="M 0 0 L 1440 0 L 1440 279.992188 L 0 279.992188 Z M 0 0 "
									clip-rule="nonzero"
								></path>
							</clipPath>
						</defs>
						<g clip-path="url(#78a241b69c)">
							<path
								fill="currentColor"
								d="M 1440.132812 -196.054688 L 1440.132812 279.644531 C 1405.75 268.03125 1376.207031 243.269531 1356.113281 212.871094 C 1341.484375 190.746094 1331.21875 165.414062 1312.753906 146.382812 C 1274.917969 107.351562 1213.136719 104.695312 1159.609375 114.222656 C 1106.101562 123.746094 1053.085938 142.835938 998.949219 137.902344 C 910.015625 129.78125 840.605469 60.011719 759.183594 23.3125 C 739.808594 14.585938 718.9375 7.601562 697.722656 8.96875 C 657.457031 11.585938 625.617188 42.855469 588.617188 58.949219 C 470.292969 110.40625 326.671875 0.390625 208.667969 52.570312 C 169.882812 69.726562 138.59375 103.140625 97.359375 113.007812 C 68.308594 119.96875 37.761719 114.277344 8.027344 117.21875 C 5.390625 117.484375 2.730469 117.882812 0.0742188 118.359375 L 0.0742188 -196.015625 L 1440.132812 -196.015625 Z M 1440.132812 -196.054688 "
								fill-opacity="1"
								fill-rule="nonzero"
							></path>
						</g>
					</svg>
				</div>
			</div>
		</section>

		<Blog />

		<VisitUs />

		<Contact />
	</main>
</div>

<style lang="postcss">
	.WidgetTitle__Header-sc-ruy1gu-2 {
		margin-left: 0;
		margin-right: auto;
		font-size: 3rem;
		font-family: 'Spot';
		font-weight: 400;
	}
</style>
