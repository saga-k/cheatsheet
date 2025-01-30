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
      <SizeInput @emitSize="updateCanvasSize" />
      <MultiSelectDropdown
        @cardAdded="addCard"
        @cardRemoved="removeCard"
        v-if="isFetched"
        :data-prop="fetchedData"
      />
    </div>

    <button @click="createImage">Download</button>
    <p v-if="checkOverflow">Testing error</p>

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
</style>
