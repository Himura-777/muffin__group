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
			class="font-[cormorant_garamond] text-white text-6xl font-normal text-center"
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
				class="font-[cormorant_garamond] text-white text-2xl font-bold xl:text-3xl"
			>
				Opening hours
			</h6>
			<p class="mt-8 font-[poppins] text-white font-light text-sm xl:text-base">
				Mauris neque. Pelentesque dolor. Mauris in est. Vivamus lacus sed
			</p>
			<ul class="my-5 flex flex-col">
				<li class="flex flex-col">
					<p
						class="w-fit border-b border-solid border-[#8b6f5c] font-[poppins] text-white text-base py-3 mb-2"
					>
						Monday - Friday
					</p>
					<p class="font-[poppins] text-[#8b6f5c] text-[32px] py-3 font-light">
						8<span class="text-base align-super ml-1">00</span> - 16<span
							class="text-base align-super ml-1">00</span
						>
					</p>
				</li>
				<li class="flex flex-col">
					<p
						class="w-fit border-b border-solid border-[#8b6f5c] font-[poppins] text-white text-base py-3 mb-2"
					>
						Saturday
					</p>
					<p class="font-[poppins] text-[#8b6f5c] text-3xl py-3 font-light">
						8<span class="text-base align-super ml-1">00</span> - 15<span
							class="text-base align-super ml-1">00</span
						>
					</p>
				</li>
			</ul>
		</div>

		<form class="mt-5 w-full">
			<input
				type="text"
				placeholder="Name"
				class="block w-[96.8%] text-white text-[poppins] text-light text-base border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-base placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"
			/>
			<div class="md:flex md:gap-x-2">
				<input
					type="email"
					placeholder="Email"
					class="block w-[96.8%] text-white text-[poppins] text-light text-base border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-base placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"
				/>
				<input
					type="text"
					placeholder="Subject"
					class="block w-[96.8%] text-white text-[poppins] text-light text-base border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-base placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"
				/>
			</div>

			<input
				type="text"
				placeholder="Details"
				class="block w-[96.8%] text-white text-[poppins] text-light text-base border-b border-solid border-white/70 p-3 mx-3 mb-3 placeholder:text-white/70 placeholder:text-base placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"
			/>
			<textarea
				placeholder="Your message"
				class="block w-[96.8%] h-59 text-white text-[poppins] text-light text-base border-b border-solid border-white/70 p-3 mx-3 mb-3 resize-none placeholder:text-white/70 placeholder:text-base placeholder:text-[poppins] focus:border-white focus:placeholder:text-white focus:outline-none"
			></textarea>
			<button
				type="submit"
				class="w-[96.8%] h-10 py-3 px-5 bg-[#8b6f5c] text-white text-base font-light text-[poppins] mx-3 flex items-center justify-center"
				>Send a message</button
			>
		</form>
	</div>
</div>
