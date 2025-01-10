<template>
    <div class="">
        <form action="">
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <label for="firstName">First Name</label>
                    <input type="text" class="">
                </div>
                <div class="flex flex-col">
                    <label for="lasttName">Last Name</label>
                    <input type="text" class="">
                </div>

            </div>
            <div>
                <label for="email">Email</label>
                <input type="mail" class="email">
            </div>
            <div>
                <label for="email">Password</label>
                <input type="password" class="email">
            </div>
           <router-link to ="/DashBoard" class="bg-green-500 text-white p-3 ">Continue</router-link>
        </form>
    </div>
</template>
<script>
export default {
    name: 'details',
    data() {
        return {

        }
    },
}
</script>