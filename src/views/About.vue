<script>
import FancyIcon from '@/components/FancyIcon.vue';
export default {
  name: 'about',
  components: {
    FancyIcon
  }
}

</script>
<template>
  <article id="fullLayout">

    <section id="heroCopy">
      <h1>About the app</h1>
      <p class="pLarge">
        Create the perfect custom JavaScript cheat sheet with ease! This app lets you design and personalize cheat
        sheets for quick reference or sharing. Whether you’re a beginner or a pro, you can build a cheat sheet that’s
        tailored to your needs.
      </p>
    </section>

    <section id="features">
      <h2>Features</h2>

      <div class="featureWrapper">
        <FancyIcon>
          <font-awesome-icon class="fontAwesome" :icon="['fas', 'expand']" style="color: #000000;" />
        </FancyIcon>
        <div class="rightSide">
          <h3>Customizable Canvas Size</h3>
          <p>Start with the perfect canvas size for your cheat sheet. Choose dimensions that suit your style and the
            amount of information you want to display.</p>
        </div>
      </div>

      <div class="featureWrapper">
        <FancyIcon>
          <font-awesome-icon class="fontAwesome" :icon="['fas', 'object-group']" style="color: #000000;" />
        </FancyIcon>
        <div class="rightSide">
          <h3>Add and Organize Cards</h3>
          <p>Choose from a variety of JavaScript concepts, and arrange them as cards on your canvas. Add as many cards
            as you need, and organize them in a way that works for you. </p>
        </div>
      </div>

      <div class="featureWrapper">
        <FancyIcon>
          <font-awesome-icon class="fontAwesome" :icon="['fas', 'palette']" style="color: #000000;" />
        </FancyIcon>
        <div class="rightSide">
          <h3>Color Customization</h3>
          <p>Make your cheat sheet visually appealing by customizing the colors of each card. Pick background colors,
            text colors, and accent shades to match your style. </p>
        </div>
      </div>

      <div class="featureWrapper">
        <FancyIcon>
          <font-awesome-icon class="fontAwesome" :icon="['fas', 'file-arrow-down']" style="color: #000000;" />
        </FancyIcon>
        <div class="rightSide">
          <h3>Export as PNG</h3>
          <p>Once you’re happy with your custom cheat sheet, export it as a high-quality PNG for easy access or
            printing.</p>
        </div>
      </div>
    </section>

    <section id="whyThisApp">
      <h2>Why i created this app</h2>
      <div id="aboutWrapper">
        <img id="profilePic" src="../assets/179804923.jpeg" />
        <div id="paragraphsWrapper">
          <p>Hi, I’m Saga and I’m a frontend developer student. When i started learning Javascript I got tired of
            constantly
            breaking my workflow to Google simple things—where parentheses go, what methods are available, or quick
            syntax
            refreshers. Most cheat sheets I found online were cluttered with too much information, making it faster to
            just
            check MDN. But then I thought—why not build something better, while also learning a new framework?</p>
          <p>
            I wanted a tool that wasn’t just functional but also well-designed, easy to navigate, and adaptable to
            different
            needs. The biggest challenge was making the layout flexible enough to handle any canvas size and differently
            sized cards while keeping everything structured and readable. I placed a lot of focus on creating a clean
            and
            intuitive UI — because bad design shouldn’t get in the way of learning.
            This app is the result. It helps me code more, copy-paste less, and keep essential knowledge within reach.
            Hopefully, it does the same for you.
            <br><br>
            PS. More cards, concepts, languages and frameworks on it’s way :)
          </p>
        </div>
      </div>
    </section>

  </article>
</template>

<style scoped>
#fullLayout {
  max-width: 1000px;
  margin: auto;
  padding: 4rem;
}

#heroCopy {
  margin-top: 7rem;
  margin-bottom: 10rem;
}

#heroCopy p {
  max-width: 750px;
}

.iconCanvas {
  display: block;
}

p {
  font-size: 16px;
}

.pLarge {
  font-size: 20px;
}

#features {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.featureWrapper {
  display: flex;
  justify-content: space-between;
}

.featureWrapper p {
  margin-left: 40px;
}

.featureWrapper h3 {
  margin-left: 40px;
}

.rightSide {
  display: flex;
  flex-direction: column;
  max-width: 650px;
}

.line {
  height: 100px;
  width: 60px;
  background-color: black;

}

#whyThisApp {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
}

#profilePic {
  width: 250px;
  height: 250px;
  border-radius: 5px;
}

#aboutWrapper {
  display: flex;
  gap: 3rem;
  justify-content: space-around;
}

#paragraphsWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fontAwesome {
  scale: 1.5;
}

@media screen and (max-width: 850px) {
  #aboutWrapper {
    flex-direction: column;
  }

}
</style>