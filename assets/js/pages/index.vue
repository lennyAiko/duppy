<script setup>
import { Link } from '@inertiajs/vue3'

</script>

<template>
    <main class="">
    <!-- navbar -->
    <header class="">
      <nav class="flex items-center justify-between py-2 px-6">
        <!-- logo image --> 
        <div class="">
          <img src="https://github.com/lennyAiko/duppy/blob/main/assets/images/logo.png?raw=true" alt="" class="w-auto h-8">
        </div>
        <!-- menu items -->
        <div class="">
          <a href="/" class="mx-4 hover:text-blue-600 text-blue-950 font-semibold text-lg">Home</a>
          <a href="/about" class="mx-4 hover:text-blue-600 text-blue-950 font-semibold text-lg">About</a>
          <a href="/contact" class="mx-4 hover:text-blue-600 text-blue-950 font-semibold text-lg">Contact</a>
        </div>
        <!-- sign up -->
        <div class="max-md:hidden">
          <a href="" class="bg-blue-950 text-white py-2.5 px-4 rounded-lg shadow-sm">Sign up</a>
        </div>
        <!-- ham menu -->
        <div class="hidden max-md:block">
          <span class="w-3 h-1 bg-blue-950 block mb-1"></span>
          <span class="w-4 h-1 bg-blue-950 block mb-1"></span>
          <span class="w-3 h-1 bg-blue-950 block"></span>
        </div>
      </nav>
    </header>

    <!-- hero section -->
    <section class="">
      <!-- hero text -->
      <div class="w-full px-4 py-4 mb-6">
        <h1 class="capitalize text-7xl max-md:text-5xl text-blue-950 font-semibold mb-7">What Duppy is</h1>
        <p class="">A platform to practically show your ideas of your endpoints. <br>  </p>
        <p class="">So what are you waiting for? Get right to it!</p>
        <button class="">Get started</button>
      </div>

      <!-- hero image -->
      <div class=""></div>
    </section>

    <!-- hero section 2 -->
    <section class="">
      <!-- hero text -->
      <div class="w-full px-4 py-4 mb-6">
        <h1 class="capitalize text-7xl max-md:text-5xl text-blue-950 font-semibold mb-7">What Duppy is</h1>
        <p class="">Description of duppy</p>
        <p class="">A CTA</p>
        <button class="">Get started</button>
      </div>

      <!-- hero image -->
      <div class=""></div>
    </section>

    <!-- hero section 3 -->
    <section class="">
      <!-- hero text -->
      <div class="w-full px-4 py-4 mb-6">
        <h1 class="capitalize text-7xl max-md:text-5xl text-blue-950 font-semibold mb-7">What Duppy is</h1>
        <p class="">Description of duppy</p>
        <p class="">A CTA</p>
        <button class="">Get started</button>
      </div>

      <!-- hero image -->
      <div class=""></div>
    </section>

    <!-- footer -->
    <footer class="">
      <div class="">Company info</div>
      <div class="">Copyright info</div>
    </footer>
  </main>
</template>
