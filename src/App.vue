<template>
  <div class="todo-list">
    <div id="app">
      <AppHeader />  
      <TodoList />
    </div>
  </div>  
    
</template>  
  
<script>
import { defineComponent } from 'vue'  
import AppHeader from './components/AppHeader.vue'
import TodoList from './components/TodoList.vue' 
  
export default defineComponent ({  
  name: 'App',  
  components: {  
    AppHeader,
    TodoList  
  },
})  
</script>  
  
<style scoped>  
.todo-list {  
    position: relative;  
    display: flex;  
    align-items: center;  
    flex-direction: column;  
    height: 100vh;  
    margin: 0 auto;  
    padding: 20px;  
    box-sizing: border-box;  
    color: white;  
    text-align: center;  
    overflow: hidden;   
  }  
  
  .todo-list::before {  
    content: "";  
    position: fixed;  
    top: 0;  
    left: 50%;
    transform: translateX(-50%);  
    width: 100vw;  
    height: 100vh; 
    background-image: url('@/assets/bj.jpg');  
    background-size: cover;  
    background-position: center;  
    background-repeat: no-repeat;  
    z-index: -1; 
    pointer-events: none;  
  }  
  
  
</style>