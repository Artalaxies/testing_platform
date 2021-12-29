self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Bn:function Bn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.z=g
_.Q=h
_.ch=i
_.a=j},
aZ3(d,e,f){return new A.BU(e,f,d)},
BU:function BU(d,e,f){this.a=d
this.b=e
this.d=f},
Pj:function Pj(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
oI:function oI(d,e){this.a=d
this.b=e},
r4:function r4(d,e){this.a=d
this.b=e},
oX:function oX(d,e){this.a=d
this.b=e},
ti:function ti(d,e){this.a=d
this.b=e},
AK:function AK(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.z=e
_.Q=f
_.ch=g
_.c=h
_.d=i
_.e=j
_.a=k},
Zk:function Zk(d,e){var _=this
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.e=_.d=$
_.e1$=d
_.a=null
_.b=e
_.c=null},
atq:function atq(){},
atr:function atr(){},
ats:function ats(){},
att:function att(){},
atu:function atu(){},
atv:function atv(){},
atw:function atw(){},
atx:function atx(){},
aMU(){var x=new Float64Array(4)
x[3]=1
return new A.pC(x)},
pC:function pC(d){this.a=d}},C,B,J
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[19],A)
C=c[0]
B=c[2]
J=c[1]
A.Bn.prototype={
gad3(){var x=this,w=x.z,v=w==null
if(v&&x.Q==null&&x.ch==null)return 40
if(v)w=x.Q
return 2*(w==null?0:w)},
gacU(){var x=this,w=x.z,v=w==null
if(v&&x.Q==null&&x.ch==null)return 40
if(v)w=x.ch
return 2*(w==null?1/0:w)},
M(d,e){var x,w,v,u,t,s,r=this,q=null,p=C.N(e),o=p.S.r.cX(q),n=r.d
if(n==null){x=o.b
x.toString
switch(C.uo(x).a){case 0:n=p.d
break
case 1:n=p.e
break}}else switch(C.uo(n).a){case 0:o=o.cX(p.d)
break
case 1:o=o.cX(p.e)
break}w=r.gad3()
v=r.gacU()
x=A.aZ3(B.lX,r.f,q)
u=r.c
if(u==null)u=q
else{t=e.a0(y.l).f.yr(1)
s=p.b4.cX(o.b)
s=C.mY(new C.f2(t,C.CV(C.n2(u,q,q,B.bF,!0,o,q,q,B.aQ),s,q),q),q,q)
u=s}return new A.AK(u,new C.ce(n,x,q,q,q,q,B.m0),q,new C.au(w,v,w,v),B.ai,B.X,q,q)}}
A.BU.prototype={
T2(d){return new A.Pj(this,d)},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.a7(e)!==C.H(w))return!1
if(e instanceof A.BU)if(e.a.k(0,w.a))if(e.d===w.d)if(B.a1.k(0,B.a1))x=!0
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gu(d){return C.a5(this.a,null,this.d,B.a1,null,B.cH,!1,1,1,B.fi,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(d){var x=C.a([this.a.j(0)],y.s),w=!(this.d===B.lZ&&!0)
if(w)x.push(this.d.j(0))
x.push(B.a1.j(0))
x.push("scale 1")
x.push("opacity 1")
x.push(B.fi.j(0))
return"DecorationImage("+B.c.bx(x,", ")+")"}}
A.Pj.prototype={
W_(d,e,f,g){var x,w,v,u,t=this,s=null,r=t.a,q=r.a.a7(g),p=q.a
if(p==null)p=q
x=t.c
w=x==null
if(w)v=s
else{v=x.a
if(v==null)v=x}if(p!==v){u=new C.hq(t.gNS(),s,r.b)
if(!w)x.a9(0,u)
t.c=q
q.aq(0,u)}if(t.d==null)return
p=f!=null
if(p){d.bK(0)
d.fK(0,f)}x=t.d
w=x.a
C.aQQ(B.a1,d,s,s,x.c,B.fi,r.d,!1,w,!1,!1,1,e,B.cH,x.b)
if(p)d.bg(0)},
aaJ(d,e){var x,w,v=this
if(J.e(v.d,d))return
x=v.d
if(x!=null)if(d.a.Ha(x.a)){w=x.b
x=w===w&&d.c==x.c}else x=!1
else x=!1
if(x){d.a.p(0)
return}x=v.d
if(x!=null)x.a.p(0)
v.d=d
if(!e)v.b.$0()},
p(d){var x=this,w=x.c
if(w!=null)w.a9(0,new C.hq(x.gNS(),null,x.a.b))
w=x.d
if(w!=null)w.a.p(0)
x.d=null},
j(d){return"DecorationImagePainter(stream: "+C.d(this.c)+", image: "+C.d(this.d)+") for "+this.a.j(0)}}
A.oI.prototype={
eL(d){return C.aEk(this.a,this.b,d)}}
A.r4.prototype={
eL(d){var x=C.vx(this.a,this.b,d)
x.toString
return x}}
A.oX.prototype={
eL(d){var x=C.i2(this.a,this.b,d)
x.toString
return x}}
A.ti.prototype={
eL(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new C.eA(new Float64Array(3)),a3=new C.eA(new Float64Array(3)),a4=A.aMU(),a5=A.aMU(),a6=new C.eA(new Float64Array(3)),a7=new C.eA(new Float64Array(3))
this.a.Te(a2,a4,a6)
this.b.Te(a3,a5,a7)
x=1-a8
w=a2.kN(x).Z(0,a3.kN(a8))
v=a4.kN(x).Z(0,a5.kN(a8))
u=new Float64Array(4)
t=new A.pC(u)
t.br(v)
t.uV(0)
s=a6.kN(x).Z(0,a7.kN(a8))
x=new Float64Array(16)
v=new C.aM(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.c6(0,s)
return v}}
A.AK.prototype={
aN(){return new A.Zk(null,B.o)}}
A.Zk.prototype={
oa(d){var x,w,v=this,u=null,t=v.dx
v.a.toString
x=y.K
v.dx=x.a(d.$3(t,u,new A.atq()))
t=v.dy
v.a.toString
w=y.Z
v.dy=w.a(d.$3(t,u,new A.atr()))
t=y.h
v.fr=t.a(d.$3(v.fr,v.a.z,new A.ats()))
v.fx=t.a(d.$3(v.fx,v.a.Q,new A.att()))
v.fy=y.E.a(d.$3(v.fy,v.a.ch,new A.atu()))
t=v.go
v.a.toString
v.go=w.a(d.$3(t,u,new A.atv()))
t=v.id
v.a.toString
v.id=y.e.a(d.$3(t,u,new A.atw()))
t=v.k1
v.a.toString
v.k1=x.a(d.$3(t,u,new A.atx()))},
M(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.ghN(),n=q.dx
n=n==null?p:n.ag(0,o.gn(o))
x=q.dy
x=x==null?p:x.ag(0,o.gn(o))
w=q.fr
w=w==null?p:w.ag(0,o.gn(o))
v=q.fx
v=v==null?p:v.ag(0,o.gn(o))
u=q.fy
u=u==null?p:u.ag(0,o.gn(o))
t=q.go
t=t==null?p:t.ag(0,o.gn(o))
s=q.id
s=s==null?p:s.ag(0,o.gn(o))
r=q.k1
r=r==null?p:r.ag(0,o.gn(o))
return C.bA(n,q.a.r,B.l,p,u,w,v,p,t,x,s,r,p)}}
A.pC.prototype={
br(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
Z_(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
uV(d){var x,w,v=Math.sqrt(this.goh())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
goh(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gl(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
kN(d){var x=new Float64Array(4),w=new A.pC(x)
w.br(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a3(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaqs(),a1=a0.i(0,3),a2=a0.i(0,2),a3=a0.i(0,1),a4=a0.i(0,0)
h=B.d.a3(g,a4)
x=B.d.a3(d,a1)
w=B.d.a3(e,a2)
v=B.d.a3(f,a3)
u=B.d.a3(g,a3)
t=B.d.a3(e,a1)
s=B.d.a3(f,a4)
r=B.d.a3(d,a2)
q=B.d.a3(g,a2)
p=B.d.a3(f,a1)
o=B.d.a3(d,a3)
n=B.d.a3(e,a4)
m=B.d.a3(g,a1)
l=B.d.a3(d,a4)
k=B.d.a3(e,a3)
j=B.d.a3(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.pC(i)},
Z(d,e){var x,w=new Float64Array(4),v=new A.pC(w)
v.br(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
ae(d,e){var x,w=new Float64Array(4),v=new A.pC(w)
v.br(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
i(d,e){return this.a[e]},
m(d,e,f){this.a[e]=f},
j(d){var x=this.a
return C.d(x[0])+", "+C.d(x[1])+", "+C.d(x[2])+" @ "+C.d(x[3])}}
var z=a.updateTypes(["oI(@)","oX(@)","~(iO,C)","r4(@)","ti(@)"])
A.atq.prototype={
$1(d){return new A.oI(y.D.a(d),null)},
$S:z+0}
A.atr.prototype={
$1(d){return new A.oX(y.W.a(d),null)},
$S:z+1}
A.ats.prototype={
$1(d){return new C.n1(y.S.a(d),null)},
$S:160}
A.att.prototype={
$1(d){return new C.n1(y.S.a(d),null)},
$S:160}
A.atu.prototype={
$1(d){return new A.r4(y.k.a(d),null)},
$S:z+3}
A.atv.prototype={
$1(d){return new A.oX(y.W.a(d),null)},
$S:z+1}
A.atw.prototype={
$1(d){return new A.ti(y.w.a(d),null)},
$S:z+4}
A.atx.prototype={
$1(d){return new A.oI(y.D.a(d),null)},
$S:z+0};(function installTearOffs(){var x=a._instance_2u
x(A.Pj.prototype,"gNS","aaJ",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Bn,C.aK)
w(C.x,[A.BU,A.Pj,A.pC])
w(C.aT,[A.oI,A.r4,A.oX,A.ti])
x(A.AK,C.wx)
x(A.Zk,C.qM)
w(C.bE,[A.atq,A.atr,A.ats,A.att,A.atu,A.atv,A.atw,A.atx])})()
C.cc(b.typeUniverse,JSON.parse('{"Bn":{"aK":[],"i":[]},"oI":{"aT":["hj?"],"aW":["hj?"],"aW.T":"hj?","aT.T":"hj?"},"r4":{"aT":["au"],"aW":["au"],"aW.T":"au","aT.T":"au"},"oX":{"aT":["d0"],"aW":["d0"],"aW.T":"d0","aT.T":"d0"},"ti":{"aT":["aM"],"aW":["aM"],"aW.T":"aM","aT.T":"aM"},"AK":{"Z":[],"i":[]},"Zk":{"ao":["AK"]}}'))
var y=(function rtii(){var x=C.u
return{D:x("hj"),k:x("au"),S:x("hn"),W:x("d0"),s:x("k<f>"),w:x("aM"),l:x("f2"),K:x("oI?"),E:x("r4?"),h:x("n1?"),Z:x("oX?"),e:x("ti?")}})()}
$__dart_deferred_initializers__["veipXsnoYx0Yc0z5QN34yCBCmWc="] = $__dart_deferred_initializers__.current
