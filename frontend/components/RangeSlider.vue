<template>

  <div class="hahu-range-slider">
 
    <Slider
      v-model="value"
      :min="min"
      :max="max"
      :step="step"
      class="slider-primary"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import Slider from '@vueform/slider';
import '@vueform/slider/themes/default.css';

const props = defineProps({
  modelValue: { type: Array, required: true },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 20 },
  step: { type: Number, default: 1 },
});


const emit = defineEmits(['update:modelValue']);


const value = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    emit('update:modelValue', newValue);
  },
});
</script>

<style>

.hahu-range-slider .slider-primary {

  --slider-connect-bg: #0d9488; 
  

  --slider-handle-bg: #0d9488;

 
  --slider-tooltip-bg: #0d9488;


  --slider-bg: #e5e7eb;

  --slider-handle-width: 16px;
  --slider-handle-height: 16px;
  --slider-handle-shadow: none; 
  --slider-handle-border: 0;   

  --slider-height: 4px;
  

  --slider-handle-pos: -6px;

  --slider-tooltip-font-size: 12px;
  --slider-tooltip-line-height: 18px;
  --slider-tooltip-py: 2px;
  --slider-tooltip-px: 6px;
}
</style>