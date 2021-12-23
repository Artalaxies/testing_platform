self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={np:function np(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},ajH:function ajH(d){this.a=d},
aHM(){var x=0,w=A.Y(y.k),v
var $async$aHM=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.oz().Hd("assets/ArtalaxiesMarket.json").aK(0,new B.aBF(),y.w).aK(0,new B.aBG(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aHM,w)},
aBF:function aBF(){},
aBG:function aBG(){},
a6j(d,e,f){return B.b7C(d,e,f)},
b7C(d,e,f){var x=0,w=A.Y(y.h),v
var $async$a6j=A.U(function(g,h){if(g===1)return A.V(h,w)
while(true)switch(x){case 0:$.KM().aE(C.u,"getLatestTransaction executed",null,null)
x=3
return A.a3(d.aK(0,new B.aCY(f,e),y.h),$async$a6j)
case 3:v=h
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6j,w)},
a6k(d,e){return B.b7E(d,e)},
b7E(d,e){var x=0,w=A.Y(y.o),v
var $async$a6k=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.KM().aE(C.u,"getNFTData executed",null,null)
x=3
return A.a3(d.aK(0,new B.aD0(e),y.o),$async$a6k)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a6k,w)},
cr:function cr(d,e,f){this.a=d
this.b=e
this.c=f},
aCY:function aCY(d,e){this.a=d
this.b=e},
aD0:function aD0(d){this.a=d},
aD_:function aD_(d){this.a=d},
aCZ:function aCZ(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[75]
E=c[62]
J=c[1]
F=c[30]
B.np.prototype={
P(d,e){var x=this,w=null,v=A.aC(x.d,w,w,w,A.P(e).G.b,C.A,w),u=x.e
if(u==null)u=""
return A.kh(A.amo(C.W,!1,A.dz(A.a([x.c,A.Dt(w,!1,w,w,A.aC(u,w,w,w,A.P(e).G.y,w,w),v,w),D.PE],y.u),C.ad,C.jN,C.I),C.m,C.lO,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.ajH(x),C.G,C.k5,w,w,C.hV),E.mz,w,E.k6)}}
B.cr.prototype={}
var z=a.updateTypes(["O<r<O<cr>>>(eA)","O<cr>(fu)"])
B.ajH.prototype={
$0(){var x=this.a
A.f4("nft/"+x.f+"/"+x.r)},
$S:0}
B.aBF.prototype={
$1(d){return C.a2.jm(0,J.a1(C.a2.cP(0,d),"abi"))},
$S:15}
B.aBG.prototype={
$1(d){return new A.eA(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.wt(new ethers.utils.Interface(d)).o7(0,C.fe),$.aUr().a))},
$S:150}
B.aCY.prototype={
$1(d){return this.XB(d)},
XB(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bW(d.a.filters,"Transfer",C.B)
s=u.a
if(s==null)s=-1e5
x=3
return A.a3(d.zD(new A.Qg(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:463}
B.aD0.prototype={
$1(d){return this.XE(d)},
XE(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fQ(u.a,new B.aD_(d),y.t).e7(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aD_.prototype={
$1(d){return this.XD(d)},
XD(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.KM()
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
return A.a3($.aJ9().aK(0,new B.aCZ(d,u.a),y.w),$async$$1)
case 3:v=new q.cr(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1}
B.aCZ.prototype={
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
$S:77};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.np,A.aM)
x(B.ajH,A.eW)
w(A.bL,[B.aBF,B.aBG,B.aCY,B.aD0,B.aD_,B.aCZ])
x(B.cr,A.y)})()
A.cc(b.typeUniverse,JSON.parse('{"np":{"aM":[],"i":[]}}'))
var y={k:A.v("eA"),t:A.v("O<cr>"),u:A.v("j<i>"),h:A.v("r<fu>"),o:A.v("r<O<cr>>"),C:A.v("cr"),w:A.v("h"),b:A.v("@")};(function constants(){D.aaq=new A.dN("sdfsdfsdlkfjld",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.FR=new A.d4(C.R,C.R,E.dA,E.dA)
D.a4A=new A.eb(D.FR,C.q)
D.JX=new A.k(4278206324)
D.PE=new A.Ds(null,D.aaq,null,null,!1,D.a4A,null,null,D.JX,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bez","aUr",()=>F.aMl($.k5().b.b[1]))
x($,"be9","a6V",()=>B.aHM())})()}
$__dart_deferred_initializers__["CHAZ7VebTE3B/4+S4ATFyVSMBvw="] = $__dart_deferred_initializers__.current
