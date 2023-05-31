<script setup>
import { Head, Link } from '@inertiajs/vue3'
import NavBar from '@/components/NavBar'
</script>

<template>
    
    <div class="">

        <Head title="Sign up" />

        <nav-bar />

        <h1 class="text-5xl">Sign up on Duppy</h1>

        <!-- left section -->
        <div class="px-3 py-3">
            <form action="/register" method="POST" class="">
                <br><br>

                <input type="text" class="border" placeholder="username" name="username">
                <br><br>

                <input type="email" class="border" placeholder="email address" name="emailAddress">
                <br><br>

                <input type="password" class="border" name="password">
                <br><br>

                <input type="submit" class="" value="Sign up">
            </form>

            <br><br>

            <p>
                Already have an account? <Link href="/login" class="underline underline-offset-2 hover:no-underline">Sign in</Link>
            </p>
        </div>

        <!-- right section -->
        <div class=""></div>
    </div>
</template>