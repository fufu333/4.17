<template>
    <div class="semi-transparent-background">
        <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="要添加点什么好呢" />
        <button @click="addTodo">添加</button>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { bus } from '../bus';

export default defineComponent({
    name: 'AppHeader',
    setup() {
        const newTodo = ref('');

        onMounted(() => {
            // 如果有需要在组件挂载后立即执行的逻辑，可以放在这里
        });

        const addTodo = () => {
            if (newTodo.value.trim()) {
                bus.emit('addTodo', { text: newTodo.value, done: false });
                newTodo.value = '';
            }
        };

        return {
            newTodo,
            addTodo
        };
    }
});
</script>

<style>
.semi-transparent-background {
    background-color: rgba(255, 255, 255, 0.652);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    margin-top: 150px;
    margin-bottom: 20px;
}

input[type="text"] {
    width: 350px;
    height: 25px;
    top: 45%;
    margin-left: 10px;
    padding-left: 10px;
    color: #000000;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.701);
}

button {
    padding: 10px 20px;
    margin-right: 10px;
    color: inherit;
    background-color: rgba(238, 46, 46, 0.719);
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>