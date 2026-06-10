<script setup>
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

function createWatermark(dark) {
  const existing = document.querySelector('.watermark-container')
  if (existing) existing.remove()

  const container = document.createElement('div')
  container.className = 'watermark-container'
  document.body.appendChild(container)

  const text = '成理工程贴吧'
  const width = 300
  const height = 200
  const fontSize = 14
  const rotate = -20
  const fill = dark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)'

  const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${fontSize}"
        fill="${fill}"
        transform="rotate(${rotate}, ${width / 2}, ${height / 2})"
        font-family="sans-serif"
      >${text}</text>
    </svg>
  `

  const encoded = btoa(unescape(encodeURIComponent(svgStr)))
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    background-repeat: repeat;
    background-image: url("data:image/svg+xml;base64,${encoded}");
  `
}

onMounted(() => {
  createWatermark(isDark.value)
})

watch(isDark, (val) => {
  createWatermark(val)
})
</script>

<template />
