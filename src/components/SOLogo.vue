<script>
import SOLogo from "../assets/images/new_logo.png";
import SOXVIILogo from "../assets/images/SOXVII_LOGO_White.png";

export default {
  data() {
    return {
      logo: {
        filename: SOXVIILogo,
        alt: "Speech Olympiad Logo",
      },
    };
  },
};
</script>

<template>
  <img :src="logo.filename" :alt="logo.alt" class="logo" />
</template>

<style scoped>
.logo {
  object-fit: cover;
}
</style>