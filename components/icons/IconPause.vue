<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-pause" transform="translate(-594.149 -3064.973)">
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        transform="translate(594.149 3064.973)"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_2574"
        data-name="Path 2574"
        d="M603.364,3085.973h-3.519a.993.993,0,0,1-.992-.992v-16.015a.994.994,0,0,1,.992-.992h3.519a.994.994,0,0,1,.992.992v16.015A.994.994,0,0,1,603.364,3085.973Zm-2.934-1.577h2.348V3069.55H600.43Z"
        :fill="color"
      />
      <path
        id="Path_2575"
        data-name="Path 2575"
        d="M626.408,3085.973h-3.52a.993.993,0,0,1-.992-.992v-16.015a.994.994,0,0,1,.992-.992h3.52a.994.994,0,0,1,.992.992v16.015A.994.994,0,0,1,626.408,3085.973Zm-2.934-1.577h2.349V3069.55h-2.349Z"
        transform="translate(-13.955)"
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
