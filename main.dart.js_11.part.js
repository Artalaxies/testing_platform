self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={ne:function ne(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},aiZ:function aiZ(d){this.a=d},
aGH(){var x=0,w=A.Y(y.k),v
var $async$aGH=A.U(function(d,e){if(d===1)return A.V(e,w)
while(true)switch(x){case 0:v=$.op().H2("assets/ArtalaxiesMarket.json").aK(0,new B.aAt(),y.w).aK(0,new B.aAu(),y.k)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$aGH,w)},
a5O(d,e){var x=0,w=A.Y(y.h),v
var $async$a5O=A.U(function(f,g){if(f===1)return A.V(g,w)
while(true)switch(x){case 0:$.Ag().ay(C.r,"getLatestTransaction executed",null,null)
x=3
return A.a2($.aIc().aK(0,new B.aBM(e,d),y.h),$async$a5O)
case 3:v=g
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a5O,w)},
a5P(d){var x=0,w=A.Y(y.o),v
var $async$a5P=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:$.Ag().ay(C.r,"getNFTData executed",null,null)
x=3
return A.a2($.aIc().aK(0,new B.aBO(d),y.o),$async$a5P)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$a5P,w)},
co:function co(d,e,f){this.a=d
this.b=e
this.c=f},
aAt:function aAt(){},
aAu:function aAu(){},
aBM:function aBM(d,e){this.a=d
this.b=e},
aBO:function aBO(d){this.a=d},
aBN:function aBN(d){this.a=d}},A,C,D,J,E
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[19],B)
A=c[0]
C=c[2]
D=c[56]
J=c[1]
E=c[24]
B.ne.prototype={
P(d,e){var x=this,w=null,v=A.aC(x.d,w,w,w,A.P(e).H.b,C.y,w),u=x.e
if(u==null)u=""
return A.qW(A.p6(A.ho(A.dy(A.a([x.c,v,A.aC(u,w,w,w,A.P(e).H.y,w,w)],y.u),C.aa,C.N,C.I),800,300),w,new B.aiZ(x),w,w),D.mn,w,D.DE)}}
B.co.prototype={}
var z=a.updateTypes(["N<r<N<co>>>(ev)","N<co>(fh)"])
B.aiZ.prototype={
$0(){var x=this.a
A.i9("nft/"+x.f+"/"+x.r)},
$S:0}
B.aAt.prototype={
$1(d){return C.V.jl(0,J.a4(C.V.cM(0,d),"abi"))},
$S:15}
B.aAu.prototype={
$1(d){return new A.ev(new ethers.Contract("0xed11a33cC640eDb61e4f4c74A9525BBd4E73d69B",new A.wj(new ethers.utils.Interface(d)).o4(0,C.f9),$.aTg().a))},
$S:160}
B.aBM.prototype={
$1(d){return this.Xq(d)},
Xq(d){var x=0,w=A.Y(y.h),v,u=this,t,s
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=A.bS(d.a.filters,"Transfer",C.B)
s=u.a
if(s==null)s=-1e5
x=3
return A.a2(d.zw(new A.PW(t),s,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:465}
B.aBO.prototype={
$1(d){return this.Xs(d)},
Xs(d){var x=0,w=A.Y(y.o),v,u=this
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:v=J.fD(u.a,new B.aBN(d),y.t).e5(0)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+0}
B.aBN.prototype={
$1(d){return this.Xr(d)},
Xr(d){var x=0,w=A.Y(y.C),v,u=this,t,s,r,q,p,o
var $async$$1=A.U(function(e,f){if(e===1)return A.V(f,w)
while(true)switch(x){case 0:t=$.Ag()
s=d.a
r=J.m(s)
t.ay(C.cz,"getNFTData.data: "+r.gSQ(s),null,null)
t.ay(C.cz,"getNFTData.address: "+r.gxH(s),null,null)
t.ay(C.cz,"getNFTData.transactionHash: "+r.gWN(s),null,null)
t.ay(C.cz,"getNFTData.transactionIndex: "+r.gapj(s),null,null)
t.ay(C.cz,"getNFTData.toString: "+("Event: "+r.gTr(s)+" "+r.gTs(s)+" with args "+A.d(r.gxO(s))),null,null)
q=B
p=r.gxH(s)
o=J.bq(J.a4(r.gxO(s),2))
x=3
return A.a2(u.a.fh(0,"tokenURI",[J.a4(r.gxO(s),2)],y.w),$async$$1)
case 3:v=new q.co(p,o,f)
x=1
break
case 1:return A.W(v,w)}})
return A.X($async$$1,w)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ne,A.aL)
x(B.aiZ,A.h5)
x(B.co,A.z)
w(A.bT,[B.aAt,B.aAu,B.aBM,B.aBO,B.aBN])})()
A.dp(b.typeUniverse,JSON.parse('{"ne":{"aL":[],"i":[]}}'))
var y={k:A.w("ev"),t:A.w("N<co>"),u:A.w("j<i>"),h:A.w("r<fh>"),o:A.w("r<N<co>>"),C:A.w("co"),w:A.w("h")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bde","aTg",()=>E.aLe($.jV().b.b[1]))
x($,"bcP","aIc",()=>B.aGH())})()}
$__dart_deferred_initializers__["4edAaktIPHEBpSDkVmSoyAGAhXk="] = $__dart_deferred_initializers__.current
