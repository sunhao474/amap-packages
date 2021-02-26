# amap-packages

vue-amap 设计思路：
1.实现了一个异步加载接口，并提供回调函数，回调函数返回脚本，在回调函数里初始化组件以确保调用完成
2.vue组件化amap及其子组件（amarker）等，子组件用slot方式插入amap组件。
3.在amap组件里加载地图脚本，加载完成后初始化amap本身，之后会分发初始化完成事件给子组件。
4.子组件混入register-component，register-component中注册监听amap的初始化完成事件，在完成后自行调用
_initcomponent相关函数进行渲染。