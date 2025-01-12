<template>
    <div class="w-full flex justify-center items-center mb-9">
      <div class="w-[90%] md:w-[80%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
        <div class="w-full flex flex-col items-start mb-9">
          <div class="text-3xl lg:text-4xl font-semibold tracking-[-2px] leading-2 text-white">
            Our Partners
          </div>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <div v-for="sponsor in sponsors" :key="sponsor.id" :class="['sponsor-box', sponsor.type === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1']">
            <div class="backdrop-brightness-150  rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:scale-[1.01] h-full border border-gray-700">
              <div class="w-full h-full flex flex-col items-center justify-center">
                <img v-if="sponsor.name !== 'mystery'" :src="sponsor.imageUrl" :alt="sponsor.name" class="w-full h-32 object-contain mb-4">
                <svg v-if="sponsor.name === 'mystery'" xmlns="http://www.w3.org/2000/svg" :width="sponsor.type === 'large' ? 240 : 120" :height="sponsor.type === 'large' ? 240 : 120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-question"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                <div v-if="sponsor.name === 'mystery'" class="h-6"></div>
                <h3 class="w-full text-center text-sm font-semibold text-gray-300 backdrop-brightness-75 border-yellow-500/20 border-[1px] p-2 rounded-lg mt-2">{{ sponsor.partnershipType }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const sponsors = ref([
    {
      id: 1,
      name: 'mystery',
      imageUrl: "???",
      type : "large",
      partnershipType: '? ? ?'
    },
    {
      id: 2,
      name: 'mystery',
      imageUrl: "???",
      type : "regular",
      partnershipType: '? ? ?'
    },
    {
      id: 3,
      name: 'mystery',
      imageUrl: "???",
      type : "regular",
      partnershipType: '? ? ?'
    },
    {
      id: 4,
      name: 'mystery',
      imageUrl: "???",
      type : "regular",
      partnershipType: '? ? ?'
    },
    {
      id: 5,
      name: 'mystery',
      imageUrl: "???",
      type : "regular",
      partnershipType: '? ? ?'
    },
    
  ])
  </script>
  
  <style scoped>
  .sponsor-box {
    @apply flex flex-col;
  }
  </style>