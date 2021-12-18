self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b7C(d,e){var w,v=new B.ad($.a8,x.f),u=new B.aR(v,x.D),t=$.aSZ().$0()
C.iQ.Hw(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.cb(t,"progress",new A.aCS(e),!1,w)
B.cb(t,"error",new A.aCT(u,d),!1,w)
B.cb(t,"load",new A.aCU(t,u,d),!1,w)
t.send()
return v},
aBJ:function aBJ(){},
aCS:function aCS(d){this.a=d},
aCT:function aCT(d,e){this.a=d
this.b=e},
aCU:function aCU(d,e,f){this.a=d
this.b=e
this.c=f},
b7Z(d,e){var w=B.aS()
if(w)return A.b7C(d.j(0),e)
else return A.b3M(new A.aD0(d,e),x.s)},
b3M(d,e){var w=new B.ad($.a8,e.h("ad<0>")),v=d.$1(new A.aAg(new B.Jh(w,e.h("Jh<0>")),e))
if(v!=null)throw B.c(B.dq(v))
return w},
aD0:function aD0(d,e){this.a=d
this.b=e},
aAg:function aAg(d,e){this.a=d
this.b=e},
t5:function t5(d,e){this.a=d
this.b=e},
aja:function aja(d){this.a=d},
lr:function lr(d,e){this.a=d
this.b=e},
a0j:function a0j(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[25],A)
B=c[0]
J=c[1]
C=c[2]
A.t5.prototype={
qt(d){return new B.br(this,x.B)},
uC(d,e,f){var w=null,v=B.aMM(w,w,w,x.h)
return B.aF1(new B.mf(v,B.r(v).h("mf<1>")),this.a5V(e,f,v),e.a,w,e.b)},
a5V(d,e,f){return A.b7Z(B.as4().aU(d.a),new A.aja(f))},
k(d,e){if(e==null)return!1
if(J.a5(e)!==B.H(this))return!1
return e instanceof A.t5&&e.a===this.a&&e.b===this.b},
gv(d){return B.a3(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lr.prototype={}
A.a0j.prototype={}
var z=a.updateTypes([])
A.aBJ.prototype={
$0(){return new XMLHttpRequest()},
$S:417}
A.aCS.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:66}
A.aCT.prototype={
$1(d){this.a.iD(new B.w5(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:66}
A.aCU.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iD(new B.w5(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.dh(x.n.a(B.aGo(o.response)),0,null)
v=B.aJP(w,p.c)
p.b.cH(0,v)}catch(q){u=B.ak(q)
t=B.aI(q)
p.b.mf(u,t)}},
$S:66}
A.aD0.prototype={
$1(d){d.$1(new B.Co(this.a.j(0),this.b))
return null},
$S:418}
A.aAg.prototype={
$1(d){var w=this.a
if(d==null)w.iD(new B.Ht("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.aja.prototype={
$2(d,e){this.a.F(0,new A.lr(d,e))},
$S:93};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aBJ,B.h3)
u(B.c1,[A.aCS,A.aCT,A.aCU,A.aD0,A.aAg])
v(A.t5,B.ev)
v(A.aja,B.hF)
v(A.a0j,B.z)
v(A.lr,A.a0j)
w(A.a0j,B.aC)})()
B.dV(b.typeUniverse,JSON.parse('{"t5":{"ev":["aF2"],"ev.T":"aF2"},"aF2":{"ev":["aF2"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.y("qU"),s:B.y("ij"),h:B.y("lr"),g:B.y("i_"),B:B.y("br<t5>"),D:B.y("aR<ij>"),f:B.y("ad<ij>")};(function lazyInitializers(){var w=a.lazy
w($,"bcM","aSZ",()=>new A.aBJ())})()}
$__dart_deferred_initializers__["IjuSkSm1BQ4DMQIqo5NjmxmQ6PE="] = $__dart_deferred_initializers__.current
