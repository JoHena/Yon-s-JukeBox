<script setup lang="ts">
import Play from 'vue-material-design-icons/PlayOutline.vue'
import Share from 'vue-material-design-icons/Share.vue'

interface PlayerProps {
    song: string,
    author: string
}

defineProps<PlayerProps>()

</script>

<template>
    <li class="flex items-center w-full font-bold border-white md:border-r">
        <div class="flex items-center flex-grow gap-5">
                <audio src="" />
                <Play class="transition-colors h-fit hover:text-white" />
            <div>
                <div>{{song}}</div>
                <div>{{author}}</div>
            </div>
        </div>

        <div class="flex-grow-0 w-1/12">
            3:00
        </div>

        <div class="flex-grow-0 w-1/12 ml-4">
            <Share />
        </div>
    </li>
</template>