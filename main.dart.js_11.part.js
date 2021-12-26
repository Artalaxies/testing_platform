self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nr:function nr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajP:function ajP(d){this.a=d},
aI2(){var x=0,w=A.Y(y.k),v
var $async$aI2=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.oB().Hg("assets/ArtalaxiesMarket.json").aK(0,new B.aBV(),y.w).aK(0,new B.aBW(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aI2,w)},
aBV:function aBV(){},
aBW:function aBW(){},
a6q(d,e,f){return B.b7Q(d,e,f)},
b7Q(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6q=A.U(function(g,h){if(g===1)return A.V(h,w)
while(true)switch(x){case 0:$.KR().aE(C.u,"getLatestTransaction executed",null,null)
x=3
return A.a2(d.aK(0,new B.aDd(f,e),y.h),$async$a6q)
case 3:v=h
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6q,w)},
a6r(d,e){return B.b7S(d,e)},
b7S(d,e){var x=0,w=A.Y(y.o),v
var $async$a6r=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.KR().aE(C.u,"getNFTData executed",null,null)
x=3
return A.a2(d.aK(0,new B.aDg(e),y.o),$async$a6r)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6r,w)},
cr:function cr(d,e,f){this.a=d
this.b=e
this.c=f},
aDd:function aDd(d,e){this.a=d
this.b=e},
aDg:function aDg(d){this.a=d},
aDf:function aDf(d){this.a=d},
aDe:function aDe(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[81]
E=c[64]
J=c[1]
F=c[29]
B.nr.prototype={
N(d,e){var x=this,w=null,v=A.ar(x.d,w,w,w,A.N(e).E.b,C.A,w),u=x.e
if(u==null)u=""
return A.iz(A.Vt(C.R,!1,A.de(A.a([x.c,A.t6(w,!1,w,w,A.ar(u,w,w,w,A.N(e).E.y,w,w),v,w),D.Q2],y.u),C.a3,C.jP,C.J),C.j,C.lQ,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajP(x),C.G,C.k7,w,w,C.hZ),E.mB,w,E.k8)}}
B.cr.prototype={}
var z=a.updateTypes(["P<r<P<cr>>>(eC)","P<cr>(fv)"])
B.ajP.prototype={
$0(){var x=this.a
A.f5("nft/"+x.f+"/"+x.r)},
$S:0}
B.aBV.prototype={
$1(d){return C.a2.jm(0,J.a1(C.a2.cQ(0,d),"abi"))},
$S:15}
B.aBW.prototype={
$1(d){return new A.eC(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.wx(new ethers.utils.Interface(d)).o8(0,C.fi),$.aUG().a))},
$S:150}
B.aDd.prototype={
$1(d){return this.XJ(d)},
XJ(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bW(d.a.filters,"Transfer",C.B)
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.zF(new A.Qk(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:457}
B.aDg.prototype={
$1(d){return this.XM(d)},
XM(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fQ(u.a,new B.aDf(d),y.t).e7(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aDf.prototype={
$1(d){return this.XL(d)},
XL(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.KR()
s=d.a
r=J.m(s)
t.aE(C.cE,"getNFTData.data: "+r.gTa(s),null,null)
t.aE(C.cE,"getNFTData.address: "+r.gpv(s),null,null)
t.aE(C.cE,"getNFTData.transactionHash: "+r.gX7(s),null,null)
t.aE(C.cE,"getNFTData.transactionIndex: "+r.gapD(s),null,null)
t.aE(C.cE,"getNFTData.toString: "+("Event: "+r.gTL(s)+" "+r.gTM(s)+" with args "+A.d(r.gpE(s))),null,null)
q=B
p=r.gpv(s)
o=J.bh(J.a1(r.gpE(s),2))
x=3
return A.a2($.aJq().aK(0,new B.aDe(d,u.a),y.w),$async$$1)
case 3:v=new q.cr(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1}
B.aDe.prototype={
$1(d){return this.XK(d)},
XK(d){var x=0,w=A.Y(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.m(t)
r=C.b.Z(s.gpv(t)+"/",J.bh(J.a1(s.gpE(t),2)))
q=A.cQ(J.a1(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a2(u.b.fh(0,"tokenURI",[J.a1(s.gpE(t),2)],y.b),$async$$1)
case 5:q=p.bh(f)
case 4:d.nB("String",C.b.Z(s.gpv(t)+"/",J.bh(J.a1(s.gpE(t),2))),q)
v=q
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:77};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nr,A.aL)
x(B.ajP,A.e6)
w(A.bD,[B.aBV,B.aBW,B.aDd,B.aDg,B.aDf,B.aDe])
x(B.cr,A.y)})()
A.c5(b.typeUniverse,JSON.parse('{"nr":{"aL":[],"i":[]}}'))
var y={k:A.u("eC"),t:A.u("P<cr>"),u:A.u("k<i>"),h:A.u("r<fv>"),o:A.u("r<P<cr>>"),C:A.u("cr"),w:A.u("f"),b:A.u("@")};(function constants(){D.aaT=new A.d2("sdfsdfsdlkfjld",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.G1=new A.d5(C.S,C.S,E.dC,E.dC)
D.a52=new A.ed(D.G1,C.q)
D.K7=new A.j(4278206324)
D.Q2=new A.t5(null,D.aaT,null,null,!1,D.a52,null,null,D.K7,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"beN","aUG",()=>F.aMA($.k8().b.b[1]))
x($,"ben","a71",()=>B.aI2())})()}
$__dart_deferred_initializers__["/L31xUAamHkJRi17LM0NK61MiFQ="] = $__dart_deferred_initializers__.current
