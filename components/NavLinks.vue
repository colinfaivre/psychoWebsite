<template>
    <div class="links">
        <n-link class="logo-container" to="/" @click.native="closeMenu()">
            <img class="big-rings" src="@/assets/images/big-rings.png">
        </n-link>
        <n-link class="links-item" to="/#section1" v-smooth-scroll @click.native="closeMenu()">Parcours</n-link>
        <n-link class="links-item" to="/#section2" v-smooth-scroll @click.native="closeMenu()">Associations</n-link>
        <n-link class="links-item" to="/#hours" v-smooth-scroll @click.native="closeMenu()">Cabinet</n-link>
    </div>
</template>

<script>
export default {
    methods: {
        closeMenu() {
            this.$store.commit('closeMenu')
        }
    },
}
</script>

<style lang="scss" scoped>
@media (max-width: $tablet) {
    .rings {
        display: none;
    }
    .links {
        margin-top: 20px;
        width: calc(100% - 40px);
        display: flex;
        flex-direction: column;
    }
    .links-item {
        border-radius: 3px;
        text-decoration: none;
        color: $secondary-dark;
        font-size: 24px;
        width: 100%;
        text-align: center;
        padding-bottom: 9px;
        padding-top: 9px;
        &:hover {
            background-color: $primary-med-light;
        }
    }
    .logo-container {
        display: none;
    }
}

@media (min-width: $tablet) {
    .logo-container {
        width: 60px;
        height: 60px;
        padding: 10px;
        border-radius: 30px;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
            background-color: $secondary-dark;
        }
    }
    .big-rings {
        width: 40px;
        height: 40px;
    }
    .links {
        margin-top: 10px;
        margin-right: 10px;
        display: flex;
        align-items: center;
    }
    .links-item {
        text-decoration: none;
        color: inherit;
        padding: 10px;
        &:hover {
            color: black;
            background-color: $secondary-dark;
            border-radius: 5px;
        }
    }
}
</style>