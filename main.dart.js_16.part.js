self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aFx(d,e){var w=0,v=A.V(x.s),u,t
var $async$aFx=A.W(function(f,g){if(f===1)return A.S(g,v)
while(true)switch(w){case 0:w=3
return A.a0(B.b8X(d,e),$async$aFx)
case 3:t=g
if($.aKs()){u=A.O4(t,d,null,null)
w=1
break}else{u=A.aMl(t,d)
w=1
break}case 1:return A.T(u,v)}})
return A.U($async$aFx,v)},
b8X(d,e){var w,v=new A.ap($.au,x.l),u=new A.b0(v,x.b),t=$.aVX().$0()
C.jH.HX(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
A.cf(t,"progress",new B.aE3(e),!1,w)
A.cf(t,"error",new B.aE4(u,d),!1,w)
A.cf(t,"load",new B.aE5(t,u,d),!1,w)
t.send()
return v},
b99(d,e){var w,v={},u=new A.ap($.au,e.i("ap<0>"))
v.a=!0
w=d.$1(new B.aEd(v,new A.Lo(u,e.i("Lo<0>")),e))
v.a=!1
if(w!=null)throw A.c(A.dq(w))
return u},
aEw:function aEw(){},
aE3:function aE3(d){this.a=d},
aE4:function aE4(d,e){this.a=d
this.b=e},
aE5:function aE5(d,e,f){this.a=d
this.b=e
this.c=f},
aEd:function aEd(d,e,f){this.a=d
this.b=e
this.c=f},
baX(d,e){if($.aT())return B.aFx(d.j(0),e)
else return B.b99(new B.aFD(d,e),x.s)},
aFD:function aFD(d,e){this.a=d
this.b=e},
u4:function u4(d,e,f){this.a=d
this.b=e
this.c=f},
alg:function alg(d){this.a=d},
mk:function mk(d,e){this.a=d
this.b=e},
a1N:function a1N(){}},A,J,C
B=a.updateHolder(c[35],B)
A=c[0]
J=c[1]
C=c[2]
B.u4.prototype={
qI(d){return new A.bO(this,x.B)},
uW(d,e,f){var w=A.aPo(null,x.h)
return A.aHt(new A.n8(w,A.q(w).i("n8<1>")),this.C3(e,f,w),e.a,null,e.b)},
C3(d,e,f){return this.adC(d,e,f)},
adC(d,e,f){var w=0,v=A.V(x.s),u,t,s
var $async$C3=A.W(function(g,h){if(g===1)return A.S(h,v)
while(true)switch(w){case 0:t=A.auk().Y(d.a)
s=B.baX(t,new B.alg(f))
u=s
w=1
break
case 1:return A.T(u,v)}})
return A.U($async$C3,v)},
k(d,e){if(e==null)return!1
if(J.a7(e)!==A.I(this))return!1
return e instanceof B.u4&&e.a===this.a&&e.b===this.b},
gu(d){return A.ac(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
B.mk.prototype={}
B.a1N.prototype={}
var z=a.updateTypes([])
B.aEw.prototype={
$0(){return new XMLHttpRequest()},
$S:438}
B.aE3.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:59}
B.aE4.prototype={
$1(d){this.a.iR(new A.xy(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:59}
B.aE5.prototype={
$1(d){var w,v,u=this,t=u.a,s=t.status
s.toString
w=s>=200&&s<300
v=s>307&&s<400
if(!(w||s===0||s===304||v)){u.b.iR(new A.xy(y.a+u.c+"\nServer response code: "+s))
return}u.b.cG(0,A.du(x.n.a(A.aIO(t.response)),0,null))},
$S:59}
B.aEd.prototype={
$1(d){var w="operation failed"
if(d==null)if(this.a.a)throw A.c(A.dq(w))
else this.b.iR(new A.Jr(w))
else this.b.cG(0,d)},
$S(){return this.c.i("~(0?)")}}
B.aFD.prototype={
$1(d){d.$1(new A.Ed(this.a.j(0),this.b))
return null},
$S:439}
B.alg.prototype={
$2(d,e){this.a.E(0,new B.mk(d,e))},
$S:82};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.aEw,A.dP)
u(A.bA,[B.aE3,B.aE4,B.aE5,B.aEd,B.aFD])
v(B.u4,A.eL)
v(B.alg,A.eJ)
v(B.a1N,A.x)
v(B.mk,B.a1N)
w(B.a1N,A.aD)})()
A.cc(b.typeUniverse,JSON.parse('{"u4":{"eL":["aHv"],"eL.T":"aHv"},"aHv":{"eL":["aHv"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:A.u("rN"),s:A.u("iU"),h:A.u("mk"),g:A.u("iB"),B:A.u("bO<u4>"),b:A.u("b0<dz>"),l:A.u("ap<dz>")};(function lazyInitializers(){var w=a.lazy
w($,"bg7","aVX",()=>new B.aEw())})()}
$__dart_deferred_initializers__["bqqHV3dYFreDhFXlkOj3C9rtaNc="] = $__dart_deferred_initializers__.current
