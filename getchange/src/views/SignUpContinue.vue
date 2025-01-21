<template>
  
    <div class=" m-auto p-0 h-full rounded-xl shadow-xl shadow-grey-300">
        <form action="" class=" p-6 h-full text-gray-900">
            <div class="flex justify-between flex-grow my-6 flex-col">
                <div class="flex flex-col my-3">
                    <label for="businessName">Business Name</label>
                    <input type="text" class="text-blue-900 border-b  " placeholder="Josh Bakery Ventures">
                </div>             
                <div class="flex flex-col my-3">
                    <label for="businessAddress">Business Address</label>
                    <input type="text" class="text-blue-900 border-b  " placeholder="62, Bode Thomas, Surulere, Lagos">
                </div>             
                <div class="flex flex-col my-3">
                    <label for="phoneNumber">Phone Number</label>
                    <input type="text" class="text-blue-900 border-b  " placeholder="+2348012345678">
                </div>             

            </div>
           
            <div class="flex justify-end items-end my-6 ">
                <router-link to ="/Onboard" class="bg-green-500 text-white p-3 w-2/5 text-center rounded-lg">Finish</router-link>
            </div>
           
        </form>
       
    </div>
    

    
</template>
<script>

export default{
    name: 'SignUpContinue',
    data() {
        return {
            msg: "This is business detail page"
        }
    },
   
}
</script>

