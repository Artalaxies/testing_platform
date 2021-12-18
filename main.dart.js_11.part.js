self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nc:function nc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},aiT:function aiT(){},
aGv(){var x=0,w=A.Y(y.k),v
var $async$aGv=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.qr().V_("assets/ArtalaxiesMarket.json").aM(0,new B.aAj(),y.w).aM(0,new B.aAk(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aGv,w)},
a5L(d,e){var x=0,w=A.Y(y.h),v
var $async$a5L=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.a6c().aP(C.w,"getLatestTransaction executed",null,null)
x=3
return A.a2($.aI2().aM(0,new B.aBA(e,d),y.h),$async$a5L)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a5L,w)},
aPI(d){$.a6c().aP(C.w,"getNFTData executed",null,null)
return $.aI2().aM(0,new B.aBD(d),y.b)},
aAj:function aAj(){},
aAk:function aAk(){},
aBA:function aBA(d,e){this.a=d
this.b=e},
aBD:function aBD(d){this.a=d},
aBB:function aBB(d){this.a=d},
aBC:function aBC(){},
aZn(d){var x=new ethers.providers.JsonRpcProvider(d)
return new B.QW(d,x)},
QW:function QW(d,e){this.c=d
this.a=e}},A,C,D,J
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[18],B)
A=c[0]
C=c[2]
D=c[38]
J=c[1]
B.nc.prototype={
P(d,e){var x=null,w=A.aG(this.d,x,x,x,A.R(e).H.b,C.x,x),v=this.e
if(v==null)v=""
return A.va(A.p_(A.hk(A.dv(A.a([this.c,w,A.aG(v,x,x,x,A.R(e).H.y,x,x)],y.u),C.a6,C.N,C.K),800,300),x,new B.aiT(),x,x),D.mn,x,D.DB)}}
B.QW.prototype={
j(d){return"JsonRpcProvider: "+this.c}}
var z=a.updateTypes([])
B.aiT.prototype={
$0(){A.m9("artdetail")},
$S:0}
B.aAj.prototype={
$1(d){return C.a5.kb(0,J.ac(C.a5.cV(0,d),"abi"))},
$S:18}
B.aAk.prototype={
$1(d){return new A.fE(new ethers.Contract("0xed11a33cC640eDb61e4f4c74A9525BBd4E73d69B",new A.CC(new ethers.utils.Interface(d)).qg(0,C.iP),$.aT5().a))},
$S:464}
B.aBA.prototype={
$1(d){return this.Xo(d)},
Xo(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bS(d.a.filters,"Transfer",C.B)
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.zu(new A.PT(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:465}
B.aBD.prototype={
$1(d){return this.Xq(d)},
Xq(d){var x=0,w=A.Y(y.b),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=A.kb(J.fd(u.a,new B.aBB(d),y.e),y.r).aM(0,new B.aBC(),y.b)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:466}
B.aBB.prototype={
$1(d){return this.Xp(d)},
Xp(d){var x=0,w=A.Y(y.r),v,u=this,t,s,r
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.a6c()
s=d.a
r=J.m(s)
t.aP(C.cA,"getNFTData.data: "+r.gSO(s),null,null)
t.aP(C.cA,"getNFTData.address: "+r.gEE(s),null,null)
t.aP(C.cA,"getNFTData.transactionHash: "+r.gWN(s),null,null)
t.aP(C.cA,"getNFTData.transactionIndex: "+r.gapk(s),null,null)
t.aP(C.cA,"getNFTData.toString: "+("Event: "+r.gTp(s)+" "+r.gTq(s)+" with args "+A.d(r.gxN(s))),null,null)
v=new A.bj(J.bD(J.ac(r.gxN(s),2)),u.a.fV(0,"tokenURI",[J.ac(r.gxN(s),2)],y.m),y.r)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:467}
B.aBC.prototype={
$1(d){var x=A.x(y.w,y.i)
x.agP(x,d)
return x},
$S:468};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nc,A.aL)
x(B.aiT,A.h3)
w(A.c1,[B.aAj,B.aAk,B.aBA,B.aBD,B.aBB,B.aBC])
x(B.QW,A.x3)})()
A.dV(b.typeUniverse,JSON.parse('{"nc":{"aL":[],"i":[]},"QW":{"x3":["zg"]}}'))
var y={k:A.y("fE"),e:A.y("K<bj<e,K<@>>>"),i:A.y("K<@>"),u:A.y("j<i>"),h:A.y("u<h7>"),r:A.y("bj<e,K<@>>"),b:A.y("ar<e,K<@>>"),w:A.y("e"),m:A.y("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bbE","a6c",()=>A.dx(A.OF("Artalaxies Market")))
x($,"bd1","aT5",()=>B.aZn($.l3().b.b[1]))
x($,"bcK","aI2",()=>B.aGv())})()}
$__dart_deferred_initializers__["QoORtu7++G+c33s4DMzr4qjUNn8="] = $__dart_deferred_initializers__.current
