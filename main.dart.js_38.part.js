self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={rk:function rk(d,e,f){this.c=d
this.d=e
this.a=f},a_8:function a_8(d){var _=this
_.d=""
_.a=null
_.b=d
_.c=null},auR:function auR(d){this.a=d},auQ:function auQ(d,e){this.a=d
this.b=e},auS:function auS(d){this.a=d},auP:function auP(d){this.a=d},
b03(d,e){var w=null,v=new B.U1(e,d,M.lb(w,w),w)
v.is(w,w,w,w,w)
return v},
U1:function U1(d,e,f,g){var _=this
_.r=d
_.x=e
_.c=_.z=_.y=$
_.d=f
_.a=g},
ajs:function ajs(d){this.a=d},
ajt:function ajt(d){this.a=d},
ajp:function ajp(d){this.a=d},
aji:function aji(d){this.a=d},
ajf:function ajf(d){this.a=d},
ajj:function ajj(){},
ajk:function ajk(){},
ajl:function ajl(d){this.a=d},
ajm:function ajm(d,e){this.a=d
this.b=e},
ajn:function ajn(d,e){this.a=d
this.b=e},
aje:function aje(d){this.a=d},
ajo:function ajo(){},
ajq:function ajq(){},
ajr:function ajr(d){this.a=d},
ajg:function ajg(d){this.a=d},
ajh:function ajh(){},
xq:function xq(d,e){this.c=d
this.a=e},
alE:function alE(d){this.a=d},
m9:function m9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7a(){return $.lp().uJ("assets/TestnetDerivativeTokenV2.json").au(0,new B.aCo(),x.N).au(0,new B.aCp(),x.m)},
b7b(d){return $.lp().uJ("assets/TestnetDerivativeTokenV2.json").au(0,new B.aCm(),x.N).au(0,new B.aCn(d),x.m)},
aCo:function aCo(){},
aCp:function aCp(){},
aCm:function aCm(){},
aCn:function aCn(d){this.a=d},
aHD(d){var w=0,v=A.W(x.m),u
var $async$aHD=A.R(function(e,f){if(e===1)return A.T(f,v)
while(true)switch(w){case 0:u=$.lp().uJ("assets/IERC721MetadataUpgradeable.json").au(0,new B.aCk(),x.N).au(0,new B.aCl(d),x.m)
w=1
break
case 1:return A.U(u,v)}})
return A.V($async$aHD,v)},
aDv(d){var w=0,v=A.W(x.z),u,t,s
var $async$aDv=A.R(function(e,f){if(e===1)return A.T(f,v)
while(true)switch(w){case 0:$.KY().ax(C.r,"readNFTData executed",null,null)
t=X
s=J
w=3
return A.a2(d,$async$aDv)
case 3:u=t.a6x(s.b4(f))
w=1
break
case 1:return A.U(u,v)}})
return A.V($async$aDv,v)},
aCk:function aCk(){},
aCl:function aCl(d){this.a=d},
as5:function as5(d){this.a=d},
b2H(d){var w
if(d===0)return $.iA()
if(d===1)return $.KW()
if(d===2)return $.aSB()
if(Math.abs(d)<4294967296)return A.Hj(C.e.f2(d))
w=B.b2G(d)
return w},
b2G(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw A.c(A.bl("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.iA()
w=$.aSz()
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
b7X(d){var w,v=C.b.e8(d),u=A.Vj(v,null)
if(u==null)u=A.alC(v)
if(u!=null)return u
w=A.bG(d,null,null)
throw A.c(w)}},C,I,N,A,D,O,E,F,P,K,Q,J,R,G,S,H,T,L,U,V,M,W,X
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[10],B)
C=c[2]
I=c[29]
N=c[71]
A=c[0]
D=c[75]
O=c[52]
E=c[51]
F=c[34]
P=c[41]
K=c[33]
Q=c[53]
J=c[1]
R=c[31]
G=c[76]
S=c[16]
H=c[61]
T=c[39]
L=c[49]
U=c[26]
V=c[27]
M=c[43]
W=c[23]
X=c[22]
B.rk.prototype={
aN(){return new B.a_8(C.o)}}
B.a_8.prototype={
aV(){this.bB()},
p(d){this.by(0)},
M(d,e){var w=null,v=I.aLF(w,N.cN,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.N(e).E.c,"Enter a address that you want to send",w,w,w,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=A.N(e),t=x.p
return A.jZ(D.FB,A.a([A.fm(new A.ax(O.e7,A.hV(A.d7(A.a([new I.l3(v,E.cq,u.E.c,!0,E.co,E.cp,E.cW,new B.auR(this),w),A.iU(A.aq("Create",w,w,w,A.N(e).E.c,w,w),w,w,w,new B.auS(this),w,w)],t),C.a3,C.jW,C.J),C.n,w,w),w),200,400)],t),C.aY,w,w)}}
B.U1.prototype={
aV(){var w=this,v=B.aHD(w.x),u=x.z,t=v.au(0,new B.ajs(w),u)
A.dz(w.y,"nftData")
w.y=t
u=v.au(0,new B.ajt(w),u)
A.dz(w.z,"ownerName")
w.z=u
w.wi()},
M(d,e){var w,v,u,t,s=this,r=null,q=A.kx(A.a([A.b(s.y,"nftData"),A.b(s.z,"ownerName")],x.T),x.z),p=x.j
p=A.hq(F.ln(new B.ajp(s),r,p),q,p)
q=A.aq("Derivative Token Logs",r,r,r,A.N(e).E.a,C.D,r)
w=0.1*e.a0(x.w).f.a.a
v=x.t
u=$.aIN().au(0,new B.ajq(),v)
t=x.p
return new P.j2(r,A.a([A.h2(A.h1(A.a([D.a4P,p,new A.ax(D.OD,q,r),new A.ax(new A.as(w,0,w,0),A.hq(F.ln(new B.ajr(s),r,v),u,v),r),D.a4Q],t),!0,!0,!0))],t),r)}}
B.xq.prototype={
M(d,e){var w=x.S,v=A.a([D.a51.M(0,e)],w),u=this.c
C.c.N(v,u.length===0?A.a([D.a52.M(0,e)],w):A.a([],w))
C.c.N(v,new A.ad(u,new B.alE(e),A.aa(u).h("ad<1,d9>")))
return K.ar9(null,v,null,D.P9,Q.hW)}}
B.m9.prototype={
M(d,e){var w=this,v=null,u=w.d?C.jZ:C.n
return new K.d9(new A.cf(u,v,v,v,v,v,C.O),A.a([A.fm(A.lv(A.aq(w.a,v,v,v,A.N(e).E.b,C.D,v),v,v),50,v),A.aq(w.b,v,v,v,A.N(e).E.b,C.D,v),A.aq(w.c,v,v,v,A.N(e).E.b,C.D,v)],x.p))}}
B.as5.prototype={
j(d){var w,v=null,u=this.a,t=J.l(u),s=t.gn(u)
s="TransactionOverride: value "+A.d(s==null?v:A.uK(J.b4(s),v))+" with gas limit "
w=t.gXS(u)
s=s+A.d(w==null?v:A.uK(J.b4(w),v))+" and gas price "
u=t.gXT(u)
return s+A.d(u==null?v:A.uK(J.b4(u),v))}}
var z=a.updateTypes(["~(iS)","rk(a3)","xq(a3,ce<p<dL>>)","m9(dL)","d9(m9)"])
B.auR.prototype={
$1(d){var w=this.a
w.aB(new B.auQ(w,d))},
$S:32}
B.auQ.prototype={
$0(){this.a.d=this.b},
$S:0}
B.auS.prototype={
$0(){B.b7b(new A.xW(J.aWK($.hS().c.a),x.v)).au(0,new B.auP(this.a),x.l)},
$S:0}
B.auP.prototype={
$1(d){var w,v,u=this.a,t=u.d
u=u.a
w=u.c
u=u.d
v=B.b2H(6e4)
v=v==null?null:ethers.BigNumber.from(v.j(0))
return d.w5(0,"safeMint",[t,1,w,u],new B.as5({value:null,gasLimit:v,gasPrice:null,maxFeePerGas:null,maxPriorityFeePerGas:null,nonce:null}))},
$S:455}
B.ajs.prototype={
$1(d){return B.aDv(d.eQ(0,"tokenURI",[this.a.r],x.z))},
$S:94}
B.ajt.prototype={
$1(d){return d.eQ(0,"ownerOf",[this.a.r],x.z)},
$S:94}
B.ajp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="image",h=this.a
A.b(h.c,"windowLogger").ax(C.r,J.b4(e.gd4()),j,j)
w=J.oF(J.b4(J.a_(J.a_(e.gd4(),0),i)),"ipfs")?C.b.Z("https://cloudflare-ipfs.com/ipfs/",C.c.gJ(J.aEl(J.b4(J.a_(J.a_(e.gd4(),0),i)),"/"))):J.b4(J.a_(J.a_(e.gd4(),0),i))
v=x.w
u=0.1*d.a0(v).f.a.a
v=d.a0(v).f
v=A.bA(j,A.hV(R.aFm(w,j,j),C.n,j,j),C.l,j,new A.au(0.25*v.a.a,1/0,0,1/0),j,j,j,j,j,j,j,j)
t=A.N(d).E.d
t=A.iU(A.aq("Refresh",j,j,j,t==null?j:t.cP(C.n),j,j),G.fa,j,j,new B.aji(h),j,j)
s=A.aq(J.b4(J.a_(J.a_(e.gd4(),0),"name")),j,j,j,A.N(d).E.a,j,j)
r=A.aq(C.b.Z("Owner: ",J.b4(J.a_(e.gd4(),1))),j,j,j,A.N(d).E.d,j,j)
q=J.b4(J.a_(J.a_(e.gd4(),0),"external_url"))
q=S.aLY(new B.ajj(),A.N(d).E.d,q)
p=A.aq("Description",j,j,j,A.N(d).E.b,j,j)
o=A.aq(J.b4(J.a_(J.a_(e.gd4(),0),"description")),j,j,j,A.N(d).E.c,j,j)
n=x.p
m=A.a([A.aq("Properties",j,j,j,A.N(d).E.b,j,j)],n)
l=x.z
k=A.ck(J.a_(J.a_(e.gd4(),0),"attributes"),!0,l)
C.c.N(m,new A.ad(k,new B.ajk(),A.aa(k).h("ad<1,i>")))
m=A.hV(new A.ax(H.at,A.d7(A.a([new A.dW(C.iv,j,j,t,j),s,D.zB,r,D.zC,q,D.a4R,p,D.zC,o,D.a4S,A.bA(j,A.d7(m,C.ao,C.H,C.J),C.l,C.n,j,j,j,j,j,j,j,j,j)],n),C.ao,C.H,C.J),j),C.n,j,j)
o=$.aIN().au(0,new B.ajl(h),l)
return new A.ax(new A.as(u,0,u,0),T.yV(L.E,A.a([v,m,A.hV(new A.ax(H.at,A.d7(A.a([A.hq(F.ln(new B.ajm(h,d),j,l),o,l),D.a4T,A.iU(D.ab7,G.fa,50,j,new B.ajn(h,d),j,j),D.zB,A.iU(D.ab_,G.fa,50,j,new B.ajo(),j,j)],n),C.ao,C.H,C.J),j),C.n,j,j)],n),L.kX,C.a8),j)},
$S:457}
B.aji.prototype={
$0(){A.u8().au(0,new B.ajf(this.a),x.y)
A.fr($.qH().gpT().b)},
$S:0}
B.ajf.prototype={
$1(d){var w,v=this.a
v=v.x+"/"+v.r
w="flutter."+v
J.qL(d.a,v)
return $.aDV().A(0,w)},
$S:458}
B.ajj.prototype={
$1(d){return U.KO(d.b)},
$S:z+0}
B.ajk.prototype={
$1(d){var w=null,v=J.ar(d)
return A.hV(A.aq(J.L1(J.L1(v.i(d,"trait_type")," : "),v.i(d,"value")),w,w,w,w,w,w),w,w,w)},
$S:459}
B.ajl.prototype={
$1(d){var w=this.a
return d.eQ(0,"getAmount",[w.x,B.b7X(w.r)],x.z)},
$S:94}
B.ajm.prototype={
$2(d,e){var w=null,v=x.A
A.b(this.a.c,"windowLogger").ax(C.r,"derivative token:"+J.b4(J.aK9(v.a(e.gd4()))),w,w)
return A.aq("Derivative Token Created:"+J.b4(J.aK9(v.a(e.gd4()))),w,w,w,A.N(this.b).E.b,w,w)},
$S:460}
B.ajn.prototype={
$0(){var w=$.ap1
if(w==null)w=this.b
A.aRa(C.S,new B.aje(this.a),w,x.z)},
$S:0}
B.aje.prototype={
$1(d){var w=this.a
return new B.rk(w.x,w.r,null)},
$S:z+1}
B.ajo.prototype={
$0(){},
$S:0}
B.ajq.prototype={
$1(d){return d.aoH(d.J0("TransferSingle"))},
$S:164}
B.ajr.prototype={
$2(d,e){var w,v,u,t=null,s="windowLogger",r=this.a
A.b(r.c,s).ax(C.r,e.gd4(),t,t)
w=ethers.utils.solidityKeccak256(A.a(["address","string","uint256"],x.s),[r.x,"/",r.r])
v=ethers.utils.formatEther(w)
u=A.de(v,".","")
A.b(r.c,s).ax(C.r,u,t,t)
A.b(r.c,s).ax(C.r,"HEX: "+w,t,t)
A.b(r.c,s).ax(C.r,"id: "+u,t,t)
J.aK_(e.gd4(),new B.ajg(u))
r=x.u
return new B.xq(A.am(J.f8(e.gd4(),new B.ajh(),r),!0,r),t)},
$S:z+2}
B.ajg.prototype={
$1(d){return!J.e(J.b4(J.a_(J.aWg(d.a),3)),this.a)},
$S:462}
B.ajh.prototype={
$1(d){var w=d.a,v=J.l(w)
return new B.m9(J.aXC(J.b4(J.a_(v.gl5(w),2)),0,24)+"...",J.b4(J.a_(v.gl5(w),4)),C.e.j(0),!1)},
$S:z+3}
B.alE.prototype={
$1(d){return d.M(0,this.a)},
$S:z+4}
B.aCo.prototype={
$1(d){return C.P.i_(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCp.prototype={
$1(d){return new A.dI(new ethers.Contract(y.d,new A.p7(new ethers.utils.Interface(d)).ln(0,C.db),$.aIX().a))},
$S:67}
B.aCm.prototype={
$1(d){return C.P.i_(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCn.prototype={
$1(d){return new A.dI(new ethers.Contract(y.d,new A.p7(new ethers.utils.Interface(d)).ln(0,C.db),this.a.a))},
$S:67}
B.aCk.prototype={
$1(d){return C.P.i_(0,J.a_(C.P.cJ(0,d),"abi"))},
$S:13}
B.aCl.prototype={
$1(d){return new A.dI(new ethers.Contract(this.a,new A.p7(new ethers.utils.Interface(d)).ln(0,C.db),V.aLR(C.c.gJ($.hS().b.b)).a))},
$S:67};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.rk,A.Z)
w(B.a_8,A.ao)
v(A.bE,[B.auR,B.auP,B.ajs,B.ajt,B.ajf,B.ajj,B.ajk,B.ajl,B.aje,B.ajq,B.ajg,B.ajh,B.alE,B.aCo,B.aCp,B.aCm,B.aCn,B.aCk,B.aCl])
v(A.e8,[B.auQ,B.auS,B.aji,B.ajn,B.ajo])
w(B.U1,M.fG)
v(A.fv,[B.ajp,B.ajm,B.ajr])
w(B.xq,A.aK)
w(B.m9,A.x)
w(B.as5,A.D6)})()
A.cc(b.typeUniverse,JSON.parse('{"rk":{"Z":[],"i":[]},"a_8":{"ao":["rk"]},"U1":{"Z":[],"i":[]},"xq":{"aK":[],"i":[]}}'))
var y={d:"0x9b049dE07099f1FA7B946B65d5D6fb69a5528a22"}
var x=(function rtii(){var w=A.u
return{A:w("qY"),m:w("dI"),T:w("k<O<@>>"),s:w("k<f>"),S:w("k<d9>"),p:w("k<i>"),t:w("p<dL>"),j:w("p<@>"),w:w("f2"),u:w("m9"),v:w("xW<qw>"),N:w("f"),l:w("uu"),y:w("C"),z:w("@")}})();(function constants(){D.FB=new A.hj(0,0)
D.OD=new A.as(0,100,0,30)
D.P9=new W.Cy(100)
D.OK=new A.as(0,5,0,0)
D.zC=new A.ax(D.OK,null,null)
D.OE=new A.as(0,10,0,0)
D.zB=new A.ax(D.OE,null,null)
D.OH=new A.as(0,15,0,0)
D.a4R=new A.ax(D.OH,null,null)
D.OI=new A.as(0,20,0,0)
D.a4T=new A.ax(D.OI,null,null)
D.OF=new A.as(0,10,0,10)
D.a4S=new A.ax(D.OF,null,null)
D.a4P=new A.ax(H.at,null,null)
D.OU=new A.as(200,200,200,200)
D.a4Q=new A.ax(D.OU,null,null)
D.a51=new B.m9("Merchant Name","Dericvate Takens Own","Products Created",!0)
D.a52=new B.m9("","Empty","",!1)
D.ab_=new A.cB("Apply for producing this Derivative",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ab7=new A.cB("Create Derivative Token",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bbz","aSB",()=>A.Hj(2))
w($,"bbv","aSz",()=>A.aMs(8))
w($,"bdV","aIN",()=>B.b7a())})()}
$__dart_deferred_initializers__["8e/h3YIGz+WMiKrYMyyOF3rlhV4="] = $__dart_deferred_initializers__.current
