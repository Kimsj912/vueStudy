<template>
	<li>
		<input type="checkbox" @change="onChangeCheckbox" />
		<span :class="todo.checked && 'complete'">{{ todo.content }}</span>
		<input type="button" value="del" @click="onClickDelete"/>
	</li>
</template>

<script>
export default {
	name: 'ToDoList',
	props: [
		'todo'
	],
	methods: {
		onChangeCheckbox() {
			this.$store.commit("toggleCompleteTodoItem", this.todo.id)
		},
		onClickDelete() {
			this.$store.commit("removeTodoItem", this.todo.id)
		}
	}
}
</script>

<style scoped>
.complete {
	text-decoration: line-through
}
</style>