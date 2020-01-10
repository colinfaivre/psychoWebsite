export const state = () => ({
    menuIsOpen: false
})

export const mutations = {
    toggleMenu(state) {
        state.menuIsOpen = !state.menuIsOpen
    },
    openMenu(state) {
        state.menuIsOpen = true
    },
    closeMenu(state) {
        state.menuIsOpen = false
    },
}