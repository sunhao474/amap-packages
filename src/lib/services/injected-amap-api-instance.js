let lazyAMapApiLoaderInstance = null;
import AMapAPILoader from './lazy-amap-api-loader';
import Vue from 'vue';
export const initAMapApiLoader = (config) => {
  if (Vue.prototype.$isServer) return;
  // if (lazyAMapApiLoaderInstance) throw new Error('You has already initial your lazyAMapApiLoaderInstance, just import it');
  if (lazyAMapApiLoaderInstance) return;
  if (!lazyAMapApiLoaderInstance) lazyAMapApiLoaderInstance = new AMapAPILoader(config);
  // 不知道为何这里要load一次，实际上在AMap.vue组件初始化的时候已经调用这个load了
  // lazyAMapApiLoaderInstance.load();
};
export { lazyAMapApiLoaderInstance };
