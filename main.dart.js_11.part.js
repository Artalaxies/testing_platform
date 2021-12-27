self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ns:function ns(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajM:function ajM(d){this.a=d},
aI2(){var x=0,w=A.Y(y.k),v
var $async$aI2=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.oB().He("assets/ArtalaxiesMarket.json").aK(0,new B.aBU(),y.w).aK(0,new B.aBV(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aI2,w)},
aBU:function aBU(){},
aBV:function aBV(){},
a6o(d,e,f){return B.b7Q(d,e,f)},
b7Q(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6o=A.U(function(g,h){if(g===1)return A.V(h,w)
while(true)switch(x){case 0:$.KQ().aE(C.u,"getLatestTransaction executed",null,null)
x=3
return A.a2(d.aK(0,new B.aDc(f,e),y.h),$async$a6o)
case 3:v=h
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6o,w)},
a6p(d,e){return B.b7S(d,e)},
b7S(d,e){var x=0,w=A.Y(y.o),v
var $async$a6p=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.KQ().aE(C.u,"getNFTData executed",null,null)
x=3
return A.a2(d.aK(0,new B.aDf(e),y.o),$async$a6p)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6p,w)},
cr:function cr(d,e,f){this.a=d
this.b=e
this.c=f},
aDc:function aDc(d,e){this.a=d
this.b=e},
aDf:function aDf(d){this.a=d},
aDe:function aDe(d){this.a=d},
aDd:function aDd(d,e){this.a=d
this.b=e}},A,C,D,E,J,F,G
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[82]
E=c[64]
J=c[1]
F=c[77]
G=c[29]
B.ns.prototype={
N(d,e){var x=this,w=null,v=A.ar(x.d,w,w,w,A.N(e).E.b,C.A,w),u=x.e
if(u==null)u=""
return A.jv(A.amw(C.W,!1,A.d7(A.a([x.c,A.t7(w,!1,w,w,A.ar(u,w,w,w,A.N(e).E.y,w,w),v,w),D.Q3],y.u),C.Y,C.z0,C.I),C.l,C.lP,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajM(x),C.H,C.k7,w,w,C.hY),E.mA,w,E.k8)}}
B.cr.prototype={}
var z=a.updateTypes(["P<r<P<cr>>>(eC)","P<cr>(fv)"])
B.ajM.prototype={
$0(){var x=this.a
A.f6("nft/"+x.f+"/"+x.r)},
$S:0}
B.aBU.prototype={
$1(d){return C.a3.jm(0,J.a1(C.a3.cP(0,d),"abi"))},
$S:16}
B.aBV.prototype={
$1(d){return new A.eC(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.ww(new ethers.utils.Interface(d)).o8(0,C.fh),$.aUG().a))},
$S:166}
B.aDc.prototype={
$1(d){return this.XC(d)},
XC(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bW(d.a.filters,"Transfer",C.B)
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.zE(new A.Qi(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:458}
B.aDf.prototype={
$1(d){return this.XF(d)},
XF(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fR(u.a,new B.aDe(d),y.t).e7(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aDe.prototype={
$1(d){return this.XE(d)},
XE(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.KQ()
s=d.a
r=J.m(s)
t.aE(C.cE,"getNFTData.data: "+r.gT3(s),null,null)
t.aE(C.cE,"getNFTData.address: "+r.gpu(s),null,null)
t.aE(C.cE,"getNFTData.transactionHash: "+r.gX0(s),null,null)
t.aE(C.cE,"getNFTData.transactionIndex: "+r.gapy(s),null,null)
t.aE(C.cE,"getNFTData.toString: "+("Event: "+r.gTE(s)+" "+r.gTF(s)+" with args "+A.d(r.gpD(s))),null,null)
q=B
p=r.gpu(s)
o=J.bh(J.a1(r.gpD(s),2))
x=3
return A.a2($.aJq().aK(0,new B.aDd(d,u.a),y.w),$async$$1)
case 3:v=new q.cr(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1}
B.aDd.prototype={
$1(d){return this.XD(d)},
XD(d){var x=0,w=A.Y(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.m(t)
r=C.b.Z(s.gpu(t)+"/",J.bh(J.a1(s.gpD(t),2)))
q=A.cR(J.a1(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a2(u.b.fh(0,"tokenURI",[J.a1(s.gpD(t),2)],y.b),$async$$1)
case 5:q=p.bh(f)
case 4:d.nB("String",C.b.Z(s.gpu(t)+"/",J.bh(J.a1(s.gpD(t),2))),q)
v=q
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:91};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ns,A.aN)
x(B.ajM,A.e6)
w(A.bD,[B.aBU,B.aBV,B.aDc,B.aDf,B.aDe,B.aDd])
x(B.cr,A.y)})()
A.c5(b.typeUniverse,JSON.parse('{"ns":{"aN":[],"i":[]}}'))
var y={k:A.u("eC"),t:A.u("P<cr>"),u:A.u("k<i>"),h:A.u("r<fv>"),o:A.u("r<P<cr>>"),C:A.u("cr"),w:A.u("f"),b:A.u("@")};(function constants(){D.aaZ=new A.cB("sdfsdfsdlkfjld",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.G4=new A.d5(C.R,C.R,E.dC,E.dC)
D.a55=new A.ed(D.G4,C.q)
D.Q3=new A.t6(null,D.aaZ,null,null,!1,D.a55,null,null,F.iF,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"beN","aUG",()=>G.aMA($.k8().b.b[1]))
x($,"ben","a7_",()=>B.aI2())})()}
$__dart_deferred_initializers__["E239b6QAaGXAGkv/pCzwQ2Zscf8="] = $__dart_deferred_initializers__.current
