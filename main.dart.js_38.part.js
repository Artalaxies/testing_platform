self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={rD:function rD(d,e,f){this.c=d
this.d=e
this.a=f},a04:function a04(d){var _=this
_.d=""
_.a=null
_.b=d
_.c=null},awf:function awf(d){this.a=d},awe:function awe(d,e){this.a=d
this.b=e},awg:function awg(d){this.a=d},awd:function awd(d){this.a=d},
b2d(d,e){var w=null,v=new B.US(e,d,M.ln(w,w),w)
v.ix(w,w,w,w,w)
return v},
US:function US(d,e,f,g){var _=this
_.r=d
_.x=e
_.c=_.z=_.y=$
_.d=f
_.a=g},
akR:function akR(d){this.a=d},
akS:function akS(d){this.a=d},
akO:function akO(d){this.a=d},
akI:function akI(){},
akJ:function akJ(){},
akK:function akK(d){this.a=d},
akL:function akL(d,e){this.a=d
this.b=e},
akM:function akM(d,e){this.a=d
this.b=e},
akH:function akH(d){this.a=d},
akN:function akN(){},
akP:function akP(){},
akQ:function akQ(){},
xU:function xU(d){this.a=d},
an2:function an2(d){this.a=d},
u7:function u7(){},
b9l(){return $.lB().v3("assets/TestnetDerivativeTokenV2.json").av(0,new B.aDW(),x.N).av(0,new B.aDX(),x.m)},
b9m(d){return $.lB().v3("assets/TestnetDerivativeTokenV2.json").av(0,new B.aDU(),x.N).av(0,new B.aDV(d),x.m)},
aDW:function aDW(){},
aDX:function aDX(){},
aDU:function aDU(){},
aDV:function aDV(d){this.a=d},
aJj(d){var w=0,v=A.U(x.m),u
var $async$aJj=A.Q(function(e,f){if(e===1)return A.R(f,v)
while(true)switch(w){case 0:u=$.lB().v3("assets/IERC721MetadataUpgradeable.json").av(0,new B.aDS(),x.N).av(0,new B.aDT(d),x.m)
w=1
break
case 1:return A.S(u,v)}})
return A.T($async$aJj,v)},
aF3(d){var w=0,v=A.U(x.z),u,t,s
var $async$aF3=A.Q(function(e,f){if(e===1)return A.R(f,v)
while(true)switch(w){case 0:$.LG().ar(C.p,"readNFTData executed",null,null)
t=X
s=J
w=3
return A.a0(d,$async$aF3)
case 3:u=t.a7u(s.aX(f))
w=1
break
case 1:return A.S(u,v)}})
return A.T($async$aF3,v)},
aDS:function aDS(){},
aDT:function aDT(d){this.a=d},
att:function att(d){this.a=d},
b4M(d){var w
if(d===0)return $.iJ()
if(d===1)return $.LE()
if(d===2)return $.aUx()
if(Math.abs(d)<4294967296)return A.I1(C.e.f3(d))
w=B.b4L(d)
return w},
b4L(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw A.c(A.bm("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.iJ()
w=$.aUv()
for(v=0;v<8;++v)w[v]=0
A.j6(w.buffer,0,null).setFloat64(0,d,!0)
u=w[7]
t=w[6]
s=(u<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new A.eX(!1,r,4)
if(s<0)p=q.KD(0,-s)
else p=s>0?q.lY(0,s):q
return p},
ba9(d){var w,v=C.b.dH(d),u=A.Wc(v,null)
if(u==null)u=A.an0(v)
if(u!=null)return u
w=A.bF(d,null,null)
throw A.c(w)}},C,H,N,A,D,O,E,F,P,I,Q,J,R,S,G,T,K,L,U,V,M,W,X
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[10],B)
C=c[2]
H=c[29]
N=c[72]
A=c[0]
D=c[76]
O=c[52]
E=c[51]
F=c[34]
P=c[41]
I=c[33]
Q=c[53]
J=c[1]
R=c[31]
S=c[16]
G=c[61]
T=c[39]
K=c[49]
L=c[77]
U=c[26]
V=c[27]
M=c[43]
W=c[23]
X=c[22]
B.rD.prototype={
aN(){return new B.a04(C.o)}}
B.a04.prototype={
aV(){this.bB()},
p(d){this.by(0)},
N(d,e){var w=null,v=H.aNp(w,N.cN,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.N(e).F.c,"Enter a address that you want to send",w,w,w,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=A.N(e),t=x.p
return A.k4(D.FD,A.a([A.fq(new A.aA(O.e8,A.i1(A.dc(A.a([new H.le(v,E.cq,u.F.c,!0,E.co,E.cp,E.cW,new B.awf(this),w),A.jW(A.ar("Create",w,w,w,A.N(e).F.c,w,w),w,w,w,new B.awg(this),w,w)],t),C.Z,C.jW,C.J),C.n,w,w),w),200,400)],t),C.aY,w,w)}}
B.US.prototype={
aV(){var w=this,v=B.aJj(w.x),u=x.z,t=v.av(0,new B.akR(w),u)
A.dC(w.y,"nftData")
w.y=t
u=v.av(0,new B.akS(w),u)
A.dC(w.z,"ownerName")
w.z=u
w.wG()},
N(d,e){var w,v,u,t,s=null,r=A.kF(A.a([A.b(this.y,"nftData"),A.b(this.z,"ownerName")],x.T),x.z),q=x.j
q=A.hu(F.lA(new B.akO(this),s,q),r,q)
r=A.ar("Merchant Support",s,s,s,A.N(e).F.a,C.B,s)
w=0.1*e.a_(x.w).f.a.a
v=x.t
u=$.aKw().av(0,new B.akP(),v)
t=x.p
return new P.j9(s,A.a([A.h9(A.h8(A.a([D.a4S,q,new A.aA(D.OG,r,s),new A.aA(new A.au(w,0,w,0),A.hu(F.lA(new B.akQ(),s,x.X),u,v),s)],t),!0,!0,!0))],t),s)}}
B.xU.prototype={
N(d,e){var w=A.a([D.HR.N(0,e)],x.s)
C.c.M(w,new A.ac(D.Wu,new B.an2(e),x.r))
return I.asx(null,w,null,D.Pb,Q.hX)}}
B.u7.prototype={
N(d,e){var w=null
return new I.de(new A.ci(C.jZ,w,w,w,w,w,C.P),A.a([A.fq(A.nf(A.ar("Merchant Name",w,w,w,A.N(e).F.b,C.B,w),w,w),50,w),A.ar("Dericvate Takens Own",w,w,w,A.N(e).F.b,C.B,w),A.ar("Products Created",w,w,w,A.N(e).F.b,C.B,w)],x.p))}}
B.att.prototype={
j(d){var w,v=null,u=this.a,t=J.l(u),s=t.gn(u)
s="TransactionOverride: value "+A.d(s==null?v:A.v5(J.aX(s),v))+" with gas limit "
w=t.gYP(u)
s=s+A.d(w==null?v:A.v5(J.aX(w),v))+" and gas price "
u=t.gYQ(u)
return s+A.d(u==null?v:A.v5(J.aX(u),v))}}
var z=a.updateTypes(["~(j_)","rD(a3)","xU(a3,ch<x?>)","de(u7)"])
B.awf.prototype={
$1(d){var w=this.a
w.aA(new B.awe(w,d))},
$S:34}
B.awe.prototype={
$0(){this.a.d=this.b},
$S:0}
B.awg.prototype={
$0(){B.b9m(new A.ut(J.aLy($.fz().c.a),x.v)).av(0,new B.awd(this.a),x.l)},
$S:0}
B.awd.prototype={
$1(d){var w,v,u=this.a,t=u.d
u=u.a
w=u.c
u=u.d
v=B.b4M(6e4)
v=v==null?null:ethers.BigNumber.from(v.j(0))
return d.ws(0,"safeMint",[t,1,w,u],new B.att({value:null,gasLimit:v,gasPrice:null,maxFeePerGas:null,maxPriorityFeePerGas:null,nonce:null}))},
$S:476}
B.akR.prototype={
$1(d){return B.aF3(d.eF(0,"tokenURI",[this.a.r],x.z))},
$S:91}
B.akS.prototype={
$1(d){return d.eF(0,"ownerOf",[this.a.r],x.z)},
$S:91}
B.akO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="image",i=this.a
A.b(i.c,"windowLogger").ar(C.p,J.aX(e.gdu()),k,k)
w=J.oV(J.aX(J.V(J.V(e.gdu(),0),j)),"ipfs")?C.b.a0("https://cloudflare-ipfs.com/ipfs/",C.c.gJ(J.aFX(J.aX(J.V(J.V(e.gdu(),0),j)),"/"))):J.aX(J.V(J.V(e.gdu(),0),j))
v=x.w
u=0.1*d.a_(v).f.a.a
v=d.a_(v).f
v=A.bE(k,A.i1(R.aH1(w,k,k),C.n,k,k),C.l,k,new A.av(0.25*v.a.a,1/0,0,1/0),k,k,k,k,k,k,k,k)
t=A.ar(J.aX(J.V(J.V(e.gdu(),0),"name")),k,k,k,A.N(d).F.a,C.B,k)
s=A.ar(C.b.a0("Owner: ",J.aX(J.V(e.gdu(),1))),k,k,k,k,k,k)
r=J.aX(J.V(J.V(e.gdu(),0),"external_url"))
r=S.aNI(new B.akI(),A.N(d).F.d,r)
q=A.ar("Description",k,k,k,A.N(d).F.b,k,k)
p=A.ar(J.aX(J.V(J.V(e.gdu(),0),"description")),k,k,k,A.N(d).F.c,k,k)
o=x.p
n=A.a([A.ar("Properties",k,k,k,A.N(d).F.b,k,k)],o)
m=x.z
l=A.cj(J.V(J.V(e.gdu(),0),"attributes"),!0,m)
C.c.M(n,new A.ac(l,new B.akJ(),A.ab(l).h("ac<1,i>")))
n=A.i1(new A.aA(G.at,A.dc(A.a([D.zE,t,D.zF,s,D.k7,r,D.k7,q,D.zE,p,D.a4T,A.bE(k,A.dc(n,C.Z,C.H,C.J),C.l,C.n,k,k,k,k,k,k,k,k,k)],o),C.as,C.H,C.J),k),C.n,k,k)
p=$.aKw().av(0,new B.akK(i),m)
return new A.aA(new A.au(u,0,u,0),T.zs(K.E,A.a([v,n,A.i1(new A.aA(G.at,A.dc(A.a([A.hu(F.lA(new B.akL(i,d),k,m),p,m),D.zF,A.jW(D.ab7,L.iM,50,k,new B.akM(i,d),k,k),D.k7,A.jW(D.ab_,L.iM,50,k,new B.akN(),k,k)],o),C.as,C.H,C.J),k),C.n,k,k)],o),K.kY,C.a8),k)},
$S:478}
B.akI.prototype={
$1(d){return U.Lx(d.b)},
$S:z+0}
B.akJ.prototype={
$1(d){var w=null,v=J.ap(d)
return A.i1(A.ar(J.LK(J.LK(v.i(d,"trait_type")," : "),v.i(d,"value")),w,w,w,w,w,w),w,w,w)},
$S:479}
B.akK.prototype={
$1(d){var w=this.a
return d.eF(0,"getAmount",[w.x,B.ba9(w.r)],x.z)},
$S:91}
B.akL.prototype={
$2(d,e){var w=null,v=x.A
A.b(this.a.c,"windowLogger").ar(C.p,"derivative token:"+J.aX(J.aLQ(v.a(e.gdu()))),w,w)
return A.ar("Derivative Token Created:"+J.aX(J.aLQ(v.a(e.gdu()))),w,w,w,A.N(this.b).F.b,w,w)},
$S:480}
B.akM.prototype={
$0(){var w=$.aHR
if(w==null)w=this.b
A.aT1(C.S,new B.akH(this.a),w,x.z)},
$S:0}
B.akH.prototype={
$1(d){var w=this.a
return new B.rD(w.x,w.r,null)},
$S:z+1}
B.akN.prototype={
$0(){},
$S:0}
B.akP.prototype={
$1(d){return d.aqx(d.JA("TransferSingle"))},
$S:160}
B.akQ.prototype={
$2(d,e){return D.a51},
$S:z+2}
B.an2.prototype={
$1(d){return d.N(0,this.a)},
$S:z+3}
B.aDW.prototype={
$1(d){return C.L.hy(0,J.V(C.L.cp(0,d),"abi"))},
$S:15}
B.aDX.prototype={
$1(d){return new A.dM(new ethers.Contract(y.d,new A.po(new ethers.utils.Interface(d)).lt(0,C.db),$.aKG().a))},
$S:61}
B.aDU.prototype={
$1(d){return C.L.hy(0,J.V(C.L.cp(0,d),"abi"))},
$S:15}
B.aDV.prototype={
$1(d){return new A.dM(new ethers.Contract(y.d,new A.po(new ethers.utils.Interface(d)).lt(0,C.db),this.a.a))},
$S:61}
B.aDS.prototype={
$1(d){return C.L.hy(0,J.V(C.L.cp(0,d),"abi"))},
$S:15}
B.aDT.prototype={
$1(d){return new A.dM(new ethers.Contract(this.a,new A.po(new ethers.utils.Interface(d)).lt(0,C.db),V.aNB(C.c.gJ($.fz().b.b)).a))},
$S:61};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.rD,A.a_)
w(B.a04,A.ao)
v(A.bI,[B.awf,B.awd,B.akR,B.akS,B.akI,B.akJ,B.akK,B.akH,B.akP,B.an2,B.aDW,B.aDX,B.aDU,B.aDV,B.aDS,B.aDT])
v(A.e9,[B.awe,B.awg,B.akM,B.akN])
w(B.US,M.fL)
v(A.fA,[B.akO,B.akL,B.akQ])
w(B.xU,A.aL)
w(B.u7,A.x)
w(B.att,A.DP)})()
A.cf(b.typeUniverse,JSON.parse('{"rD":{"a_":[],"i":[]},"a04":{"ao":["rD"]},"US":{"a_":[],"i":[]},"xU":{"aL":[],"i":[]}}'))
var y={d:"0x9b049dE07099f1FA7B946B65d5D6fb69a5528a22"}
var x=(function rtii(){var w=A.t
return{A:w("re"),m:w("dM"),T:w("k<O<@>>"),s:w("k<de>"),p:w("k<i>"),t:w("n<fj>"),j:w("n<@>"),r:w("ac<u7,de>"),w:w("f6"),v:w("ut<qR>"),N:w("e"),l:w("uP"),z:w("@"),X:w("x?")}})();(function constants(){var w=a.makeConstList
D.FD=new A.hn(0,0)
D.HR=new B.u7()
D.OG=new A.au(0,100,0,30)
D.Pb=new W.Dg(100)
D.Wu=A.a(w([]),A.t("k<u7>"))
D.OM=new A.au(0,5,0,0)
D.zE=new A.aA(D.OM,null,null)
D.OH=new A.au(0,10,0,0)
D.k7=new A.aA(D.OH,null,null)
D.OK=new A.au(0,20,0,0)
D.zF=new A.aA(D.OK,null,null)
D.OI=new A.au(0,10,0,10)
D.a4T=new A.aA(D.OI,null,null)
D.a4S=new A.aA(G.at,null,null)
D.a51=new B.xU(null)
D.ab_=new A.cE("Apply for producing this Derivative",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab7=new A.cE("Create Derivative Token",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bdU","aUx",()=>A.I1(2))
w($,"bdQ","aUv",()=>A.aOf(8))
w($,"bgj","aKw",()=>B.b9l())})()}
$__dart_deferred_initializers__["mnmv/I6VS833YynmIBLyBIF5H2I="] = $__dart_deferred_initializers__.current
