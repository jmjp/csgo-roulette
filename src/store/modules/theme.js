export default {
    state: {
        theme: {}
    },
    mutations: {
        changeTheme(state, theme) {
            state.theme = theme;
            localStorage.theme = theme;
        }
    },
    actions: {
        initTheme({ commit }) {
            const cachedTheme = localStorage.theme ? localStorage.theme : false;
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (cachedTheme)
                commit('changeTheme', cachedTheme)
            else if (userPrefersDark)
                commit('changeTheme', 'dark')
            else
                commit('changeTheme', 'light')
        },
        toggleTheme({ commit }) {

            switch (localStorage.theme) {
                case 'light':
                    commit('changeTheme', 'dark')
                    break;

                default:
                    commit('changeTheme', 'light')
                    break;
            }
        }
    },
    getters: {
    },
}
