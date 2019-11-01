<template>
  <div class="Accueil">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="text-wrapper">
      <div class="title" data-content="404">
          404
      </div>

      <div class="subtitle">
          Oops, la page demandé n'existe pas
      </div>

      <div class="buttons">
          <router-link class="button" to="/">Retour a l'acceuil</router-link>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  data () {
    return {
      value: 'this is value'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url(https://fonts.googleapis.com/css?family=Raleway:700);
*, *:before, *:after {
  box-sizing: border-box;
}



.text-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 6em;
  font-weight: 700;
  color: #EE4B5E;
}

.subtitle {
  font-size: 40px;
  font-weight: 700;
  color: #1FA9D6;
}

.buttons {
  margin: 30px;
}
.buttons a.button {
  font-weight: 700;
  border: 2px solid #EE4B5E;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: #EE4B5E;
  border-radius: 26px;
  transition: all 0.2s ease-in-out;
}
.buttons a.button:hover {
  background-color: #EE4B5E;
  color: white;
  transition: all 0.2s ease-in-out;
}

</style>
