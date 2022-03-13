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
			this.$emit("interface", this.value)
		}
	}
}
</script>

<style scoped>
</style>