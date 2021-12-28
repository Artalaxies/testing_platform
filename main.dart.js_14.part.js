self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
ba_(d,e){var w,v=new B.ae($.ab,x.f),u=new B.aU(v,x.D),t=$.aVe().$0()
C.j6.HR(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.ch(t,"progress",new A.aEX(e),!1,w)
B.ch(t,"error",new A.aEY(u,d),!1,w)
B.ch(t,"load",new A.aEZ(t,u,d),!1,w)
t.send()
return v},
aDQ:function aDQ(){},
aEX:function aEX(d){this.a=d},
aEY:function aEY(d,e){this.a=d
this.b=e},
aEZ:function aEZ(d,e,f){this.a=d
this.b=e
this.c=f},
bam(d,e){var w=B.aV()
if(w)return A.ba_(d.j(0),e)
else return A.b64(new A.aF5(d,e),x.s)},
b64(d,e){var w=new B.ae($.ab,e.h("ae<0>")),v=d.$1(new A.aCg(new B.JP(w,e.h("JP<0>")),e))
if(v!=null)throw B.c(B.dC(v))
return w},
aF5:function aF5(d,e){this.a=d
this.b=e},
aCg:function aCg(d,e){this.a=d
this.b=e},
tq:function tq(d,e){this.a=d
this.b=e},
akv:function akv(d){this.a=d},
lI:function lI(d,e){this.a=d
this.b=e},
a0Z:function a0Z(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[36],A)
B=c[0]
J=c[1]
C=c[2]
A.tq.prototype={
qx(d){return new B.bu(this,x.B)},
uG(d,e,f){var w=null,v=B.aOV(w,w,w,x.h)
return B.aH7(new B.mw(v,B.t(v).h("mw<1>")),this.a6l(e,f,v),e.a,w,e.b)},
a6l(d,e,f){return A.bam(B.atv().a7(d.a),new A.akv(f))},
k(d,e){if(e==null)return!1
if(J.a7(e)!==B.H(this))return!1
return e instanceof A.tq&&e.a===this.a&&e.b===this.b},
gv(d){return B.a5(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lI.prototype={}
A.a0Z.prototype={}
var z=a.updateTypes([])
A.aDQ.prototype={
$0(){return new XMLHttpRequest()},
$S:422}
A.aEX.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:66}
A.aEY.prototype={
$1(d){this.a.iH(new B.ws(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:66}
A.aEZ.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iH(new B.ws(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.dt(x.n.a(B.aIs(o.response)),0,null)
v=B.aLY(w,p.c)
p.b.cH(0,v)}catch(q){u=B.ak(q)
t=B.aN(q)
p.b.mj(u,t)}},
$S:66}
A.aF5.prototype={
$1(d){d.$1(new B.CU(this.a.j(0),this.b))
return null},
$S:423}
A.aCg.prototype={
$1(d){var w=this.a
if(d==null)w.iH(new B.I_("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.akv.prototype={
$2(d,e){this.a.G(0,new A.lI(d,e))},
$S:79};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aDQ,B.e7)
u(B.bE,[A.aEX,A.aEY,A.aEZ,A.aF5,A.aCg])
v(A.tq,B.eE)
v(A.akv,B.fv)
v(A.a0Z,B.x)
v(A.lI,A.a0Z)
w(A.a0Z,B.aC)})()
B.cc(b.typeUniverse,JSON.parse('{"tq":{"eE":["aH8"],"eE.T":"aH8"},"aH8":{"eE":["aH8"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.v("r4"),s:B.v("iE"),h:B.v("lI"),g:B.v("ih"),B:B.v("bu<tq>"),D:B.v("aU<iE>"),f:B.v("ae<iE>")};(function lazyInitializers(){var w=a.lazy
w($,"bfg","aVe",()=>new A.aDQ())})()}
$__dart_deferred_initializers__["ihYLA5txwtmO6h0s7rz5kvSeUB8="] = $__dart_deferred_initializers__.current
