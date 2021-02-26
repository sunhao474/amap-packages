<template>
  <div>
    <div @click="changeTitie">Map</div>
    <button @click="toggleZoomEnable">切换缩放</button>
    <button @click="changeCenter">切换中心点</button>
    <span>点击坐标x{{ long }} y {{ lat }}</span>
      <el-amap
        class="amap-box"
        :vid="'amap-vue'"
        :zoomEnable="zoomEnable"
        :center="center"
        :zoom="14"
        :events="events"
      >
        <el-amap-marker :title="title"/>
        <el-amap-bezier-curve
          :editable="true"
          :path="[
              [116.39, 39.91, 116.37, 39.91],//起点
              //第一段弧线
              [116.380298, 39.907771, 116.38, 39.90],//控制点，途经点
              //第二段弧线
              [116.385298, 39.907771, 116.40, 39.90],//控制点，途经点//弧线段有两种描述方式1
              //第三段弧线
              [//弧线段有两种描述方式2
                [116.392872, 39.887391],//控制点
                [116.40772, 39.909252],//控制点
                [116.41, 39.89]//途经点
              ],
              //第四段弧线
              [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
          ]"
        />
     </el-amap>
  </div>
</template>
<script>
export default {
  name: 'Map',
  data() {
    return {
      title: 'hello',
      zoomEnable: true,
      district: 'bj',
      center: [ 116.397637, 39.900001 ],
      events: {
        click: (val) => {
          console.log(this)
          this.long = val.lnglat.lng;
          this.lat = val.lnglat.lat;
        }
      },
      lat: 0,
      long: 0,
    }
  },
  methods: {
    changeTitie() {
      this.title = this.title + '1'
    },
    toggleZoomEnable() {
      this.zoomEnable = !this.zoomEnable;
    },
    changeCenter() {
      if (this.district === 'bj') {
        this.district = 'cd';
        this.center = [ 104.065752, 30.659426 ];
      } else {
        this.district = 'bj'
        this.center = [ 116.397637, 39.900001 ];
      }
    }
  }
}
</script>
<style>
.amap-box {
  width: 1000px;
  height: 800px;
}
</style>
