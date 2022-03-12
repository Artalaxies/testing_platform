self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
b6Z(){return $.lt().uU("assets/TestnetDerivativeTokenV2.json").at(0,new B.aCE(),x.N).at(0,new B.aCF(),x.m)},
b7_(d){return $.lt().uU("assets/TestnetDerivativeTokenV2.json").at(0,new B.aCC(),x.N).at(0,new B.aCD(d),x.m)},
aCE:function aCE(){},
aCF:function aCF(){},
aCC:function aCC(){},
aCD:function aCD(d){this.a=d},
aHq(d){var w=0,v=A.X(x.m),u
var $async$aHq=A.Y(function(e,f){if(e===1)return A.U(f,v)
while(true)switch(w){case 0:u=$.lt().uU("assets/IERC721MetadataUpgradeable.json").at(0,new B.aCA(),x.N).at(0,new B.aCB(d),x.m)
w=1
break
case 1:return A.V(u,v)}})
return A.W($async$aHq,v)},
aDA(d){var w=0,v=A.X(x.z),u,t,s
var $async$aDA=A.Y(function(e,f){if(e===1)return A.U(f,v)
while(true)switch(w){case 0:$.Bh().av(C.r,"readNFTData executed",null,null)
t=L
s=J
w=3
return A.a1(d,$async$aDA)
case 3:u=t.LT(s.b1(f))
w=1
break
case 1:return A.V(u,v)}})
return A.W($async$aDA,v)},
aCA:function aCA(){},
aCB:function aCB(d){this.a=d},
aso:function aso(d){this.a=d},
rB:function rB(d,e,f){this.c=d
this.d=e
this.a=f},
a_T:function a_T(d){var _=this
_.d=""
_.a=null
_.b=d
_.c=null},
av0:function av0(d){this.a=d},
av_:function av_(d,e){this.a=d
this.b=e},
av1:function av1(d){this.a=d},
auZ:function auZ(d){this.a=d},
b_P(d,e){var w=null,v=new B.UX(e,d,N.lg(w,w),w)
v.iy(w,w,w,w,w)
return v},
UX:function UX(d,e,f,g){var _=this
_.r=d
_.x=e
_.c=_.z=_.y=$
_.d=f
_.a=g},
ajG:function ajG(d){this.a=d},
ajH:function ajH(d){this.a=d},
ajD:function ajD(d){this.a=d},
ajw:function ajw(d){this.a=d},
ajt:function ajt(d){this.a=d},
ajx:function ajx(){},
ajy:function ajy(){},
ajz:function ajz(d){this.a=d},
ajA:function ajA(d,e){this.a=d
this.b=e},
ajB:function ajB(d,e){this.a=d
this.b=e},
ajs:function ajs(d){this.a=d},
ajC:function ajC(d){this.a=d},
ajr:function ajr(){},
ajE:function ajE(){},
ajF:function ajF(d){this.a=d},
aju:function aju(d){this.a=d},
ajv:function ajv(){},
xX:function xX(d,e){this.c=d
this.a=e},
alS:function alS(d){this.a=d},
mg:function mg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2s(d){var w
if(d===0)return $.iE()
if(d===1)return $.M_()
if(d===2)return $.aSr()
if(Math.abs(d)<4294967296)return A.Ic(C.e.eZ(d))
w=B.b2r(d)
return w},
b2r(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw A.c(A.bk("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.iE()
w=$.aSp()
for(v=0;v<8;++v)w[v]=0
A.iZ(w.buffer,0,null).setFloat64(0,d,!0)
u=w[7]
t=w[6]
s=(u<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new A.eM(!1,r,4)
if(s<0)p=q.JS(0,-s)
else p=s>0?q.m2(0,s):q
return p},
b7M(d){var w,v=C.b.e4(d),u=A.We(v,null)
if(u==null)u=A.alQ(v)
if(u!=null)return u
w=A.bF(d,null,null)
throw A.c(w)}},J,A,C,I,O,D,P,E,F,Q,K,R,L,S,G,T,H,U,M,V,N,W
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[10],B)
J=c[1]
A=c[0]
C=c[2]
I=c[28]
O=c[70]
D=c[74]
P=c[47]
E=c[54]
F=c[30]
Q=c[40]
K=c[29]
R=c[48]
L=c[26]
S=c[32]
G=c[75]
T=c[17]
H=c[61]
U=c[37]
M=c[43]
V=c[25]
N=c[42]
W=c[23]
B.aso.prototype={
j(d){var w,v=null,u=this.a,t=J.l(u),s=t.gn(u)
s="TransactionOverride: value "+A.d(s==null?v:A.v6(J.b1(s),v))+" with gas limit "
w=t.gY2(u)
s=s+A.d(w==null?v:A.v6(J.b1(w),v))+" and gas price "
u=t.gY3(u)
return s+A.d(u==null?v:A.v6(J.b1(u),v))}}
B.rB.prototype={
aM(){return new B.a_T(C.o)}}
B.a_T.prototype={
aU(){this.bw()},
p(d){this.bp(0)},
M(d,e){var w=null,v=I.aLz(w,O.d3,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.M(e).E.c,"Enter a address that you want to send",w,w,w,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=A.M(e),t=x.p
return A.jh(D.FG,A.a([A.fl(new A.ay(P.ew,A.i1(A.d_(A.a([new I.l9(v,E.cI,u.E.c,!0,E.cG,E.cH,E.di,new B.av0(this),w),A.iV(A.ao("Create",w,w,w,A.M(e).E.c,w,w),w,w,w,new B.av1(this),w,w)],t),C.a5,C.kh,C.I),C.l,w,w),w),200,400)],t),C.b_,w,w)}}
B.UX.prototype={
aU(){var w=this,v=B.aHq(w.x),u=x.z,t=v.at(0,new B.ajG(w),u)
A.dt(w.y,"nftData")
w.y=t
u=v.at(0,new B.ajH(w),u)
A.dt(w.z,"ownerName")
w.z=u
w.wn()},
M(d,e){var w,v,u,t,s=this,r=null,q=A.kC(A.a([A.b(s.y,"nftData"),A.b(s.z,"ownerName")],x.T),x.z),p=x.j
p=A.hs(F.ls(new B.ajD(s),r,p),q,p)
q=A.ao("Derivative Token Logs",r,r,r,A.M(e).E.a,C.C,r)
w=0.1*e.a_(x.w).f.a.a
v=x.t
u=$.aIA().at(0,new B.ajE(),v)
t=x.p
return new Q.j1(r,A.a([A.h1(A.h0(A.a([D.a5_,p,new A.ay(D.OJ,q,r),new A.ay(new A.at(w,0,w,0),A.hs(F.ls(new B.ajF(s),r,v),u,v),r),D.a50],t),!0,!0,!0))],t),r)}}
B.xX.prototype={
M(d,e){var w=x.S,v=A.a([D.a5e.M(0,e)],w),u=this.c
C.c.K(v,u.length===0?A.a([D.a5f.M(0,e)],w):A.a([],w))
C.c.K(v,new A.ag(u,new B.alS(e),A.a6(u).i("ag<1,d3>")))
return K.aru(null,v,null,D.Pg,R.ij)}}
B.mg.prototype={
M(d,e){var w=this,v=null,u=w.d?C.kk:C.l
return new K.d3(new A.c8(u,v,v,v,v,v,C.R),A.a([A.fl(A.lz(A.ao(w.a,v,v,v,A.M(e).E.b,C.C,v),v,v),50,v),A.ao(w.b,v,v,v,A.M(e).E.b,C.C,v),A.ao(w.c,v,v,v,A.M(e).E.b,C.C,v)],x.p))}}
var z=a.updateTypes(["~(iU)","rB(a4)","xX(a4,c7<p<dG>>)","mg(dG)","d3(mg)"])
B.aCE.prototype={
$1(d){return C.T.i9(0,J.a_(C.T.cz(0,d),"abi"))},
$S:12}
B.aCF.prototype={
$1(d){return new A.dE(new ethers.Contract(y.d,new A.pj(new ethers.utils.Interface(d)).lw(0,C.dx),$.aIJ().a))},
$S:52}
B.aCC.prototype={
$1(d){return C.T.i9(0,J.a_(C.T.cz(0,d),"abi"))},
$S:12}
B.aCD.prototype={
$1(d){return new A.dE(new ethers.Contract(y.d,new A.pj(new ethers.utils.Interface(d)).lw(0,C.dx),this.a.a))},
$S:52}
B.aCA.prototype={
$1(d){return C.T.i9(0,J.a_(C.T.cz(0,d),"abi"))},
$S:12}
B.aCB.prototype={
$1(d){return new A.dE(new ethers.Contract(this.a,new A.pj(new ethers.utils.Interface(d)).lw(0,C.dx),L.aLK(C.c.gH($.hX().b.b)).a))},
$S:52}
B.av0.prototype={
$1(d){var w=this.a
w.aC(new B.av_(w,d))},
$S:33}
B.av_.prototype={
$0(){this.a.d=this.b},
$S:0}
B.av1.prototype={
$0(){B.b7_(new A.yt(J.aWB($.hX().c.a),x.v)).at(0,new B.auZ(this.a),x.l)},
$S:0}
B.auZ.prototype={
$1(d){var w,v,u=this.a,t=u.d
u=u.a
w=u.c
u=u.d
v=B.b2s(6e4)
v=v==null?null:ethers.BigNumber.from(v.j(0))
return d.w9(0,"safeMint",[t,1,w,u],new B.aso({value:null,gasLimit:v,gasPrice:null,maxFeePerGas:null,maxPriorityFeePerGas:null,nonce:null}))},
$S:458}
B.ajG.prototype={
$1(d){return B.aDA(d.eM(0,"tokenURI",[this.a.r],x.z))},
$S:70}
B.ajH.prototype={
$1(d){return d.eM(0,"ownerOf",[this.a.r],x.z)},
$S:70}
B.ajD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="image",h=this.a
A.b(h.c,"windowLogger").av(C.r,J.b1(e.gcJ()),j,j)
w=J.oN(J.b1(J.a_(J.a_(e.gcJ(),0),i)),"ipfs")?C.b.Z("https://cloudflare-ipfs.com/ipfs/",C.c.gH(J.aEv(J.b1(J.a_(J.a_(e.gcJ(),0),i)),"/"))):J.b1(J.a_(J.a_(e.gcJ(),0),i))
v=x.w
u=0.1*d.a_(v).f.a.a
v=d.a_(v).f
v=A.bv(j,A.i1(S.aFh(w,j,j),C.l,j,j),C.m,j,new A.av(0.25*v.a.a,1/0,0,1/0),j,j,j,j,j,j,j,j)
t=A.M(d).E.e
t=A.iV(A.ao("Refresh",j,j,j,t==null?j:t.d2(C.l),j,j),G.fz,j,j,new B.ajw(h),j,j)
s=A.ao(J.b1(J.a_(J.a_(e.gcJ(),0),"name")),j,j,j,A.M(d).E.a,j,j)
r=A.ao(C.b.Z("Owner: ",J.b1(J.a_(e.gcJ(),1))),j,j,j,A.M(d).E.e,j,j)
q=J.b1(J.a_(J.a_(e.gcJ(),0),"external_url"))
q=T.aLR(new B.ajx(),A.M(d).E.e,q)
p=A.ao("Description",j,j,j,A.M(d).E.b,j,j)
o=A.ao(J.b1(J.a_(J.a_(e.gcJ(),0),"description")),j,j,j,A.M(d).E.c,j,j)
n=x.p
m=A.a([A.ao("Properties",j,j,j,A.M(d).E.b,j,j)],n)
l=J.a_(J.a_(e.gcJ(),0),"attributes")
if(l==null)l=[]
k=x.z
l=A.eC(l,!0,k)
C.c.K(m,new A.ag(l,new B.ajy(),A.a6(l).i("ag<1,i>")))
m=A.i1(new A.ay(H.aF,A.d_(A.a([new A.dU(C.iR,j,j,t,j),s,D.CW,r,D.CX,q,D.a51,p,D.CX,o,D.a52,A.bv(j,A.d_(m,C.az,C.G,C.I),C.m,C.l,j,j,j,j,j,j,j,j,j)],n),C.az,C.G,C.I),j),C.l,j,j)
o=$.aIA().at(0,new B.ajz(h),k)
return new A.ay(new A.at(u,0,u,0),U.zx(M.D,A.a([v,m,A.i1(new A.ay(H.aF,A.d_(A.a([A.hs(F.ls(new B.ajA(h,d),j,k),o,k),D.a53,A.iV(D.ac4,G.fz,50,j,new B.ajB(h,d),j,j),D.CW,A.iV(D.abX,G.fz,50,j,new B.ajC(d),j,j)],n),C.az,C.G,C.I),j),C.l,j,j)],n),M.ox,C.aa),j)},
$S:460}
B.ajw.prototype={
$0(){A.un().at(0,new B.ajt(this.a),x.y)
A.ft($.qV().gq3().b)},
$S:0}
B.ajt.prototype={
$1(d){var w,v=this.a
v=v.x+"/"+v.r
w="flutter."+v
J.qZ(d.a,v)
return $.aE1().A(0,w)},
$S:461}
B.ajx.prototype={
$1(d){return V.LQ(d.b)},
$S:z+0}
B.ajy.prototype={
$1(d){var w=null,v=J.aq(d)
return A.i1(A.ao(J.M5(J.M5(v.h(d,"trait_type")," : "),v.h(d,"value")),w,w,w,w,w,w),w,w,w)},
$S:462}
B.ajz.prototype={
$1(d){var w=this.a
return d.eM(0,"getAmount",[w.x,B.b7M(w.r)],x.z)},
$S:70}
B.ajA.prototype={
$2(d,e){var w=null,v=x.A
A.b(this.a.c,"windowLogger").av(C.r,"derivative token:"+J.b1(J.aJV(v.a(e.gcJ()))),w,w)
return A.ao("Derivative Token Created:"+J.b1(J.aJV(v.a(e.gcJ()))),w,w,w,A.M(this.b).E.b,w,w)},
$S:463}
B.ajB.prototype={
$0(){var w=$.XT
if(w==null)w=this.b
A.aHK(C.K,new B.ajs(this.a),w,x.z)},
$S:0}
B.ajs.prototype={
$1(d){var w=this.a
return new B.rB(w.x,w.r,null)},
$S:z+1}
B.ajC.prototype={
$0(){var w=$.XT
if(w==null)w=this.a
A.aHK(C.K,new B.ajr(),w,x.z)},
$S:0}
B.ajr.prototype={
$1(d){var w=null
return A.jh(C.a0,A.a([A.bv(w,A.ao("Comming Soon",w,w,w,A.M(d).E.a,w,w),C.m,C.l,w,w,w,200,w,w,w,w,400)],x.p),C.b_,w,w)},
$S:464}
B.ajE.prototype={
$1(d){return d.aoL(d.IP("TransferSingle"))},
$S:110}
B.ajF.prototype={
$2(d,e){var w,v,u,t=null,s="windowLogger",r=this.a
A.b(r.c,s).av(C.r,e.gcJ(),t,t)
w=ethers.utils.solidityKeccak256(A.a(["address","string","uint256"],x.s),[r.x,"/",r.r])
v=ethers.utils.formatEther(w)
u=A.d8(v,".","")
A.b(r.c,s).av(C.r,u,t,t)
A.b(r.c,s).av(C.r,"HEX: "+w,t,t)
A.b(r.c,s).av(C.r,"id: "+u,t,t)
J.aJL(e.gcJ(),new B.aju(u))
r=x.u
return new B.xX(A.ac(J.f6(e.gcJ(),new B.ajv(),r),!0,r),t)},
$S:z+2}
B.aju.prototype={
$1(d){return!J.e(J.b1(J.a_(J.aW6(d.a),3)),this.a)},
$S:465}
B.ajv.prototype={
$1(d){var w=d.a,v=J.l(w)
return new B.mg(J.aXo(J.b1(J.a_(v.glb(w),2)),0,24)+"...",J.b1(J.a_(v.glb(w),4)),C.e.j(0),!1)},
$S:z+3}
B.alS.prototype={
$1(d){return d.M(0,this.a)},
$S:z+4};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.bA,[B.aCE,B.aCF,B.aCC,B.aCD,B.aCA,B.aCB,B.av0,B.auZ,B.ajG,B.ajH,B.ajt,B.ajx,B.ajy,B.ajz,B.ajs,B.ajr,B.ajE,B.aju,B.ajv,B.alS])
v(B.aso,A.DZ)
v(B.rB,A.a0)
v(B.a_T,A.an)
w(A.dV,[B.av_,B.av1,B.ajw,B.ajB,B.ajC])
v(B.UX,N.fH)
w(A.eS,[B.ajD,B.ajA,B.ajF])
v(B.xX,A.aJ)
v(B.mg,A.y)})()
A.c6(b.typeUniverse,JSON.parse('{"rB":{"a0":[],"i":[]},"a_T":{"an":["rB"]},"UX":{"a0":[],"i":[]},"xX":{"aJ":[],"i":[]}}'))
var y={d:"0x9b049dE07099f1FA7B946B65d5D6fb69a5528a22"}
var x=(function rtii(){var w=A.t
return{A:w("rd"),m:w("dE"),T:w("j<N<@>>"),s:w("j<h>"),S:w("j<d3>"),p:w("j<i>"),t:w("p<dG>"),j:w("p<@>"),w:w("eY"),u:w("mg"),v:w("yt<qL>"),N:w("h"),l:w("uQ"),y:w("B"),z:w("@")}})();(function constants(){D.FG=new A.hl(0,0)
D.OJ=new A.at(0,100,0,30)
D.Pg=new W.Dk(100)
D.OQ=new A.at(0,5,0,0)
D.CX=new A.ay(D.OQ,null,null)
D.OK=new A.at(0,10,0,0)
D.CW=new A.ay(D.OK,null,null)
D.ON=new A.at(0,15,0,0)
D.a51=new A.ay(D.ON,null,null)
D.OO=new A.at(0,20,0,0)
D.a53=new A.ay(D.OO,null,null)
D.OL=new A.at(0,10,0,10)
D.a52=new A.ay(D.OL,null,null)
D.a5_=new A.ay(H.aF,null,null)
D.P_=new A.at(200,200,200,200)
D.a50=new A.ay(D.P_,null,null)
D.a5e=new B.mg("Merchant Name","Dericvate Takens Own","Products Created",!0)
D.a5f=new B.mg("","Empty","",!1)
D.abX=new A.cw("Apply for producing this Derivative",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac4=new A.cw("Create Derivative Token",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bbg","aSr",()=>A.Ic(2))
w($,"bbc","aSp",()=>A.aMl(8))
w($,"bdD","aIA",()=>B.b6Z())})()}
$__dart_deferred_initializers__["+cMK+ztx9KTwB0aNea8bol/KnlI="] = $__dart_deferred_initializers__.current
