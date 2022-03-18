import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: []
	},
	mutations: {
		addTodoItem(state, newItem) {
			state.todos.push(newItem);
		},
		toggleCompleteTodoItem(state, id) {
			const item = state.todos.find((item) => item.id === id);
			item.checked = !item.checked;
		},
		removeTodoItem(state, id) {
			const itemIndex = state.todos.findIndex((item) => item.id === id);
			state.todos.splice(itemIndex, 1);
		}
	}
});