<template>
  <div class="CrudPage">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Loader v-show="isLoading"></Loader>
    <ul class="cards" v-if="posts.length > 0" >
      <li class="cards__item" v-for="post in posts">
        <div class="card">
          <div class="card__image card__image--fence"></div>
          <div class="card__content">
            <div class="card__title">{{post.title}}</div>
            <p class="card__text">{{post.body}}</p>
            <textarea id="story" name="story"
              rows="5" cols="33" >
              {{post.body}}
            </textarea>
            <button class="btn btn--block card__btn" @click="clickOnUpdate(post.id)" >Update</button>
            <button class="btn btn--block card__btn" @click="clickOnDelete(post.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from './Store'
import Vuex from 'vuex'
import Loader from './Loader'

export default {
  store: store,
  name: 'CrudPage',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Loader
  },

  methods: {
    // adding functions from store
    ...Vuex.mapActions([
      'addPosts',
      'updatePost'
    ]),

    setIsLoading(isDisplay) {
      this.isLoading = isDisplay
    },

    clickOnUpdate (id) {
      console.log(id)
    },

    clickOnDelete(id) {
      console.log(id)
    },

    getAllPost() {
      this.setIsLoading(true)

      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        response.data.forEach(element => {
          this.addPosts(element)
        });

      },reponse => {
        console.log(reponse)
      }).then (_ => {
        this.setIsLoading(false)
      })
    },

    updateOnePost(id,messagebody) {
      this.setIsLoading(true)

      this.$http.put('https://jsonplaceholder.typicode.com/posts/'+id, {
        body: body
      }).then((response) => {
        this.updatePost({id:id,body:messagebody})
      },(response) => {
        console.log(response)
      }).then(_ => {
        this.setIsLoading(false)
      })
    }
  },
  computed:  {
    ...Vuex.mapGetters([
      'posts',
      'connectedUser'
    ]),
  },
  mounted() {
    if(this.posts <= 0){
      this.getAllPost()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  background-color: #f0f0f0;
}
body {
  color: #999999;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "liga" on;
}
img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.btn {
  background-color: white;
  border: 1px solid #cccccc;
  color: #696969;
  padding: 0.5rem;
  text-transform: lowercase;
}
.btn--block {
  display: block;
  width: 100%;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards__item {
  display: flex;
  padding: 1rem;
}
@media (min-width: 40rem) {
  .cards__item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards__item {
    width: 33.3333%;
  }
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.card:hover .card__image {
  -webkit-filter: contrast(100%);
          filter: contrast(100%);
}
.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}
.card__image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  -webkit-filter: contrast(70%);
          filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
}
.card__image::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
@media (min-width: 40rem) {
  .card__image::before {
    padding-top: 66.6%;
  }
}
.card__image--flowers {
  background-image: url(https://unsplash.it/800/600?image=82);
}
.card__image--river {
  background-image: url(https://unsplash.it/800/600?image=11);
}
.card__image--record {
  background-image: url(https://unsplash.it/800/600?image=39);
}
.card__image--fence {
  background-image: url(https://unsplash.it/800/600?image=59);
}
.card__title {
  color: #696969;
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.card__text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}
</style>
