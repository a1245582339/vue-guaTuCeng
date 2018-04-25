<template>
  <div class="guaguale">
    <img :width="width" :height="height" class="img" :src="image2"/>
		<canvas id="canvas" :width="width" :height="height" ></canvas>
  </div>
</template>

<script>
export default {
	props:{
		image1:String,
		image2:String,
		width:Number,
		height:Number,
		percent:Number,
	},
  name: "guaguale",
  data() {
    return {
    };
  },
  methods:{
    check(ctx,can){
      var data = ctx.getImageData(0,0,can.width,can.height).data;
			var l = data.length;
			var n =0
			for(var i = 0;i<l-3;i+=4){
				if(data[i]==0&&data[i+1]==0&&data[i+2]==0&&data[i+4]==0){
					n++
				}
			}
			var s = n/(l/4)*100;
			
			if(s>=this.percent){
				console.log(s)
				ctx.clearRect(0,0,this.width,this.height)
				this.$emit('success')
			}
    }
  },
  mounted() {
    var vm = this
    var can = document.getElementById('canvas')
		var ctx = can.getContext('2d')
		var oImg = new Image()
		oImg.src = vm.image1
		oImg.onload = function(){
      ctx.drawImage(oImg,0,0,vm.width,vm.height)
		}
		can.onmousedown = function(ev){
			var ev = ev || window.event;
			var x = ev.offsetX,
				y = ev.offsetY;
			ctx.beginPath()
			ctx.arc(x,y,15,0,Math.PI*2,false);
			ctx.globalCompositeOperation = 'destination-out'
			ctx.fill();
			this.onmousemove = function(ev){
				var ev = ev || window.event;
				var x1 = ev.offsetX,
					y1 = ev.offsetY;
				ctx.beginPath()
				ctx.moveTo(x,y);
				ctx.lineTo(x1,y1);
				ctx.lineWidth = 30;
				ctx.lineCap = 'round'
				ctx.globalCompositeOperation = 'destination-out'
				ctx.stroke();
				x = x1;
				y = y1;
				vm.check(ctx,can)
			}
			this.onmouseup = function(){
				this.onmousemove = null;
			}
			this.onmouseleave = function(){
				this.onmousemove = null;
			}
		}
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.guaguale{
	position: relative;
}
canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.img{
	position: absolute;
	top: 0;
	left: 0;
}
</style>
