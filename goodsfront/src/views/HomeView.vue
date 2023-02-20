<template>
  <div>
    <v-container>
      <header-view></header-view>
      <br />
      <home-banner></home-banner>
    </v-container>
  </div>
</template>

<script>
import HeaderView from "@/components/Home/HeaderView.vue";
import HomeBanner from "@/components/Home/HomeBanner.vue";

export default {
  name: "HomeVeiw",

  components: {
    HeaderView,
    HomeBanner,
  },
};
</script>
