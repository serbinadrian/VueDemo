import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
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
        }
    },
    mutations: {
        setDynamicComponent(state, component) {
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
            alert("see console");
            console.log(credentials);
            //fetch
        }
    }
});

export default store;
