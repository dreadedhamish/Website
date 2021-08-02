<template>
	<div>
		<section class=" py-20">
			<div class="container px-4 flex flex-col justify-center p-4 mx-auto md:p-8 max-w-6xl ">
				<p class="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
				<h1 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h1>

				<br />
				<div class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-3 md:gap-16">
					<div v-for="(collapse, index) of collapses" :key="index">
						<h5 class="mt-10 mb-3 font-semibold text-gray-900">{{ collapse.title }}</h5>
						<p>{{ collapse.text }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collapses: [
					{
						title: 'xxx',
						text: 'xxxxxxx',
					},
				],
			};
		},
	};
</script>
