<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-radio" transform="translate(-583.352 -2070.921)">
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        transform="translate(583.352 2070.921)"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_2367"
        data-name="Path 2367"
        d="M602.249,2096.933H588.455a2.614,2.614,0,0,1-2.6-2.618v-9.684a2.614,2.614,0,0,1,2.6-2.618h13.794a2.613,2.613,0,0,1,2.6,2.618v9.684A2.613,2.613,0,0,1,602.249,2096.933Zm-13.794-13.392a1.087,1.087,0,0,0-1.083,1.089v9.684a1.088,1.088,0,0,0,1.083,1.09h13.794a1.087,1.087,0,0,0,1.083-1.09v-9.684a1.087,1.087,0,0,0-1.083-1.089Z"
        transform="translate(0 -4.979)"
        :fill="color"
      />
      <path
        id="Path_2368"
        data-name="Path 2368"
        d="M614.759,2102.983a3.64,3.64,0,1,1,3.619-3.64A3.633,3.633,0,0,1,614.759,2102.983Zm0-6.135a2.493,2.493,0,1,0,2.479,2.494A2.489,2.489,0,0,0,614.759,2096.848Z"
        transform="translate(-15.679 -13.437)"
        :fill="color"
      />
      <path
        id="Path_2369"
        data-name="Path 2369"
        d="M597.693,2107.647h-3.63a.572.572,0,0,1-.57-.573h0a.572.572,0,0,1,.57-.573h3.63a.572.572,0,0,1,.57.573h0A.571.571,0,0,1,597.693,2107.647Z"
        transform="translate(-4.737 -20.107)"
        :fill="color"
      />
      <path
        id="Path_2370"
        data-name="Path 2370"
        d="M597.693,2100.816h-3.63a.572.572,0,0,1-.57-.573h0a.571.571,0,0,1,.57-.573h3.63a.571.571,0,0,1,.57.573h0A.571.571,0,0,1,597.693,2100.816Z"
        transform="translate(-4.737 -15.888)"
        :fill="color"
      />
      <path
        id="Path_2371"
        data-name="Path 2371"
        d="M606.418,2091.447H594.063a.572.572,0,0,1-.57-.573h0a.572.572,0,0,1,.57-.574h12.355a.572.572,0,0,1,.57.574h0A.572.572,0,0,1,606.418,2091.447Z"
        transform="translate(-4.737 -10.099)"
        :fill="color"
      />
      <path
        id="Path_2372"
        data-name="Path 2372"
        d="M607.81,2078.539l-12.362-3.079a.765.765,0,0,1-.555-.926h0a.76.76,0,0,1,.92-.558l12.362,3.079Z"
        transform="translate(-5.592 0)"
        :fill="color"
      />
      <path
        id="Path_2373"
        data-name="Path 2373"
        d="M597.462,2089.483h-1.14v-.693a.572.572,0,0,1,.57-.573h0a.571.571,0,0,1,.57.573Z"
        transform="translate(-6.491 -8.812)"
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
