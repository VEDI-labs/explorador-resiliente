<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g
      id="icon-time"
      transform="translate(-422.016 -1889.43)"
    >
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        transform="translate(422.016 1889.43)"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_3937"
        data-name="Path 3937"
        d="M434.016,1891.43a10,10,0,1,0,10,10A10.011,10.011,0,0,0,434.016,1891.43Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,434.016,1909.432Z"
        transform="translate(0)"
        :fill="color"
      />
      <path
        id="Path_3938"
        data-name="Path 3938"
        d="M445.809,1905.312h-2v-3a1,1,0,1,0-2,0v4a1,1,0,0,0,1,1h3a1,1,0,1,0,0-2Z"
        transform="translate(-8.793 -4.883)"
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
