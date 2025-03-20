<script>
	export let background;
	export let icon;
	export let title;

	let hovered = false;
</script>

<li class="flex flex-col gap-y-4 md:w-[33%] aspect-[4/3.6]">
	<div
		class="h-full md:h-54 xl:h-64 relative bg-no-repeat bg-cover transition-all duration-500 overflow-hidden"
		style="background-image: url({background});
		background-position: {hovered ? 'right center' : 'center'};"
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
	>
		<div
			class="absolute left-0 top-0 w-22 md:w-[30%] h-full bg-[#8b6f5c] bg-no-repeat bg-center transition-transform duration-500"
			style="background-image: url({icon}); 
			       transform: translateX({hovered ? '-100%' : '0'});"
		></div>
	</div>
	<h4
		class="font-cormorant_garamond whitespace-pre-line md:mb-10 xl:text-2xl xl:pl-[30%] font-medium text-base sm:text-xl md:text-22 lg:text-26 leading-5.25 sm:leading-6.5 md:leading-7.5 lg:leading-8.75"
	>
		{title}
	</h4>
</li>
