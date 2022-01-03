import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        displayedDynamicComponent: '',
        dynamicComponents: [
            {
                id: 0,
                name: 'DynamicComponent1'
            },
            {
                id: 1,
                name: 'DynamicComponent2'
            }
        ]
    },
    mutations: {
        setDynamicComponent(state, component){
            state.displayedDynamicComponent = component;
        }
    },
    getters: {
        getComponentNames(state) {
            let arrayToReturn = [];
            for (let i = 0; i < state.dynamicComponents.length; i++) {
                arrayToReturn.push(state.dynamicComponents[i].name);
            }
            return arrayToReturn;
        }
    },
    actions: {
        signIn(credentials) {
            // eslint-disable-next-line no-console
            console.log(credentials);
            //fetch
        }
    }
});

export default store;
