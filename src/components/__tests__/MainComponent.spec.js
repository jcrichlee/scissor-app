import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MainComponent from '@/components/MainComponent.vue'

describe('MainComponent', () => {
  it('renders the correct title', () => {
    const expectedTitle =
      'Optimize Your Online Experience with Our Advanced URL Shortening Solution'
    const wrapper = mount(MainComponent)
    const titleElement = wrapper.find('#title')

    expect(titleElement.text().trim()).toBe(expectedTitle)
  })
})
