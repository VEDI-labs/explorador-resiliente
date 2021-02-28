<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-speaker" transform="translate(-582.936 -3687.485)">
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        transform="translate(582.936 3687.485)"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_2533"
        data-name="Path 2533"
        d="M592.594,3709.815h-4.983a2.678,2.678,0,0,1-2.675-2.676v-4.324a2.678,2.678,0,0,1,2.675-2.675h4.983Zm-4.983-8.1a1.105,1.105,0,0,0-1.1,1.1v4.324a1.106,1.106,0,0,0,1.1,1.1h3.412v-6.532h-3.412Z"
        transform="translate(0 -5.493)"
        :fill="color"
      />
      <path
        id="Path_2534"
        data-name="Path 2534"
        d="M606.894,3707.877a1.594,1.594,0,0,1-.864-.255l-5.6-3.618v-9.038l5.6-3.618a1.592,1.592,0,0,1,2.456,1.337v13.6a1.592,1.592,0,0,1-.831,1.4A1.624,1.624,0,0,1,606.894,3707.877Zm-4.89-4.729,4.879,3.153.032-13.617L602,3695.823Z"
        transform="translate(-9.409)"
        :fill="color"
      />
      <path
        id="Path_2535"
        data-name="Path 2535"
        d="M625.45,3710.647h0a.786.786,0,0,1-.786-.786v-6.841a.786.786,0,0,1,.786-.786h0a.786.786,0,0,1,.786.786v6.841A.787.787,0,0,1,625.45,3710.647Z"
        transform="translate(-24.123 -6.765)"
        :fill="color"
      />
      <path
        id="Path_2536"
        data-name="Path 2536"
        d="M632.638,3710.123h0a.785.785,0,0,1-.786-.786V3699.1a.786.786,0,0,1,.786-.786h0a.786.786,0,0,1,.786.786v10.24A.787.787,0,0,1,632.638,3710.123Z"
        transform="translate(-28.487 -4.383)"
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
