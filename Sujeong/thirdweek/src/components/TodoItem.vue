<template>
    <p class="wrapBox" :isdone="item.isdone">
        <input type="checkbox" :id="item.id" :value="item.checked" v-on:click="onClickedBox">
            <label :for="item.id"></label>
        <span class="content"> {{item.content}}</span>
    </p>
</template>

<script>
export default {
    name: 'ToDoElement',
    props: {
        item: {
            type : Object,
            default: null,
        }
    },
    methods :{
        onClickedBox(){
            this.$emit("checking-item", this.item.id);
        },
    }
}
</script>

<style>
    .wrapBox{
        background-color: beige;
        text-align: left;
        padding-left: 1rem;
        border-radius: 10px;
        vertical-align: middle;
        
    }
    .wrapBox[isdone="false"]{
        background-color: white;

    }
    .wrapBox[isdone="true"]{
        background-color:rgba(0, 0, 0, 0.3);
        text-decoration: line-through;
        
    }
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"] + label{
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        border:0.1rem solid #707070;
        position: relative;
    }
input[value="true"] + label::after{
        content:'✔';
        color:red;
        font-size: 1.5rem;
        width: 1rem;
        height: 1rem;
        text-align: center;
        position: absolute;
        left: -0.2rem;
        top: -1rem;
    }

</style>