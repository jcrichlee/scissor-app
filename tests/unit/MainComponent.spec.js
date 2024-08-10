import { mount } from "@vue/test-utils";
import MainComponent from "@/components/MainComponent.vue";

describe("MainComponent", () => {
  it("renders the correct title", () => {
    const wrapper = mount(MainComponent);
    const title = wrapper.find("#title");
    expect(title.text()).toContain(
      "Optimize Your Online Experience with Our Advanced URL Shortening Solution"
    );
  });

  it("renders the correct number of link images", () => {
    const wrapper = mount(MainComponent);
    const linkImages = wrapper.findAll('img[alt="Link logo"]');
    expect(linkImages.length).toBe(4);
  });
});
