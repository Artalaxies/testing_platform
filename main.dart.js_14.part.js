self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b95(d,e){var w,v=new B.ad($.aa,x.f),u=new B.aU(v,x.D),t=$.aUj().$0()
C.iZ.HK(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.cg(t,"progress",new A.aEc(e),!1,w)
B.cg(t,"error",new A.aEd(u,d),!1,w)
B.cg(t,"load",new A.aEe(t,u,d),!1,w)
t.send()
return v},
aD6:function aD6(){},
aEc:function aEc(d){this.a=d},
aEd:function aEd(d,e){this.a=d
this.b=e},
aEe:function aEe(d,e,f){this.a=d
this.b=e
this.c=f},
b9s(d,e){var w=B.aV()
if(w)return A.b95(d.j(0),e)
else return A.b5c(new A.aEl(d,e),x.s)},
b5c(d,e){var w=new B.ad($.aa,e.h("ad<0>")),v=d.$1(new A.aBB(new B.JB(w,e.h("JB<0>")),e))
if(v!=null)throw B.c(B.dA(v))
return w},
aEl:function aEl(d,e){this.a=d
this.b=e},
aBB:function aBB(d,e){this.a=d
this.b=e},
tm:function tm(d,e){this.a=d
this.b=e},
ak3:function ak3(d){this.a=d},
lC:function lC(d,e){this.a=d
this.b=e},
a0H:function a0H(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[39],A)
B=c[0]
J=c[1]
C=c[2]
A.tm.prototype={
qy(d){return new B.bu(this,x.B)},
uG(d,e,f){var w=null,v=B.aO3(w,w,w,x.h)
return B.aGk(new B.mq(v,B.t(v).h("mq<1>")),this.a6a(e,f,v),e.a,w,e.b)},
a6a(d,e,f){return A.b9s(B.at0().a7(d.a),new A.ak3(f))},
k(d,e){if(e==null)return!1
if(J.a6(e)!==B.H(this))return!1
return e instanceof A.tm&&e.a===this.a&&e.b===this.b},
gu(d){return B.a4(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lC.prototype={}
A.a0H.prototype={}
var z=a.updateTypes([])
A.aD6.prototype={
$0(){return new XMLHttpRequest()},
$S:421}
A.aEc.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:54}
A.aEd.prototype={
$1(d){this.a.iF(new B.wj(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:54}
A.aEe.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iF(new B.wj(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.dp(x.n.a(B.aHF(o.response)),0,null)
v=B.aL6(w,p.c)
p.b.cH(0,v)}catch(q){u=B.ak(q)
t=B.aK(q)
p.b.mh(u,t)}},
$S:54}
A.aEl.prototype={
$1(d){d.$1(new B.CG(this.a.j(0),this.b))
return null},
$S:422}
A.aBB.prototype={
$1(d){var w=this.a
if(d==null)w.iF(new B.HM("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.ak3.prototype={
$2(d,e){this.a.F(0,new A.lC(d,e))},
$S:89};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aD6,B.eW)
u(B.bL,[A.aEc,A.aEd,A.aEe,A.aEl,A.aBB])
v(A.tm,B.eC)
v(A.ak3,B.fr)
v(A.a0H,B.y)
v(A.lC,A.a0H)
w(A.a0H,B.aA)})()
B.cc(b.typeUniverse,JSON.parse('{"tm":{"eC":["aGl"],"eC.T":"aGl"},"aGl":{"eC":["aGl"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.v("r3"),s:B.v("iB"),h:B.v("lC"),g:B.v("id"),B:B.v("bu<tm>"),D:B.v("aU<iB>"),f:B.v("ad<iB>")};(function lazyInitializers(){var w=a.lazy
w($,"bej","aUj",()=>new A.aD6())})()}
$__dart_deferred_initializers__["VgAVUmCVZdvd9040j4tx89KCEOs="] = $__dart_deferred_initializers__.current
