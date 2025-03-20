<script>
	import ItemsCards from "./ItemsCards.svelte";
	import Beginning from "./Jumbotron.svelte";

	const items = [
		{
			background: "../images/rest6-home-box1.jpg",
			icon: "../images/rest6-icon1.png",
			title: "20 years of\nexperience",
		},
		{
			background: "../images/rest6-home-box2.jpg",
			icon: "../images/rest6-icon2.png",
			title: "Only fresh Italian\ningredients",
		},
		{
			background: "../images/rest6-home-box3.jpg",
			icon: "../images/rest6-icon-3.png",
			title: "Traditional recipes",
		},
	];
</script>

<section id="about-us" class="pt-30">
	<div class="w-full mx-auto px-8 md:w-177 lg:w-225 xl:w-270">
		<h2
			class="font-cormorant_garamond text-center text-black font-medium md:text-start md:mr-[10%] xl:mb-10 text-29 sm:text-4xl md:text-41 lg:text-5xl leading-8.75 sm:leading-11 md:leading-12.25 lg:leading-14.5"
		>
			We know how to make
			<br />
			the best Italian food in the city.
		</h2>
		<ul class="mt-9 flex flex-col gap-4 md:flex-row md:gap-10">
			{#each items as { background, icon, title }}
				<ItemsCards {background} {icon} {title} />
			{/each}
		</ul>
	</div>

	<Beginning />
</section>
