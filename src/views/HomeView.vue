<script>
import MyCanvas from "@/components/MyCanvas.vue";
import SizeInput from "@/components/SizeInput.vue";
import MultiSelectDropdown from "@/components/MultiSelectDropdown.vue";
import myCard from "@/components/myCard.vue";
import draggable from "vuedraggable";
import html2canvas from "html2canvas";
import JsFileDownloader from "js-file-downloader";
import FancyButton from "@/components/FancyButton.vue";
export default {
  name: "HomeView",

  //Declare Components ----------------------------------------------------------

  components: {
    SizeInput,
    MyCanvas,
    MultiSelectDropdown,
    myCard,
    draggable,
    FancyButton
  },

  //Data ----------------------------------------------------------------

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

      hideIcons: false
    };
  },

  //Created (call fetch and add eventlistener for window resize) ---------------
  created() {
    this.fetchData();
    this.updateViewportWidth();
    window.addEventListener("resize", this.updateViewportWidth);
  },

  //Methods ---------------------------------------------------------------------------

  methods: {

    //Get size from sizeinput emit and send to data to be used in canvas styling
    updateCanvasSize(Size) {
      this.canvasSize.height = `${Size.height}`;
      this.canvasSize.width = `${Size.width}`;

      //Call function to check for overflow when canvas is resized
      this.updateViewportWidth();

      this.$nextTick(() => {
        if (this.$refs.MyCanvas) {
          this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection.scrollHeight;
          this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection.scrollWidth;
        }
      })
    },

    //Fetch the data
    async fetchData() {
      const promise = await fetch("/data.json");
      const data = await promise.json();
      this.fetchedData = data;
      this.isFetched = true;
    },

    //Get selected object from autocomplete component and push data-object to cards array to be rendered. 
    addCard(added) {
      this.cards.push(added);

      //Check for overflow when more cards are added
      this.$nextTick(() => {
        if (this.$refs.MyCanvas) {
          this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection.scrollHeight;
          this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection.scrollWidth;
        }
      })
    },

    //Get title of removed object from autocomplete, find it in cards array and delete
    removeCard(removed) {
      let found = this.cards.find((value) => value.title === removed);
      let index = this.cards.indexOf(found);
      this.cards.splice(index, 1);

      // Wait for the DOM to update before checking for overflow
      this.$nextTick(() => {
        if (this.$refs.MyCanvas) {
          this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection?.scrollHeight || 0;
          this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection?.scrollWidth || 0;
        }
      });
    },

    //Update viewportWidth value then call function to calculate scale based on overflow
    updateViewportWidth() {
      this.viewportWidth = window.innerWidth - 40;
      this.calculateScale();
    },

    //Check if canvas has overflow and scale it down to fit
    calculateScale() {
      let percentage = (this.viewportWidth / this.canvasSize.width) * 100;
      this.scalePercentage = percentage;

      if (percentage < 100) {
        this.hasWindowOverflow = true;
      } else {
        this.hasWindowOverflow = false;
      }
    },

    onDrag() {
      this.canvasSize.scrollHeight = this.$refs.MyCanvas.$refs.canvasSection?.scrollHeight || 0;
      this.canvasSize.scrollWidth = this.$refs.MyCanvas.$refs.canvasSection?.scrollWidth || 0;
    },

    testHideIcons() {
      this.hideIcons = true;

      this.$nextTick(() => this.createImage())
    },

    //HTML2Canvas transforms canvas into png
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
      })
        .then(() => location.reload());
    },
  },

  //Checks if canvas content is overflowing to display error-msg 
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
  <!--Template starts here ------------------------------------------------------>

  <article id="fullLayout">

    <!--This is where users selections are made ------------------------------->
    <div id="options-header">
      <h1>Create a custom Javascript cheat sheet</h1>

      <!--Input fields and buttons ---------------->
      <div id="firstRow">
        <SizeInput @emitSize="updateCanvasSize">
          <!--Button here ---------------->
          <FancyButton @clicked="testHideIcons">Download Image</FancyButton>
        </SizeInput>
      </div>

      <!--Multiselect dropdown here ---------------->
      <MultiSelectDropdown @cardAdded="addCard" @cardRemoved="removeCard" v-if="isFetched" :data-prop="fetchedData" />
    </div>

    <!--This is the error message that is displayed if canvas has overlow ----->
    <section id="error" v-if="checkOverflow">
      <h4>Overflow detected</h4>
      <p>Rearrange cards, remove cards or edit canvas dimensions.</p>
    </section>

    <!--This is the canvas ---------------------------------------------------->
    <MyCanvas :style="{
      height: canvasSize.height + 'px',
      width: canvasSize.width + 'px',
      transform: hasWindowOverflow ? `scale(${scalePercentage}%)` : 'none'
    }" id="myCanvas" ref="MyCanvas">

      <!--This is the canvas slot containing a draggable component that loops 
      through the cards array ---------------------------------------------->
      <draggable v-if="cards.length > 0" id="draggable" v-model="cards" item-key="id" @drag="onDrag">
        <template #item="{ element: card }">
          <myCard :card-prop="card" :hide-icons="hideIcons" />
        </template>
      </draggable>

      <!--Canvas empty state here-------------------------------------------->
      <div id="emptyState" v-else>
        <h2>Canvas is empty</h2>
        <h3 :canvasSize>Canvas size: {{ canvasSize.width }} x {{ canvasSize.height }} pixels.</h3>
        <p class="pLarge"> Add some cards using the dropdown above</p>
      </div>

    </MyCanvas>

  </article>

</template>


<style scoped>
#firstRow {
  margin-top: 20px;
  margin-bottom: 20px;
}

#emptyState {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}

#fullLayout {
  height: 100%;
  padding: 20px;
  padding-bottom: 60px;
}

#myCanvas {
  transform-origin: top left;
  margin: auto;
}

#draggable {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  column-gap: 1rem;
  row-gap: 1rem;
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
