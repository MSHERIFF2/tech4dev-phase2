<template>
    <div class="flex w-screen h-screen">
        <div class=" w-2/5 h-full relative">
            <img :src="currentImageSrc" alt="currentImage" class="h-full w-full object-cover absolute inset-0 z-0" />
            <div class=" inset-0 z-20 absolute ">
                <div class=" w-full h-full flex flex-col justify-end pb-14 text-white items-center">
                    <div class="font-semibold text-xl">No Hazzles</div>
                    <div class="w-3/5 font-light text-l text-center my-2">Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                        elit, sed do eiusmod.</div>
                    <div class="flex  items-center space-x-4">
                        <div class="w-5 h-5 flex items-center justify-center border border-gray-400  rounded-full"
                            :class="currentImage === image ? 'border-gray-400' : 'border-transparent'"
                            v-for="image in images" :key="image">
                            <button class="w-2.5 h-2.5 rounded-full border"
                                :class="currentImage === image ? 'bg-green-700' : 'bg-gray-200'"
                                @click="currentImage = image"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" w-3/5 flex flex-col h-full p-6 ">
            <div class="w-full h-full m-5">
                <h1 class="text-blue-900 font-bold text-xl">Create your free account</h1>
                <p class="text-black-400 font-light text-l">Already registered? <a href="#" class="text-green-500 font-semibold text-l">Sign in</a> </p>
            </div>
            <div>
                <slot />

            </div>

            <div class="text-gray-700 flex justify-between text-sm font-light items-center text-gray-700">
                <div class="">By siging up, you agree to our <a class="text-green-500 font-semibold">Terms</a> and
                    Privacy <a class="text-green-500 font-semibold">Policy</a></div>
                <div class="">© 2019 Tinylabs. All rights reserved.</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AuthLayout',
    data() {
        return {
            currentImage: 'male.png',
            images: ['male.png', 'female.png'],
            intervalId: null
        };
    },
    computed: {
        currentImageSrc() {
            return (require(`@/assets/images/${this.currentImage}`))
        }
    },
    methods: {
        setImageRotation() {
            let currentIndex = this.images.indexOf(this.currentImage)
            this.intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % this.images.length;
                this.currentImage = this.images[currentIndex]

            }, 5000);
        }
    },
    mounted() {
        this.setImageRotation()
    },
    beforeDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
        }
    }
}
</script>
