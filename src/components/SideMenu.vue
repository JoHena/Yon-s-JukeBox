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
    <nav :style="open.isOpen && {opacity: '0%'}" class="fixed z-50 text-white transition-opacity opacity-100 right-64 top-20">
        <ul class="flex flex-col gap-5">
            <li class="mb-12"><button @click="open.changeState"><Menu/></button></li>
            <li><Twitter/></li>
            <li><Twitch/></li>
            <li><Insta/></li>
        </ul>
    </nav>

    <nav :style="open.isOpen && {right: '0px'}" class="flex flex-col gap-8 fixed -right-[350px] w-[350px] z-50 h-full p-8 text-2xl font-semibold text-white transition-all duration-300 bg-gradient-to-b from-transparent to-35% to-[#010204] border-l border-white border-opacity-10">
        <div class="flex justify-between pb-6 tracking-tighter border-b border-white">
            Yon's Juke box
            <button @click="open.changeState">X</button>
        </div>
        <ul class="flex flex-col gap-5 text-xl *:flex *:gap-5 *:items-center">
            <li><Random/> Random album</li>
            <li><More/> More from me</li>
            <li><Donate/> Donate</li>
        </ul>
    </nav>
</template>