<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-user" transform="translate(-5280 -4484)">
      <rect
        id="Rectangle_241"
        data-name="Rectangle 241"
        width="64"
        height="64"
        transform="translate(5280 4484)"
        fill="none"
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M19.833,0A19.833,19.833,0,1,1,0,19.833,19.833,19.833,0,0,1,19.833,0Z"
        transform="translate(5301.726 4499.689)"
        fill="#5cc6c3"
        opacity="0.39"
      />
      <path
        id="Icon_awesome-user-alt"
        data-name="Icon awesome-user-alt"
        d="M22.96,25.83A12.915,12.915,0,1,0,10.045,12.915,12.918,12.918,0,0,0,22.96,25.83ZM34.44,28.7H29.5a15.612,15.612,0,0,1-13.076,0H11.48A11.479,11.479,0,0,0,0,40.18v1.435a4.306,4.306,0,0,0,4.3,4.3h37.31a4.306,4.306,0,0,0,4.3-4.3V40.18A11.479,11.479,0,0,0,34.44,28.7Z"
        transform="translate(5282.608 4492)"
        fill="none"
        stroke="#00948b"
        stroke-width="0.75"
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
