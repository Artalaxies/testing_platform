self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aDN(d,e){var w=0,v=B.X(x.s),u,t,s
var $async$aDN=B.Y(function(f,g){if(f===1)return B.U(g,v)
while(true)switch(w){case 0:s=B
w=3
return B.a1(A.b6N(d,e),$async$aDN)
case 3:t=s.aKn(g,d)
u=t
w=1
break
case 1:return B.V(u,v)}})
return B.W($async$aDN,v)},
b6N(d,e){var w,v=new B.ap($.af,x.l),u=new B.aZ(v,x.b),t=$.aTK().$0()
C.ju.HE(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.cb(t,"progress",new A.aCm(e),!1,w)
B.cb(t,"error",new A.aCn(u,d),!1,w)
B.cb(t,"load",new A.aCo(t,u,d),!1,w)
t.send()
return v},
aCP:function aCP(){},
aCm:function aCm(d){this.a=d},
aCn:function aCn(d,e){this.a=d
this.b=e},
aCo:function aCo(d,e,f){this.a=d
this.b=e
this.c=f},
b8M(d,e){var w=B.aS()
if(w)return A.aDN(d.j(0),e)
else return A.b4A(new A.aDU(d,e),x.s)},
b4A(d,e){var w=new B.ap($.af,e.i("ap<0>")),v=d.$1(new A.aBe(new B.KH(w,e.i("KH<0>")),e))
if(v!=null)throw B.c(B.dy(v))
return w},
aDU:function aDU(d,e){this.a=d
this.b=e},
aBe:function aBe(d,e){this.a=d
this.b=e},
tG:function tG(d,e){this.a=d
this.b=e},
ajY:function ajY(d){this.a=d},
lS:function lS(d,e){this.a=d
this.b=e},
a18:function a18(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[35],A)
B=c[0]
J=c[1]
C=c[2]
A.tG.prototype={
qG(d){return new B.bu(this,x.B)},
uT(d,e,f){var w=B.aNu(null,x.h)
return B.aFC(new B.mJ(w,B.r(w).i("mJ<1>")),this.a6o(e,f,w),e.a,null,e.b)},
a6o(d,e,f){return A.b8M(B.asC().a1(d.a),new A.ajY(f))},
k(d,e){if(e==null)return!1
if(J.a7(e)!==B.I(this))return!1
return e instanceof A.tG&&e.a===this.a&&e.b===this.b},
gu(d){return B.a9(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lS.prototype={}
A.a18.prototype={}
var z=a.updateTypes([])
A.aCP.prototype={
$0(){return new XMLHttpRequest()},
$S:424}
A.aCm.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:68}
A.aCn.prototype={
$1(d){this.a.iN(new B.x5(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:68}
A.aCo.prototype={
$1(d){var w,v,u=this,t=u.a,s=t.status
s.toString
w=s>=200&&s<300
v=s>307&&s<400
if(!(w||s===0||s===304||v)){u.b.iN(new B.x5(y.a+u.c+"\nServer response code: "+s))
return}u.b.cT(0,B.dm(x.n.a(B.aGX(t.response)),0,null))},
$S:68}
A.aDU.prototype={
$1(d){d.$1(new B.DJ(this.a.j(0),this.b))
return null},
$S:425}
A.aBe.prototype={
$1(d){var w=this.a
if(d==null)w.iN(new B.IP("operation failed"))
else w.cT(0,d)},
$S(){return this.b.i("~(0)")}}
A.ajY.prototype={
$2(d,e){this.a.F(0,new A.lS(d,e))},
$S:83};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aCP,B.dV)
u(B.bA,[A.aCm,A.aCn,A.aCo,A.aDU,A.aBe])
v(A.tG,B.ex)
v(A.ajY,B.eS)
v(A.a18,B.y)
v(A.lS,A.a18)
w(A.a18,B.aC)})()
B.c6(b.typeUniverse,JSON.parse('{"tG":{"ex":["aFD"],"ex.T":"aFD"},"aFD":{"ex":["aFD"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.t("rn"),s:B.t("kp"),h:B.t("lS"),g:B.t("ir"),B:B.t("bu<tG>"),b:B.t("aZ<dq>"),l:B.t("ap<dq>")};(function lazyInitializers(){var w=a.lazy
w($,"bdJ","aTK",()=>new A.aCP())})()}
$__dart_deferred_initializers__["34zb2l9TbCEtHylwTuBfO12Q6eY="] = $__dart_deferred_initializers__.current
