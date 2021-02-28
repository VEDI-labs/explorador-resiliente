<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
  >
    <g id="icon-guitar" transform="translate(-248.351 -3542.903)">
      <rect
        id="Rectangle_138"
        data-name="Rectangle 138"
        width="24"
        height="24"
        transform="translate(248.351 3542.903)"
        fill="#fff"
        opacity="0"
      />
      <path
        id="Path_14465"
        data-name="Path 14465"
        d="M0,0H5.749V1.648H0Z"
        transform="matrix(0.707, -0.707, 0.707, 0.707, 261.695, 3552.361)"
        :fill="color"
      />
      <path
        id="Path_2511"
        data-name="Path 2511"
        d="M261.106,3580.539l-2.268-2.269a.412.412,0,0,1,0-.583h0a.411.411,0,0,1,.582,0l2.268,2.269a.413.413,0,0,1,0,.583h0A.413.413,0,0,1,261.106,3580.539Z"
        transform="translate(-4.921 -19.203)"
        :fill="color"
      />
      <ellipse
        id="Ellipse_10"
        data-name="Ellipse 10"
        cx="1.21"
        cy="1.211"
        rx="1.21"
        ry="1.211"
        transform="translate(255.97 3556.759)"
        :fill="color"
      />
      <path
        id="Path_2512"
        data-name="Path 2512"
        d="M256.318,3573.95a5.967,5.967,0,1,1,.311-11.925,3.955,3.955,0,0,1,.459-.55,4.057,4.057,0,0,1,5.733,0h0a4.051,4.051,0,0,1-.549,6.194,5.96,5.96,0,0,1-5.953,6.28Zm-.018-10.286a4.322,4.322,0,1,0,4.284,3.686l-.035-.24a.488.488,0,0,1,.264-.508l.217-.109a2.4,2.4,0,0,0,.624-3.854h0a2.4,2.4,0,0,0-3.852.625l-.109.218a.49.49,0,0,1-.507.265l-.241-.036A4.481,4.481,0,0,0,256.3,3563.664Z"
        transform="translate(0 -9.046)"
        :fill="color"
      />
      <path
        id="Path_2513"
        data-name="Path 2513"
        d="M290.975,3546.74l-1.564-1.566a.98.98,0,0,0-1.353,0l-1.734,1.736a1.473,1.473,0,0,0-.347,1.518l.463,1.327,1.3.433a1.471,1.471,0,0,0,.466.076,1.456,1.456,0,0,0,1.032-.43l1.741-1.742A.96.96,0,0,0,290.975,3546.74Zm-2.614,2.221a.23.23,0,0,1-.234.056l-.722-.241-.263-.753a.231.231,0,0,1,.054-.238l1.537-1.537,1.17,1.17Z"
        transform="translate(-20.904 0)"
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
