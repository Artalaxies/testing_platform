self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ri:function ri(d,e,f){this.c=d
this.d=e
this.a=f},a_8:function a_8(d){var _=this
_.d=""
_.a=null
_.b=d
_.c=null},auP:function auP(d){this.a=d},auO:function auO(d,e){this.a=d
this.b=e},auQ:function auQ(d){this.a=d},auN:function auN(d){this.a=d},
b01(d,e){var w=null,v=new B.U1(e,d,M.lb(w,w),w)
v.is(w,w,w,w,w)
return v},
U1:function U1(d,e,f,g){var _=this
_.r=d
_.x=e
_.c=_.z=_.y=$
_.d=f
_.a=g},
ajq:function ajq(d){this.a=d},
ajr:function ajr(d){this.a=d},
ajn:function ajn(d){this.a=d},
ajh:function ajh(){},
aji:function aji(){},
ajj:function ajj(d){this.a=d},
ajk:function ajk(d,e){this.a=d
this.b=e},
ajl:function ajl(d,e){this.a=d
this.b=e},
aje:function aje(d){this.a=d},
ajm:function ajm(){},
ajo:function ajo(){},
ajp:function ajp(d){this.a=d},
ajf:function ajf(d){this.a=d},
ajg:function ajg(){},
xp:function xp(d,e){this.c=d
this.a=e},
alC:function alC(d){this.a=d},
nD:function nD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b78(){return $.lp().uJ("assets/TestnetDerivativeTokenV2.json").av(0,new B.aCm(),x.N).av(0,new B.aCn(),x.m)},
b79(d){return $.lp().uJ("assets/TestnetDerivativeTokenV2.json").av(0,new B.aCk(),x.N).av(0,new B.aCl(d),x.m)},
aCm:function aCm(){},
aCn:function aCn(){},
aCk:function aCk(){},
aCl:function aCl(d){this.a=d},
aHA(d){var w=0,v=A.W(x.m),u
var $async$aHA=A.S(function(e,f){if(e===1)return A.T(f,v)
while(true)switch(w){case 0:u=$.lp().uJ("assets/IERC721MetadataUpgradeable.json").av(0,new B.aCi(),x.N).av(0,new B.aCj(d),x.m)
w=1
break
case 1:return A.U(u,v)}})
return A.V($async$aHA,v)},
aDt(d){var w=0,v=A.W(x.z),u,t,s
var $async$aDt=A.S(function(e,f){if(e===1)return A.T(f,v)
while(true)switch(w){case 0:$.KY().ax(C.r,"readNFTData executed",null,null)
t=X
s=J
w=3
return A.a2(d,$async$aDt)
case 3:u=t.a6x(s.b4(f))
w=1
break
case 1:return A.U(u,v)}})
return A.V($async$aDt,v)},
aCi:function aCi(){},
aCj:function aCj(d){this.a=d},
as3:function as3(d){this.a=d},
b2F(d){var w
if(d===0)return $.iz()
if(d===1)return $.KW()
if(d===2)return $.aSz()
if(Math.abs(d)<4294967296)return A.Hj(C.e.f2(d))
w=B.b2E(d)
return w},
b2E(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw A.c(A.bl("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.iz()
w=$.aSx()
for(v=0;v<8;++v)w[v]=0
A.iY(w.buffer,0,null).setFloat64(0,d,!0)
u=w[7]
t=w[6]
s=(u<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new A.eU(!1,r,4)
if(s<0)p=q.K1(0,-s)
else p=s>0?q.lS(0,s):q
return p},
b7V(d){var w,v=C.b.e8(d),u=A.Vj(v,null)
if(u==null)u=A.alA(v)
if(u!=null)return u
w=A.bJ(d,null,null)
throw A.c(w)}},C,H,N,A,D,O,E,F,P,I,Q,J,R,S,G,T,K,L,U,V,M,W,X
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[10],B)
C=c[2]
H=c[29]
N=c[71]
A=c[0]
D=c[75]
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
L=c[76]
U=c[26]
V=c[27]
M=c[43]
W=c[23]
X=c[22]
B.ri.prototype={
aN(){return new B.a_8(C.o)}}
B.a_8.prototype={
aV(){this.bB()},
p(d){this.by(0)},
M(d,e){var w=null,v=H.aLD(w,N.cN,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.N(e).E.c,"Enter a address that you want to send",w,w,w,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=A.N(e),t=x.p
return A.jZ(D.FB,A.a([A.fm(new A.az(O.e7,A.hV(A.d7(A.a([new H.l3(v,E.cp,u.E.c,!0,E.cn,E.co,E.cW,new B.auP(this),w),A.jO(A.ar("Create",w,w,w,A.N(e).E.c,w,w),w,w,w,new B.auQ(this),w,w)],t),C.Z,C.jV,C.J),C.n,w,w),w),200,400)],t),C.aY,w,w)}}
B.U1.prototype={
aV(){var w=this,v=B.aHA(w.x),u=x.z,t=v.av(0,new B.ajq(w),u)
A.dz(w.y,"nftData")
w.y=t
u=v.av(0,new B.ajr(w),u)
A.dz(w.z,"ownerName")
w.z=u
w.wi()},
M(d,e){var w,v,u,t,s=this,r=null,q=A.kx(A.a([A.b(s.y,"nftData"),A.b(s.z,"ownerName")],x.T),x.z),p=x.j
p=A.hq(F.ln(new B.ajn(s),r,p),q,p)
q=A.ar("Derivative Token Logs",r,r,r,A.N(e).E.a,C.B,r)
w=0.1*e.a0(x.w).f.a.a
v=x.t
u=$.aIL().av(0,new B.ajo(),v)
t=x.p
return new P.j0(r,A.a([A.h2(A.h1(A.a([D.a4N,p,new A.az(D.OD,q,r),new A.az(new A.at(w,0,w,0),A.hq(F.ln(new B.ajp(s),r,v),u,v),r)],t),!0,!0,!0))],t),r)}}
B.xp.prototype={
M(d,e){var w=A.a([D.a4X.M(0,e)],x.S),v=this.c
C.c.N(w,new A.ad(v,new B.alC(e),A.aa(v).h("ad<1,d9>")))
return I.ar7(null,w,null,D.P7,Q.hV)}}
B.nD.prototype={
M(d,e){var w=this,v=null,u=w.d?C.jY:C.n
return new I.d9(new A.cf(u,v,v,v,v,v,C.O),A.a([A.fm(A.mY(A.ar(w.a,v,v,v,A.N(e).E.b,C.B,v),v,v),50,v),A.ar(w.b,v,v,v,A.N(e).E.b,C.B,v),A.ar(w.c,v,v,v,A.N(e).E.b,C.B,v)],x.p))}}
B.as3.prototype={
j(d){var w,v=null,u=this.a,t=J.l(u),s=t.gn(u)
s="TransactionOverride: value "+A.d(s==null?v:A.uH(J.b4(s),v))+" with gas limit "
w=t.gXS(u)
s=s+A.d(w==null?v:A.uH(J.b4(w),v))+" and gas price "
u=t.gXT(u)
return s+A.d(u==null?v:A.uH(J.b4(u),v))}}
var z=a.updateTypes(["~(iR)","ri(a3)","xp(a3,ce<p<dL>>)","nD(dL)","d9(nD)"])
B.auP.prototype={
$1(d){var w=this.a
w.aB(new B.auO(w,d))},
$S:32}
B.auO.prototype={
$0(){this.a.d=this.b},
$S:0}
B.auQ.prototype={
$0(){B.b79(new A.xW(J.aWI($.hS().c.a),x.v)).av(0,new B.auN(this.a),x.l)},
$S:0}
B.auN.prototype={
$1(d){var w,v,u=this.a,t=u.d
u=u.a
w=u.c
u=u.d
v=B.b2F(6e4)
v=v==null?null:ethers.BigNumber.from(v.j(0))
return d.w5(0,"safeMint",[t,1,w,u],new B.as3({value:null,gasLimit:v,gasPrice:null,maxFeePerGas:null,maxPriorityFeePerGas:null,nonce:null}))},
$S:455}
B.ajq.prototype={
$1(d){return B.aDt(d.eQ(0,"tokenURI",[this.a.r],x.z))},
$S:94}
B.ajr.prototype={
$1(d){return d.eQ(0,"ownerOf",[this.a.r],x.z)},
$S:94}
B.ajn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="image",i=this.a
A.b(i.c,"windowLogger").ax(C.r,J.b4(e.gd4()),k,k)
w=J.oF(J.b4(J.a_(J.a_(e.gd4(),0),j)),"ipfs")?C.b.Z("https://cloudflare-ipfs.com/ipfs/",C.c.gJ(J.aEi(J.b4(J.a_(J.a_(e.gd4(),0),j)),"/"))):J.b4(J.a_(J.a_(e.gd4(),0),j))
v=x.w
u=0.1*d.a0(v).f.a.a
v=d.a0(v).f
v=A.bA(k,A.hV(R.aFj(w,k,k),C.n,k,k),C.l,k,new A.au(0.25*v.a.a,1/0,0,1/0),k,k,k,k,k,k,k,k)
t=A.ar(J.b4(J.a_(J.a_(e.gd4(),0),"name")),k,k,k,A.N(d).E.a,C.B,k)
s=A.ar(C.b.Z("Owner: ",J.b4(J.a_(e.gd4(),1))),k,k,k,k,k,k)
r=J.b4(J.a_(J.a_(e.gd4(),0),"external_url"))
r=S.aLW(new B.ajh(),A.N(d).E.d,r)
q=A.ar("Description",k,k,k,A.N(d).E.b,k,k)
p=A.ar(J.b4(J.a_(J.a_(e.gd4(),0),"description")),k,k,k,A.N(d).E.c,k,k)
o=x.p
n=A.a([A.ar("Properties",k,k,k,A.N(d).E.b,k,k)],o)
m=x.z
l=A.ck(J.a_(J.a_(e.gd4(),0),"attributes"),!0,m)
C.c.N(n,new A.ad(l,new B.aji(),A.aa(l).h("ad<1,i>")))
n=A.hV(new A.az(G.at,A.d7(A.a([D.zC,t,D.zD,s,D.k5,r,D.k5,q,D.zC,p,D.a4O,A.bA(k,A.d7(n,C.Z,C.H,C.J),C.l,C.n,k,k,k,k,k,k,k,k,k)],o),C.as,C.H,C.J),k),C.n,k,k)
p=$.aIL().av(0,new B.ajj(i),m)
return new A.az(new A.at(u,0,u,0),T.yV(K.E,A.a([v,n,A.hV(new A.az(G.at,A.d7(A.a([A.hq(F.ln(new B.ajk(i,d),k,m),p,m),D.zD,A.jO(D.ab2,L.iK,50,k,new B.ajl(i,d),k,k),D.k5,A.jO(D.aaV,L.iK,50,k,new B.ajm(),k,k)],o),C.as,C.H,C.J),k),C.n,k,k)],o),K.kW,C.a8),k)},
$S:457}
B.ajh.prototype={
$1(d){return U.KO(d.b)},
$S:z+0}
B.aji.prototype={
$1(d){var w=null,v=J.aq(d)
return A.hV(A.ar(J.L1(J.L1(v.i(d,"trait_type")," : "),v.i(d,"value")),w,w,w,w,w,w),w,w,w)},
$S:458}
B.ajj.prototype={
$1(d){var w=this.a
return d.eQ(0,"getAmount",[w.x,B.b7V(w.r)],x.z)},
$S:94}
B.ajk.prototype={
$2(d,e){var w=null,v=x.A
A.b(this.a.c,"windowLogger").ax(C.r,"derivative token:"+J.b4(J.aK7(v.a(e.gd4()))),w,w)
return A.ar("Derivative Token Created:"+J.b4(J.aK7(v.a(e.gd4()))),w,w,w,A.N(this.b).E.b,w,w)},
$S:459}
B.ajl.prototype={
$0(){var w=$.ap_
if(w==null)w=this.b
A.aR8(C.S,new B.aje(this.a),w,x.z)},
$S:0}
B.aje.prototype={
$1(d){var w=this.a
return new B.ri(w.x,w.r,null)},
$S:z+1}
B.ajm.prototype={
$0(){},
$S:0}
B.ajo.prototype={
$1(d){return d.aoH(d.J0("TransferSingle"))},
$S:128}
B.ajp.prototype={
$2(d,e){var w,v,u,t=null,s="windowLogger",r=this.a
A.b(r.c,s).ax(C.r,e.gd4(),t,t)
w=ethers.utils.solidityKeccak256(A.a(["address","string","uint256"],x.s),[r.x,"/",r.r])
v=ethers.utils.formatEther(w)
u=A.de(v,".","")
A.b(r.c,s).ax(C.r,u,t,t)
A.b(r.c,s).ax(C.r,"HEX: "+w,t,t)
A.b(r.c,s).ax(C.r,"id: "+u,t,t)
J.aJY(e.gd4(),new B.ajf(u))
r=x.u
return new B.xp(A.am(J.f8(e.gd4(),new B.ajg(),r),!0,r),t)},
$S:z+2}
B.ajf.prototype={
$1(d){return!J.e(J.b4(J.a_(J.aWe(d.a),3)),this.a)},
$S:461}
B.ajg.prototype={
$1(d){var w=d.a,v=J.l(w)
return new B.nD(J.aXA(J.b4(J.a_(v.gl5(w),2)),0,24)+"...",J.b4(J.a_(v.gl5(w),4)),C.e.j(0),!1)},
$S:z+3}
B.alC.prototype={
$1(d){return d.M(0,this.a)},
$S:z+4}
B.aCm.prototype={
$1(d){return C.P.i_(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCn.prototype={
$1(d){return new A.dI(new ethers.Contract(y.d,new A.p7(new ethers.utils.Interface(d)).ln(0,C.db),$.aIV().a))},
$S:67}
B.aCk.prototype={
$1(d){return C.P.i_(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCl.prototype={
$1(d){return new A.dI(new ethers.Contract(y.d,new A.p7(new ethers.utils.Interface(d)).ln(0,C.db),this.a.a))},
$S:67}
B.aCi.prototype={
$1(d){return C.P.i_(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCj.prototype={
$1(d){return new A.dI(new ethers.Contract(this.a,new A.p7(new ethers.utils.Interface(d)).ln(0,C.db),V.aLP(C.c.gJ($.hS().b.b)).a))},
$S:67};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.ri,A.Z)
w(B.a_8,A.ao)
v(A.bE,[B.auP,B.auN,B.ajq,B.ajr,B.ajh,B.aji,B.ajj,B.aje,B.ajo,B.ajf,B.ajg,B.alC,B.aCm,B.aCn,B.aCk,B.aCl,B.aCi,B.aCj])
v(A.e8,[B.auO,B.auQ,B.ajl,B.ajm])
w(B.U1,M.fF)
v(A.fu,[B.ajn,B.ajk,B.ajp])
w(B.xp,A.aK)
w(B.nD,A.x)
w(B.as3,A.D6)})()
A.cc(b.typeUniverse,JSON.parse('{"ri":{"Z":[],"i":[]},"a_8":{"ao":["ri"]},"U1":{"Z":[],"i":[]},"xp":{"aK":[],"i":[]}}'))
var y={d:"0x9b049dE07099f1FA7B946B65d5D6fb69a5528a22"}
var x=(function rtii(){var w=A.u
return{A:w("qW"),m:w("dI"),T:w("k<O<@>>"),s:w("k<f>"),S:w("k<d9>"),p:w("k<i>"),t:w("p<dL>"),j:w("p<@>"),w:w("f2"),u:w("nD"),v:w("xW<qw>"),N:w("f"),l:w("ur"),z:w("@")}})();(function constants(){D.FB=new A.hj(0,0)
D.OD=new A.at(0,100,0,30)
D.P7=new W.Cy(100)
D.OJ=new A.at(0,5,0,0)
D.zC=new A.az(D.OJ,null,null)
D.OE=new A.at(0,10,0,0)
D.k5=new A.az(D.OE,null,null)
D.OH=new A.at(0,20,0,0)
D.zD=new A.az(D.OH,null,null)
D.OF=new A.at(0,10,0,10)
D.a4O=new A.az(D.OF,null,null)
D.a4N=new A.az(G.at,null,null)
D.a4X=new B.nD("Merchant Name","Dericvate Takens Own","Products Created",!0)
D.aaV=new A.cB("Apply for producing this Derivative",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab2=new A.cB("Create Derivative Token",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bbx","aSz",()=>A.Hj(2))
w($,"bbt","aSx",()=>A.aMq(8))
w($,"bdT","aIL",()=>B.b78())})()}
$__dart_deferred_initializers__["43PxaFm7YAR8/8amPiYVYzHVTq8="] = $__dart_deferred_initializers__.current
