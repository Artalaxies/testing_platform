self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
b9c(){return $.lT().uX("assets/TestnetDerivativeTokenV2.json").aB(0,new B.aEm(),x.N).aB(0,new B.aEn(),x.m)},
b9d(d){return $.lT().uX("assets/TestnetDerivativeTokenV2.json").aB(0,new B.aEk(),x.N).aB(0,new B.aEl(d),x.m)},
aEm:function aEm(){},
aEn:function aEn(){},
aEk:function aEk(){},
aEl:function aEl(d){this.a=d},
aJj(d){var w=0,v=A.V(x.m),u
var $async$aJj=A.W(function(e,f){if(e===1)return A.S(f,v)
while(true)switch(w){case 0:u=$.lT().uX("assets/IERC721MetadataUpgradeable.json").aB(0,new B.aEi(),x.N).aB(0,new B.aEj(d),x.m)
w=1
break
case 1:return A.T(u,v)}})
return A.U($async$aJj,v)},
aFk(d){var w=0,v=A.V(x.z),u,t,s
var $async$aFk=A.W(function(e,f){if(e===1)return A.S(f,v)
while(true)switch(w){case 0:$.BI().au(C.v,"readNFTData executed",null,null)
t=L
s=J
w=3
return A.a0(d,$async$aFk)
case 3:u=t.MA(s.b6(f))
w=1
break
case 1:return A.T(u,v)}})
return A.U($async$aFk,v)},
aEi:function aEi(){},
aEj:function aEj(d){this.a=d},
au5:function au5(d){this.a=d},
t_:function t_(d,e,f){this.c=d
this.d=e
this.a=f},
a0x:function a0x(d){var _=this
_.d=""
_.a=null
_.b=d
_.c=null},
awP:function awP(d){this.a=d},
awO:function awO(d,e){this.a=d
this.b=e},
awQ:function awQ(d){this.a=d},
awN:function awN(d){this.a=d},
b2f(d,e){var w=null,v=new B.VC(e,d,N.lD(w,w),w)
v.iy(w,w,w,w,w)
return v},
VC:function VC(d,e,f,g){var _=this
_.r=d
_.w=e
_.c=_.y=_.x=$
_.d=f
_.a=g},
akZ:function akZ(d){this.a=d},
al_:function al_(d){this.a=d},
akW:function akW(d){this.a=d},
akP:function akP(d){this.a=d},
akM:function akM(d){this.a=d},
akQ:function akQ(){},
akR:function akR(){},
akS:function akS(d){this.a=d},
akT:function akT(d,e){this.a=d
this.b=e},
akU:function akU(d,e){this.a=d
this.b=e},
akL:function akL(d){this.a=d},
akV:function akV(d){this.a=d},
akK:function akK(){},
akX:function akX(){},
akY:function akY(d){this.a=d},
akN:function akN(d){this.a=d},
akO:function akO(){},
yn:function yn(d,e){this.c=d
this.a=e},
ani:function ani(d){this.a=d},
mH:function mH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4V(d){var w
if(d===0)return $.iQ()
if(d===1)return $.MG()
if(d===2)return $.aUw()
if(Math.abs(d)<4294967296)return A.IO(C.f.f_(d))
w=B.b4U(d)
return w},
b4U(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw A.c(A.bw("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.iQ()
w=$.aUu()
for(v=0;v<8;++v)w[v]=0
A.jb(w.buffer,0,null).setFloat64(0,d,!0)
u=w[7]
t=w[6]
s=(u<<4>>>0)+(t>>>4)-1075
r=new Uint16Array(4)
r[0]=(w[1]<<8>>>0)+w[0]
r[1]=(w[3]<<8>>>0)+w[2]
r[2]=(w[5]<<8>>>0)+w[4]
r[3]=t&15|16
q=new A.eZ(!1,r,4)
if(s<0)p=q.K9(0,-s)
else p=s>0?q.m0(0,s):q
return p},
b9Z(d){var w,v=C.b.dY(d),u=A.Gh(v,null)
if(u==null)u=A.ang(v)
if(u!=null)return u
w=A.bK(d,null,null)
throw A.c(w)}},J,A,C,I,O,D,P,E,F,Q,K,R,L,S,G,T,H,U,M,V,N,W
B=a.updateHolder(c[10],B)
J=c[1]
A=c[0]
C=c[2]
I=c[27]
O=c[70]
D=c[74]
P=c[47]
E=c[53]
F=c[29]
Q=c[40]
K=c[28]
R=c[48]
L=c[25]
S=c[31]
G=c[75]
T=c[17]
H=c[61]
U=c[37]
M=c[43]
V=c[24]
N=c[42]
W=c[22]
B.au5.prototype={
j(d){var w,v=null,u=this.a,t=J.l(u),s=t.gn(u)
s=A.d(s==null?v:A.vs(J.b6(s),v))
w=t.gYk(u)
w=A.d(w==null?v:A.vs(J.b6(w),v))
u=t.gYl(u)
return"TransactionOverride: value "+s+" with gas limit "+w+" and gas price "+A.d(u==null?v:A.vs(J.b6(u),v))}}
B.t_.prototype={
aG(){return new B.a0x(C.p)}}
B.a0x.prototype={
aM(){this.bh()},
p(d){this.bd(0)},
L(d,e){var w=null,v=I.aNr(w,O.d4,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.O(e).R8.c,"Enter a address that you want to send",w,w,w,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=A.O(e),t=x.p
return A.js(D.FZ,A.a([A.fx(new A.aB(P.ex,A.id(A.d4(A.a([new I.lw(v,E.cM,u.R8.c,!0,E.cI,E.cJ,E.dh,new B.awP(this),!0,w),A.j7(A.aq("Create",w,w,w,A.O(e).R8.c,w,w),w,w,w,new B.awQ(this),w,w)],t),C.a6,C.ku,C.J),C.n,w,w),w),200,400)],t),C.aZ,w,w)}}
B.VC.prototype={
aM(){var w=this,v=B.aJj(w.w),u=x.z,t=v.aB(0,new B.akZ(w),u)
A.dl(w.x,"nftData")
w.x=t
u=v.aB(0,new B.al_(w),u)
A.dl(w.y,"ownerName")
w.y=u
w.wx()},
L(d,e){var w,v,u,t,s=this,r=null,q=A.kU(A.a([A.b(s.x,"nftData"),A.b(s.y,"ownerName")],x.T),x.z),p=x.j
p=A.hK(F.lR(new B.akW(s),r,p),q,p)
q=A.aq("Derivative Token Logs",r,r,r,A.O(e).R8.a,C.D,r)
w=0.1*e.W(x.w).f.a.a
v=x.t
u=$.aKw().aB(0,new B.akX(),v)
t=x.p
return new Q.je(r,A.a([A.hp(A.ho(A.a([D.a5y,p,new A.aB(D.OX,q,r),new A.aB(new A.ao(w,0,w,0),A.hK(F.lR(new B.akY(s),r,v),u,v),r),D.a5z],t),!0,!0,!0))],t),r)}}
B.yn.prototype={
L(d,e){var w=x.S,v=A.a([D.a5K.L(0,e)],w),u=this.c
C.c.M(v,u.length===0?A.a([D.a5L.L(0,e)],w):A.a([],w))
C.c.M(v,new A.af(u,new B.ani(e),A.a9(u).i("af<1,d6>")))
return K.at1(null,v,null,D.Pu,R.ir)}}
B.mH.prototype={
L(d,e){var w=this,v=null,u=w.d?C.kw:C.n
return new K.d6(new A.cg(u,v,v,v,v,v,C.T),A.a([A.fx(A.m3(A.aq(w.a,v,v,v,A.O(e).R8.b,C.D,v),v,v),50,v),A.aq(w.b,v,v,v,A.O(e).R8.b,C.D,v),A.aq(w.c,v,v,v,A.O(e).R8.b,C.D,v)],x.p))}}
var z=a.updateTypes(["~(j6)","t_(a5)","yn(a5,cd<m<dS>>)","mH(dS)","d6(mH)"])
B.aEm.prototype={
$1(d){return C.U.ia(0,J.a2(C.U.cd(0,d),"abi"))},
$S:13}
B.aEn.prototype={
$1(d){return new A.dQ(new ethers.Contract(y.d,new A.pF(new ethers.utils.Interface(d)).lC(0,C.dw),$.aKF().a))},
$S:68}
B.aEk.prototype={
$1(d){return C.U.ia(0,J.a2(C.U.cd(0,d),"abi"))},
$S:13}
B.aEl.prototype={
$1(d){return new A.dQ(new ethers.Contract(y.d,new A.pF(new ethers.utils.Interface(d)).lC(0,C.dw),this.a.a))},
$S:68}
B.aEi.prototype={
$1(d){return C.U.ia(0,J.a2(C.U.cd(0,d),"abi"))},
$S:13}
B.aEj.prototype={
$1(d){return new A.dQ(new ethers.Contract(this.a,new A.pF(new ethers.utils.Interface(d)).lC(0,C.dw),L.aND(C.c.gJ($.ia().b.b)).a))},
$S:68}
B.awP.prototype={
$1(d){var w=this.a
w.ao(new B.awO(w,d))},
$S:49}
B.awO.prototype={
$0(){this.a.d=this.b},
$S:0}
B.awQ.prototype={
$0(){B.b9d(new A.yU(J.aYT($.ia().c.a),x.v)).aB(0,new B.awN(this.a),x.l)},
$S:0}
B.awN.prototype={
$1(d){var w,v,u=this.a,t=u.d
u=u.a
w=u.c
u=u.d
v=B.b4V(6e4)
v=v==null?null:ethers.BigNumber.from(v.j(0))
return d.wh(0,"safeMint",[t,1,w,u],new B.au5({value:null,gasLimit:v,gasPrice:null,maxFeePerGas:null,maxPriorityFeePerGas:null,nonce:null}))},
$S:475}
B.akZ.prototype={
$1(d){return B.aFk(d.eN(0,"tokenURI",[this.a.r],x.z))},
$S:84}
B.al_.prototype={
$1(d){return d.eN(0,"ownerOf",[this.a.r],x.z)},
$S:84}
B.akW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="image",h=this.a
A.b(h.c,"windowLogger").au(C.v,J.b6(e.gcE()),j,j)
w=J.w5(J.b6(J.a2(J.a2(e.gcE(),0),i)),"ipfs")?C.b.V("https://cloudflare-ipfs.com/ipfs/",C.c.gJ(J.aGh(J.b6(J.a2(J.a2(e.gcE(),0),i)),"/"))):J.b6(J.a2(J.a2(e.gcE(),0),i))
v=x.w
u=0.1*d.W(v).f.a.a
v=d.W(v).f
v=A.bB(j,A.id(S.aH9(w,j,j),C.n,j,j),C.m,j,new A.ax(0.25*v.a.a,1/0,0,1/0),j,j,j,j,j,j,j,j)
t=A.O(d).R8.e
t=A.j7(A.aq("Refresh",j,j,j,t==null?j:t.cP(C.n),j,j),G.fB,j,j,new B.akP(h),j,j)
s=A.aq(J.b6(J.a2(J.a2(e.gcE(),0),"name")),j,j,j,A.O(d).R8.a,j,j)
r=A.aq(C.b.V("Owner: ",J.b6(J.a2(e.gcE(),1))),j,j,j,A.O(d).R8.e,j,j)
q=J.b6(J.a2(J.a2(e.gcE(),0),"external_url"))
q=T.aNL(new B.akQ(),A.O(d).R8.e,q)
p=A.aq("Description",j,j,j,A.O(d).R8.b,j,j)
o=A.aq(J.b6(J.a2(J.a2(e.gcE(),0),"description")),j,j,j,A.O(d).R8.c,j,j)
n=x.p
m=A.a([A.aq("Properties",j,j,j,A.O(d).R8.b,j,j)],n)
l=J.a2(J.a2(e.gcE(),0),"attributes")
if(l==null)l=[]
k=x.z
l=A.eu(l,!0,k)
C.c.M(m,new A.af(l,new B.akR(),A.a9(l).i("af<1,i>")))
m=A.id(new A.aB(H.aF,A.d4(A.a([new A.e3(C.j_,j,j,t,j),s,D.Dk,r,D.Dl,q,D.a5A,p,D.Dl,o,D.a5B,A.bB(j,A.d4(m,C.aA,C.G,C.J),C.m,C.n,j,j,j,j,j,j,j,j,j)],n),C.aA,C.G,C.J),j),C.n,j,j)
o=$.aKw().aB(0,new B.akS(h),k)
return new A.aB(new A.ao(u,0,u,0),U.A1(M.E,A.a([v,m,A.id(new A.aB(H.aF,A.d4(A.a([A.hK(F.lR(new B.akT(h,d),j,k),o,k),D.a5C,A.j7(D.acB,G.fB,50,j,new B.akU(h,d),j,j),D.Dk,A.j7(D.act,G.fB,50,j,new B.akV(d),j,j)],n),C.aA,C.G,C.J),j),C.n,j,j)],n),M.oL,C.ac),j)},
$S:477}
B.akP.prototype={
$0(){A.uO().aB(0,new B.akM(this.a),x.y)
A.fE($.rl().gq2().b)},
$S:0}
B.akM.prototype={
$1(d){var w=this.a
w=w.w+"/"+w.r
J.rp(d.a,w)
return $.aFO().A(0,"flutter."+w)},
$S:478}
B.akQ.prototype={
$1(d){return V.Mx(d.b)},
$S:z+0}
B.akR.prototype={
$1(d){var w=null,v=J.am(d)
return A.id(A.aq(J.MM(J.MM(v.h(d,"trait_type")," : "),v.h(d,"value")),w,w,w,w,w,w),w,w,w)},
$S:479}
B.akS.prototype={
$1(d){var w=this.a
return d.eN(0,"getAmount",[w.w,B.b9Z(w.r)],x.z)},
$S:84}
B.akT.prototype={
$2(d,e){var w=null,v=x.A
A.b(this.a.c,"windowLogger").au(C.v,"derivative token:"+J.b6(J.aLS(v.a(e.gcE()))),w,w)
return A.aq("Derivative Token Created:"+J.b6(J.aLS(v.a(e.gcE()))),w,w,w,A.O(this.b).R8.b,w,w)},
$S:480}
B.akU.prototype={
$0(){var w=$.Yv
if(w==null)w=this.b
A.aJF(C.K,new B.akL(this.a),w,x.z)},
$S:0}
B.akL.prototype={
$1(d){var w=this.a
return new B.t_(w.w,w.r,null)},
$S:z+1}
B.akV.prototype={
$0(){var w=$.Yv
if(w==null)w=this.a
A.aJF(C.K,new B.akK(),w,x.z)},
$S:0}
B.akK.prototype={
$1(d){var w=null
return A.js(C.a1,A.a([A.bB(w,A.aq("Comming Soon",w,w,w,A.O(d).R8.a,w,w),C.m,C.n,w,w,w,200,w,w,w,w,400)],x.p),C.aZ,w,w)},
$S:481}
B.akX.prototype={
$1(d){return d.aqa(d.J8("TransferSingle"))},
$S:141}
B.akY.prototype={
$2(d,e){var w,v,u,t=null,s="windowLogger",r=this.a
A.b(r.c,s).au(C.v,e.gcE(),t,t)
w=ethers.utils.solidityKeccak256(A.a(["address","string","uint256"],x.s),[r.w,"/",r.r])
v=ethers.utils.formatEther(w)
u=A.da(v,".","")
A.b(r.c,s).au(C.v,u,t,t)
A.b(r.c,s).au(C.v,"HEX: "+w,t,t)
A.b(r.c,s).au(C.v,"id: "+u,t,t)
J.aLH(e.gcE(),new B.akN(u))
r=x.u
return new B.yn(A.a3(J.fj(e.gcE(),new B.akO(),r),!0,r),t)},
$S:z+2}
B.akN.prototype={
$1(d){return!J.e(J.b6(J.a2(J.aYl(d.a),3)),this.a)},
$S:482}
B.akO.prototype={
$1(d){var w=d.a,v=J.l(w)
return new B.mH(J.aZG(J.b6(J.a2(v.glj(w),2)),0,24)+"...",J.b6(J.a2(v.glj(w),4)),C.f.j(0),!1)},
$S:z+3}
B.ani.prototype={
$1(d){return d.L(0,this.a)},
$S:z+4};(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.bA,[B.aEm,B.aEn,B.aEk,B.aEl,B.aEi,B.aEj,B.awP,B.awN,B.akZ,B.al_,B.akM,B.akQ,B.akR,B.akS,B.akL,B.akK,B.akX,B.akN,B.akO,B.ani])
v(B.au5,A.Eu)
v(B.t_,A.a4)
v(B.a0x,A.an)
w(A.dP,[B.awO,B.awQ,B.akP,B.akU,B.akV])
v(B.VC,N.fV)
w(A.eJ,[B.akW,B.akT,B.akY])
v(B.yn,A.aL)
v(B.mH,A.x)})()
A.cc(b.typeUniverse,JSON.parse('{"t_":{"a4":[],"i":[]},"a0x":{"an":["t_"]},"VC":{"a4":[],"i":[]},"yn":{"aL":[],"i":[]}}'))
var y={d:"0x9b049dE07099f1FA7B946B65d5D6fb69a5528a22"}
var x=(function rtii(){var w=A.u
return{A:w("rE"),m:w("dQ"),T:w("j<R<@>>"),s:w("j<f>"),S:w("j<d6>"),p:w("j<i>"),t:w("m<dS>"),j:w("m<@>"),w:w("eQ"),u:w("mH"),v:w("yU<ra>"),N:w("f"),l:w("vf"),y:w("z"),z:w("@")}})();(function constants(){D.FZ=new A.hD(0,0)
D.OX=new A.ao(0,100,0,30)
D.Pu=new W.DS(100)
D.P3=new A.ao(0,5,0,0)
D.Dl=new A.aB(D.P3,null,null)
D.OY=new A.ao(0,10,0,0)
D.Dk=new A.aB(D.OY,null,null)
D.P0=new A.ao(0,15,0,0)
D.a5A=new A.aB(D.P0,null,null)
D.P1=new A.ao(0,20,0,0)
D.a5C=new A.aB(D.P1,null,null)
D.OZ=new A.ao(0,10,0,10)
D.a5B=new A.aB(D.OZ,null,null)
D.a5y=new A.aB(H.aF,null,null)
D.Pd=new A.ao(200,200,200,200)
D.a5z=new A.aB(D.Pd,null,null)
D.a5K=new B.mH("Merchant Name","Dericvate Takens Own","Products Created",!0)
D.a5L=new B.mH("","Empty","",!1)
D.act=new A.cy("Apply for producing this Derivative",null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acB=new A.cy("Create Derivative Token",null,null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bdx","aUw",()=>A.IO(2))
w($,"bdt","aUu",()=>A.aHu(8))
w($,"bg1","aKw",()=>B.b9c())})()}
$__dart_deferred_initializers__["yNKzbWxgvDIvAriEbDeImbey0hU="] = $__dart_deferred_initializers__.current
