<template>
    <div class="toolbar" v-show="!$store.getters.itemEmpty">
        <button class="button_removeAll button_primary" @click="removeAllSelected">Borrar seleccionados</button>
    </div>
</template>

<script>
export default {
    name: 'ToolbarMain',
    methods: {
        removeAllSelected() {
            this.$store.commit('removeAllSelectedItem');
        }
    }
}
</script>

<style scoped>
.toolbar {
    margin-top: 20px;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>