<template>
	<li>
		<img :src="tab.src">
		<div class="tab-title"><span>{{tab.title}}</span></div>
	</li>
</template>
<script>
export default {
  name: 'findTab',
  props:['tab'],
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
.find-tabs li{width: 10rem;height:10rem;margin-left:.8rem;margin-top:.3rem;margin-bottom: .3rem;border-radius: 4px;overflow: hidden;float: left;position: relative;}
.find-tabs li img{width: 100%;}
.tab-title{background-color: #000;opacity: .8;position: absolute;bottom: 0;left: 0;width: 100%;line-height: 3rem;color:#fff;padding: 0 1rem;font-size: 1.4rem;}
</style>