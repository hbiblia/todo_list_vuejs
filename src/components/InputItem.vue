<template>
    <input type="text" placeholder="Todo Item" v-model="name" class="input_item" />
    <button class="button_primary" :class="{disable:inputEmpty()}" @click="addItemStore">Add Todo</button>
</template>

<script>
export default {
    name: 'Input Items',

    data() {
        return {
            name: ""
        }
    },

    methods: {
        addItemStore() {
            if (!this.inputEmpty()) {
                this.$store.commit('addItem', this.name);
                this.name = "";
            }
        },
        inputEmpty(){
            return this.name.length == 0;
        }
    }
}
</script>

<style scoped>
.input_item {
    padding: 10px;
    border: 1px solid rgb(194, 194, 194);
    margin-right: 5px;
    outline: none;
}
.disable {
    pointer-events: none;
    cursor:auto;
    background-color: rgb(102 102 102);
}
</style>