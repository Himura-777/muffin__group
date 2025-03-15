<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let scrollPosition = 0;
	let showFixedMenu = false;
	let hideMainMenu = false;

	const handleScroll = () => {
		scrollPosition = window.scrollY;

		if (scrollPosition > 120) {
			if (!hideMainMenu) {
				hideMainMenu = true;
				showFixedMenu = true;
			}
		} else {
			if (showFixedMenu) {
				showFixedMenu = false;
				hideMainMenu = false;
			}
		}
	};

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<nav class="hidden xl:block">
	<!-- Первое меню -->
	<div
		class="absolute top-0 left-0 w-full h-30 px-3 flex items-center justify-end bg-transparent z-10 transition-opacity duration-300"
		class:hidden={hideMainMenu}
	>
		<ul class="w-full flex items-center justify-center gap-x-10 text-center">
			{#each ["WELCOME", "ABOUT US"] as item}
				<li class="h-[44px] flex justify-center items-center">
					<a
						href="#{item.toLowerCase()}"
						class="text-base text-white font-[cormorant_garamond]">{item}</a
					>
				</li>
			{/each}
		</ul>
		<a href="#0" class="absolute left-1/2 transform -translate-x-1/2">
			<img src="../images/restaurant6_logo.png" alt="" />
		</a>
		<ul class="w-full flex items-center justify-center gap-x-10 text-center">
			{#each ["STORY", "CONTACT"] as item}
				<li class="h-[44px] flex justify-center items-center">
					<a
						href="#{item.toLowerCase()}"
						class="text-base text-white font-[cormorant_garamond]">{item}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Второе меню -->
	{#if showFixedMenu}
		<div
			class="fixed top-0 left-0 w-full flex items-center bg-[#2d2b2a]/90 z-20 transition-all duration-300"
			transition:fly={{ y: -500, duration: 500 }}
		>
			<ul class="w-full flex items-center justify-center gap-x-10 text-center">
				{#each ["WELCOME", "ABOUT US"] as item}
					<li class="h-17 flex justify-center items-center">
						<a
							href="#{item.toLowerCase()}"
							class="text-base text-white font-[cormorant_garamond]">{item}</a
						>
					</li>
				{/each}
			</ul>
			<a href="#0" class="absolute left-1/2 transform -translate-x-1/2">
				<img src="../images/restaurant6_logo.png" alt="" />
			</a>
			<ul class="w-full flex items-center justify-center gap-x-10 text-center">
				{#each ["STORY", "CONTACT"] as item}
					<li class="h-17 flex justify-center items-center">
						<a
							href="#{item.toLowerCase()}"
							class="text-base text-white font-[cormorant_garamond]">{item}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
