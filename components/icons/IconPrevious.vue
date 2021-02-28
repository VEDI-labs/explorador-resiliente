<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-previous" transform="translate(-75.374 -3244.633)">
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_2568"
        data-name="Path 2568"
        d="M93.478,3265.633a1.2,1.2,0,0,0,1.2-1.205v-15.589a1.205,1.205,0,0,0-1.839-1.026l-12.209,7.547a1.205,1.205,0,0,0-.029,2.031l12.208,8.043A1.189,1.189,0,0,0,93.478,3265.633Zm-.432-16.021v14.015l-10.975-7.23Z"
        :fill="color"
      />
      <rect
        id="Rectangle_170"
        data-name="Rectangle 170"
        width="1.636"
        height="15.59"
        transform="translate(80.065 3248.839)"
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
