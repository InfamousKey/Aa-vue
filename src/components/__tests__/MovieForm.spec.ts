import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Form from '../MovieForm.vue'

describe('Form', () => {
  it('renders properly', () => {
    const wrapper = mount(Form)
    expect(wrapper.text()).toContain('Hello World!')
  })
})
