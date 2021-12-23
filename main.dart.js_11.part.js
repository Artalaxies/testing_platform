self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nm:function nm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajA:function ajA(d){this.a=d},
aHF(){var x=0,w=A.Y(y.k),v
var $async$aHF=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.oy().Hc("assets/ArtalaxiesMarket.json").aK(0,new B.aBx(),y.w).aK(0,new B.aBy(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aHF,w)},
aBx:function aBx(){},
aBy:function aBy(){},
a6h(d,e,f){return B.b7u(d,e,f)},
b7u(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6h=A.U(function(g,h){if(g===1)return A.V(h,w)
while(true)switch(x){case 0:$.KG().aE(C.v,"getLatestTransaction executed",null,null)
x=3
return A.a3(d.aK(0,new B.aCQ(f,e),y.h),$async$a6h)
case 3:v=h
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6h,w)},
a6i(d,e){return B.b7w(d,e)},
b7w(d,e){var x=0,w=A.Y(y.o),v
var $async$a6i=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.KG().aE(C.v,"getNFTData executed",null,null)
x=3
return A.a3(d.aK(0,new B.aCT(e),y.o),$async$a6i)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6i,w)},
cq:function cq(d,e,f){this.a=d
this.b=e
this.c=f},
aCQ:function aCQ(d,e){this.a=d
this.b=e},
aCT:function aCT(d){this.a=d},
aCS:function aCS(d){this.a=d},
aCR:function aCR(d,e){this.a=d
this.b=e}},A,C,D,J,E
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[66]
J=c[1]
E=c[27]
B.nm.prototype={
P(d,e){var x=this,w=null,v=A.ap(x.d,w,w,w,A.M(e).E.b,C.t,w),u=x.e
if(u==null)u=""
return A.kf(A.pg(A.ib(A.dF(A.a([x.c,v,A.ap(u,w,w,w,A.M(e).E.y,w,w)],y.u),C.ad,C.N,C.K),800,300),w,w,w,new B.ajA(x),w,w),D.ms,w,D.DJ)}}
B.cq.prototype={}
var z=a.updateTypes(["P<r<P<cq>>>(eA)","P<cq>(ft)"])
B.ajA.prototype={
$0(){var x=this.a
A.hC("nft/"+x.f+"/"+x.r)},
$S:0}
B.aBx.prototype={
$1(d){return C.a2.jm(0,J.a1(C.a2.cP(0,d),"abi"))},
$S:15}
B.aBy.prototype={
$1(d){return new A.eA(new ethers.Contract("0xed11a33cC640eDb61e4f4c74A9525BBd4E73d69B",new A.wr(new ethers.utils.Interface(d)).o7(0,C.fd),$.aUk().a))},
$S:161}
B.aCQ.prototype={
$1(d){return this.XA(d)},
XA(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bW(d.a.filters,"Transfer",C.B)
s=u.a
if(s==null)s=-1e5
x=3
return A.a3(d.zC(new A.Qa(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:462}
B.aCT.prototype={
$1(d){return this.XD(d)},
XD(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fN(u.a,new B.aCS(d),y.t).e7(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aCS.prototype={
$1(d){return this.XC(d)},
XC(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.KG()
s=d.a
r=J.m(s)
t.aE(C.cC,"getNFTData.data: "+r.gT1(s),null,null)
t.aE(C.cC,"getNFTData.address: "+r.gpu(s),null,null)
t.aE(C.cC,"getNFTData.transactionHash: "+r.gWZ(s),null,null)
t.aE(C.cC,"getNFTData.transactionIndex: "+r.gapw(s),null,null)
t.aE(C.cC,"getNFTData.toString: "+("Event: "+r.gTC(s)+" "+r.gTD(s)+" with args "+A.d(r.gpD(s))),null,null)
q=B
p=r.gpu(s)
o=J.bh(J.a1(r.gpD(s),2))
x=3
return A.a3($.aJ2().aK(0,new B.aCR(d,u.a),y.w),$async$$1)
case 3:v=new q.cq(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1}
B.aCR.prototype={
$1(d){return this.XB(d)},
XB(d){var x=0,w=A.Y(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.m(t)
r=C.b.Z(s.gpu(t)+"/",J.bh(J.a1(s.gpD(t),2)))
q=A.cQ(J.a1(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a3(u.b.fh(0,"tokenURI",[J.a1(s.gpD(t),2)],y.b),$async$$1)
case 5:q=p.bh(f)
case 4:d.nA("String",C.b.Z(s.gpu(t)+"/",J.bh(J.a1(s.gpD(t),2))),q)
v=q
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:76};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nm,A.aM)
x(B.ajA,A.eV)
w(A.bL,[B.aBx,B.aBy,B.aCQ,B.aCT,B.aCS,B.aCR])
x(B.cq,A.y)})()
A.cs(b.typeUniverse,JSON.parse('{"nm":{"aM":[],"i":[]}}'))
var y={k:A.w("eA"),t:A.w("P<cq>"),u:A.w("j<i>"),h:A.w("r<ft>"),o:A.w("r<P<cq>>"),C:A.w("cq"),w:A.w("h"),b:A.w("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"ber","aUk",()=>E.aMe($.k3().b.b[1]))
x($,"be1","a6T",()=>B.aHF())})()}
$__dart_deferred_initializers__["r2L77z+UKtAod43pe/YUtkzeWZw="] = $__dart_deferred_initializers__.current
