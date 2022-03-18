new Vue({
	el: '#app',
	data: () => ({
		items: [
			{
				'name': 'vue 기초',
				'price': 0,
				'count': 0
			},
			{
				'name': 'react 기초',
				'price': 0,
				'count': 0
			},
			{
				'name': 'es6 강좌',
				'price': 0,
				'count': 0
			}
		]
	}),
	computed: {
		totalPrice: function() {
			return this.items.reduce((sum, item) => {
				return sum+(parseFloat(item.price)*parseFloat(item.count));
			}, 0);
		},
		taxPrice: function() {
			return this.totalPrice*1.1;
		}
	}
});