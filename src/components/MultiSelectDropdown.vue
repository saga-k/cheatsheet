<script>
export default {
  name: "MultiSelectDropdown",

  props: {
    dataProp: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      localData: this.dataProp,

      titles: [],

      selectedTitles: [],
    };
  },

  created() {
    this.populateDropdown();
  },

  watch: {
    selectedTitles(newVal, oldVal) {
      if (newVal.length > oldVal.length) {
        let added = this.findSame(newVal);
        this.$emit("cardAdded", added);
      } else if (oldVal.length > newVal.length) {
        let removed = this.findRemoved(newVal, oldVal);
        this.$emit("cardRemoved", removed);
      }
    },
  },

  methods: {
    populateDropdown() {
      for (let i = 0; i < this.localData.length; i++) {
        let title = this.localData[i].title;
        this.titles.push(title);
      }
    },

    findSame(newVal) {
      for (let i = 0; i < this.localData.length; i++) {
        let index = newVal.length - 1;
        let dropdownTitle = newVal[index];
        let objectTitle = this.localData[i].title;
        let object = this.localData[i];

        if (objectTitle === dropdownTitle) {
          return object;
        }
      }
    },

    findRemoved(newVal, oldVal) {
      const removed = oldVal.filter((value) => !newVal.includes(value));
      return removed[0];
    },
  },
};
</script>

<template>
  <v-autocomplete
    label="choosePrinciple"
    :items="titles"
    v-model="selectedTitles"
    chips
    multiple
    closable-chips
    density="comfortable"
    variant="outlined"
    bg-color="white"
    color="#2E5A78"
  >
    <v-list-item>{{ titles }}</v-list-item>
  </v-autocomplete>
</template>

<style scoped>

::v-deep(.v-chip) {
  background-color: #2E5A78;
  color: white;
}

h1, h2, h3, h4, h5, h6, p, li, button{
  color: #5E5E5E;
}
</style>
