<script>
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
        <div class="iconCanvas"></div>
        <div class="rightSide">
          <h3>Customizable Canvas Size</h3>
          <p>Start with the perfect canvas size for your cheat sheet. Choose dimensions that suit your style and the
            amount of information you want to display.</p>
        </div>
      </div>

      <div class="line"></div>

      <div class="featureWrapper">
        <div class="iconCanvas"></div>
        <div class="rightSide">
          <h3>Add and Organize Cards</h3>
          <p>Choose from a variety of JavaScript concepts, and arrange them as cards on your canvas. Add as many cards
            as you need, and organize them in a way that works for you. </p>
        </div>
      </div>

      <div class="line"></div>

      <div class="featureWrapper">
        <div class="iconCanvas"></div>
        <div class="rightSide">
          <h3>Color Customization</h3>
          <p>Make your cheat sheet visually appealing by customizing the colors of each card. Pick background colors,
            text colors, and accent shades to match your style. Image suggestion: A preview of cards with different
            color schemes applied. </p>
        </div>
      </div>

      <div class="line"></div>

      <div class="featureWrapper">
        <div class="iconCanvas"></div>
        <div class="rightSide">
          <h3>Export as PNG</h3>
          <p>Once you’re happy with your custom cheat sheet, export it as a high-quality PNG for easy access or
            printing. Image suggestion: A download button with a PNG icon next to a cheat sheet design, showing the
            export process.</p>
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
  margin-top: 10rem;
  margin-bottom: 10rem;
}

#heroCopy p {
  max-width: 750px;
}

.iconCanvas {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: darkgray;
  margin-left: 10px;
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
  gap: 1.5rem;
}

.featureWrapper {
  display: flex;
  justify-content: space-between;
}

.rightSide {
  display: flex;
  flex-direction: column;
  max-width: 650px;
}

.line {
  height: 120px;
  width: 1px;
  background-color: black;
  margin-left: 35px;
  margin-top: -1.5rem;
}
</style>