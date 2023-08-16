<template>
    <header>
        <h1>
            {{title}}
            <Button 
            v-show="homePage"
            @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'close':'Add Task'" 
            :color="showAddTask ? 'red' : 'green'"/>
        </h1>
    </header>
</template>
<script>
import Button from './button.vue'
export default {
  name:'Header',
  props:{
    title: String,
    showAddTask:Boolean,
  },
 components: {
    Button,
 },
 computed:{
    homePage(){
        if(this.$route.path==='/'){
            return true
        }else{
            return false
        }
    },
 }
}
</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

</style>