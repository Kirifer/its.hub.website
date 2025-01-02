<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  pattern: {
    type: String,
    default: 'basic',
    validator: (value) => ['basic', 'dots', 'blueprint', 'isometric', 'graph', 'modern', 'interactive'].includes(value)
  },
  primaryColor: {
    type: String,
    default: '#e5e7eb'
  },
  secondaryColor: {
    type: String,
    default: '#ffffff'
  },
  gridSize: {
    type: Number,
    default: 20
  },
  opacity: {
    type: Number,
    default: 1
  },
  lineWeight: {
    type: Number,
    default: 1
  },
});

const styles = computed(() => {
  const patterns = {
    basic: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `
        linear-gradient(to right, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to bottom, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px)
      `,
      backgroundSize: `${props.gridSize}px ${props.gridSize}px`
    },
    dots: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `radial-gradient(${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px)`,
      backgroundSize: `${props.gridSize}px ${props.gridSize}px`
    },
    blueprint: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `
        linear-gradient(to right, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to bottom, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to right, rgba(${hexToRgb(props.primaryColor)}, 0.5) ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to bottom, rgba(${hexToRgb(props.primaryColor)}, 0.5) ${props.lineWeight}px, transparent ${props.lineWeight}px)
      `,
      backgroundSize: `${props.gridSize * 4}px ${props.gridSize * 4}px, ${props.gridSize * 4}px ${props.gridSize * 4}px, ${props.gridSize}px ${props.gridSize}px, ${props.gridSize}px ${props.gridSize}px`
    },
    isometric: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `
        linear-gradient(30deg, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(150deg, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px)
      `,
      backgroundSize: `${props.gridSize}px ${props.gridSize}px`
    },
    graph: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `
        linear-gradient(to right, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to bottom, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px)
      `,
      backgroundSize: `${props.gridSize * 2}px ${props.gridSize * 2}px`,
      backgroundPosition: `-${props.lineWeight}px -${props.lineWeight}px`,
      boxShadow: `inset 0 0 0 ${props.lineWeight}px ${props.primaryColor}`
    },
    modern: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `
        linear-gradient(to right, rgba(${hexToRgb(props.primaryColor)}, ${props.opacity}) ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to bottom, rgba(${hexToRgb(props.primaryColor)}, ${props.opacity}) ${props.lineWeight}px, transparent ${props.lineWeight}px)
      `,
      backgroundSize: `${props.gridSize * 3}px ${props.gridSize * 3}px`
    },
    interactive: {
      backgroundColor: props.secondaryColor,
      backgroundImage: `
        linear-gradient(to right, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px),
        linear-gradient(to bottom, ${props.primaryColor} ${props.lineWeight}px, transparent ${props.lineWeight}px)
      `,
      backgroundSize: `${props.gridSize}px ${props.gridSize}px`,
      transition: 'background-size 0.3s ease'
    }
  };

  return patterns[props.pattern];
});

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '229, 231, 235'; // Default to gray if invalid hex
}
</script>

<template>
  <div class="grid-pattern" :style="styles">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid-pattern {
  width: 100%;
  height: 100%;
}

.grid-pattern:hover.interactive {
  background-size: 30px 30px !important;
}
</style>