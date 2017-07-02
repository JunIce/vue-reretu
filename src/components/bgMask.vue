<template>
	<div class="bg-mask" @click="closeBox"></div>
</template>
<script>
	export default{
		methods:{
			closeBox:function(){
				this.$emit('maskcloseBox')
			}
		}
	}
</script>
<style>
	.bg-mask{position: fixed;
    background-color: #000;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;}
</style>