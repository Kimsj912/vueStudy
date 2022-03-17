<template>
<div id="app">
	<InputForm />
	<ul>
		<ToDoList v-for="item in todos" :key="item.id" :todo="item" />
	</ul>
</div>
</template>

<script>
import InputForm from "./components/InputForm.vue"
import ToDoList from "./components/ToDoList.vue"

export default {
	name: "App",
	components: {
		InputForm,
		ToDoList
	},
	computed: {
		todos() {
			return this.$store.state.todos;
		}
	}
}
</script>

<style>
</style>