<template>
    <div class="wrapBox">
        <p>
            <span class="index">{{item.id}}</span>
            <span class="content">{{item.content}}</span>
            <input type="checkbox" :value="item.checked" v-on:click="onClickedBox"/>
        </p>   
    </div>
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
        }
    }
}
</script>

<style>
    .wrapBox{
        background-color: beige;
        border-radius: 30%;
        
    }
</style>