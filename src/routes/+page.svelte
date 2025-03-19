<script>
	import Header from "../components/Header.svelte";
	import Cards from "../components/CardsSection.svelte";
	import DishStory from "../components/HeroBanner.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<header>
	<Header />
</header>

<main>
	<Cards />
	<DishStory />
</main>

<footer
	class="bg-[url(../images/rest6-bottom-sec-gra.jpg)] bg-no-repeat bg-cover bg-[top_center] py-[124px] pt-15"
>
	<Footer />
</footer>
