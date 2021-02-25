<template>
  <div>
    <div>Map</div>
     <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
  </div>
</template>
<script>
export default {
  name: 'Map'
}
</script>
<style>
.amap-box {
  width: 500px;
  height: 500px;
}
</style>
