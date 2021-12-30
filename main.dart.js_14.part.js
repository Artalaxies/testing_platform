self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b8K(d,e){var w,v=new B.ae($.ab,x.f),u=new B.aU(v,x.D),t=$.aTU().$0()
C.j7.HT(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.ci(t,"progress",new A.aDF(e),!1,w)
B.ci(t,"error",new A.aDG(u,d),!1,w)
B.ci(t,"load",new A.aDH(t,u,d),!1,w)
t.send()
return v},
aCz:function aCz(){},
aDF:function aDF(d){this.a=d},
aDG:function aDG(d,e){this.a=d
this.b=e},
aDH:function aDH(d,e,f){this.a=d
this.b=e
this.c=f},
b96(d,e){var w=B.aV()
if(w)return A.b8K(d.j(0),e)
else return A.b4O(new A.aDO(d,e),x.s)},
b4O(d,e){var w=new B.ae($.ab,e.h("ae<0>")),v=d.$1(new A.aB_(new B.JL(w,e.h("JL<0>")),e))
if(v!=null)throw B.c(B.dC(v))
return w},
aDO:function aDO(d,e){this.a=d
this.b=e},
aB_:function aB_(d,e){this.a=d
this.b=e},
tu:function tu(d,e){this.a=d
this.b=e},
ajL:function ajL(d){this.a=d},
lK:function lK(d,e){this.a=d
this.b=e},
a0M:function a0M(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[36],A)
B=c[0]
J=c[1]
C=c[2]
A.tu.prototype={
qz(d){return new B.bu(this,x.B)},
uI(d,e,f){var w=null,v=B.aNB(w,w,w,x.h)
return B.aFP(new B.my(v,B.r(v).h("my<1>")),this.a6o(e,f,v),e.a,w,e.b)},
a6o(d,e,f){return A.b96(B.asj().a7(d.a),new A.ajL(f))},
k(d,e){if(e==null)return!1
if(J.a7(e)!==B.H(this))return!1
return e instanceof A.tu&&e.a===this.a&&e.b===this.b},
gu(d){return B.a5(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lK.prototype={}
A.a0M.prototype={}
var z=a.updateTypes([])
A.aCz.prototype={
$0(){return new XMLHttpRequest()},
$S:423}
A.aDF.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:51}
A.aDG.prototype={
$1(d){this.a.iH(new B.wt(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:51}
A.aDH.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iH(new B.wt(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.ds(x.n.a(B.aH7(o.response)),0,null)
v=B.aKE(w,p.c)
p.b.cH(0,v)}catch(q){u=B.al(q)
t=B.aN(q)
p.b.mm(u,t)}},
$S:51}
A.aDO.prototype={
$1(d){d.$1(new B.CT(this.a.j(0),this.b))
return null},
$S:424}
A.aB_.prototype={
$1(d){var w=this.a
if(d==null)w.iH(new B.HW("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.ajL.prototype={
$2(d,e){this.a.G(0,new A.lK(d,e))},
$S:77};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aCz,B.e8)
u(B.bE,[A.aDF,A.aDG,A.aDH,A.aDO,A.aB_])
v(A.tu,B.eF)
v(A.ajL,B.fv)
v(A.a0M,B.x)
v(A.lK,A.a0M)
w(A.a0M,B.aC)})()
B.cc(b.typeUniverse,JSON.parse('{"tu":{"eF":["aFQ"],"eF.T":"aFQ"},"aFQ":{"eF":["aFQ"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.u("r8"),s:B.u("iF"),h:B.u("lK"),g:B.u("ii"),B:B.u("bu<tu>"),D:B.u("aU<iF>"),f:B.u("ae<iF>")};(function lazyInitializers(){var w=a.lazy
w($,"be0","aTU",()=>new A.aCz())})()}
$__dart_deferred_initializers__["ZA8Cu0Gy9PYK/eodCVvE81TN894="] = $__dart_deferred_initializers__.current
