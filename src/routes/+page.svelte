<script>
	import MobileNavigation from "../components/MobileNavigation.svelte";
	import Navigation from "../components/Navigation.svelte";
	import Header from "../components/Header.svelte";
	import Cards from "../components/Cards.svelte";
	import DishStory from "../components/DishStory.svelte";
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
