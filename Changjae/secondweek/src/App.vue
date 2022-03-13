<template>
<div id="app">
	<InputForm @interface="add" />
	<ToDoList :items="todos" />
</div>
</template>

<script>
import InputForm from './components/InputForm.vue'
import ToDoList from './components/ToDoList.vue'

export default {
	name: 'App',
	components: {
		InputForm,
		ToDoList
	},
	data: () => ({
		todos: []
	}),
	methods: {
		add(todo) {
			this.todos.push(todo)
		}
	}
}
</script>

<style>
</style>