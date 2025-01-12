<script setup>
  import GavelLogo from "./GavelLogo.vue";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import {
      faFacebook,
      faInstagram,
      faLinkedin,
      faWordpress,
  } from "@fortawesome/free-brands-svg-icons";
  // TODO: Check svg core bundle size
  library.add(faInstagram, faFacebook, faLinkedin);

  const socialMedia = [
      {
        profile: "instagram",
        icon: faInstagram,
        link: "https://www.instagram.com/gavelmora_",
      },
      {
        profile: "facebook",
        icon: faFacebook,
        link: "https://www.facebook.com/gavelmora/",
      },
      {
        profile: "linkedin",
        icon: faLinkedin,
        link: "https://www.linkedin.com/company/gavel-club-of-university-of-moratuwa/",
      },
      {
        profile: "Website",
        icon: faWordpress,
        link: "http://gavel.mrt.ac.lk/",
      },
    ]

  const contactsPersons = {
      title: "Contact",
      links: [
      {
          text: "Akindu Kalhara : +94 70 722 9859",
          href: "tel: +94 70 722 9859"
      },
      {
          text: "Saai Syvendra : +94 71 535 2524",
          href: "tel: +94 71 535 2524",
      },
      {
          text: "Sasindi Peiris : +94 77 348 3696",
          href: "tel: +94 71 77 348 3696"
      },
      {
          text: "Email : speecholympiadxvii@gmail.com",
          href: "mailto: speecholympiadxvii@gmail.com"
      },
      ],
  }
</script>

<template>
  <footer class="bg-inherit text-white backdrop-brightness-50 backdrop-blur-sm relative">
    <!-- <div class="absolute w-full h-full p-7">
        <div class="top-2 left-3 rotate-45 w-10 h-1 bg-white rounded-lg">2</div>
    </div> -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo -->
        <div class="flex flex-col items-center md:items-start">
          <GavelLogo />
        </div>

        <!-- Contact Persons -->
        <div class="text-center flex flex-col items-center mt-1">
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <div class="w-2/3 lg:w-3/4">
            <ul class="flex flex-col items-start">
                <li v-for="link in contactsPersons.links" :key="link.text" class="border-0 p-0 m-b-4">
                    <a :href="link.href" class="text-gray-400 m-0 p-0">{{ link.text }}</a>
                </li>
            </ul>
          </div>
        </div>

        <!-- Social Links --> 
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4 text-4xl">
            <a v-for="s in socialMedia" :href="s.link" class="text-gray-400" :key="s.profile">
              <font-awesome-icon :icon="s.icon"/>
              <span class="sr-only">{{ s.profile }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p class="text-sm w-full text-gray-400 text-center pb-4">
      © Speech Olympiad 2025.
    </p>
  </footer>
</template>
  
<style scoped>

font-awsome-icon {
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

font-awsome-icon:hover {
  color: #ffffff;
  text-shadow: 0 0 5px #bbbbbb;
}

a {
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

a:hover {
  color: #ffffff;
  text-shadow: 0 0 5px #bbbbbb;
}

</style>