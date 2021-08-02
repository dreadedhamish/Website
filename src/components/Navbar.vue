<template>
	<div>
		<section class="w-full text-gray-700 bg-white">
			<div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-6xl">
				<div class="relative flex flex-col md:flex-row">
					<router-link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
						<span class="mx-auto text-xl font-black leading-none select-none">THIRM</span>
					</router-link>
				</div>

				<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
					<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 justify-center">
						<router-link to="/token" class="uppercase mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Token</router-link>
						<router-link to="/tvl" class="uppercase mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">TVL</router-link>
						<router-link to="/faq" class="uppercase mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">FAQ</router-link>
						<router-link to="/roadmap" class="uppercase mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Roadmap</router-link>
						<router-link to="/contact" class="uppercase mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Contact</router-link>
					</nav>
				</div>
			</div>
		</section>
	</div>
</template>
