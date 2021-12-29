self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b8I(d,e){var w,v=new B.ae($.ab,x.f),u=new B.aU(v,x.D),t=$.aTS().$0()
C.j6.HT(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.ch(t,"progress",new A.aDB(e),!1,w)
B.ch(t,"error",new A.aDC(u,d),!1,w)
B.ch(t,"load",new A.aDD(t,u,d),!1,w)
t.send()
return v},
aCv:function aCv(){},
aDB:function aDB(d){this.a=d},
aDC:function aDC(d,e){this.a=d
this.b=e},
aDD:function aDD(d,e,f){this.a=d
this.b=e
this.c=f},
b94(d,e){var w=B.aV()
if(w)return A.b8I(d.j(0),e)
else return A.b4M(new A.aDK(d,e),x.s)},
b4M(d,e){var w=new B.ae($.ab,e.h("ae<0>")),v=d.$1(new A.aAW(new B.JL(w,e.h("JL<0>")),e))
if(v!=null)throw B.c(B.dp(v))
return w},
aDK:function aDK(d,e){this.a=d
this.b=e},
aAW:function aAW(d,e){this.a=d
this.b=e},
ts:function ts(d,e){this.a=d
this.b=e},
ajI:function ajI(d){this.a=d},
lK:function lK(d,e){this.a=d
this.b=e},
a0M:function a0M(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[36],A)
B=c[0]
J=c[1]
C=c[2]
A.ts.prototype={
qx(d){return new B.bu(this,x.B)},
uH(d,e,f){var w=null,v=B.aNz(w,w,w,x.h)
return B.aFL(new B.my(v,B.r(v).h("my<1>")),this.a6n(e,f,v),e.a,w,e.b)},
a6n(d,e,f){return A.b94(B.asg().a7(d.a),new A.ajI(f))},
k(d,e){if(e==null)return!1
if(J.a7(e)!==B.H(this))return!1
return e instanceof A.ts&&e.a===this.a&&e.b===this.b},
gu(d){return B.a5(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lK.prototype={}
A.a0M.prototype={}
var z=a.updateTypes([])
A.aCv.prototype={
$0(){return new XMLHttpRequest()},
$S:423}
A.aDB.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:66}
A.aDC.prototype={
$1(d){this.a.iH(new B.ws(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:66}
A.aDD.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iH(new B.ws(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.dt(x.n.a(B.aH4(o.response)),0,null)
v=B.aKC(w,p.c)
p.b.cH(0,v)}catch(q){u=B.al(q)
t=B.aN(q)
p.b.mk(u,t)}},
$S:66}
A.aDK.prototype={
$1(d){d.$1(new B.CT(this.a.j(0),this.b))
return null},
$S:424}
A.aAW.prototype={
$1(d){var w=this.a
if(d==null)w.iH(new B.HW("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.ajI.prototype={
$2(d,e){this.a.G(0,new A.lK(d,e))},
$S:79};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aCv,B.e7)
u(B.bE,[A.aDB,A.aDC,A.aDD,A.aDK,A.aAW])
v(A.ts,B.eF)
v(A.ajI,B.fu)
v(A.a0M,B.x)
v(A.lK,A.a0M)
w(A.a0M,B.aC)})()
B.cc(b.typeUniverse,JSON.parse('{"ts":{"eF":["aFM"],"eF.T":"aFM"},"aFM":{"eF":["aFM"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.u("r6"),s:B.u("iE"),h:B.u("lK"),g:B.u("ih"),B:B.u("bu<ts>"),D:B.u("aU<iE>"),f:B.u("ae<iE>")};(function lazyInitializers(){var w=a.lazy
w($,"bdZ","aTS",()=>new A.aCv())})()}
$__dart_deferred_initializers__["CJpKLyQq2pgnetB9Ozao08AA5eI="] = $__dart_deferred_initializers__.current
