<script>
	export let icon;
	export let bgColor;
</script>

<li class="bg-white w-12 h-12">
	<a
		href="#0"
		class="group w-full h-full flex justify-center items-center transition-colors duration-300 {bgColor}"
	>
		<img src={icon} class="transition-all duration-300 group-hover:invert" />
	</a>
</li>
