<template>
  <h3> &lt; 강의 목록 > </h3>
  <ul>
      <li v-for="(item, idx) in lectures" :key="{idx}">
        <div class="showBox">
          <div class="el"><span class="tit">제목: </span>{{item.name}}</div>
          <div class="el"><span class="tit">가격: </span> {{item.price}}</div>
          <div class="el"><span class="tit">수량: </span> {{item.quantity}}</div>
        </div>
        <hr>
        <div class="editBox">
          <div class="el"><span class="tit">가격: </span> <input type="text" v-model="item.price"></div>
          <div class="el"><span class="tit">수량: </span> <input type="text" v-model="item.quantity"></div>
        </div>

      </li>
    </ul>
  <table>
    <tr>
      <th>총 수량 :</th>
      <td><span>{{quantity_sum}}</span> 개</td>
    </tr>
    <tr>
      <th>총 가격 :</th>
      <td><span>{{price_sum}}</span> 원</td>
    </tr>
    <tr>
      <th>세후 가격 :</th>
      <td><span>{{tax_result}}</span> 원</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      lectures : [
          {name : "vue 기초", price : 1000, quantity : 5} ,
          {name : "react 기초", price : 1500, quantity : 4} ,
          {name : "angular 기초", price : 2000, quantity : 4} ,
      ]
    }
  },
  computed: {
    price_sum() {
      let sum = 0;
      this.lectures.forEach(e => {
        sum += e.price*e.quantity;
      });
      return sum;
    },
    quantity_sum(){
      let sum=0;
      this.lectures.forEach(e=>{
        sum+=e.quantity;
      })
      return sum;
    },
    tax_result(){
      return this.price_sum*1.1;
    },
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
  font-weight: bolder;
  color: #42b983;
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  background-color: whitesmoke;
  border: #42b983 3px solid;
  border-radius: 10%;
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: start;
}
.tit{
  font-weight: bold;
}
table {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
th {
  color: #42b983;
}
td{
  text-align: right;
}
</style>
