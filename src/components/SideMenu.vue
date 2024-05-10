<script setup lang="ts">
import Menu from 'vue-material-design-icons/Menu.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Twitch from 'vue-material-design-icons/Twitch.vue'
import Insta from 'vue-material-design-icons/Instagram.vue'
import Random from 'vue-material-design-icons/Shuffle.vue'
import More from 'vue-material-design-icons/Plus.vue'
import Donate from 'vue-material-design-icons/Heart.vue'

import { reactive } from 'vue'

const open = reactive({
    isOpen: false,
    changeState() {
        this.isOpen = !this.isOpen
    }
})


</script>

<template>
    <nav :style="open.isOpen && {opacity: '0%'}" class="fixed z-50 text-white transition-opacity opacity-100 right-2 transiti h-fit xl:right-64 top-5 xl:top-20">
        <ul class="flex flex-col gap-5">
            <li class="px-1 py-1.5 xl:py-0 xl:px-0 shadow-sm shadow-red-500 bg-black xl:bg-transparent xl:shadow-none rounded-full xl:mb-8"><button @click="open.changeState"><Menu/></button></li>
            <li class="hidden xl:block"><a href=""><Twitter/></a></li>
            <li class="hidden xl:block"><a href=""><Twitch/></a></li>
            <li class="hidden xl:block"><a href=""><Insta/></a></li>
        </ul>
    </nav>

    <nav :style="open.isOpen && {right: '0px'}" class="flex flex-col gap-8 fixed xl:-right-[350px] -right-[200%] w-[100%] xl:w-[350px] z-50 h-full p-8 text-2xl font-semibold text-white transition-all duration-300 bg-gradient-to-b from-transparent to-35% to-[#010204] border-l border-white border-opacity-10">
        <div class="flex justify-between pb-6 tracking-tighter border-b border-white">
            Yon's Juke box
            <button @click="open.changeState">X</button>
        </div>
        <ul class="flex flex-col gap-5 text-xl *:flex *:gap-5 *:items-center">
            <li class="pb-1 duration-200 border-b border-transparent hover:border-white"><Random/> Random album</li>
            <li class="pb-1 duration-200 border-b border-transparent hover:border-white"><More/> More from me</li>
            <li class="pb-1 duration-200 border-b border-transparent hover:border-white"><Donate/> Help me out? | (｡•̀ᴗ-) $ </li>
        </ul>
    </nav>
</template>