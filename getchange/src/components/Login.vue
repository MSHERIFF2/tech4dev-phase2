<template>
    <div class="flex m-auto p-12">
        <form action="" class="flex flex-col p-6 shadow-xl shadow-gray-100 rounded-xl w-4/5 m-auto  justify-center items-center">
            <div class="m-6 w-4/5 flex flex-col"> 
                <label for="username">Username</label>
                <input class="border-b w-4/5 " type="text" />
            </div>
            <div class="m-6 w-4/5 flex flex-col"> 
                <label>Password</label>
                <input class="border-b w-4/5" type="password">
            </div>
            <div class="flex justify-between items-center w-2/5">
                <router-link to="/" class="bg-green-500 text-white text-center p-3 rounded-xl w-2/5">Log out</router-link>
                <router-link to="/DashBoard" class="bg-green-500 text-white text-center p-3 rounded-xl w-2/5">Log in</router-link>
            </div>



        </form>
    </div>
</template>