self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={no:function no(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajA:function ajA(d){this.a=d},
aHE(){var x=0,w=A.Y(y.k),v
var $async$aHE=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.oz().Hd("assets/ArtalaxiesMarket.json").aK(0,new B.aBy(),y.w).aK(0,new B.aBz(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aHE,w)},
aBy:function aBy(){},
aBz:function aBz(){},
a6h(d,e,f){return B.b7u(d,e,f)},
b7u(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6h=A.U(function(g,h){if(g===1)return A.V(h,w)
while(true)switch(x){case 0:$.KJ().aE(C.u,"getLatestTransaction executed",null,null)
x=3
return A.a3(d.aK(0,new B.aCR(f,e),y.h),$async$a6h)
case 3:v=h
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6h,w)},
a6i(d,e){return B.b7w(d,e)},
b7w(d,e){var x=0,w=A.Y(y.o),v
var $async$a6i=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.KJ().aE(C.u,"getNFTData executed",null,null)
x=3
return A.a3(d.aK(0,new B.aCU(e),y.o),$async$a6i)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6i,w)},
cr:function cr(d,e,f){this.a=d
this.b=e
this.c=f},
aCR:function aCR(d,e){this.a=d
this.b=e},
aCU:function aCU(d){this.a=d},
aCT:function aCT(d){this.a=d},
aCS:function aCS(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[19],B)
A=c[0]
C=c[2]
D=c[70]
E=c[59]
J=c[1]
F=c[28]
B.no.prototype={
P(d,e){var x=this,w=null,v=A.aF(x.d,w,w,w,A.Q(e).H.b,C.D,w),u=x.e
if(u==null)u=""
return A.kf(A.amh(C.W,!1,A.dF(A.a([x.c,A.Dq(w,!1,w,w,A.aF(u,w,w,w,A.Q(e).H.y,w,w),v,w),D.PD],y.u),C.ad,C.jL,C.K),C.m,C.lM,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajA(x),C.G,C.k3,w,w,C.hV),E.mx,w,E.k4)}}
B.cr.prototype={}
var z=a.updateTypes(["O<r<O<cr>>>(eA)","O<cr>(ft)"])
B.ajA.prototype={
$0(){var x=this.a
A.hC("nft/"+x.f+"/"+x.r)},
$S:0}
B.aBy.prototype={
$1(d){return C.a2.jm(0,J.a1(C.a2.cP(0,d),"abi"))},
$S:15}
B.aBz.prototype={
$1(d){return new A.eA(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.wr(new ethers.utils.Interface(d)).o7(0,C.fe),$.aUk().a))},
$S:161}
B.aCR.prototype={
$1(d){return this.XB(d)},
XB(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bW(d.a.filters,"Transfer",C.A)
s=u.a
if(s==null)s=-1e5
x=3
return A.a3(d.zD(new A.Qd(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:462}
B.aCU.prototype={
$1(d){return this.XE(d)},
XE(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fN(u.a,new B.aCT(d),y.t).e7(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aCT.prototype={
$1(d){return this.XD(d)},
XD(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.KJ()
s=d.a
r=J.m(s)
t.aE(C.cC,"getNFTData.data: "+r.gT2(s),null,null)
t.aE(C.cC,"getNFTData.address: "+r.gpu(s),null,null)
t.aE(C.cC,"getNFTData.transactionHash: "+r.gX_(s),null,null)
t.aE(C.cC,"getNFTData.transactionIndex: "+r.gapx(s),null,null)
t.aE(C.cC,"getNFTData.toString: "+("Event: "+r.gTD(s)+" "+r.gTE(s)+" with args "+A.d(r.gpD(s))),null,null)
q=B
p=r.gpu(s)
o=J.bh(J.a1(r.gpD(s),2))
x=3
return A.a3($.aJ1().aK(0,new B.aCS(d,u.a),y.w),$async$$1)
case 3:v=new q.cr(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1}
B.aCS.prototype={
$1(d){return this.XC(d)},
XC(d){var x=0,w=A.Y(y.w),v,u=this,t,s,r,q,p
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
x(B.no,A.aM)
x(B.ajA,A.eV)
w(A.bL,[B.aBy,B.aBz,B.aCR,B.aCU,B.aCT,B.aCS])
x(B.cr,A.y)})()
A.co(b.typeUniverse,JSON.parse('{"no":{"aM":[],"i":[]}}'))
var y={k:A.w("eA"),t:A.w("O<cr>"),u:A.w("k<i>"),h:A.w("r<ft>"),o:A.w("r<O<cr>>"),C:A.w("cr"),w:A.w("h"),b:A.w("@")};(function constants(){D.aap=new A.dN("sdfsdfsdlkfjld",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.FQ=new A.d4(C.R,C.R,E.dA,E.dA)
D.a4z=new A.eb(D.FQ,C.q)
D.JW=new A.j(4278206324)
D.PD=new A.Dp(null,D.aap,null,null,!1,D.a4z,null,null,D.JW,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ber","aUk",()=>F.aMd($.k3().b.b[1]))
x($,"be1","a6T",()=>B.aHE())})()}
$__dart_deferred_initializers__["MB1qAMHE8xteVuTfiDj8ibQPE/U="] = $__dart_deferred_initializers__.current
