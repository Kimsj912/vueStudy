<template>
    <div class="wrapBox">
        <p>
            <input type="checkbox" :value="item.checked" v-on:click="onClickedBox"/>
            <span class="content"> {{item.content}}</span><span class="index">(강의번호 : {{item.id}})</span>
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
        border-radius: 10%;
        text-align: left;
        
    }
    p{
        text-decoration: underline;
    }

</style>