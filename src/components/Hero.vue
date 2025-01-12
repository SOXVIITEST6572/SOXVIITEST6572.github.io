<script setup>
import { ref, onMounted } from 'vue';
import WingedAward from './WingedAward.vue';

const isLoaded = ref(false);
const textAnimationDone = ref(false);
const stars = ref([])

onMounted(() => {
    // Trigger the animation when the component is n
    setTimeout(() => {
        isLoaded.value = true;
    }, 0.1); // Slight delay to allow the DOM to render

    setTimeout(() => {
        textAnimationDone.value = true;
    }, 3000);

    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        stars.value.push({
        id: i,
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            filter : `blur(${Math.random() * 5}px)`,
            backgroundColor : `${Math.random() > 0.5 ? 'white' : '#EDC001'}`
        }
     })
    }
});
</script>

<template>
    <div class="w-full h-[78vh] sm:h-[82vh] md:h-[86vh] lg:h-[90vh] background-gradient flex flex-col lg:flex-row items-center justify-fill relative overflow-hidden">
        <div v-if="textAnimationDone" class="absolute inset-0">
          <div v-for="star in stars" :key="star.id" :style="star.style" class="star"></div>
        </div>
        <div class="absolute w-auto h-auto z-0 -translate-x-20 opacity-[30%] left-1/4 -translate-y-32 md:-translate-y-4 lg:translate-y-1">
            <WingedAward />
        </div>
        <div class="w-full lg:w-[78%] xl:w-[69%] h-full flex flex-col items-end justify-center p-2">
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="unveiled-animation">
                    <!-- Animate this div when the page loads -->
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="font-thin italic text-md md:text-2xl">Stories</div>
                <div class="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-semibold text-white">Unveiled</div>
            </div>
            <div class="flex flex-row justify-center items-baseline p-2 overflow-hidden">
                <Transition name="unleashed-animation">
                    <div v-if="isLoaded" class="font-thin italic text-md md:text-2xl unleashed-shadow">Wings</div>
                </Transition>
                <Transition name="unleashed-animation">
                    <div v-if="isLoaded" class="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-semibold unleashed-shadow ">Unleashed</div>
                </Transition>
            </div>
            <div class="flex flex-row justify-center items-baseline p-2">
                <Transition name="unbound-slide-left">
                    <div v-if="!isLoaded" class="absolute w-1/2 h-full left-0 bg-black z-20"></div>
                </Transition>
                <Transition name="unbound-slide-right">
                    <div v-if="!isLoaded" class="absolute w-1/2 h-full right-0 bg-black z-20"></div>
                </Transition>
                <div class="font-thin italic text-md md:text-2xl text-[#EDC001]">Limits</div>
                <div class="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-semibold text-[#EDC001] unbound-text-shadow">Unbound</div>
            </div>
        </div>
    </div>
</template>



<style>

.unleashed-shadow {
    text-shadow: 0 0 10px #BC9C23;
    /* text-shadow: 0 0 5px #FF7900ff; */
}

.unbound-text-shadow {
    text-shadow: 0 0 10px #BC9C23;
}

.star {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 9999px;
  backdrop-filter: blur(100%);
  opacity: 0;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0% {
    opacity: 0;
    transform: scale(1);
    translate: 0 0;
  }
  50% {
    opacity: 0.7;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1);
    translate: 0 -30px;
  }
}

.background-gradient {
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: radial-gradient(75% 75% at 50% 50%, #000000 59%, #181818 100%);
}

.unveiled-animation-enter-active, .unveiled-animation-leave-active {
    transition: transform 1s;
    transition-delay: 0.2s;
}

.unveiled-animation-enter-from {
    transform: translateY(-100%);
}

.unveiled-animation-enter-to {
    transform: translateY(0);
}

.unveiled-animation-leave-to {
    transform: translateY(-100%);
}



.unleashed-animation-enter-active, .unleashed-animation-leave-active {
    transition: transform 1s, opacity 1s;
    transition-delay: 1.2s;
}

.unleashed-animation-enter-from {
    transform: translateY(100%); /* Slide upwards from below */
    opacity: 0;
}

.unleashed-animation-enter-to {
    transform: translateY(0);
    opacity: 1;
}


.unbound-slide-left-enter-active, .unbound-slide-left-leave-active {
    transition: transform 1s ease-in-out;
    transition-delay: 2.2s;
}

.unbound-slide-left-leave-from {
    transform: translateX(0);
}

.unbound-slide-left-leave-to {
    transform: translateX(-100%);
}

.unbound-slide-right-enter-active, .unbound-slide-right-leave-active {
    transition: transform 1s ease-in-out;
    transition-delay: 2.3s;
}

.unbound-slide-right-leave-from {
    transform: translateX(0);
}

.unbound-slide-right-leave-to {
    transform: translateX(100%);
}


</style>