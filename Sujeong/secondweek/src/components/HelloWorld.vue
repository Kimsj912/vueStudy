<template>
  <div>
      <p>TODO - LIST</p>
      <ul>
        <li
          v-for="item in li" 
          :key="item.id" 
        >
          <todoItem 
            :item="item" 
            @checking-item="checkingItem"
          ></todoItem>
        </li>
      </ul>
      
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"

export default {
  components: {TodoItem},
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
        li : [
        {
          id: 0,
          content:"공부하자",
          checked : false,
        },
        {
          id: 1,
          content:"테스트",
          checked : false,
        },
        {
          id: 2,
          content:"222",
          checked : false,
        },
      ]
    }
  },
  methods: {
    checkingItem(index) {
      this.li[index].checked = !this.li[index].checked;
      console.log(this.li);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
li {
  margin: 10px;
  width: 100%;
}

</style>
