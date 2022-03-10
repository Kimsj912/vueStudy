<template>
	<ul>
		<li v-for="(item, index) in items" :key="index">{{ item }}</li>
	</ul>
</template>

<script>
export default {
	name: 'ToDoList',
	props: [
		'items'
	]
}
</script>

<style scoped>
</style>