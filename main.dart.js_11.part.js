self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={nM:function nM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},akG:function akG(d){this.a=d},
aJi(){var x=0,w=A.U(y.k),v
var $async$aJi=A.Q(function(d,e){if(d===1)return A.R(e,w)
while(true)switch(x){case 0:v=$.lB().v3("assets/ArtalaxiesMarket.json").av(0,new B.aDO(),y.w).av(0,new B.aDP(),y.k)
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$aJi,w)},
aDO:function aDO(){},
aDP:function aDP(){},
a7m(d,e,f){return B.b9r(d,e,f)},
b9r(d,e,f){var x=0,w=A.U(y.h),v
var $async$a7m=A.Q(function(g,h){if(g===1)return A.R(h,w)
while(true)switch(x){case 0:$.LG().ar(C.p,"getLatestTransaction executed",null,null)
x=3
return A.a0(d.av(0,new B.aDY(f,e),y.h),$async$a7m)
case 3:v=h
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$a7m,w)},
a7n(d,e){return B.b9t(d,e)},
b9t(d,e){var x=0,w=A.U(y.o),v
var $async$a7n=A.Q(function(f,g){if(f===1)return A.R(g,w)
while(true)switch(x){case 0:$.LG().ar(C.p,"getNFTData executed",null,null)
x=3
return A.a0(d.av(0,new B.aE0(e),y.o),$async$a7n)
case 3:v=g
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$a7n,w)},
cu:function cu(d,e,f){this.a=d
this.b=e
this.c=f},
aDY:function aDY(d,e){this.a=d
this.b=e},
aE0:function aE0(d){this.a=d},
aE_:function aE_(d){this.a=d},
aDZ:function aDZ(d,e){this.a=d
this.b=e}},A,C,D,E,J,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[20],B)
A=c[0]
C=c[2]
D=c[66]
E=c[63]
J=c[1]
F=c[77]
B.nM.prototype={
N(d,e){var x=this,w=null,v=A.fq(x.c,w,300),u=A.ar(x.d,w,w,w,A.N(e).F.b,C.B,w),t=x.e
if(t==null)t=""
return A.i1(A.ann(C.X,!1,A.dc(A.a([v,A.tu(w,!1,w,w,A.ar(t,w,w,w,A.N(e).F.y,w,w),u,w),D.Q8],y.u),C.Z,C.z6,C.J),C.l,C.lZ,0,2,!0,w,w,4,w,w,8,w,4,w,w,w,w,new B.akG(x),C.G,C.ke,w,w,C.i4),E.mJ,w,E.kf)}}
B.cu.prototype={}
var z=a.updateTypes(["O<n<O<cu>>>(dM)","O<cu>(fj)"])
B.akG.prototype={
$0(){var x=this.a
A.fv("nft/"+x.f+"/"+x.r)},
$S:0}
B.aDO.prototype={
$1(d){return C.L.hy(0,J.V(C.L.cp(0,d),"abi"))},
$S:15}
B.aDP.prototype={
$1(d){return new A.dM(new ethers.Contract("0xe6E2A08df55653023305E88999C37655b73CDad0",new A.po(new ethers.utils.Interface(d)).lt(0,C.db),$.aKG().a))},
$S:61}
B.aDY.prototype={
$1(d){return this.YJ(d)},
YJ(d){var x=0,w=A.U(y.h),v,u=this,t,s
var $async$$1=A.Q(function(e,f){if(e===1)return A.R(f,w)
while(true)switch(x){case 0:t=d.JA("Transfer")
s=u.a
if(s==null)s=-1e5
x=3
return A.a0(d.vD(t,s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$$1,w)},
$S:160}
B.aE0.prototype={
$1(d){return this.YM(d)},
YM(d){var x=0,w=A.U(y.o),v,u=this
var $async$$1=A.Q(function(e,f){if(e===1)return A.R(f,w)
while(true)switch(x){case 0:v=J.f0(u.a,new B.aE_(d),y.t).dv(0)
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$$1,w)},
$S:z+0}
B.aE_.prototype={
$1(d){return this.YL(d)},
YL(d){var x=0,w=A.U(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.Q(function(e,f){if(e===1)return A.R(f,w)
while(true)switch(x){case 0:t=$.LG()
s=d.a
r=J.l(s)
t.ar(C.cI,"getNFTData.data: "+r.gGd(s),null,null)
t.ar(C.cI,"getNFTData.address: "+r.gpK(s),null,null)
t.ar(C.cI,"getNFTData.transactionHash: "+r.gY4(s),null,null)
t.ar(C.cI,"getNFTData.transactionIndex: "+r.garH(s),null,null)
t.ar(C.cI,"getNFTData.toString: "+("Event: "+r.gUy(s)+" "+r.gUz(s)+" with args "+A.d(r.gpT(s))),null,null)
q=B
p=r.gpK(s)
o=J.aX(J.V(r.gpT(s),2))
x=3
return A.a0($.aKk().av(0,new B.aDZ(d,u.a),y.w),$async$$1)
case 3:v=new q.cu(p,o,f)
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$$1,w)},
$S:z+1}
B.aDZ.prototype={
$1(d){return this.YK(d)},
YK(d){var x=0,w=A.U(y.w),v,u=this,t,s,r,q,p
var $async$$1=A.Q(function(e,f){if(e===1)return A.R(f,w)
while(true)switch(x){case 0:t=u.a.a
s=J.l(t)
r=C.b.a0(s.gpK(t)+"/",J.aX(J.V(s.gpT(t),2)))
q=A.cU(J.V(d.a,r))
x=q==null?3:4
break
case 3:p=J
x=5
return A.a0(u.b.eF(0,"tokenURI",[J.V(s.gpT(t),2)],y.b),$async$$1)
case 5:q=p.aX(f)
case 4:d.nS("String",C.b.a0(s.gpK(t)+"/",J.aX(J.V(s.gpT(t),2))),q)
v=q
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$$1,w)},
$S:96};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.nM,A.aL)
x(B.akG,A.e9)
w(A.bI,[B.aDO,B.aDP,B.aDY,B.aE0,B.aE_,B.aDZ])
x(B.cu,A.x)})()
A.cf(b.typeUniverse,JSON.parse('{"nM":{"aL":[],"i":[]}}'))
var y={k:A.t("dM"),t:A.t("O<cu>"),u:A.t("k<i>"),h:A.t("n<fj>"),o:A.t("n<O<cu>>"),C:A.t("cu"),w:A.t("e"),b:A.t("@")};(function constants(){D.n8=new A.au(50,50,50,50)
D.aba=new A.cE("",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.G6=new A.db(C.T,C.T,E.dJ,E.dJ)
D.a5b=new A.eg(D.G6,C.r)
D.Q8=new A.tt(null,D.aba,null,null,!1,D.a5b,null,null,F.iM,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bge","a7X",()=>B.aJi())})()}
$__dart_deferred_initializers__["bMV3H1fK/xl1Ur/hNgqq7O6Ua6g="] = $__dart_deferred_initializers__.current
