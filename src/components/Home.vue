<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Select the subtitles"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubstitles()"
      />
    </v-form>
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
      files: [],
      groupedWords: [
        { name: "word1", amount: 1200 },
        { name: "word2", amount: 900 },
        { name: "word3", amount: 750 }
      ]
    };
  },

  methods: {
    processSubstitles() {
      console.log(this.files);
    }
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
