function DitherGen(t){this.canvas=t,this.ctx=t.getContext("2d"),this.ctx||alert("Your browser does not support HTML5 Canvas")}DitherGen.prototype.dither=function(t,e){for(var o=t.width,i=t.height,h=t.data,n=0;i>n;n++){yw=n*o,ywD=(n+1)*o,r=n/i,rv=255*r;for(var l=0;o>l;l++){var a=4*(l+yw),p=this.pixelGet(h,a),c=this.colorReduce(p,e),s=this.colorDifference(p,c);this.pixelSet(h,a,c);var d=4*(l+1+yw);this.pixelAdd(h,d,this.colorMultiply(s,7/16));var u=4*(l-1+ywD);this.pixelAdd(h,u,this.colorMultiply(s,3/16));var f=4*(l+ywD);this.pixelAdd(h,f,this.colorMultiply(s,5/16));var y=4*(l+1+ywD);this.pixelAdd(h,y,this.colorMultiply(s,1/16))}}this.ctx.putImageData(t,0,0)},DitherGen.prototype.pixelSet=function(t,e,o){t[e]=o[0],t[e+1]=o[1],t[e+2]=o[2],t[e+3]=o[3]},DitherGen.prototype.pixelGet=function(t,e){return[t[e],t[e+1],t[e+2],t[e+3]]},DitherGen.prototype.pixelReduce=function(t,e,o){return[Math.floor(t[e]/o)*o,Math.floor(t[e+1]/o)*o,Math.floor(t[e+1]/o)*o,Math.floor(t[e+1]/o)*o]},DitherGen.prototype.colorReduce=function(t,e){return[Math.floor(t[0]/e)*e,Math.floor(t[1]/e)*e,Math.floor(t[2]/e)*e,255]},DitherGen.prototype.colorDifference=function(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2],255]},DitherGen.prototype.colorMultiply=function(t,e){return[t[0]*e,t[1]*e,t[2]*e,t[3]]},DitherGen.prototype.pixelMultiply=function(t,e,o){t[e]*=o,t[e+1]*=o,t[e+2]*=o,t[e+3]=255},DitherGen.prototype.pixelAdd=function(t,e,o){t[e]+=o[0],t[e+1]+=o[1],t[e+2]+=o[2],t[e+3]+=o[3]},DitherGen.prototype.pixelGradient=function(t,e,o,r,i){t[e]=Math.lerp(o[0],r[0],i),t[e+1]=Math.lerp(o[1],r[1],i),t[e+2]=Math.lerp(o[2],r[2],i),t[e+3]=255},Math.lerp=function(t,e,o){return(1-o)*t+o*e},DitherGen.prototype.testGradient=function(){this.ctx.rect(0,0,this.canvas.width,this.canvas.height);var t=this.ctx.createLinearGradient(0,0,this.canvas.width,this.canvas.height);return t.addColorStop(.14,"#FF0000"),t.addColorStop(.285714286,"#FF7F00"),t.addColorStop(.428571429,"#FFFF00"),t.addColorStop(.571428571,"#00FF00"),t.addColorStop(.714285714,"#0000FF"),t.addColorStop(.857142857,"#4B0082"),t.addColorStop(1,"#8F00FF"),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)};