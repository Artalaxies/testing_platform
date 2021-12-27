self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nv:function nv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajS:function ajS(d){this.a=d},
aIM(){var x=0,w=A.Y(y.k),v
var $async$aIM=A.S(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:v=$.ln().uH("assets/ArtalaxiesMarket.json").aA(0,new B.aDn(),y.w).aA(0,new B.aDo(),y.k)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$aIM,w)},
aDn:function aDn(){},
aDo:function aDo(){},
a6r(d,e,f){return B.b8h(d,e,f)},
b8h(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6r=A.S(function(g,h){if(g===1)return A.U(h,w)
while(true)switch(x){case 0:$.KT().aF(C.u,"getLatestTransaction executed",null,null)
x=3
return A.a2(d.aA(0,new B.aDx(f,e),y.h),$async$a6r)
case 3:v=h
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$a6r,w)},
a6s(d,e){return B.b8j(d,e)},
b8j(d,e){var x=0,w=A.Y(y.o),v
var $async$a6s=A.S(function(f,g){if(f===1)return A.U(g,w)
while(true)switch(x){case 0:$.KT().aF(C.u,"getNFTData executed",null,null)
x=3
return A.a2(d.aA(0,new B.aDA(e),y.o),$async$a6s)
case 3:v=g
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$a6s,w)},
cs:function cs(d,e,f){this.a=d
this.b=e
this.c=f},
aDx:function aDx(d,e){this.a=d
this.b=e},
aDA:function aDA(d){this.a=d},
aDz:function aDz(d){this.a=d},
aDy:function aDy(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[66]
E=c[63]
J=c[1]
F=c[77]
B.nv.prototype={
N(d,e){var x=this,w=null,v=A.fl(x.c,w,300),u=A.ar(x.d,w,w,w,A.N(e).E.b,C.B,w),t=x.e
if(t==null)t=""
return A.hT(A.amI(C.X,!1,A.d7(A.a([v,A.tb(w,!1,w,w,A.ar(t,w,w,w,A.N(e).E.y,w,w),u,w),D.Q5],y.u),C.Z,C.z3,C.J),C.l,C.lV,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajS(x),C.G,C.kc,w,w,C.i2),E.mG,w,E.kd)}}
B.cs.prototype={}
var z=a.updateTypes(["P<r<P<cs>>>(e7)","P<cs>(fe)"])
B.ajS.prototype={
$0(){var x=this.a
A.f5("nft/"+x.f+"/"+x.r)},
$S:0}
B.aDn.prototype={
$1(d){return C.P.i_(0,J.a0(C.P.cJ(0,d),"abi"))},
$S:13}
B.aDo.prototype={
$1(d){return new A.e7(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.p7(new ethers.utils.Interface(d)).ll(0,C.db),$.aK6().a))},
$S:53}
B.aDx.prototype={
$1(d){return this.XE(d)},
XE(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.S(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=A.bW(d.a.filters,"Transfer",C.A)
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.vf(new A.Cq(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:168}
B.aDA.prototype={
$1(d){return this.XH(d)},
XH(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.S(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:v=J.ft(u.a,new B.aDz(d),y.t).dX(0)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:z+0}
B.aDz.prototype={
$1(d){return this.XG(d)},
XG(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.S(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=$.KT()
s=d.a
r=J.m(s)
t.aF(C.cH,"getNFTData.data: "+r.gT5(s),null,null)
t.aF(C.cH,"getNFTData.address: "+r.gpu(s),null,null)
t.aF(C.cH,"getNFTData.transactionHash: "+r.gX2(s),null,null)
t.aF(C.cH,"getNFTData.transactionIndex: "+r.gapA(s),null,null)
t.aF(C.cH,"getNFTData.toString: "+("Event: "+r.gTG(s)+" "+r.gTH(s)+" with args "+A.d(r.gpD(s))),null,null)
q=B
p=r.gpu(s)
o=J.bd(J.a0(r.gpD(s),2))
x=3
return A.a2($.aJM().aA(0,new B.aDy(d,u.a),y.w),$async$$1)
case 3:v=new q.cs(p,o,f)
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:z+1}
B.aDy.prototype={
$1(d){return this.XF(d)},
XF(d){var x=0,w=A.Y(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.S(function(e,f){if(e===1)return A.U(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.m(t)
r=C.b.Z(s.gpu(t)+"/",J.bd(J.a0(s.gpD(t),2)))
q=A.cR(J.a0(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a2(u.b.eQ(0,"tokenURI",[J.a0(s.gpD(t),2)],y.b),$async$$1)
case 5:q=p.bd(f)
case 4:d.nC("String",C.b.Z(s.gpu(t)+"/",J.bd(J.a0(s.gpD(t),2))),q)
v=q
x=1
break
case 1:return A.V(v,w)}})
return A.W($async$$1,w)},
$S:91};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nv,A.aJ)
x(B.ajS,A.e6)
w(A.bE,[B.aDn,B.aDo,B.aDx,B.aDA,B.aDz,B.aDy])
x(B.cs,A.x)})()
A.cc(b.typeUniverse,JSON.parse('{"nv":{"aJ":[],"i":[]}}'))
var y={k:A.v("e7"),t:A.v("P<cs>"),u:A.v("k<i>"),h:A.v("r<fe>"),o:A.v("r<P<cs>>"),C:A.v("cs"),w:A.v("f"),b:A.v("@")};(function constants(){D.n5=new A.at(50,50,50,50)
D.abb=new A.cB("",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.G4=new A.d5(C.T,C.T,E.dH,E.dH)
D.a5c=new A.ee(D.G4,C.q)
D.Q5=new A.ta(null,D.abb,null,null,!1,D.a5c,null,null,F.iK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"beP","a72",()=>B.aIM())})()}
$__dart_deferred_initializers__["V9OXYUCT5bF2W15ax5ZG/fA3c+s="] = $__dart_deferred_initializers__.current
