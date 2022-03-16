<template>
  <div>
      <h3>TODO - LIST</h3>
      <div class="buttonGroup">
          <input type="text" v-model="inputVal" @keyup.enter="addItem">
          <button class="addBtn" v-on:click="addItem">생성</button>
          <button class="delBtn" v-on:click="delItem">삭제</button>
          <button class="doneBtn" v-on:click="setDone">완료</button>
      </div>
      <ul>
        <li
          v-for="item in $store.state.li" 
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
    }
  },
  methods: {
    checkingItem(inputId) {
      this.$store.state.li.forEach(e=>{
        if(e.id===inputId) e.checked = !e.checked;
      });
    },
    setDone(){
      this.$store.state.li.forEach(e => {
        if(e.checked) e.isdone = !e.isdone;        
      });
    },
    addItem(){
      if(this.inputVal.trim().length==0) this.inputVal="";
      else{
        let d = new Date();
        this.$store.state.li.push({
          id: d.getTime(),
          content: this.inputVal,
          checked:false,
          isdone:false,
        });
        this.inputVal="";
      }
    },
    delItem(){
      this.$store.state.li = this.$store.state.li.filter((e)=>e.checked===false);
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
  margin: 0% 10% 0% 10%;
  width: 80%;
}
h3{
  background: white;
  padding: 2rem;
  font-weight: bolder;
  text-align: center;
}

  .buttonGroup{
    text-align: right;
  }
.buttonGroup>button{
  margin-left: 10px;
  border-radius: 10px;
  border-color: white;
  justify-content: center;
}
.addBtn{
  background: #009933;
  color: white;
}
.delBtn{
  background: red;
  color:white;
}
.doneBtn{
  background-color: #55ccdd;
  color: white;
}

</style>
