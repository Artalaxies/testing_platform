self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nh:function nh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},aj9:function aj9(){},
aGJ(){var x=0,w=A.X(y.k),v
var $async$aGJ=A.T(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:v=$.qv().V5("assets/ArtalaxiesMarket.json").aM(0,new B.aAz(),y.w).aM(0,new B.aAA(),y.k)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$aGJ,w)},
a60(d,e){var x=0,w=A.X(y.h),v
var $async$a60=A.T(function(f,g){if(f===1)return A.U(g,w)
while(true)switch(x){case 0:$.a6q().aQ(C.w,"getLatestTransaction executed",null,null)
x=3
return A.a4($.aIg().aM(0,new B.aBQ(e,d),y.h),$async$a60)
case 3:v=g
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$a60,w)},
aPV(d){$.a6q().aQ(C.w,"getNFTData executed",null,null)
return $.aIg().aM(0,new B.aBT(d),y.b)},
aAz:function aAz(){},
aAA:function aAA(){},
aBQ:function aBQ(d,e){this.a=d
this.b=e},
aBT:function aBT(d){this.a=d},
aBR:function aBR(d){this.a=d},
aBS:function aBS(){},
aZF(d){var x=new ethers.providers.JsonRpcProvider(d)
return new B.R8(d,x)},
R8:function R8(d,e){this.c=d
this.a=e}},A,C,D,J
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[17],B)
A=c[0]
C=c[2]
D=c[36]
J=c[1]
B.nh.prototype={
P(d,e){var x=null,w=A.b7(this.d,x,x,x,A.a1(e).L.b,C.T,x),v=this.e
if(v==null)v=""
return A.LS(A.ne(A.hk(A.dI(A.a([this.c,w,A.b7(v,x,x,x,A.a1(e).L.y,x,x)],y.u),C.a6,C.I,C.H),800,300),x,x,new B.aj9(),x,x,x),D.iy,x,D.DC)}}
B.R8.prototype={
j(d){return"JsonRpcProvider: "+this.c}}
var z=a.updateTypes([])
B.aj9.prototype={
$0(){A.md("artdetail")},
$S:0}
B.aAz.prototype={
$1(d){return C.a5.kc(0,J.ac(C.a5.cV(0,d),"abi"))},
$S:18}
B.aAA.prototype={
$1(d){return new A.fD(new ethers.Contract("0xed11a33cC640eDb61e4f4c74A9525BBd4E73d69B",new A.CH(new ethers.utils.Interface(d)).qk(0,C.iT),$.aTi().a))},
$S:464}
B.aBQ.prototype={
$1(d){return this.Xv(d)},
Xv(d){var x=0,w=A.X(y.h),v,u=this,t,s
var $async$$1=A.T(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=A.bS(d.a.filters,"Transfer",C.A)
s=u.a
if(s==null)s=-1e5
x=3
return A.a4(d.zy(new A.Q5(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:465}
B.aBT.prototype={
$1(d){return this.Xx(d)},
Xx(d){var x=0,w=A.X(y.b),v,u=this
var $async$$1=A.T(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:v=A.kg(J.fd(u.a,new B.aBR(d),y.e),y.r).aM(0,new B.aBS(),y.b)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:466}
B.aBR.prototype={
$1(d){return this.Xw(d)},
Xw(d){var x=0,w=A.X(y.r),v,u=this,t,s,r
var $async$$1=A.T(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=$.a6q()
s=d.a
r=J.m(s)
t.aQ(C.cB,"getNFTData.data: "+r.gST(s),null,null)
t.aQ(C.cB,"getNFTData.address: "+r.gEI(s),null,null)
t.aQ(C.cB,"getNFTData.transactionHash: "+r.gWU(s),null,null)
t.aQ(C.cB,"getNFTData.transactionIndex: "+r.gapw(s),null,null)
t.aQ(C.cB,"getNFTData.toString: "+("Event: "+r.gTu(s)+" "+r.gTv(s)+" with args "+A.d(r.gxQ(s))),null,null)
v=new A.bj(J.bE(J.ac(r.gxQ(s),2)),u.a.fW(0,"tokenURI",[J.ac(r.gxQ(s),2)],y.m),y.r)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:467}
B.aBS.prototype={
$1(d){var x=A.x(y.w,y.i)
x.ah_(x,d)
return x},
$S:468};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nh,A.aJ)
x(B.aj9,A.h3)
w(A.c1,[B.aAz,B.aAA,B.aBQ,B.aBT,B.aBR,B.aBS])
x(B.R8,A.x5)})()
A.dY(b.typeUniverse,JSON.parse('{"nh":{"aJ":[],"i":[]},"R8":{"x5":["zi"]}}'))
var y={k:A.y("fD"),e:A.y("K<bj<e,K<@>>>"),i:A.y("K<@>"),u:A.y("j<i>"),h:A.y("u<h7>"),r:A.y("bj<e,K<@>>"),b:A.y("ar<e,K<@>>"),w:A.y("e"),m:A.y("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bbX","a6q",()=>A.dx(A.OS("Artalaxies Market")))
x($,"bdk","aTi",()=>B.aZF($.l8().b.b[1]))
x($,"bd2","aIg",()=>B.aGJ())})()}
$__dart_deferred_initializers__["ijS0pblBnI1VwGPS33gowFad9r0="] = $__dart_deferred_initializers__.current
