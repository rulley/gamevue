export const state = {
    layoutType: 'vertical',
    layoutWidth: 'fluid',
    leftSidebarType: 'dark',
    topbar: 'dark',
    mode: 'light',
    dir: false
}

export const getters = {}

export const mutations = {
    CHANGE_LAYOUT(state, layoutType) {
        state.layoutType = layoutType;
    },
    CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
        state.layoutWidth = layoutWidth;
    },
    CHANGE_LEFT_SIDEBAR_TYPE(state, leftSidebarType) {
        state.leftSidebarType = leftSidebarType;
    },
    CHANGE_TOPBAR(state, topbar) {
        state.topbar = topbar;
    },
    CHANGE_MODE(state, mode) {
        state.mode = mode
        document.documentElement.setAttribute('data-bs-theme', state.mode)
    },
    CHANGE_DIR(state, dir) {
        state.dir = dir
        if (state.dir === 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl')
        } else {
            document.documentElement.removeAttribute('dir')
        }
    }
}

export const actions = {
    changeLayoutType({ commit }, { layoutType }) {
        commit('CHANGE_LAYOUT', layoutType);
    },

    changeLayoutWidth({ commit }, { layoutWidth }) {
        commit('CHANGE_LAYOUT_WIDTH', layoutWidth)
    },

    changeLeftSidebarType({ commit }, { leftSidebarType }) {
        commit('CHANGE_LEFT_SIDEBAR_TYPE', leftSidebarType)
    },

    changeTopbar({ commit }, { topbar }) {
        commit('CHANGE_TOPBAR', topbar)
    },
    changeMode({ commit }, { mode }) {
        commit('CHANGE_MODE', mode)
    },
    changeDir({ commit }, { dir }) {
        commit("CHANGE_DIR", dir)
    }
}
