<script setup>
import { Head, Link } from '@inertiajs/vue3'
import NavBar from '@/components/NavBar'
</script>

<template>
    
    <div class="">

        <Head title="Sign in" />

        <nav-bar />

        <h1 class="text-5xl">Login to Duppy</h1>
        <!-- left section -->
        <div class="px-3 py-3">
            <form action="/login" method="POST" class="">
                <br><br>

                <input type="text" class="border" placeholder="username" name="username">
                <br><br>

                <input type="password" class="border" name="password">
                <br><br>

                <input type="submit" class="" value="Login">
            </form>
        </div>

        <!-- right section -->
        <div class=""></div>
    </div>
</template>