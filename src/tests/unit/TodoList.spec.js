import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from './components/TodoList.vue'
import { bus } from '@/bus'

// 使用jest.fn()模拟bus上的方法
jest.mock('@/bus', () => ({
  on: jest.fn(),
  off: jest.fn(),
  emit: jest.fn(),
}))

describe('TodoList.vue', () => {
  it('adds a new todo when receiving addTodo event from bus', async () => {
    const wrapper = mount(TodoList)
    const initialLength = wrapper.vm.todos.length

    // 触发添加事件
    bus.emit('addTodo', { text: 'New Todo', done: false })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.todos).toHaveLength(initialLength + 1)
    expect(wrapper.vm.todos[initialLength]).toEqual({ text: 'New Todo', done: false })
  })


  // ... 对删除、修改和全选/全部删除等功能进行类似的测试
});
