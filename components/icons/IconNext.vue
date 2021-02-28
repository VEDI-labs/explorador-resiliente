<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
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
      d="M81.27,3265.633a1.2,1.2,0,0,1-1.2-1.205v-15.589a1.205,1.205,0,0,1,1.839-1.026l12.209,7.547a1.205,1.205,0,0,1,.029,2.031l-12.208,8.043A1.189,1.189,0,0,1,81.27,3265.633Zm.432-16.021v14.015l10.975-7.23Z"
      transform="translate(-75.374 -3244.633)"
      :fill="color"
    />
    <rect
      id="Rectangle_170"
      data-name="Rectangle 170"
      width="1.636"
      height="15.59"
      transform="translate(17.673 4.206)"
      :fill="color"
    />
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
