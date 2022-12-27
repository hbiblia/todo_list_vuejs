import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    items: []
  },
  getters: {
    itemList(state) {
      return state.items;
    },
    itemEmpty(state) {
      return state.items.length == 0;
    }
  },
  mutations: {
    addItem(state, name) {
      state.items.push({ checked: false, text: name, id: 0 });
    },
    setCheckedItem(state, prop) {
      state.items[prop.id].checked = prop.checked;
    },
    removeItem(state, id) {
      state.items.splice(id, 1);
    },
    removeAllSelectedItem(state) {
      for (let i = state.items.length - 1; i >= 0; i--) {
        if (state.items[i].checked == true) state.items.splice(i, 1);
      }
    },
  },
  actions: {
  },
  modules: {
  },
  plugins:[vuexLocal.plugin]
})
