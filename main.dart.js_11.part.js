self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nr:function nr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajM:function ajM(d){this.a=d},
aI0(){var x=0,w=A.Y(y.k),v
var $async$aI0=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.oA().He("assets/ArtalaxiesMarket.json").aK(0,new B.aBS(),y.w).aK(0,new B.aBT(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aI0,w)},
aBS:function aBS(){},
aBT:function aBT(){},
a6n(d,e,f){return B.b7O(d,e,f)},
b7O(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6n=A.U(function(g,h){if(g===1)return A.V(h,w)
while(true)switch(x){case 0:$.KP().aE(C.u,"getLatestTransaction executed",null,null)
x=3
return A.a2(d.aK(0,new B.aDa(f,e),y.h),$async$a6n)
case 3:v=h
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6n,w)},
a6o(d,e){return B.b7Q(d,e)},
b7Q(d,e){var x=0,w=A.Y(y.o),v
var $async$a6o=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.KP().aE(C.u,"getNFTData executed",null,null)
x=3
return A.a2(d.aK(0,new B.aDd(e),y.o),$async$a6o)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6o,w)},
cr:function cr(d,e,f){this.a=d
this.b=e
this.c=f},
aDa:function aDa(d,e){this.a=d
this.b=e},
aDd:function aDd(d){this.a=d},
aDc:function aDc(d){this.a=d},
aDb:function aDb(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[80]
E=c[64]
J=c[1]
F=c[29]
B.nr.prototype={
N(d,e){var x=this,w=null,v=A.ar(x.d,w,w,w,A.N(e).E.b,C.A,w),u=x.e
if(u==null)u=""
return A.iz(A.amu(C.W,!1,A.dl(A.a([x.c,A.t6(w,!1,w,w,A.ar(u,w,w,w,A.N(e).E.y,w,w),v,w),D.PK],y.u),C.a3,C.jO,C.J),C.m,C.lO,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajM(x),C.G,C.k5,w,w,C.hY),E.mz,w,E.k6)}}
B.cr.prototype={}
var z=a.updateTypes(["P<r<P<cr>>>(eB)","P<cr>(fv)"])
B.ajM.prototype={
$0(){var x=this.a
A.f5("nft/"+x.f+"/"+x.r)},
$S:0}
B.aBS.prototype={
$1(d){return C.a2.jm(0,J.a1(C.a2.cP(0,d),"abi"))},
$S:15}
B.aBT.prototype={
$1(d){return new A.eB(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.wv(new ethers.utils.Interface(d)).o8(0,C.fh),$.aUE().a))},
$S:150}
B.aDa.prototype={
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
$S:457}
B.aDd.prototype={
$1(d){return this.XF(d)},
XF(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fQ(u.a,new B.aDc(d),y.t).e7(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aDc.prototype={
$1(d){return this.XE(d)},
XE(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.KP()
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
return A.a2($.aJo().aK(0,new B.aDb(d,u.a),y.w),$async$$1)
case 3:v=new q.cr(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1}
B.aDb.prototype={
$1(d){return this.XD(d)},
XD(d){var x=0,w=A.Y(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.m(t)
r=C.b.Z(s.gpu(t)+"/",J.bh(J.a1(s.gpD(t),2)))
q=A.cQ(J.a1(d.a,r))
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
$S:77};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nr,A.aN)
x(B.ajM,A.em)
w(A.bD,[B.aBS,B.aBT,B.aDa,B.aDd,B.aDc,B.aDb])
x(B.cr,A.y)})()
A.c5(b.typeUniverse,JSON.parse('{"nr":{"aN":[],"i":[]}}'))
var y={k:A.u("eB"),t:A.u("P<cr>"),u:A.u("j<i>"),h:A.u("r<fv>"),o:A.u("r<P<cr>>"),C:A.u("cr"),w:A.u("f"),b:A.u("@")};(function constants(){D.aau=new A.dN("sdfsdfsdlkfjld",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.FV=new A.d4(C.R,C.R,E.dC,E.dC)
D.a4G=new A.eb(D.FV,C.q)
D.K0=new A.k(4278206324)
D.PK=new A.Dv(null,D.aau,null,null,!1,D.a4G,null,null,D.K0,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"beL","aUE",()=>F.aMy($.k8().b.b[1]))
x($,"bel","a6Z",()=>B.aI0())})()}
$__dart_deferred_initializers__["mcXhbYMgkukPn/8zMgX3fP4z1rc="] = $__dart_deferred_initializers__.current
