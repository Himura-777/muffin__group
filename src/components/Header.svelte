<script>
	import MobileNavigation from "./MobileNavigation.svelte";
	import Navigation from "./Navigation.svelte";
	import SliderIntroduction from "./SliderIntroduction.svelte";
</script>

<section id="welcome">
	<div
		class="w-full bg-[url(/images/rest6-slider-slide22.jpg)] flex flex-col justify-center bg-cover bg-no-repeat bg-fixed bg-bottom aspect-[4/3.5] md:aspect-[4/2.9] max-h-225"
	>
		<MobileNavigation />
		<Navigation />

		<span
			class="block w-full text-center text-white font-cormorant_garamond font-light text-[6.3vw] tracking-19 md:tracking-31 lg:tracking-39 xl:tracking-50 leading-9.25 md:leading-14.25 lg:leading-18.5 xl:leading-24"
		>
			FROM<br />TUSCANY
		</span>
	</div>

	<SliderIntroduction />
</section>
