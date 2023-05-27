<script setup>

</script>

<template>
    <h1 class="text-5xl">Sign up on Duppy</h1>
    <main class="">
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
                <a href="/login" class="">Sign in</a>
            </p>
        </div>

        <!-- right section -->
        <div class=""></div>
    </main>
</template>