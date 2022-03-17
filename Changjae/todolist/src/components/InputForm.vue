<template>
<div>
	<input type="text" v-model="value" /><button @click="onClick()">add</button>
</div>
</template>

<script>
export default {
	name: 'InputForm',
	data: () => ({
		value: ""
	}),
	methods: {
		onClick() {
			const newTodo = {
				id: this.todos.length + 1,
				content: this.value,
				checked: false
			};
			this.$store.commit("addTodoItem", newTodo);
			this.newTodo = "";
		}
	},
	computed: {
		todos() {
			return this.$store.state.todos;
		}
	}
}
</script>

<style scoped>
</style>