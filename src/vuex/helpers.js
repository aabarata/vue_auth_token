import { mapGetters } from 'vuex'

// Mixin to use the vuex getter
export const authComputed = {
    ...mapGetters(['loggedIn'])
}