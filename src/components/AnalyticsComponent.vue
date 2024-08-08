<template>
  <section id="analytics">
    <div class="analytic">
      <div class="inputs">
        <input
          type="text"
          id="url"
          class="url"
          v-model="url"
          placeholder="Paste URL here..."
        />
        <div class="options">
          <div class="select-container">
            <select
              id="custom-select"
              class="custom-select"
              v-model="selectedDomain"
            >
              <option value="" disabled selected>Choose Domain</option>
              <option value="bit.ly">Bit.ly</option>
              <option value="shorten.link">Shorten.link</option>
              <option value="alt.mini">Alt.mini</option>
            </select>
          </div>
          <input
            type="text"
            id="alias"
            class="alias"
            v-model="alias"
            placeholder="Type Alias here"
          />
        </div>
      </div>
      <div class="analyticBottom">
        <div class="button">
          <button class="trimURL" @click="trimURL">Trim URL</button>
          <span class="icon">
            <img src="../assets/images/magic-wand.png" alt="magic-wand" />
          </span>
        </div>
        <p>
          By clicking TrimURL, I agree to the
          <strong>Terms of Service, Privacy Policy</strong>
          and Use of Cookies.
        </p>
      </div>
    </div>
    <div class="leftBackground">
      <svg
        width="979"
        height="523"
        viewBox="0 0 979 523"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 516.042C-13.417 455.046 -91.4972 556.354 -122.5 443.756C-151.311 339.118 -160.612 119.83 -156.682 0.523692C-152.913 -113.909 -129.881 -215.35 -105.252 -318.824C-73.6885 -451.43 -65.0909 -656.313 6.63529 -685.615C80.4193 -715.758 128.261 -526.723 189.698 -439.318C230.539 -381.215 270.367 -330.964 305.807 -259.991C349.903 -171.681 421.468 -101.295 420.927 23.7569C420.385 148.633 334.746 194.955 303.367 302.775C264.745 435.481 286.756 649.336 218.553 719.117C152.499 786.698 108.273 586.614 43 516.042Z"
            fill="url(#paint0_linear_1_343)"
            fill-opacity="0.3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M130 421.669C77.1864 382.372 13.321 385.604 -20.5 295.168C-51.931 211.125 -50.7568 200.521 -54.5752 95.6999C-58.2382 -4.83867 -44.3437 -98.7814 -29.1825 -194.883C-9.75192 -318.04 -14.6996 -498.502 45.9618 -541.557C108.365 -585.848 161.481 -432.993 220.268 -371.936C259.346 -331.346 297.068 -297.345 332.225 -244.232C375.971 -178.145 442.541 -134.379 449.657 -25.3881C456.763 83.4527 385.023 144.729 364.249 246.267C338.681 371.239 370.818 552.021 315.679 629.453C262.279 704.442 191.104 467.134 130 421.669Z"
            fill="url(#paint1_linear_1_343)"
            fill-opacity="0.4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M167.5 249.99C123.721 187.016 11.8414 196.909 -8.00002 96.3815C-26.4387 2.96118 85.3641 24.3165 95.0001 -74.2939C104.243 -168.875 80.953 -168.022 107 -248.985C140.382 -352.742 181.646 -239.977 243 -248.985C306.114 -258.253 300.736 -480.809 356.14 -444.452C417.702 -404.052 330.381 -178.223 356.14 -111.441C388.191 -28.3452 531.325 -112.856 524.207 -8.72904C517.098 95.2545 443.239 115.46 411.333 198.597C372.063 300.919 379.01 483.922 318.434 527.433C259.769 569.57 218.149 322.85 167.5 249.99Z"
            fill="url(#paint2_linear_1_343)"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_343"
            x1="396.928"
            y1="-208.541"
            x2="-205.863"
            y2="109.336"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_343"
            x1="414.67"
            y1="-221.738"
            x2="-123.642"
            y2="155.579"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_343"
            x1="516.586"
            y1="-207.534"
            x2="23.891"
            y2="-6.55255"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#005AE2" />
            <stop offset="1" stop-color="#73E6FF" stop-opacity="0.38" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="rightBackground">
      <svg
        width="926"
        height="523"
        viewBox="0 0 926 523"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M413.5 885.504C423.766 758.506 503.045 505.09 545.905 409.451C585.736 320.572 606.063 286.553 663.5 255.009C718.591 224.755 804.248 266.193 861 279.105C933.73 295.652 1037.64 199.727 1074.88 326.258C1113.19 456.419 1039.85 608.999 1018.8 754.157C1004.8 850.651 994.171 942.658 972.353 1033.11C945.203 1145.66 935.469 1304.47 876.435 1344.32C817.484 1384.11 767.688 1236.75 706.683 1212.44C631.599 1182.54 538.141 1294.21 483.002 1187.6C429.602 1084.35 401.623 1032.44 413.5 885.504Z"
            fill="url(#paint0_linear_1_339)"
            fill-opacity="0.3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M525.135 937.809C526.366 824.743 539.737 713.788 571.246 620.045C600.527 532.927 645.799 477.254 693.886 435.743C740.008 395.926 779.814 438.388 830.001 435.743C894.318 432.355 986.588 317.17 1026.68 418.209C1067.93 522.147 1013.35 672.911 1003.83 804.427C997.499 891.85 993.827 974.548 980.322 1058.63C963.517 1163.24 964.68 1303.87 915.708 1353.01C866.804 1402.07 814.513 1285.97 759.932 1279.74C692.754 1272.07 618.173 1392.15 563.704 1312.83C510.953 1236.01 523.711 1068.63 525.135 937.809Z"
            fill="url(#paint1_linear_1_339)"
            fill-opacity="0.4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M624.126 919.301C639.454 815.639 665.715 720.071 706.543 649.557C744.485 584.029 793.23 555.593 842.792 541.643C890.329 528.265 935.843 548.936 982.464 571.897C1042.21 601.325 1127.64 580.426 1151.94 693.909C1176.93 810.645 1107.67 922.076 1082.38 1038.56C1065.56 1115.98 1051.8 1190.4 1028.79 1261.11C1000.15 1349.09 983.573 1479.39 932.238 1499.92C880.973 1520.42 847.319 1386.87 797.76 1353.5C736.764 1312.43 652.903 1385.44 612.621 1284.71C573.612 1187.16 606.391 1039.23 624.126 919.301Z"
            fill="url(#paint2_linear_1_339)"
            fill-opacity="0.6"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_339"
            x1="984.675"
            y1="1193.08"
            x2="432.248"
            y2="1068.96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_339"
            x1="996.685"
            y1="1222.43"
            x2="522.283"
            y2="1153.28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6F7" stop-opacity="0" />
            <stop offset="1" stop-color="#9EE6F7" stop-opacity="0.46" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_339"
            x1="1023.32"
            y1="1420.47"
            x2="546.136"
            y2="1274.27"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#005AE2" />
            <stop offset="1" stop-color="#73E6FF" stop-opacity="0.38" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>
<script>
export default {
  name: "AnalyticsComponent",
};
</script>
