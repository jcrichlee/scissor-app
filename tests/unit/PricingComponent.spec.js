import { mount } from "@vue/test-utils";
import PricingComponent from "@/components/PricingComponent.vue";

describe("PricingComponent", () => {
  it("renders the correct number of pricing plans", () => {
    const wrapper = mount(PricingComponent);
    const plans = wrapper.findAll(".card");
    expect(plans.length).toBe(3);
  });

  it("renders the correct plan names", () => {
    const wrapper = mount(PricingComponent);
    const planNames = wrapper.findAll(".plan").map((el) => el.text());
    expect(planNames).toEqual(["Basic", "Professional", "Teams"]);
  });
});
