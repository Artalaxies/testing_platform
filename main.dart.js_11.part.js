self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ng:function ng(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},aj7:function aj7(){},
aGH(){var x=0,w=A.X(y.k),v
var $async$aGH=A.T(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:v=$.qu().V5("assets/ArtalaxiesMarket.json").aM(0,new B.aAy(),y.w).aM(0,new B.aAz(),y.k)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$aGH,w)},
a60(d,e){var x=0,w=A.X(y.h),v
var $async$a60=A.T(function(f,g){if(f===1)return A.U(g,w)
while(true)switch(x){case 0:$.a6p().aS(C.x,"getLatestTransaction executed",null,null)
x=3
return A.a4($.aIe().aM(0,new B.aBP(e,d),y.h),$async$a60)
case 3:v=g
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$a60,w)},
aPT(d){$.a6p().aS(C.x,"getNFTData executed",null,null)
return $.aIe().aM(0,new B.aBS(d),y.b)},
aAy:function aAy(){},
aAz:function aAz(){},
aBP:function aBP(d,e){this.a=d
this.b=e},
aBS:function aBS(d){this.a=d},
aBQ:function aBQ(d){this.a=d},
aBR:function aBR(){},
aZD(d){var x=new ethers.providers.JsonRpcProvider(d)
return new B.R9(d,x)},
R9:function R9(d,e){this.c=d
this.a=e}},A,C,D,J
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[17],B)
A=c[0]
C=c[2]
D=c[36]
J=c[1]
B.ng.prototype={
P(d,e){var x=null,w=A.b7(this.d,x,x,x,A.a1(e).L.b,C.T,x),v=this.e
if(v==null)v=""
return A.LT(A.nd(A.hj(A.dI(A.a([this.c,w,A.b7(v,x,x,x,A.a1(e).L.y,x,x)],y.u),C.a6,C.I,C.H),800,300),x,x,new B.aj7(),x,x,x),D.iy,x,D.DC)}}
B.R9.prototype={
j(d){return"JsonRpcProvider: "+this.c}}
var z=a.updateTypes([])
B.aj7.prototype={
$0(){A.mc("artdetail")},
$S:0}
B.aAy.prototype={
$1(d){return C.a5.kc(0,J.ac(C.a5.cV(0,d),"abi"))},
$S:18}
B.aAz.prototype={
$1(d){return new A.fD(new ethers.Contract("0xed11a33cC640eDb61e4f4c74A9525BBd4E73d69B",new A.CH(new ethers.utils.Interface(d)).qk(0,C.iT),$.aTg().a))},
$S:464}
B.aBP.prototype={
$1(d){return this.Xv(d)},
Xv(d){var x=0,w=A.X(y.h),v,u=this,t,s
var $async$$1=A.T(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=A.bS(d.a.filters,"Transfer",C.A)
s=u.a
if(s==null)s=-1e5
x=3
return A.a4(d.zy(new A.Q6(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:465}
B.aBS.prototype={
$1(d){return this.Xx(d)},
Xx(d){var x=0,w=A.X(y.b),v,u=this
var $async$$1=A.T(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:v=A.kf(J.fd(u.a,new B.aBQ(d),y.e),y.r).aM(0,new B.aBR(),y.b)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:466}
B.aBQ.prototype={
$1(d){return this.Xw(d)},
Xw(d){var x=0,w=A.X(y.r),v,u=this,t,s,r
var $async$$1=A.T(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=$.a6p()
s=d.a
r=J.m(s)
t.aS(C.cB,"getNFTData.data: "+r.gST(s),null,null)
t.aS(C.cB,"getNFTData.address: "+r.gEI(s),null,null)
t.aS(C.cB,"getNFTData.transactionHash: "+r.gWU(s),null,null)
t.aS(C.cB,"getNFTData.transactionIndex: "+r.gapw(s),null,null)
t.aS(C.cB,"getNFTData.toString: "+("Event: "+r.gTu(s)+" "+r.gTv(s)+" with args "+A.d(r.gxQ(s))),null,null)
v=new A.bj(J.bE(J.ac(r.gxQ(s),2)),u.a.fW(0,"tokenURI",[J.ac(r.gxQ(s),2)],y.m),y.r)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:467}
B.aBR.prototype={
$1(d){var x=A.x(y.w,y.i)
x.ah_(x,d)
return x},
$S:468};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ng,A.aJ)
x(B.aj7,A.h2)
w(A.c1,[B.aAy,B.aAz,B.aBP,B.aBS,B.aBQ,B.aBR])
x(B.R9,A.x4)})()
A.dY(b.typeUniverse,JSON.parse('{"ng":{"aJ":[],"i":[]},"R9":{"x4":["zh"]}}'))
var y={k:A.y("fD"),e:A.y("K<bj<e,K<@>>>"),i:A.y("K<@>"),u:A.y("j<i>"),h:A.y("u<h6>"),r:A.y("bj<e,K<@>>"),b:A.y("ar<e,K<@>>"),w:A.y("e"),m:A.y("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bbV","a6p",()=>A.dx(A.OT("Artalaxies Market")))
x($,"bdh","aTg",()=>B.aZD($.l7().b.b[1]))
x($,"bd0","aIe",()=>B.aGH())})()}
$__dart_deferred_initializers__["KlVQcWUm+jQaD/XcLQkk7+nhqZA="] = $__dart_deferred_initializers__.current
