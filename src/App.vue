<template>
  <div class="main">
    <TitleMain msg="Welcome to Your Vue.js App" />

    <!-- Input para agregar los items -->
    <InputIntem/>

    <!-- Toolbar -->
    <Toolbar/>

    <!-- Lista de items -->
    <div class="content_item">
        <Intem v-for="(item, index) in $store.getters.itemList" :text="item.text" :id="index" :key="item.text"/>
      </div>
  </div>
</template>

<script>
import TitleMain from './components/TitleMain.vue'
import InputIntem from './components/InputItem.vue'
import Toolbar from './components/Toolbar.vue'
import Intem from './components/Item.vue'

export default {
  name: 'App',
  components: {
    TitleMain,
    InputIntem,
    Toolbar,
    Intem,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  width: 500px;
  margin: auto;
}

.content_item {
  margin: auto;
  margin-top: 20px;
  width: 500px;
}

.button_primary {
  border: 0px;
  border-radius: 5px;
  background-color: rgb(90, 153, 241);
  color: white;
  padding: 11px;
}

.button_primary:hover:not(.disable) {
  background-color: rgb(59, 134, 240);
  cursor: pointer;
}

.button_removeAll {
  background-color: rgb(241, 90, 120);
}

.button_removeAll:hover {
  background-color: rgb(240, 59, 140);
}
</style>
