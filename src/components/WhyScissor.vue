// WhyScissorsComponent.vue
<template>
  <section id="whyScissors">
    <div class="left">
      <img
        src="../assets/images/whyScissorsDivider.png"
        class="divider"
        alt="Stylized divider for the title."
      />
      <div class="text">
        <h2>Why choose <span>Scissors</span></h2>
        <p>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of
          these is second to none.
        </p>
      </div>
    </div>
    <div class="right">
      <div class="whyTop">
        <div class="whyContents">
          <img
            src="../assets/images/whyIcons1.png"
            alt="URL Shortening Icon"
          />
          <div class="copy">
            <h3>URL Shortening</h3>
            <p>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
        </div>
        <div class="whyContents">
          <img
            src="../assets/images/whyIcons2.png"
            alt="URL Shortening Icon"
          />
          <div class="copy">
            <h3>Custom URLs</h3>
            <p>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
        </div>
      </div>
      <div class="whyBottom">
        <div class="whyContents">
          <img
            src="../assets/images/whyIcons3.png"
            alt="QR Codes Icon"
          />
          <div class="copy">
            <h3>QR Codes</h3>
            <p>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
        </div>
        <div class="whyContents">
          <img
            src="../assets/images/whyIcons4.png"
            alt="Data Analytics Icon"
          />
          <div class="copy">
            <h3>Data Analytics</h3>
            <p>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyScissorsComponent",
};
</script>