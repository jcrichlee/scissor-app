import { mount } from "@vue/test-utils";
import AnalyticsComponent from "@/components/AnalyticsComponent.vue";

describe("AnalyticsComponent", () => {
  it("renders three input fields", () => {
    const wrapper = mount(AnalyticsComponent);
    const inputs = wrapper.findAll("input");
    expect(inputs.length).toBe(3);
  });
});
