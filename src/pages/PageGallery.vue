<script>
import AppGallery from "../components/AppGallery.vue";
import Prelis9 from "../assets/images/gallery/prelis9.jpg";
import Prelis13 from "../assets/images/gallery/prelis13.jpg";
import judges from "../assets/images/gallery/judges.jpg";
import award_2 from "../assets/images/gallery/award_2.jpg";
import group_pic_1 from "../assets/images/gallery/group_pic_1.jpg";
import crowd_1 from "../assets/images/gallery/crowd_1.jpg";
import crowd_2 from "../assets/images/gallery/crowd_2.jpg";
import crowd_3 from "../assets/images/gallery/crowd_3.jpeg";
import thulasi from "../assets/images/gallery/thulasi_1.jpg";
import crowd_5 from "../assets/images/gallery/crowd_5.jpg";
import trophies from "../assets/images/gallery/trophies.jpg";
import trophy_2 from "../assets/images/gallery/trophy_2.jpg";
import trophy_3 from "../assets/images/gallery/trophy_3.jpg";
import group_pic_2 from "../assets/images/gallery/group_pic_2.jpg";
import ceremony_1 from "../assets/images/gallery/ceremony_1.jpg";
import stage_1 from "../assets/images/gallery/stage_1.jpg";
import winner_1 from "../assets/images/gallery/winner_1.jpg";
import c_1 from "../assets/images/gallery/1.png";
import c_2 from "../assets/images/gallery/2.png";
import c_3 from "../assets/images/gallery/3.jpg";
import c_4 from "../assets/images/gallery/4.jpg";
import c_5 from "../assets/images/gallery/5.jpg";
import c_6 from "../assets/images/gallery/6.jpg";
import c_7 from "../assets/images/gallery/7.jpg";
import c_8 from "../assets/images/gallery/8.jpg";
import c_9 from "../assets/images/gallery/9.jpg";
import c_10 from "../assets/images/gallery/10.jpg";

export default {
  components: {
    AppGallery,
  },
  data() {
    return {
      images: [
        c_1,
        c_2,
        c_3,
        c_4,
        trophies,
        c_6,
        c_7,
        c_8,
        Prelis9,
        c_9,
        c_10,
        c_5,
      ],
    };
  },
};
</script>

Gavel Logo
Contact
<template>
  <main>
    <div class="container">
      <div class="row mb-5 p-2">
        <AppGallery :images="images" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  font-size: 2rem;
}
</style>