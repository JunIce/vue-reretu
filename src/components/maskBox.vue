<template>
 
 <div class="mask">
 <bgMask @maskcloseBox="closeBox"></bgMask>
 <div class="maskBox">
 	<i class="mask-close" v-on:click="closeBox"></i>
 </div>
 </div>

</template>

<script>
import bgMask from '@/components/bgMask'
export default {
  name: 'maskBox',
  data () {
    return {
      winWidth:'',
      winHeight:'',
      ModalHelper : this.ModalHelper()
    }
  },
  components:{
  	bgMask
  },
  mounted(){
  	this.winWidth = document.documentElement.clientWidth;
  	this.winHeight = document.documentElement.clientHeight;
    this.$nextTick(function () {
        this.$on('showbox', function () {
            this.showBox()
        })
      })
  },
  watch:{
  	
  },
  methods:{
  	showBox:function(){
  		document.querySelector('.mask').style.display='block'
  		this.ModalHelper.afterOpen()
  		var mask = document.querySelector('.maskBox')

  		var left = this.winWidth/2 - mask.offsetWidth/2 
  		var height = this.winHeight/2 - mask.offsetHeight/2 
  		mask.style.top = height + 'px'
  		mask.style.left = left + 'px'
  	},
  	closeBox:function(){
  		this.ModalHelper.beforeClose()
  		document.querySelector('.mask').style.display='none'
  	},
  	ModalHelper : function() {
	    var scrollTop
	    var bodyCls = 'modal-open'
	    return {
	      afterOpen: function() {
	        scrollTop = document.body.scrollTop;
	        document.querySelector('body').classList.add(bodyCls)
	        document.body.style.top = -scrollTop + 'px';
	      },
	      beforeClose: function() {
	        document.querySelector('body').classList.remove(bodyCls)
	        document.body.scrollTop = scrollTop;
	      }
	    };
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask{display: none;}
.maskBox{width: 80%;height: 80vh;background-color:#fff;position: absolute;z-index: 100;border-radius: 5px;overflow: hidden;	padding: 1.5rem;box-sizing: border-box;}
.mask-close{width: 1.6rem;height: 1.6rem;background-image: url(../assets/close.png);background-size: contain;display: inline-block;position: absolute;right: 1rem;top:1rem;}
</style>
