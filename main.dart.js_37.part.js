self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={rk:function rk(d,e,f){this.c=d
this.d=e
this.a=f},a_a:function a_a(d){var _=this
_.d=""
_.a=null
_.b=d
_.c=null},auS:function auS(d){this.a=d},auR:function auR(d,e){this.a=d
this.b=e},auT:function auT(d){this.a=d},auQ:function auQ(d){this.a=d},
b04(d,e){var w=null,v=new B.U2(e,d,N.lb(w,w),w)
v.is(w,w,w,w,w)
return v},
U2:function U2(d,e,f,g){var _=this
_.r=d
_.x=e
_.c=_.z=_.y=$
_.d=f
_.a=g},
aju:function aju(d){this.a=d},
ajv:function ajv(d){this.a=d},
ajr:function ajr(d){this.a=d},
ajk:function ajk(d){this.a=d},
ajh:function ajh(d){this.a=d},
ajl:function ajl(){},
ajm:function ajm(){},
ajn:function ajn(d){this.a=d},
ajo:function ajo(d,e){this.a=d
this.b=e},
ajp:function ajp(d,e){this.a=d
this.b=e},
ajg:function ajg(d){this.a=d},
ajq:function ajq(d){this.a=d},
ajf:function ajf(){},
ajs:function ajs(){},
ajt:function ajt(d){this.a=d},
aji:function aji(d){this.a=d},
ajj:function ajj(){},
xr:function xr(d,e){this.c=d
this.a=e},
alG:function alG(d){this.a=d},
m9:function m9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7b(){return $.lp().uJ("assets/TestnetDerivativeTokenV2.json").au(0,new B.aCp(),x.N).au(0,new B.aCq(),x.m)},
b7c(d){return $.lp().uJ("assets/TestnetDerivativeTokenV2.json").au(0,new B.aCn(),x.N).au(0,new B.aCo(d),x.m)},
aCp:function aCp(){},
aCq:function aCq(){},
aCn:function aCn(){},
aCo:function aCo(d){this.a=d},
aHE(d){var w=0,v=A.W(x.m),u
var $async$aHE=A.R(function(e,f){if(e===1)return A.T(f,v)
while(true)switch(w){case 0:u=$.lp().uJ("assets/IERC721MetadataUpgradeable.json").au(0,new B.aCl(),x.N).au(0,new B.aCm(d),x.m)
w=1
break
case 1:return A.U(u,v)}})
return A.V($async$aHE,v)},
aDw(d){var w=0,v=A.W(x.z),u,t,s
var $async$aDw=A.R(function(e,f){if(e===1)return A.T(f,v)
while(true)switch(w){case 0:$.KZ().ax(C.r,"readNFTData executed",null,null)
t=M
s=J
w=3
return A.a2(d,$async$aDw)
case 3:u=t.KR(s.b4(f))
w=1
break
case 1:return A.U(u,v)}})
return A.V($async$aDw,v)},
aCl:function aCl(){},
aCm:function aCm(d){this.a=d},
as6:function as6(d){this.a=d},
b2I(d){var w
if(d===0)return $.iA()
if(d===1)return $.KX()
if(d===2)return $.aSC()
if(Math.abs(d)<4294967296)return A.Hj(C.e.f2(d))
w=B.b2H(d)
return w},
b2H(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw A.c(A.bl("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.iA()
w=$.aSA()
for(v=0;v<8;++v)w[v]=0
A.j_(w.buffer,0,null).setFloat64(0,d,!0)
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
b7Y(d){var w,v=C.b.e8(d),u=A.Vk(v,null)
if(u==null)u=A.alE(v)
if(u!=null)return u
w=A.bG(d,null,null)
throw A.c(w)}},C,I,O,A,D,P,E,F,Q,K,R,J,S,G,T,H,U,L,V,M,N,W
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[10],B)
C=c[2]
I=c[28]
O=c[70]
A=c[0]
D=c[74]
P=c[51]
E=c[50]
F=c[33]
Q=c[40]
K=c[32]
R=c[52]
J=c[1]
S=c[30]
G=c[75]
T=c[16]
H=c[60]
U=c[38]
L=c[48]
V=c[25]
M=c[26]
N=c[42]
W=c[22]
B.rk.prototype={
aN(){return new B.a_a(C.o)}}
B.a_a.prototype={
aV(){this.bB()},
p(d){this.by(0)},
M(d,e){var w=null,v=I.aLG(w,O.cN,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.N(e).E.c,"Enter a address that you want to send",w,w,w,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=A.N(e),t=x.p
return A.jf(D.FC,A.a([A.fm(new A.ax(P.e7,A.hV(A.d7(A.a([new I.l3(v,E.cq,u.E.c,!0,E.co,E.cp,E.cW,new B.auS(this),w),A.iU(A.ap("Create",w,w,w,A.N(e).E.c,w,w),w,w,w,new B.auT(this),w,w)],t),C.a3,C.jW,C.J),C.m,w,w),w),200,400)],t),C.aQ,w,w)}}
B.U2.prototype={
aV(){var w=this,v=B.aHE(w.x),u=x.z,t=v.au(0,new B.aju(w),u)
A.dz(w.y,"nftData")
w.y=t
u=v.au(0,new B.ajv(w),u)
A.dz(w.z,"ownerName")
w.z=u
w.wi()},
M(d,e){var w,v,u,t,s=this,r=null,q=A.kx(A.a([A.b(s.y,"nftData"),A.b(s.z,"ownerName")],x.T),x.z),p=x.j
p=A.hq(F.ln(new B.ajr(s),r,p),q,p)
q=A.ap("Derivative Token Logs",r,r,r,A.N(e).E.a,C.D,r)
w=0.1*e.a0(x.w).f.a.a
v=x.t
u=$.aIO().au(0,new B.ajs(),v)
t=x.p
return new Q.j2(r,A.a([A.h2(A.h1(A.a([D.a4P,p,new A.ax(D.OE,q,r),new A.ax(new A.as(w,0,w,0),A.hq(F.ln(new B.ajt(s),r,v),u,v),r),D.a4Q],t),!0,!0,!0))],t),r)}}
B.xr.prototype={
M(d,e){var w=x.S,v=A.a([D.a51.M(0,e)],w),u=this.c
C.c.N(v,u.length===0?A.a([D.a52.M(0,e)],w):A.a([],w))
C.c.N(v,new A.ad(u,new B.alG(e),A.aa(u).h("ad<1,d9>")))
return K.ara(null,v,null,D.Pa,R.hW)}}
B.m9.prototype={
M(d,e){var w=this,v=null,u=w.d?C.jZ:C.m
return new K.d9(new A.ce(u,v,v,v,v,v,C.O),A.a([A.fm(A.lv(A.ap(w.a,v,v,v,A.N(e).E.b,C.D,v),v,v),50,v),A.ap(w.b,v,v,v,A.N(e).E.b,C.D,v),A.ap(w.c,v,v,v,A.N(e).E.b,C.D,v)],x.p))}}
B.as6.prototype={
j(d){var w,v=null,u=this.a,t=J.l(u),s=t.gn(u)
s="TransactionOverride: value "+A.d(s==null?v:A.uL(J.b4(s),v))+" with gas limit "
w=t.gXS(u)
s=s+A.d(w==null?v:A.uL(J.b4(w),v))+" and gas price "
u=t.gXT(u)
return s+A.d(u==null?v:A.uL(J.b4(u),v))}}
var z=a.updateTypes(["~(iS)","rk(a3)","xr(a3,cd<p<dL>>)","m9(dL)","d9(m9)"])
B.auS.prototype={
$1(d){var w=this.a
w.aB(new B.auR(w,d))},
$S:32}
B.auR.prototype={
$0(){this.a.d=this.b},
$S:0}
B.auT.prototype={
$0(){B.b7c(new A.xX(J.aWL($.hS().c.a),x.v)).au(0,new B.auQ(this.a),x.l)},
$S:0}
B.auQ.prototype={
$1(d){var w,v,u=this.a,t=u.d
u=u.a
w=u.c
u=u.d
v=B.b2I(6e4)
v=v==null?null:ethers.BigNumber.from(v.j(0))
return d.w5(0,"safeMint",[t,1,w,u],new B.as6({value:null,gasLimit:v,gasPrice:null,maxFeePerGas:null,maxPriorityFeePerGas:null,nonce:null}))},
$S:455}
B.aju.prototype={
$1(d){return B.aDw(d.eQ(0,"tokenURI",[this.a.r],x.z))},
$S:82}
B.ajv.prototype={
$1(d){return d.eQ(0,"ownerOf",[this.a.r],x.z)},
$S:82}
B.ajr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="image",h=this.a
A.b(h.c,"windowLogger").ax(C.r,J.b4(e.gcO()),j,j)
w=J.oF(J.b4(J.a_(J.a_(e.gcO(),0),i)),"ipfs")?C.b.Z("https://cloudflare-ipfs.com/ipfs/",C.c.gJ(J.aEm(J.b4(J.a_(J.a_(e.gcO(),0),i)),"/"))):J.b4(J.a_(J.a_(e.gcO(),0),i))
v=x.w
u=0.1*d.a0(v).f.a.a
v=d.a0(v).f
v=A.bw(j,A.hV(S.aFn(w,j,j),C.m,j,j),C.l,j,new A.au(0.25*v.a.a,1/0,0,1/0),j,j,j,j,j,j,j,j)
t=A.N(d).E.d
t=A.iU(A.ap("Refresh",j,j,j,t==null?j:t.cQ(C.m),j,j),G.fa,j,j,new B.ajk(h),j,j)
s=A.ap(J.b4(J.a_(J.a_(e.gcO(),0),"name")),j,j,j,A.N(d).E.a,j,j)
r=A.ap(C.b.Z("Owner: ",J.b4(J.a_(e.gcO(),1))),j,j,j,A.N(d).E.d,j,j)
q=J.b4(J.a_(J.a_(e.gcO(),0),"external_url"))
q=T.aLZ(new B.ajl(),A.N(d).E.d,q)
p=A.ap("Description",j,j,j,A.N(d).E.b,j,j)
o=A.ap(J.b4(J.a_(J.a_(e.gcO(),0),"description")),j,j,j,A.N(d).E.c,j,j)
n=x.p
m=A.a([A.ap("Properties",j,j,j,A.N(d).E.b,j,j)],n)
l=J.a_(J.a_(e.gcO(),0),"attributes")
if(l==null)l=[]
k=x.z
l=A.ck(l,!0,k)
C.c.N(m,new A.ad(l,new B.ajm(),A.aa(l).h("ad<1,i>")))
m=A.hV(new A.ax(H.at,A.d7(A.a([new A.dW(C.iv,j,j,t,j),s,D.zC,r,D.zD,q,D.a4R,p,D.zD,o,D.a4S,A.bw(j,A.d7(m,C.ao,C.H,C.J),C.l,C.m,j,j,j,j,j,j,j,j,j)],n),C.ao,C.H,C.J),j),C.m,j,j)
o=$.aIO().au(0,new B.ajn(h),k)
return new A.ax(new A.as(u,0,u,0),U.yW(L.E,A.a([v,m,A.hV(new A.ax(H.at,A.d7(A.a([A.hq(F.ln(new B.ajo(h,d),j,k),o,k),D.a4T,A.iU(D.ab7,G.fa,50,j,new B.ajp(h,d),j,j),D.zC,A.iU(D.ab_,G.fa,50,j,new B.ajq(d),j,j)],n),C.ao,C.H,C.J),j),C.m,j,j)],n),L.kX,C.a8),j)},
$S:457}
B.ajk.prototype={
$0(){A.u8().au(0,new B.ajh(this.a),x.y)
A.fr($.qH().gpT().b)},
$S:0}
B.ajh.prototype={
$1(d){var w,v=this.a
v=v.x+"/"+v.r
w="flutter."+v
J.qL(d.a,v)
return $.aDW().A(0,w)},
$S:458}
B.ajl.prototype={
$1(d){return V.KO(d.b)},
$S:z+0}
B.ajm.prototype={
$1(d){var w=null,v=J.ar(d)
return A.hV(A.ap(J.L2(J.L2(v.i(d,"trait_type")," : "),v.i(d,"value")),w,w,w,w,w,w),w,w,w)},
$S:459}
B.ajn.prototype={
$1(d){var w=this.a
return d.eQ(0,"getAmount",[w.x,B.b7Y(w.r)],x.z)},
$S:82}
B.ajo.prototype={
$2(d,e){var w=null,v=x.A
A.b(this.a.c,"windowLogger").ax(C.r,"derivative token:"+J.b4(J.aKa(v.a(e.gcO()))),w,w)
return A.ap("Derivative Token Created:"+J.b4(J.aKa(v.a(e.gcO()))),w,w,w,A.N(this.b).E.b,w,w)},
$S:460}
B.ajp.prototype={
$0(){var w=$.WZ
if(w==null)w=this.b
A.aHW(C.P,new B.ajg(this.a),w,x.z)},
$S:0}
B.ajg.prototype={
$1(d){var w=this.a
return new B.rk(w.x,w.r,null)},
$S:z+1}
B.ajq.prototype={
$0(){var w=$.WZ
if(w==null)w=this.a
A.aHW(C.P,new B.ajf(),w,x.z)},
$S:0}
B.ajf.prototype={
$1(d){var w=null
return A.jf(C.Y,A.a([A.bw(w,A.ap("Comming Soon",w,w,w,A.N(d).E.a,w,w),C.l,C.m,w,w,w,200,w,w,w,w,400)],x.p),C.aQ,w,w)},
$S:461}
B.ajs.prototype={
$1(d){return d.aoH(d.J0("TransferSingle"))},
$S:172}
B.ajt.prototype={
$2(d,e){var w,v,u,t=null,s="windowLogger",r=this.a
A.b(r.c,s).ax(C.r,e.gcO(),t,t)
w=ethers.utils.solidityKeccak256(A.a(["address","string","uint256"],x.s),[r.x,"/",r.r])
v=ethers.utils.formatEther(w)
u=A.de(v,".","")
A.b(r.c,s).ax(C.r,u,t,t)
A.b(r.c,s).ax(C.r,"HEX: "+w,t,t)
A.b(r.c,s).ax(C.r,"id: "+u,t,t)
J.aK0(e.gcO(),new B.aji(u))
r=x.u
return new B.xr(A.am(J.f8(e.gcO(),new B.ajj(),r),!0,r),t)},
$S:z+2}
B.aji.prototype={
$1(d){return!J.e(J.b4(J.a_(J.aWh(d.a),3)),this.a)},
$S:463}
B.ajj.prototype={
$1(d){var w=d.a,v=J.l(w)
return new B.m9(J.aXD(J.b4(J.a_(v.gl4(w),2)),0,24)+"...",J.b4(J.a_(v.gl4(w),4)),C.e.j(0),!1)},
$S:z+3}
B.alG.prototype={
$1(d){return d.M(0,this.a)},
$S:z+4}
B.aCp.prototype={
$1(d){return C.S.i_(0,J.a_(C.S.cM(0,d),"abi"))},
$S:13}
B.aCq.prototype={
$1(d){return new A.dI(new ethers.Contract(y.d,new A.p7(new ethers.utils.Interface(d)).lm(0,C.db),$.aIY().a))},
$S:67}
B.aCn.prototype={
$1(d){return C.S.i_(0,J.a_(C.S.cM(0,d),"abi"))},
$S:13}
B.aCo.prototype={
$1(d){return new A.dI(new ethers.Contract(y.d,new A.p7(new ethers.utils.Interface(d)).lm(0,C.db),this.a.a))},
$S:67}
B.aCl.prototype={
$1(d){return C.S.i_(0,J.a_(C.S.cM(0,d),"abi"))},
$S:13}
B.aCm.prototype={
$1(d){return new A.dI(new ethers.Contract(this.a,new A.p7(new ethers.utils.Interface(d)).lm(0,C.db),M.aLS(C.c.gJ($.hS().b.b)).a))},
$S:67};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.rk,A.Z)
w(B.a_a,A.ao)
v(A.bE,[B.auS,B.auQ,B.aju,B.ajv,B.ajh,B.ajl,B.ajm,B.ajn,B.ajg,B.ajf,B.ajs,B.aji,B.ajj,B.alG,B.aCp,B.aCq,B.aCn,B.aCo,B.aCl,B.aCm])
v(A.e8,[B.auR,B.auT,B.ajk,B.ajp,B.ajq])
w(B.U2,N.fG)
v(A.fv,[B.ajr,B.ajo,B.ajt])
w(B.xr,A.aK)
w(B.m9,A.x)
w(B.as6,A.D7)})()
A.ci(b.typeUniverse,JSON.parse('{"rk":{"Z":[],"i":[]},"a_a":{"ao":["rk"]},"U2":{"Z":[],"i":[]},"xr":{"aK":[],"i":[]}}'))
var y={d:"0x9b049dE07099f1FA7B946B65d5D6fb69a5528a22"}
var x=(function rtii(){var w=A.u
return{A:w("qY"),m:w("dI"),T:w("k<O<@>>"),s:w("k<f>"),S:w("k<d9>"),p:w("k<i>"),t:w("p<dL>"),j:w("p<@>"),w:w("f2"),u:w("m9"),v:w("xX<qw>"),N:w("f"),l:w("uv"),y:w("C"),z:w("@")}})();(function constants(){D.FC=new A.hj(0,0)
D.OE=new A.as(0,100,0,30)
D.Pa=new W.Cz(100)
D.OL=new A.as(0,5,0,0)
D.zD=new A.ax(D.OL,null,null)
D.OF=new A.as(0,10,0,0)
D.zC=new A.ax(D.OF,null,null)
D.OI=new A.as(0,15,0,0)
D.a4R=new A.ax(D.OI,null,null)
D.OJ=new A.as(0,20,0,0)
D.a4T=new A.ax(D.OJ,null,null)
D.OG=new A.as(0,10,0,10)
D.a4S=new A.ax(D.OG,null,null)
D.a4P=new A.ax(H.at,null,null)
D.OV=new A.as(200,200,200,200)
D.a4Q=new A.ax(D.OV,null,null)
D.a51=new B.m9("Merchant Name","Dericvate Takens Own","Products Created",!0)
D.a52=new B.m9("","Empty","",!1)
D.ab_=new A.cB("Apply for producing this Derivative",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab7=new A.cB("Create Derivative Token",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bbA","aSC",()=>A.Hj(2))
w($,"bbw","aSA",()=>A.aMt(8))
w($,"bdW","aIO",()=>B.b7b())})()}
$__dart_deferred_initializers__["zGDkiKsFe1vCRiBWQ9ODOCKfnzk="] = $__dart_deferred_initializers__.current
