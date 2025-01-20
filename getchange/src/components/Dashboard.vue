<template>
<div class="container flex flex-col w-full h-full">
    <div class="top w-['100%'] flex-col  mt-4">
        <div class="flex justify-between items-center w-2xl m-4 bg-white px-2 py-1 rounded">
            <span class="text-[#013C61] text-xl">Store Wallet</span>
            <span class=" font-bold text-xl text-[#013C61]"> ₦ 2,500
                </span>
                <button class="p-3 text-white bg-green-500">Top up wallet</button>
        </div>
        <div class="flex justify-between items-center w-2xl m-4 bg-white px-2 py-1 rounded">
            <span class=" text-xl text-[#013C61]">Total Disbursed</span>
            <span class=" font-bold text-xl text-[#013C61]"> ₦
                12,000
                </span>
                <button class="p-3 text-gray-500 border">View History</button>
        </div>
        
    </div>
    <div class="middl w-full p-6">
        <div class="wrapper text-[#013C61] flex justify-between items-center w-full">
            <span>Recent Activities</span>
            <div class="flex justify-around items-center gap-x-3">
                <button>1</button>
                <span>of</span>
                <span>8</span>
                <div class="flex justify-around items-center gap-x-3">
                    <button class="text-xs rounded-full w-4 h-4 bg-[#2BDA53] text-[#FFFFFF]">
                        <
                    </button>
                    
                    <button class=" text-xs rounded-full w-4 h-4 bg-[#2BDA53] text-[#FFFFFF]">
                        >
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>