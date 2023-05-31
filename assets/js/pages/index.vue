<script setup>
import { Head, Link } from '@inertiajs/vue3'
import NavBar from '@/components/NavBar'

</script>

<template>
    <div class="">
    <!-- header -->
    <Head>
      <title>Home</title>
    </Head>
    <!-- navbar -->
    <header class="">
      <nav class="flex items-center justify-between py-2 px-6">
        <!-- logo image --> 
        <div class="">
          <img src="https://github.com/lennyAiko/duppy/blob/main/assets/images/logo.png?raw=true" alt="" class="w-auto h-8">
        </div>
        <!-- menu items -->
        <div class="">
          <nav-bar />
        </div>
        <!-- sign up -->
        <div class="max-md:hidden">
          <Link href="/register" class="bg-blue-950 text-white py-2.5 px-4 rounded-lg shadow-sm">Sign up</Link>
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
  </div>
</template>
