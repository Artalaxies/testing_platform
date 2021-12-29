self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nv:function nv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajb:function ajb(d){this.a=d},
aHA(){var x=0,w=A.W(y.k),v
var $async$aHA=A.R(function(d,e){if(d===1)return A.T(e,w)
while(true)switch(x){case 0:v=$.lp().uI("assets/ArtalaxiesMarket.json").ax(0,new B.aCc(),y.w).ax(0,new B.aCd(),y.k)
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$aHA,w)},
aCc:function aCc(){},
aCd:function aCd(){},
a6p(d,e,f){return B.b7d(d,e,f)},
b7d(d,e,f){var x=0,w=A.W(y.h),v
var $async$a6p=A.R(function(g,h){if(g===1)return A.T(h,w)
while(true)switch(x){case 0:$.KY().aA(C.r,"getLatestTransaction executed",null,null)
x=3
return A.a2(d.ax(0,new B.aCm(f,e),y.h),$async$a6p)
case 3:v=h
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$a6p,w)},
a6q(d,e){return B.b7f(d,e)},
b7f(d,e){var x=0,w=A.W(y.o),v
var $async$a6q=A.R(function(f,g){if(f===1)return A.T(g,w)
while(true)switch(x){case 0:$.KY().aA(C.r,"getNFTData executed",null,null)
x=3
return A.a2(d.ax(0,new B.aCp(e),y.o),$async$a6q)
case 3:v=g
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$a6q,w)},
cs:function cs(d,e,f){this.a=d
this.b=e
this.c=f},
aCm:function aCm(d,e){this.a=d
this.b=e},
aCp:function aCp(d){this.a=d},
aCo:function aCo(d){this.a=d},
aCn:function aCn(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[66]
E=c[63]
J=c[1]
F=c[76]
B.nv.prototype={
M(d,e){var x=this,w=null,v=A.fm(x.c,w,300),u=A.ar(x.d,w,w,w,A.N(e).E.b,C.B,w),t=x.e
if(t==null)t=""
return A.hU(A.alV(C.X,!1,A.d7(A.a([v,A.tb(w,!1,w,w,A.ar(t,w,w,w,A.N(e).E.y,w,w),u,w),D.Q5],y.u),C.Z,C.z5,C.J),C.l,C.lW,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajb(x),C.G,C.kc,w,w,C.i2),E.mH,w,E.kd)}}
B.cs.prototype={}
var z=a.updateTypes(["O<p<O<cs>>>(dI)","O<cs>(ea)"])
B.ajb.prototype={
$0(){var x=this.a
A.fJ("nft/"+x.f+"/"+x.r)},
$S:0}
B.aCc.prototype={
$1(d){return C.P.i0(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCd.prototype={
$1(d){return new A.dI(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.p7(new ethers.utils.Interface(d)).ll(0,C.db),$.aIW().a))},
$S:64}
B.aCm.prototype={
$1(d){return this.XL(d)},
XL(d){var x=0,w=A.W(y.h),v,u=this,t,s
var $async$$1=A.R(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:t=d.J0("Transfer")
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.vg(t,s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:144}
B.aCp.prototype={
$1(d){return this.XO(d)},
XO(d){var x=0,w=A.W(y.o),v,u=this
var $async$$1=A.R(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:v=J.f8(u.a,new B.aCo(d),y.t).dX(0)
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:z+0}
B.aCo.prototype={
$1(d){return this.XN(d)},
XN(d){var x=0,w=A.W(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.R(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:t=$.KY()
s=d.a
r=J.l(s)
t.aA(C.cI,"getNFTData.data: "+r.gFJ(s),null,null)
t.aA(C.cI,"getNFTData.address: "+r.gpv(s),null,null)
t.aA(C.cI,"getNFTData.transactionHash: "+r.gX8(s),null,null)
t.aA(C.cI,"getNFTData.transactionIndex: "+r.gapN(s),null,null)
t.aA(C.cI,"getNFTData.toString: "+("Event: "+r.gTL(s)+" "+r.gTM(s)+" with args "+A.d(r.gmh(s))),null,null)
q=B
p=r.gpv(s)
o=J.b4(J.a_(r.gmh(s),2))
x=3
return A.a2($.aIA().ax(0,new B.aCn(d,u.a),y.w),$async$$1)
case 3:v=new q.cs(p,o,f)
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:z+1}
B.aCn.prototype={
$1(d){return this.XM(d)},
XM(d){var x=0,w=A.W(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.R(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.l(t)
r=C.b.Z(s.gpv(t)+"/",J.b4(J.a_(s.gmh(t),2)))
q=A.cR(J.a_(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a2(u.b.eQ(0,"tokenURI",[J.a_(s.gmh(t),2)],y.b),$async$$1)
case 5:q=p.b4(f)
case 4:d.nE("String",C.b.Z(s.gpv(t)+"/",J.b4(J.a_(s.gmh(t),2))),q)
v=q
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:92};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nv,A.aK)
x(B.ajb,A.e7)
w(A.bE,[B.aCc,B.aCd,B.aCm,B.aCp,B.aCo,B.aCn])
x(B.cs,A.x)})()
A.cc(b.typeUniverse,JSON.parse('{"nv":{"aK":[],"i":[]}}'))
var y={k:A.u("dI"),t:A.u("O<cs>"),u:A.u("k<i>"),h:A.u("p<ea>"),o:A.u("p<O<cs>>"),C:A.u("cs"),w:A.u("f"),b:A.u("@")};(function constants(){D.n6=new A.at(50,50,50,50)
D.ab8=new A.cB("",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.G5=new A.d5(C.T,C.T,E.dI,E.dI)
D.a59=new A.ef(D.G5,C.q)
D.Q5=new A.ta(null,D.ab8,null,null,!1,D.a59,null,null,F.iK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bdO","a6Z",()=>B.aHA())})()}
$__dart_deferred_initializers__["kEXenGNLDRkf5n7zbHx3nx8v0JA="] = $__dart_deferred_initializers__.current
