import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnalyticsComponent from '@/components/AnalyticsComponent.vue'

describe('AnalyticsComponent', () => {
  it('renders the select dropdown with correct options', () => {
    const wrapper = mount(AnalyticsComponent)

    // Check select dropdown
    const select = wrapper.find('#custom-select')
    expect(select.exists()).toBe(true)

    // Check options
    const options = select.findAll('option')
    expect(options).toHaveLength(4) // including the disabled option
  })

  it('renders the "Trim URL" button', () => {
    const wrapper = mount(AnalyticsComponent)

    // Check button
    const button = wrapper.find('.trimURL')
    expect(button.exists()).toBe(true)
  })
})
