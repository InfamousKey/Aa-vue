import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Form from '../form.vue'

describe('Form', () => {
  it('renders properly', () => {
    const wrapper = mount(Form)
    expect(wrapper.text()).toContain('Hello World!')
  })
})
