<template>
    <div class="child_item display-fc">
        <input type="checkbox" class="check_item" v-model="checked" @change="onChecked" />
        <label class="name_item">{{ text }}</label>
        <button class="button_x display-fc" @click="OnRemoveItem">x</button>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        text: '',
        id: 0
    },

    methods: {
        onChecked() {
            this.$store.commit('setCheckedItem', {id:this.id, checked:this.checked});
        },
        OnRemoveItem() {
            this.$store.commit('removeItem', this.id);
        }
    }
}
</script>

<style scoped>
.child_item {
    width: 100%;
    min-height: 40px;
    border: 1px solid rgb(180, 180, 180);
    border-radius: 5px;
    margin-top: 5px;
}

.display-fc {
    display: flex;
    justify-content: start;
    align-items: center;
}

.name_item {
    text-align: center;
    width: 100%;
}

.button_x {
    margin-right: 5px;
    color: red;
    font-size: 20px;
    border-radius: 50px;
    border-color: transparent;
    width: 25px;
    height: 25px;
}

.button_x:hover {
    cursor: pointer;
    background-color: #41b883;
    color: #e54242;
}
</style>