<script>
	import Contacts from "./Contacts.svelte";

	const items = [
		{ icon: "../svg/FaceBook.svg", bgColor: "hover:bg-[#3b5998]" },
		{ icon: "../svg/Instagram.svg", bgColor: "hover:bg-[#E1306C]" },
		{ icon: "../svg/Twitter.svg", bgColor: "hover:bg-[#00acee]" },
		{ icon: "../svg/Vimeo.svg", bgColor: "hover:bg-[#1ab7ea]" },
	];
</script>

<div id="contact" class="mx-auto w-[84.02%] max-w-[1120px]">
	<div>
		<h2
			class="font-cormorant_garamond text-white text-center text-42 sm:text-53 md:text-6xl lg:text-7xl leading-10.75 sm:leading-13.5 md:leading-15.25 lg:leading-18"
		>
			Level 13, 2 Elizabeth St,<br />Melbourne, Vctoria 3000,<br />Australia
		</h2>
		<ul class="mt-4 flex gap-x-1 justify-center items-center">
			{#each items as { icon, bgColor }}
				<Contacts {icon} {bgColor} />
			{/each}
		</ul>
	</div>
	<div class="mt-15 md:flex md:gap-x-[5%]">
		<div>
			<h6
				class="font-cormorant_garamond text-white font-semibold text-lg sm:text-23 md:text-26 lg:text-30 leading-5.25 sm:leading-6.5 md:leading-7.5 lg:leading-8.75"
			>
				Opening hours
			</h6>
			<p
				class="mt-8 font-poppins text-white font-thin text-xs md:text-sm lg:text-base leading-4.75 sm:leading-6 md:leading-6.75 lg:leading-8"
			>
				Mauris neque. Pelentesque dolor. Mauris in est. Vivamus lacus sed
			</p>
			<ul class="my-5 flex flex-col">
				<li class="flex flex-col">
					<p
						class="w-fit border-b border-solid border-brown font-poppins font-light text-white text-15 leading-4.5 py-3 mb-2"
					>
						Monday - Friday
					</p>
					<p class="font-poppins text-brown text-32 leading-8 py-3 font-light">
						8<span class="text-base leading-4 align-super ml-1">00</span> - 16<span
							class="text-base leading-4 align-super ml-1">00</span
						>
					</p>
				</li>
				<li class="flex flex-col">
					<p
						class="w-fit border-b border-solid border-brown font-poppins font-light text-white text-15 leading-4.5 py-3 mb-2"
					>
						Saturday
					</p>
					<p class="font-poppins text-brown text-32 leading-8 py-3 font-light">
						8<span class="text-base leading-4 align-super ml-1">00</span> - 15<span
							class="text-base leading-4 align-super ml-1">00</span
						>
					</p>
				</li>
			</ul>
		</div>

		<form class="mt-5 w-full">
			<input
				type="text"
				placeholder="Name"
				class="block w-[95%] text-white text-poppins text-thin text-15 border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-15 placeholder:text-poppins focus:border-white focus:placeholder:text-white focus:outline-none"
			/>
			<div class="md:flex md:gap-x-2">
				<input
					type="email"
					placeholder="Email"
					class="block w-[95%] text-white text-poppins text-thin text-15 border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-15 placeholder:text-poppins focus:border-white focus:placeholder:text-white focus:outline-none"
				/>
				<input
					type="text"
					placeholder="Subject"
					class="block w-[95%] text-white text-poppins text-thin text-15 border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-15 placeholder:text-poppins focus:border-white focus:placeholder:text-white focus:outline-none"
				/>
			</div>

			<input
				type="text"
				placeholder="Details"
				class="block w-[95%] text-white text-poppins text-thin text-15 border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-15 placeholder:text-poppins focus:border-white focus:placeholder:text-white focus:outline-none"
			/>
			<textarea
				placeholder="Your message"
				class="block w-[95%] h-59 text-white text-poppins text-thin text-15 border-b border-solid border-white/70 p-3 mx-3 mb-3 resize-none placeholder:text-white/70 placeholder:text-15 placeholder:text-poppins focus:border-white focus:placeholder:text-white focus:outline-none"
			></textarea>
			<button
				type="submit"
				class="w-[95%] h-10 py-3 px-5 bg-brown text-white text-poppins mx-3 flex items-center justify-center text-xs md:text-sm lg:text-base font-thin"
				>Send a message</button
			>
		</form>
	</div>
</div>
