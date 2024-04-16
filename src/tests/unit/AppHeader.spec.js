import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from './components/AppHeader.vue'
import { bus } from '@/bus'

vi.mock('@/bus', () => ({
  emit: vi.fn(),
}))

describe('AppHeader.vue', () => {
  it('emits addTodo event with new todo when adding a todo', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setValue('newTodo', 'New Todo')

    await wrapper.trigger('submit')

    expect(bus.emit).toHaveBeenCalledWith('addTodo', { text: 'New Todo', done: false })
  })
})