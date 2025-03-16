<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	let isMenuOpen = false;
	let scrollPosition = 0;
	let showFixedMenu = false;
	let activeSection = "WELCOME";

	const sections = ["WELCOME", "ABOUT US", "STORY", "CONTACT"];

	const handleScroll = () => {
		scrollPosition = window.scrollY;
		showFixedMenu = scrollPosition > 60;
	};

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
			const section = document.getElementById(
				id.toLowerCase().replace(/\s+/g, "-")
			);
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

<nav class="xl:hidden">
	{#if !showFixedMenu}
		<div
			class="absolute top-0 left-0 w-full h-15 px-3 flex items-center justify-end bg-[#2d2b2a] z-20 transition-opacity duration-500 md:bg-transparent md:h-30"
		>
			<a href="#" class="absolute left-1/2 transform -translate-x-1/2">
				<img src="./images/restaurant6_logo.png" alt="" />
			</a>
			<button
				aria-label="Menu"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				class="md:mr-[7%]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40px"
					height="22px"
					viewBox="0 0 22 22"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
						fill="#ffffff"
					/>
				</svg>
			</button>

			<ul
				class="absolute w-full right-0 top-15 text-center bg-[#2d2b2a] overflow-hidden md:w-80 md:top-30 md:right-[7%] transition-all duration-500 ease-in-out"
				style="max-height: {isMenuOpen ? '200px' : '0'};"
			>
				{#each sections as item}
					<li
						class="h-11 flex justify-center items-center {activeSection === item
							? 'active'
							: ''}"
					>
						<a
							href="#{item.toLowerCase()}"
							class="text-sm text-white font-[cormorant_garamond]">{item}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if showFixedMenu}
		<div
			class="fixed top-0 left-0 w-full h-15 px-3 flex items-center justify-end bg-[#2d2b2a] z-20 transition-opacity duration-500"
			transition:fly={{ y: -500, duration: 500 }}
		>
			<a href="#" class="absolute left-1/2 transform -translate-x-1/2">
				<img src="./images/restaurant6_logo.png" alt="" />
			</a>
			<button
				aria-label="Menu"
				on:click={() => (isMenuOpen = !isMenuOpen)}
				class="md:mr-[7%]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40px"
					height="22px"
					viewBox="0 0 22 22"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
						fill="#ffffff"
					/>
				</svg>
			</button>

			<ul
				class="absolute w-full right-0 top-15 text-center bg-[#2d2b2a] overflow-hidden md:w-80 md:top-15 md:right-[7%] transition-all duration-500 ease-in-out"
				style="max-height: {isMenuOpen ? '200px' : '0'};"
			>
				{#each sections as item}
					<li
						class="h-11 flex justify-center items-center {activeSection === item
							? 'active'
							: ''}"
					>
						<a
							href="#{item.toLowerCase()}"
							class="text-sm text-white font-[cormorant_garamond]">{item}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	.active {
		background-color: #292827;
	}
</style>
