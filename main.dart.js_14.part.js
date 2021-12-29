self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
baV(d,e){var w,v=new B.af($.a5,x.f),u=new B.aT(v,x.D),t=$.aVT().$0()
C.j7.Ip(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.cl(t,"progress",new A.aFc(e),!1,w)
B.cl(t,"error",new A.aFd(u,d),!1,w)
B.cl(t,"load",new A.aFe(t,u,d),!1,w)
t.send()
return v},
aE5:function aE5(){},
aFc:function aFc(d){this.a=d},
aFd:function aFd(d,e){this.a=d
this.b=e},
aFe:function aFe(d,e,f){this.a=d
this.b=e
this.c=f},
bbh(d,e){var w=B.aW()
if(w)return A.baV(d.j(0),e)
else return A.b6U(new A.aFl(d,e),x.s)},
b6U(d,e){var w=new B.af($.a5,e.h("af<0>")),v=d.$1(new A.aCt(new B.Kv(w,e.h("Kv<0>")),e))
if(v!=null)throw B.c(B.dG(v))
return w},
aFl:function aFl(d,e){this.a=d
this.b=e},
aCt:function aCt(d,e){this.a=d
this.b=e},
tM:function tM(d,e){this.a=d
this.b=e},
al8:function al8(d){this.a=d},
lY:function lY(d,e){this.a=d
this.b=e},
a1G:function a1G(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[36],A)
B=c[0]
J=c[1]
C=c[2]
A.tM.prototype={
qP(d){return new B.bz(this,x.B)},
v2(d,e,f){var w=null,v=B.aPp(w,w,w,x.h)
return B.aHu(new B.iC(v,B.q(v).h("iC<1>")),this.a7G(e,f,v),e.a,w,e.b)},
a7G(d,e,f){return A.bbh(B.atG().a7(d.a),new A.al8(f))},
k(d,e){if(e==null)return!1
if(J.a9(e)!==B.H(this))return!1
return e instanceof A.tM&&e.a===this.a&&e.b===this.b},
gu(d){return B.a7(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lY.prototype={}
A.a1G.prototype={}
var z=a.updateTypes([])
A.aE5.prototype={
$0(){return new XMLHttpRequest()},
$S:445}
A.aFc.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:57}
A.aFd.prototype={
$1(d){this.a.iM(new B.wX(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:57}
A.aFe.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iM(new B.wX(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.dx(x.n.a(B.aIO(o.response)),0,null)
v=B.aMk(w,p.c)
p.b.cI(0,v)}catch(q){u=B.ag(q)
t=B.aH(q)
p.b.mx(u,t)}},
$S:57}
A.aFl.prototype={
$1(d){d.$1(new B.DB(this.a.j(0),this.b))
return null},
$S:446}
A.aCt.prototype={
$1(d){var w=this.a
if(d==null)w.iM(new B.IE("operation failed"))
else w.cI(0,d)},
$S(){return this.b.h("~(0)")}}
A.al8.prototype={
$2(d,e){this.a.E(0,new A.lY(d,e))},
$S:93};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aE5,B.e9)
u(B.bH,[A.aFc,A.aFd,A.aFe,A.aFl,A.aCt])
v(A.tM,B.eI)
v(A.al8,B.fA)
v(A.a1G,B.x)
v(A.lY,A.a1G)
w(A.a1G,B.aC)})()
B.cf(b.typeUniverse,JSON.parse('{"tM":{"eI":["aHv"],"eI.T":"aHv"},"aHv":{"eI":["aHv"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.t("ro"),s:B.t("iO"),h:B.t("lY"),g:B.t("iq"),B:B.t("bz<tM>"),D:B.t("aT<iO>"),f:B.t("af<iO>")};(function lazyInitializers(){var w=a.lazy
w($,"bgn","aVT",()=>new A.aE5())})()}
$__dart_deferred_initializers__["vI9fkyCtZingPQsAavNbxW8TjBg="] = $__dart_deferred_initializers__.current
