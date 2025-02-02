<template>
    <div class=" m-auto p-0 h-full rounded-xl shadow-xl shadow-grey-300">
        <form action="" class=" p-6 h-full text-gray-900">
            <div class="flex justify-between flex-grow my-6">
                <div class="flex flex-col my-3">
                    <label for="firstName">First Name</label>
                    <input type="text" class="text-blue-900 border-b  " placeholder="Joshua">
                </div>
                <div class="flex flex-col my-3 ">
                    <label for="lasttName">Last Name</label>
                    <input type="text" class="text-blue-900 border-b" placeholder="Bakare">
                </div>

            </div>
            <div class="flex flex-col my-3">
                <label for="email">Email</label>
                <input type="mail" class="border-b" placeholder="josh.bakery@gmail.com">
            </div>
            <div class="flex flex-col my-3">
                <label for="password">Password</label>
                <input type="password" class="border-b" placeholder="123456" mask>
            </div>
            <div class="flex justify-end items-end my-6 ">
                <router-link to ="/SignUpContinue" class="bg-green-500 text-white p-3 w-2/5 text-center rounded-lg">Continue</router-link>
            </div>
           
        </form>
       
    </div>
</template>
