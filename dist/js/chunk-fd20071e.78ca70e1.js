(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd20071e"],{"311c":function(t,e,r){"use strict";var i=r("63f2"),c=r.n(i);c.a},"4bad":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"lyricPage",staticClass:"lyric-page"},t._l(t.$store.state.lyricTextArr,(function(e,i){return r("div",{key:i,staticClass:"lyric-item"},[r("div",{staticClass:"lyric-text-line",style:t.setplayingLyricStyle(e,i)},[t._v(" "+t._s(e.text)+" ")])])})),0)},c=[],s={name:"lyric-page",data:function(){return{playingLyricStytle:{transform:"scale(1.5)",color:"var(--highlight-deep-color)"},currentLyricIndex:0,scrollTop:0}},watch:{currentLyricIndex:function(){this.$refs.lyricPage.scrollTop=0,this.currentLyricIndex>6&&(this.$refs.lyricPage.scrollTop=40*(this.currentLyricIndex-6))}},methods:{setplayingLyricStyle:function(t,e){if(this.$store.state.currentTime>t.time&&(e===this.$store.state.lyricTextArr.length-1||this.$store.state.currentTime<this.$store.state.lyricTextArr[e+1].time))return this.currentLyricIndex=e,this.playingLyricStytle}}},n=s,l=(r("311c"),r("2877")),a=Object(l["a"])(n,i,c,!1,null,null,null);e["default"]=a.exports},"63f2":function(t,e,r){}}]);
//# sourceMappingURL=chunk-fd20071e.78ca70e1.js.map