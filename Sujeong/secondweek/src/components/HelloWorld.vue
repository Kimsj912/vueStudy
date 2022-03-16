<template>
  <div>
      <h3>TODO - LIST</h3>
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
      inputVal : "",
        li : [
        {
          id: 0,
          content:"뷰강의",
          checked : false,
        },
        {
          id: 1,
          content:"자바스크립트 강의",
          checked : false,
        },
        {
          id: 2,
          content:"리액트 강의",
          checked : false,
        },
      ]
    }
  },
  methods: {
    checkingItem(index) {
      this.li[index].checked = !this.li[index].checked;
      console.log(this.li);
    },
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
h3{
  background: white;
  padding: 2rem;
  font-weight: bolder;
}
</style>
