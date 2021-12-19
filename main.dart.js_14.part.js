self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b7G(d,e){var w,v=new B.ad($.aa,x.f),u=new B.aR(v,x.D),t=$.aT0().$0()
C.iP.Hy(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.cb(t,"progress",new A.aCW(e),!1,w)
B.cb(t,"error",new A.aCX(u,d),!1,w)
B.cb(t,"load",new A.aCY(t,u,d),!1,w)
t.send()
return v},
aBN:function aBN(){},
aCW:function aCW(d){this.a=d},
aCX:function aCX(d,e){this.a=d
this.b=e},
aCY:function aCY(d,e,f){this.a=d
this.b=e
this.c=f},
b82(d,e){var w=B.aS()
if(w)return A.b7G(d.j(0),e)
else return A.b3Q(new A.aD4(d,e),x.s)},
b3Q(d,e){var w=new B.ad($.aa,e.h("ad<0>")),v=d.$1(new A.aAj(new B.Ji(w,e.h("Ji<0>")),e))
if(v!=null)throw B.c(B.ds(v))
return w},
aD4:function aD4(d,e){this.a=d
this.b=e},
aAj:function aAj(d,e){this.a=d
this.b=e},
t6:function t6(d,e){this.a=d
this.b=e},
aje:function aje(d){this.a=d},
lt:function lt(d,e){this.a=d
this.b=e},
a0k:function a0k(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[28],A)
B=c[0]
J=c[1]
C=c[2]
A.t6.prototype={
qt(d){return new B.br(this,x.B)},
uC(d,e,f){var w=null,v=B.aMP(w,w,w,x.h)
return B.aF5(new B.mg(v,B.t(v).h("mg<1>")),this.a5X(e,f,v),e.a,w,e.b)},
a5X(d,e,f){return A.b82(B.as7().aT(d.a),new A.aje(f))},
k(d,e){if(e==null)return!1
if(J.a6(e)!==B.H(this))return!1
return e instanceof A.t6&&e.a===this.a&&e.b===this.b},
gv(d){return B.a3(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lt.prototype={}
A.a0k.prototype={}
var z=a.updateTypes([])
A.aBN.prototype={
$0(){return new XMLHttpRequest()},
$S:417}
A.aCW.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:56}
A.aCX.prototype={
$1(d){this.a.iE(new B.w6(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:56}
A.aCY.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iE(new B.w6(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.di(x.n.a(B.aGt(o.response)),0,null)
v=B.aJT(w,p.c)
p.b.cH(0,v)}catch(q){u=B.ak(q)
t=B.aI(q)
p.b.mf(u,t)}},
$S:56}
A.aD4.prototype={
$1(d){d.$1(new B.Cr(this.a.j(0),this.b))
return null},
$S:418}
A.aAj.prototype={
$1(d){var w=this.a
if(d==null)w.iE(new B.Hu("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.aje.prototype={
$2(d,e){this.a.F(0,new A.lt(d,e))},
$S:74};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aBN,B.h5)
u(B.bT,[A.aCW,A.aCX,A.aCY,A.aD4,A.aAj])
v(A.t6,B.ex)
v(A.aje,B.h6)
v(A.a0k,B.z)
v(A.lt,A.a0k)
w(A.a0k,B.aD)})()
B.dw(b.typeUniverse,JSON.parse('{"t6":{"ex":["aF6"],"ex.T":"aF6"},"aF6":{"ex":["aF6"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.w("qV"),s:B.w("ik"),h:B.w("lt"),g:B.w("i0"),B:B.w("br<t6>"),D:B.w("aR<ik>"),f:B.w("ad<ik>")};(function lazyInitializers(){var w=a.lazy
w($,"bcQ","aT0",()=>new A.aBN())})()}
$__dart_deferred_initializers__["A0CCMDv54wvQlfwiQFBx07U1Tg4="] = $__dart_deferred_initializers__.current
