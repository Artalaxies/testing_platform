self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b3T(d,e){var w,v=new B.ad($.a8,x.f),u=new B.aW(v,x.D),t=$.aPm().$0()
C.iV.Hr(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.ca(t,"progress",new A.azC(e),!1,w)
B.ca(t,"error",new A.azD(u,d),!1,w)
B.ca(t,"load",new A.azE(t,u,d),!1,w)
t.send()
return v},
ayA:function ayA(){},
azC:function azC(d){this.a=d},
azD:function azD(d,e){this.a=d
this.b=e},
azE:function azE(d,e,f){this.a=d
this.b=e
this.c=f},
b4f(d,e){var w=B.aO()
if(w)return A.b3T(d.j(0),e)
else return A.b06(new A.azL(d,e),x.s)},
b06(d,e){var w=new B.ad($.a8,e.h("ad<0>")),v=d.$1(new A.axe(new B.J2(w,e.h("J2<0>")),e))
if(v!=null)throw B.c(B.ds(v))
return w},
azL:function azL(d,e){this.a=d
this.b=e},
axe:function axe(d,e){this.a=d
this.b=e},
wu:function wu(d,e){this.a=d
this.b=e},
agX:function agX(d){this.a=d},
lr:function lr(d,e){this.a=d
this.b=e},
a_M:function a_M(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[13],A)
B=c[0]
J=c[1]
C=c[2]
A.wu.prototype={
qv(d){return new B.bs(this,x.B)},
uy(d,e,f){var w=null,v=B.aJh(w,w,w,x.h)
return B.aBG(new B.me(v,B.q(v).h("me<1>")),this.a5P(e,f,v),e.a,w,e.b)},
a5P(d,e,f){return A.b4f(B.aoS().aa(d.a),new A.agX(f))},
k(d,e){if(e==null)return!1
if(J.a1(e)!==B.G(this))return!1
return e instanceof A.wu&&e.a===this.a&&e.b===this.b},
gv(d){return B.a6(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lr.prototype={}
A.a_M.prototype={}
var z=a.updateTypes([])
A.ayA.prototype={
$0(){return new XMLHttpRequest()},
$S:416}
A.azC.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:52}
A.azD.prototype={
$1(d){this.a.iG(new B.vT(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:52}
A.azE.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iG(new B.vT(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.di(x.n.a(B.aCZ(o.response)),0,null)
v=B.aGm(w,p.c)
p.b.cH(0,v)}catch(q){u=B.al(q)
t=B.aH(q)
p.b.ml(u,t)}},
$S:52}
A.azL.prototype={
$1(d){d.$1(new B.C5(this.a.j(0),this.b))
return null},
$S:417}
A.axe.prototype={
$1(d){var w=this.a
if(d==null)w.iG(new B.Hd("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.agX.prototype={
$2(d,e){this.a.F(0,new A.lr(d,e))},
$S:71};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.ayA,B.h4)
u(B.cd,[A.azC,A.azD,A.azE,A.azL,A.axe])
v(A.wu,B.ew)
v(A.agX,B.hF)
v(A.a_M,B.y)
v(A.lr,A.a_M)
w(A.a_M,B.aC)})()
B.dU(b.typeUniverse,JSON.parse('{"wu":{"ew":["aBH"],"ew.T":"aBH"},"aBH":{"ew":["aBH"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.B("qN"),s:B.B("ip"),h:B.B("lr"),g:B.B("i1"),B:B.B("bs<wu>"),D:B.B("aW<ip>"),f:B.B("ad<ip>")};(function lazyInitializers(){var w=a.lazy
w($,"b8O","aPm",()=>new A.ayA())})()}
$__dart_deferred_initializers__["2FYPtUcZD+7h2w8hKHTgxzhZLrA="] = $__dart_deferred_initializers__.current
