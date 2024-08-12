import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PricingComponent from '@/components/PricingComponent.vue'

describe('PricingComponent', () => {
  it('renders the correct number of pricing cards', () => {
    const wrapper = mount(PricingComponent)
    const cards = wrapper.findAll('.card')

    expect(cards.length).toBe(3)
  })

  it('renders the correct CTA links', () => {
    const wrapper = mount(PricingComponent)
    const ctaLinks = wrapper.findAll('.cta a')

    expect(ctaLinks[0].text()).toBe('Get Custom Pricing')
    expect(ctaLinks[0].attributes('href')).toBe('#getCustomPricing')
    expect(ctaLinks[1].text()).toBe('Select Pricing')
    expect(ctaLinks[1].attributes('href')).toBe('#selectPricing')
  })
})
