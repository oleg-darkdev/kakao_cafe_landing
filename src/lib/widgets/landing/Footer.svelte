<script lang="ts">
	// import {  } from '$sharedData';
	// import {  } from '$sharedUi';

	const footerLinks = $state([
		{
			title: '',
			link: '#'
		},
		{
			title: '',
			link: '#'
		},
		{
			title: '',
			link: '#'
		},
	])

	let { navigation, categories } = $props();
</script>

<footer class="footer4_component">
	<div class="padding-global">
		<div class="container-large">
			<div class="padding-vertical padding-xxlarge">
				<div class="padding-bottom padding-xxlarge">
					<div class="w-layout-grid footer4_top-wrapper">
						<a
							href="/"
							aria-current="page"
							class="footer4_logo-link w-nav-brand w--current"
						>
							<img
								src="/images/logo.svg"
								loading="lazy"
								alt="kakao logo"
								class="h-20 w-24"
							/>
						</a>
						<div class="w-layout-grid footer4_link-list">
							{#each navigation as {title, link}}
							<a href="{link}" class="footer4_link">{title}</a>
							{/each}
						</div>
						<div
							class="w-layout-grid footer4_social-list"
						>
							<a href="https://www.facebook.com/kakaowarszawa/" target="_blank" class="footer4_social-link w-inline-block">
								<div class="icon-embed-xsmall w-embed">
									<svg
										width="100%"
										height="100%"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
											fill="CurrentColor"
										></path>
									</svg>
								</div>
							</a>
							<a href="https://www.instagram.com/kakao_warszawa/" target="_blank" class="footer4_social-link w-inline-block">
								<div class="icon-embed-xsmall w-embed">
									<svg
										width="100%"
										height="100%"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
											fill="CurrentColor"
										></path>
									</svg>
								</div>
							</a>
							
						</div>
					</div>
				</div>
				<div class="line-divider"></div>
				<div class="padding-top padding-medium">
					<div class="w-layout-grid footer4_bottom-wrapper">
						<div
							class="footer4_credit-text"
						>
							© 2023-2025 Kakao. Białoruskie wypieki.
						</div>
						{#each footerLinks as {title, link}}
							<a href="{link}" class="footer4_legal-link">{title}</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
</style>
