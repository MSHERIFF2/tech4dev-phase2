<template>
    <div>
        <nav>
            <span class="text-3xl font-bold" @click="searchHide">X</span>
        </nav>
        <form action="" class=" p-32 flex flex-col w-4/5 m-auto">
            <input type="text" placeholder="Search Product..." class="text-6xl border-b-2 
            focus:outline-none  focus:border-gray-600"/>
            <p class="text-left"># Hi enter to search for product</p>
        </form>
    </div>
</template>