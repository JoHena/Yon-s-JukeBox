<script setup>
  import Player from './components/Player.vue';
  import Streamer from './components/Streamer.vue';
  import ListenButton from './components/Buttons/ListenButton.vue';
  import ShareButton from './components/Buttons/ShareButton.vue';
  import SideMenu from './components/SideMenu.vue';
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
      <div class="flex flex-col items-center w-[60%] pt-[10%] gap-20">


        <section class="flex gap-[7%] w-full text-white">
          <div class="flex gap-2">
            <div class="flex gap-3 font-medium text-[#4d5877] album-release italic">{{ album.name }}<div class="flex gap-3 text-white"><span>—</span> {{ album.release_date }}</div></div>
            <img v-bind:src="album.images[0].url" class="box-img" />
          </div>
          <div class="flex flex-col self-center">
            <h1 class="text-6xl bg-white album-name bg-clip-text">{{ album.name }}</h1>
            <p class="text-3xl font-bold tracking-tight">{{ album.artists[0].name }}</p>
  
            <div class="flex items-center gap-2 mt-10 font-semibold text-white">
              <ListenButton />
              <ShareButton />
            </div>
          </div>
        </section>

        <section class="flex flex-col w-full gap-5 text-white">
          <h2 class="text-5xl font-bold tracking-wide text-white">STREAM IT YOUR WAY</h2>
          <Streamer />
        </section>

        <section class="flex flex-col w-full gap-16 text-white">
          <h3 class="text-5xl font-bold tracking-wide text-white">TRACK LIST</h3>
          <ol class="flex flex-col w-full gap-6 list-decimal list-inside">
            <Player v-for="track in album.tracks.items" :song="track.name" :author="track.artists[0].name" />
          </ol>
        </section>

        <section class="flex flex-col w-full text-white gap-14">
          <h4 class="text-5xl font-bold tracking-wide text-white">Music Video</h4>
          <iframe class="w-full h-[657px]" src="https://www.youtube.com/embed/5LlhBfF5EUQ?si=gyx9I9GAttTX3keN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <footer class="w-full text-xl text-white">
          <div class="grid items-start justify-between grid-cols-3 py-10 font-extrabold tracking-wider text-white border-y">
            <div class="flex flex-col">
              <div>ABOUT</div>
              <div>CONTACT ME</div>
              <div>NEWS</div>
            </div>
            <div>
              <div>TERMS OF SERVICE</div>
              <div>PRIVACY POLICY</div>
            </div>
            <div>
              <div>Music News letter</div>
              <p class="text-lg italic text-gray-500">Don't miss a thing, stay up to date with the latest news from us.</p>
            </div>
          </div>

          <div class="py-6 italic">2024 - John M. </div>
        </footer>

      </div>
    </div>
  </main>
</template>
