<template>
  <v-container fluid>
    <div class="pills">
      <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill";

export default {
  components: {
    Pill
  },

  data: function() {
    return {
      groupedWords: [
        { name: "word1", amount: 1200 },
        { name: "word2", amount: 900 },
        { name: "word3", amount: 750 }
      ]
    };
  }
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
