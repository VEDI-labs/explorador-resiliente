<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-object" transform="translate(-583.413 -3401.169)">
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        transform="translate(583.413 3401.169)"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_2502"
        data-name="Path 2502"
        d="M600.779,3434.643H590.048a4.634,4.634,0,1,1,0-9.269h10.731a4.634,4.634,0,1,1,0,9.269Zm-10.731-7.685a3.048,3.048,0,0,0,0,6.1h10.731a3.048,3.048,0,0,0,0-6.1Z"
        transform="translate(0 -12.675)"
        :fill="color"
      />
      <rect
        id="Rectangle_164"
        data-name="Rectangle 164"
        width="1.19"
        height="2.263"
        transform="translate(594.818 3413.839)"
        :fill="color"
      />
      <rect
        id="Rectangle_165"
        data-name="Rectangle 165"
        width="1.19"
        height="2.263"
        transform="translate(594.818 3418.795)"
        :fill="color"
      />
      <path
        id="Path_2503"
        data-name="Path 2503"
        d="M599.933,3404.37a9.388,9.388,0,0,0-6.831,2.945.744.744,0,0,0,.069,1.079l.077.065a.744.744,0,0,0,1.019-.064,7.8,7.8,0,0,1,11.333,0,.744.744,0,0,0,1.019.064l.077-.065a.744.744,0,0,0,.069-1.079A9.4,9.4,0,0,0,599.933,3404.37Z"
        transform="translate(-4.519 0)"
        :fill="color"
      />
      <path
        id="Path_2504"
        data-name="Path 2504"
        d="M603.692,3412.46a6.18,6.18,0,0,0-4.327,1.765.751.751,0,0,0,.03,1.117l.074.062a.755.755,0,0,0,1.015-.055,4.6,4.6,0,0,1,6.416,0,.756.756,0,0,0,1.015.055l.074-.062a.751.751,0,0,0,.03-1.117A6.176,6.176,0,0,0,603.692,3412.46Z"
        transform="translate(-8.278 -4.882)"
        :fill="color"
      />
      <path
        id="Path_2505"
        data-name="Path 2505"
        d="M607.377,3436.317a2.14,2.14,0,1,1,2.14-2.14A2.142,2.142,0,0,1,607.377,3436.317Zm0-3.089a.95.95,0,1,0,.95.95A.951.951,0,0,0,607.377,3433.228Z"
        transform="translate(-11.963 -16.697)"
        :fill="color"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
