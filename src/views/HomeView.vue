<script>
import MyCanvas from "@/components/MyCanvas.vue";
import SizeInput from "@/components/SizeInput.vue";
import MultiSelectDropdown from "@/components/MultiSelectDropdown.vue";
import myCard from "@/components/myCard.vue";
import draggable from "vuedraggable";
import html2canvas from "html2canvas";
import JsFileDownloader from "js-file-downloader";

export default {
  name: "HomeView",

  components: {
    SizeInput,
    MyCanvas,
    MultiSelectDropdown,
    myCard,
    draggable,
  },

  data() {
    return {
      fetchedData: null,

      isFetched: false,

      canvasSize: {
        width: 1440,
        height: 900,
        scrollHeight: null,
        scrollWidth: null,
      },

      cards: [],

      viewportWidth: window.innerWidth,

      hasWindowOverflow: true,

      scalePercentage: null,
    };
  },

  created() {
    this.fetchData();
    this.updateViewportWidth();
    window.addEventListener("resize", this.updateViewportWidth);
  },

  methods: {
    updateCanvasSize(Size) {
      this.canvasSize.height = `${Size.height}`;
      this.canvasSize.width = `${Size.width}`;
      this.updateViewportWidth();
    },

    async fetchData() {
      const promise = await fetch("/data.json");
      const data = await promise.json();
      this.fetchedData = data;
      this.isFetched = true;
    },

    addCard(added) {
      this.cards.push(added);
      this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection.scrollHeight;
      this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection.scrollWidth;
    },

    removeCard(removed) {
      let found = this.cards.find((value) => value.title === removed);
      let index = this.cards.indexOf(found);
      this.cards.splice(index, 1);
      this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection.scrollHeight;
      this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection.scrollWidth;
    },

    updateViewportWidth() {
      this.viewportWidth = window.innerWidth - 40;
      this.calculateScale();
    },

    calculateScale() {
      let percentage = (this.viewportWidth / this.canvasSize.width) * 100;
      this.scalePercentage = percentage;

      if (percentage < 100) {
        this.hasWindowOverflow = true;
      } else {
        this.hasWindowOverflow = false;
      }
    },

    createImage() {
      console.log("something happened");
      html2canvas(document.querySelector("#myCanvas")).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");

        new JsFileDownloader({
          url: dataUrl,
          filename: "myCheatSheet.png",
        }).catch((error) => {
          console.error("Download failed", error);
        });
      });
    },
  },

  computed: {
    checkOverflow() {
      return (
        this.canvasSize.scrollWidth > Number(this.canvasSize.width) ||
        this.canvasSize.scrollHeight > Number(this.canvasSize.height)
      );
    },
  },
};
</script>

<template>
  <article id="fullLayout">
    <div id="options-header">
      <h1>Create a front end cheat sheet</h1>
      <div id="firstRow">
        <SizeInput @emitSize="updateCanvasSize" />
        <button @click="createImage">Download image</button>
      </div>
      <MultiSelectDropdown
        @cardAdded="addCard"
        @cardRemoved="removeCard"
        v-if="isFetched"
        :data-prop="fetchedData"
      />
    </div>

    <section id="error" v-if="checkOverflow">
      <h4>Overflow detected</h4>
      <p>Rearrange cards, remove cards or edit canvas dimensions.</p>
    </section>

    <MyCanvas
      :style="{
        height: canvasSize.height + 'px',
        width: canvasSize.width + 'px',
        transform: hasWindowOverflow ? `scale(${scalePercentage}%)` : 'none',
      }"
      id="myCanvas"
      ref="MyCanvas"
    >
      <draggable id="draggable" v-model="cards" item-key="id">
        <template #item="{ element: card }">
          <myCard :card-prop="card" />
        </template>
      </draggable>
    </MyCanvas>
  </article>
</template>

<style scoped>
#fullLayout {
  height: 100%;
  padding: 20px;
  padding-bottom: 60px;
}

#options-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  line-height: 1em;
}

#firstRow {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

#myCanvas {
  transform-origin: top left;
  margin: auto;
}

#draggable {
  display: flex !important;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  column-gap: 1rem;
  row-gap: 1rem;
}

button {
  background-color: lightgrey;
  width: fit-content;
  height: min-content;
  padding: 0rem 1rem;
  border-radius: 3px;
  font-size: 14px;
  height: 36px;
  text-wrap: nowrap;
}

#error {
  background-color: #ffe7e7;
  border: 1px solid #f02626;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#error p,
#error h4 {
  color: #f02626;
  line-height: 2em;
}
</style>
