<script setup>
  import Player from './components/Player.vue';
  import Streamer from './components/Streamer.vue';
  import ListenButton from './components/Buttons/ListenButton.vue';
  import ShareButton from './components/Buttons/ShareButton.vue';
  import SideMenu from './components/SideMenu.vue';
  import Footer from './components/Footer.vue';
  import { onMounted, reactive, ref } from 'vue'
  import { getSpotifyToken, getSpotifyAlbum } from './api/api'

  const loading = ref(true)
  const album = ref()
  

  onMounted(async ()=> {
    const data = await getSpotifyToken()
    const albumData = await getSpotifyAlbum(data.access_token)
    album.value = albumData
    loading.value = false

  })

</script>

<template>
  
  <template v-if="loading">Loading</template>

  <main v-else :style="{
    'background-image': 'linear-gradient(to bottom, hsla(0, 100%, 41%, 0.64), #010204), url(' + album.images[0].url + ')'
  }">
    <SideMenu />
    
    <div class="flex flex-col items-center w-full backdrop-blur-sm grain">
      <div class="flex flex-col items-center w-full xl:w-[60%] gap-20">


        <section class="flex gap-8 xl:gap-[7%] w-full text-white flex-wrap justify-center items-center xl:justify-start pt-[10%]">
          <div class="flex flex-wrap-reverse gap-2 px-12">
            <div class="flex gap-3 font-medium text-[#4d5877] album-release italic">{{ album.name }}<div class="flex gap-3 text-white"><span>—</span> {{ album.release_date }}</div></div>
            <img v-bind:src="album.images[0].url" class="box-img w-[400px]" />
          </div>
          <div class="flex flex-col self-center">
            <h1 class="text-3xl bg-white md:text-5xl album-name bg-clip-text">{{ album.name }}</h1>
            <p class="text-2xl font-bold tracking-tight md:text-3xl">{{ album.artists[0].name }}</p>
  
            <div class="flex items-center gap-2 mt-10 font-semibold text-white">
              <ListenButton />
              <ShareButton />
            </div>
          </div>
        </section>

        <section class="flex flex-col w-full gap-5 px-[5%] text-white">
          <h2 class="text-3xl font-bold tracking-wide text-white md:text-5xl w-fit">STREAM IT YOUR WAY</h2>
          <Streamer />
        </section>

        <section class="flex flex-col w-full gap-16 text-white px-[5%]">
          <h3 class="text-3xl font-bold tracking-wide text-white md:text-5xl">TRACK LIST</h3>
          <ol class="flex flex-col w-full gap-6 list-decimal list-inside">
            <Player v-for="track in album.tracks.items" :song="track.name" :author="track.artists[0].name" />
          </ol>
        </section>

        <section class="flex flex-col w-full text-white gap-14">
          <h4 class="text-3xl md:text-5xl font-bold tracking-wide text-white px-[5%]">Music Video</h4>
          <iframe class="w-full h-[300px] md:h-[657px]" src="https://www.youtube.com/embed/5LlhBfF5EUQ?si=gyx9I9GAttTX3keN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <Footer />

      </div>
    </div>
  </main>
</template>
