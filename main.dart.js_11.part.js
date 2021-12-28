self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nw:function nw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ak1:function ak1(d){this.a=d},
aIX(){var x=0,w=A.W(y.k),v
var $async$aIX=A.S(function(d,e){if(d===1)return A.T(e,w)
while(true)switch(x){case 0:v=$.ln().uH("assets/ArtalaxiesMarket.json").ax(0,new B.aDx(),y.w).ax(0,new B.aDy(),y.k)
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$aIX,w)},
aDx:function aDx(){},
aDy:function aDy(){},
a6C(d,e,f){return B.b8w(d,e,f)},
b8w(d,e,f){var x=0,w=A.W(y.h),v
var $async$a6C=A.S(function(g,h){if(g===1)return A.T(h,w)
while(true)switch(x){case 0:$.L1().aC(C.t,"getLatestTransaction executed",null,null)
x=3
return A.a2(d.ax(0,new B.aDH(f,e),y.h),$async$a6C)
case 3:v=h
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$a6C,w)},
a6D(d,e){return B.b8y(d,e)},
b8y(d,e){var x=0,w=A.W(y.o),v
var $async$a6D=A.S(function(f,g){if(f===1)return A.T(g,w)
while(true)switch(x){case 0:$.L1().aC(C.t,"getNFTData executed",null,null)
x=3
return A.a2(d.ax(0,new B.aDK(e),y.o),$async$a6D)
case 3:v=g
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$a6D,w)},
cs:function cs(d,e,f){this.a=d
this.b=e
this.c=f},
aDH:function aDH(d,e){this.a=d
this.b=e},
aDK:function aDK(d){this.a=d},
aDJ:function aDJ(d){this.a=d},
aDI:function aDI(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[66]
E=c[63]
J=c[1]
F=c[77]
B.nw.prototype={
M(d,e){var x=this,w=null,v=A.fl(x.c,w,300),u=A.ar(x.d,w,w,w,A.N(e).E.b,C.B,w),t=x.e
if(t==null)t=""
return A.hU(A.amS(C.X,!1,A.d7(A.a([v,A.t9(w,!1,w,w,A.ar(t,w,w,w,A.N(e).E.y,w,w),u,w),D.Q6],y.u),C.Z,C.z4,C.J),C.l,C.lW,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ak1(x),C.G,C.kc,w,w,C.i2),E.mH,w,E.kd)}}
B.cs.prototype={}
var z=a.updateTypes(["O<r<O<cs>>>(dH)","O<cs>(fe)"])
B.ak1.prototype={
$0(){var x=this.a
A.fq("nft/"+x.f+"/"+x.r)},
$S:0}
B.aDx.prototype={
$1(d){return C.P.i_(0,J.a0(C.P.cJ(0,d),"abi"))},
$S:13}
B.aDy.prototype={
$1(d){return new A.dH(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.p7(new ethers.utils.Interface(d)).ll(0,C.db),$.aKi().a))},
$S:64}
B.aDH.prototype={
$1(d){return this.XJ(d)},
XJ(d){var x=0,w=A.W(y.h),v,u=this,t,s
var $async$$1=A.S(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:t=d.J_("Transfer")
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.vf(t,s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:128}
B.aDK.prototype={
$1(d){return this.XM(d)},
XM(d){var x=0,w=A.W(y.o),v,u=this
var $async$$1=A.S(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:v=J.fu(u.a,new B.aDJ(d),y.t).dX(0)
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:z+0}
B.aDJ.prototype={
$1(d){return this.XL(d)},
XL(d){var x=0,w=A.W(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.S(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:t=$.L1()
s=d.a
r=J.m(s)
t.aC(C.cI,"getNFTData.data: "+r.gFI(s),null,null)
t.aC(C.cI,"getNFTData.address: "+r.gpu(s),null,null)
t.aC(C.cI,"getNFTData.transactionHash: "+r.gX7(s),null,null)
t.aC(C.cI,"getNFTData.transactionIndex: "+r.gapJ(s),null,null)
t.aC(C.cI,"getNFTData.toString: "+("Event: "+r.gTL(s)+" "+r.gTM(s)+" with args "+A.d(r.gpD(s))),null,null)
q=B
p=r.gpu(s)
o=J.b7(J.a0(r.gpD(s),2))
x=3
return A.a2($.aJX().ax(0,new B.aDI(d,u.a),y.w),$async$$1)
case 3:v=new q.cs(p,o,f)
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:z+1}
B.aDI.prototype={
$1(d){return this.XK(d)},
XK(d){var x=0,w=A.W(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.S(function(e,f){if(e===1)return A.T(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.m(t)
r=C.b.Z(s.gpu(t)+"/",J.b7(J.a0(s.gpD(t),2)))
q=A.cR(J.a0(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a2(u.b.eQ(0,"tokenURI",[J.a0(s.gpD(t),2)],y.b),$async$$1)
case 5:q=p.b7(f)
case 4:d.nD("String",C.b.Z(s.gpu(t)+"/",J.b7(J.a0(s.gpD(t),2))),q)
v=q
x=1
break
case 1:return A.U(v,w)}})
return A.V($async$$1,w)},
$S:92};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nw,A.aK)
x(B.ak1,A.e7)
w(A.bE,[B.aDx,B.aDy,B.aDH,B.aDK,B.aDJ,B.aDI])
x(B.cs,A.x)})()
A.cc(b.typeUniverse,JSON.parse('{"nw":{"aK":[],"i":[]}}'))
var y={k:A.v("dH"),t:A.v("O<cs>"),u:A.v("k<i>"),h:A.v("r<fe>"),o:A.v("r<O<cs>>"),C:A.v("cs"),w:A.v("f"),b:A.v("@")};(function constants(){D.n6=new A.at(50,50,50,50)
D.ab8=new A.cB("",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.G4=new A.d5(C.T,C.T,E.dI,E.dI)
D.a59=new A.ee(D.G4,C.q)
D.Q6=new A.t8(null,D.ab8,null,null,!1,D.a59,null,null,F.iK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bf5","a7a",()=>B.aIX())})()}
$__dart_deferred_initializers__["r3SN8i7AIirI23T9icxpmSw9cno="] = $__dart_deferred_initializers__.current
