<script>
	import {onMount} from 'svelte'
	import {fly} from 'svelte/transition'

	let scrollPosition = 0;
	let showFixedMenu = false;
	let hideMainMenu = false;
	let activeSection = "WELCOME";

	const sections = ["WELCOME", "ABOUT US", "STORY", "CONTACT"];

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

	const transformToId = text => text.toLowerCase().replace(/\s+/g, "-");

	const observeSections = () => {
		const options = {
			root: null,
			rootMargin: "-60% 0px -60% 0px",
			threshold: 0,
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id.toUpperCase();
				}
			});
		}, options);

		sections.forEach(id => {
			const section = document.getElementById(transformToId(id));
			if (section) observer.observe(section);
		});
	};

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		observeSections();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<nav class="hidden xl:block">
	<div
		class="absolute top-0 left-0 w-full h-30 px-3 flex items-center justify-end bg-transparent z-10 transition-opacity duration-300"
		class:hidden={hideMainMenu}
	>
		<ul
			class="h-full w-full flex items-center justify-center gap-x-10 text-center"
		>
			{#each ["WELCOME", "ABOUT US"] as item}
				<li
					class="h-10 flex justify-center items-center px-2 {activeSection === transformToId(item).toUpperCase()
						? 'activeMain'
						: ''}"
				>
					<a
						href="#{transformToId(item)}"
						class="text-base text-white font-cormorant_garamond leading-15 tracking-1"
					>
						{item}
					</a>
				</li>
			{/each}
		</ul>
		<a href="#" class="absolute left-1/2 transform -translate-x-1/2">
			<img src="/images/restaurant6_logo.png" alt="" />
		</a>
		<ul
			class="h-full w-full flex items-center justify-center gap-x-10 text-center"
		>
			{#each ["STORY", "CONTACT"] as item}
				<li
					class="h-10 flex justify-center items-center px-2 {activeSection === transformToId(item).toUpperCase()
						? 'activeMain'
						: ''}"
				>
					<a
						href="#{transformToId(item)}"
						class="text-base text-white font-cormorant_garamond leading-15 tracking-1"
					>
						{item}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	{#if showFixedMenu}
		<div
			class="fixed top-0 left-0 w-full flex items-center bg-darkgrey/90 z-20 transition-all duration-300"
			transition:fly={{ y: -500, duration: 500 }}
		>
			<ul
				class="h-15 w-full flex items-center justify-center gap-x-10 text-center"
			>
				{#each ["WELCOME", "ABOUT US"] as item}
					<li
						class="h-full flex justify-center items-center px-2 {activeSection === transformToId(item).toUpperCase()
							? 'activeFixed'
							: ''}"
					>
						<a
							href="#{transformToId(item)}"
							class="text-base text-white font-cormorant_garamond leading-15 tracking-1"
						>
							{item}
						</a>
					</li>
				{/each}
			</ul>
			<a href="#" class="absolute left-1/2 transform -translate-x-1/2">
				<img src="/images/restaurant6_logo.png" alt="" />
			</a>
			<ul
				class="h-15 w-full flex items-center justify-center gap-x-10 text-center"
			>
				{#each ["STORY", "CONTACT"] as item}
					<li
						class="h-full flex justify-center items-center px-2 {activeSection === transformToId(item).toUpperCase()
							? 'activeFixed'
							: ''}"
					>
						<a
							href="#{transformToId(item)}"
							class="text-base text-white font-cormorant_garamond leading-15 tracking-1"
						>
							{item}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	.activeMain, .activeFixed {
		border-bottom: 1px solid white;
	}
</style>
