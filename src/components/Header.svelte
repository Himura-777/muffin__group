<script>
	import MobileNavigation from "./MobileNavigation.svelte";
	import Navigation from "./Navigation.svelte";
	import SliderInroduction from "./SliderIntroduction.svelte";
</script>

<section id="welcome">
	<div
		class="w-full h-154 bg-[url(../images/rest6-slider-slide22.jpg)] flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-fixed"
	>
		<MobileNavigation />
		<Navigation />

		<span
			class="block w-full text-center text-white font-[cormorant_garamond] font-thin leading-16 text-5xl tracking-widest"
		>
			FROM<br />TUSCANY
		</span>
	</div>

	<SliderInroduction />
</section>
