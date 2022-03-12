self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={C7:function C7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.z=g
_.Q=h
_.ch=i
_.a=j},
aYQ(d,e,f){return new A.CE(e,f,d)},
CE:function CE(d,e,f){this.a=d
this.b=e
this.d=f},
Qu:function Qu(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
oQ:function oQ(d,e){this.a=d
this.b=e},
rm:function rm(d,e){this.a=d
this.b=e},
p6:function p6(d,e){this.a=d
this.b=e},
tw:function tw(d,e){this.a=d
this.b=e},
Bo:function Bo(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.z=e
_.Q=f
_.ch=g
_.c=h
_.d=i
_.e=j
_.a=k},
a_5:function a_5(d,e,f){var _=this
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=null
_.e=_.d=$
_.hB$=d
_.cD$=e
_.a=null
_.b=f
_.c=null},
atK:function atK(){},
atL:function atL(){},
atM:function atM(){},
atN:function atN(){},
atO:function atO(){},
atP:function atP(){},
atQ:function atQ(){},
atR:function atR(){},
aMQ(){var x=new Float64Array(4)
x[3]=1
return new A.pR(x)},
pR:function pR(d){this.a=d}},C,B,J
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[20],A)
C=c[0]
B=c[2]
J=c[1]
A.C7.prototype={
gadi(){var x=this,w=x.z,v=w==null
if(v&&x.Q==null&&x.ch==null)return 40
if(v)w=x.Q
return 2*(w==null?0:w)},
gad7(){var x=this,w=x.z,v=w==null
if(v&&x.Q==null&&x.ch==null)return 40
if(v)w=x.ch
return 2*(w==null?1/0:w)},
M(d,e){var x,w,v,u,t,s,r=this,q=null,p=C.M(e),o=p.an.x.d2(q),n=r.d
if(n==null){x=o.b
x.toString
switch(C.uM(x).a){case 0:n=p.cy
break
case 1:n=p.db
break}}else switch(C.uM(n).a){case 0:o=o.d2(p.cy)
break
case 1:o=o.d2(p.db)
break}w=r.gadi()
v=r.gad7()
x=A.aYQ(B.pi,r.f,q)
u=r.c
if(u==null)u=q
else{t=e.a_(y.l).f.yr(1)
s=p.b2.d2(o.b)
s=C.lz(new C.eY(t,C.DM(C.ng(u,q,q,B.bW,!0,o,q,q,B.b0),s,q),q),q,q)
u=s}return new A.Bo(u,new C.c8(n,x,q,q,q,q,B.pm),q,new C.av(w,v,w,v),B.aq,B.Y,q,q)}}
A.CE.prototype={
T9(d){return new A.Qu(this,d)},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.a7(e)!==C.I(w))return!1
if(e instanceof A.CE)if(e.a.k(0,w.a))if(e.d===w.d)if(B.a0.k(0,B.a0))x=!0
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gu(d){return C.a9(this.a,null,this.d,B.a0,null,B.cY,!1,1,1,B.fJ,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(d){var x=C.a([this.a.j(0)],y.s),w=!(this.d===B.pk&&!0)
if(w)x.push(this.d.j(0))
x.push(B.a0.j(0))
x.push("scale 1")
x.push("opacity 1")
x.push(B.fJ.j(0))
return"DecorationImage("+B.c.bu(x,", ")+")"}}
A.Qu.prototype={
W6(d,e,f,g){var x,w,v,u,t=this,s=null,r=t.a,q=r.a.a1(g),p=q.a
if(p==null)p=q
x=t.c
w=x==null
if(w)v=s
else{v=x.a
if(v==null)v=x}if(p!==v){u=new C.ht(t.gNT(),s,r.b)
if(!w)x.V(0,u)
t.c=q
q.am(0,u)}if(t.d==null)return
p=f!=null
if(p){d.bF(0)
d.fM(0,f)}x=t.d
w=x.a
C.aQK(B.a0,d,s,s,x.c,B.fJ,r.d,!1,w,!1,!1,1,e,B.cY,x.b)
if(p)d.be(0)},
aaR(d,e){var x,w,v=this
if(J.e(v.d,d))return
x=v.d
if(x!=null)if(d.a.GU(x.a)){w=x.b
x=w===w&&d.c==x.c}else x=!1
else x=!1
if(x){d.a.p(0)
return}x=v.d
if(x!=null)x.a.p(0)
v.d=d
if(!e)v.b.$0()},
p(d){var x=this,w=x.c
if(w!=null)w.V(0,new C.ht(x.gNT(),null,x.a.b))
w=x.d
if(w!=null)w.a.p(0)
x.d=null},
j(d){return"DecorationImagePainter(stream: "+C.d(this.c)+", image: "+C.d(this.d)+") for "+this.a.j(0)}}
A.oQ.prototype={
eG(d){return C.aEB(this.a,this.b,d)}}
A.rm.prototype={
eG(d){var x=C.vZ(this.a,this.b,d)
x.toString
return x}}
A.p6.prototype={
eG(d){var x=C.ia(this.a,this.b,d)
x.toString
return x}}
A.tw.prototype={
eG(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new C.es(new Float64Array(3)),a3=new C.es(new Float64Array(3)),a4=A.aMQ(),a5=A.aMQ(),a6=new C.es(new Float64Array(3)),a7=new C.es(new Float64Array(3))
this.a.Tm(a2,a4,a6)
this.b.Tm(a3,a5,a7)
x=1-a8
w=a2.kU(x).Z(0,a3.kU(a8))
v=a4.kU(x).Z(0,a5.kU(a8))
u=new Float64Array(4)
t=new A.pR(u)
t.bo(v)
t.v6(0)
s=a6.kU(x).Z(0,a7.kU(a8))
x=new Float64Array(16)
v=new C.aI(x)
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
v.c0(0,s)
return v}}
A.Bo.prototype={
aM(){return new A.a_5(null,null,B.o)}}
A.a_5.prototype={
op(d){var x,w,v=this,u=null,t=v.fr
v.a.toString
x=y.K
v.fr=x.a(d.$3(t,u,new A.atK()))
t=v.fx
v.a.toString
w=y.Z
v.fx=w.a(d.$3(t,u,new A.atL()))
t=y.h
v.fy=t.a(d.$3(v.fy,v.a.z,new A.atM()))
v.go=t.a(d.$3(v.go,v.a.Q,new A.atN()))
v.id=y.E.a(d.$3(v.id,v.a.ch,new A.atO()))
t=v.k1
v.a.toString
v.k1=w.a(d.$3(t,u,new A.atP()))
t=v.k2
v.a.toString
v.k2=y.e.a(d.$3(t,u,new A.atQ()))
t=v.k3
v.a.toString
v.k3=x.a(d.$3(t,u,new A.atR()))},
M(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.ghV(),n=q.fr
n=n==null?p:n.ag(0,o.gn(o))
x=q.fx
x=x==null?p:x.ag(0,o.gn(o))
w=q.fy
w=w==null?p:w.ag(0,o.gn(o))
v=q.go
v=v==null?p:v.ag(0,o.gn(o))
u=q.id
u=u==null?p:u.ag(0,o.gn(o))
t=q.k1
t=t==null?p:t.ag(0,o.gn(o))
s=q.k2
s=s==null?p:s.ag(0,o.gn(o))
r=q.k3
r=r==null?p:r.ag(0,o.gn(o))
return C.bv(n,q.a.r,B.m,p,u,w,v,p,t,x,s,r,p)}}
A.pR.prototype={
bo(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
Zb(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
v6(d){var x,w,v=Math.sqrt(this.gow())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gow(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gl(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
kU(d){var x=new Float64Array(4),w=new A.pR(x)
w.bo(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a3(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gaqw(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
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
return new A.pR(i)},
Z(d,e){var x,w=new Float64Array(4),v=new A.pR(w)
v.bo(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
ah(d,e){var x,w=new Float64Array(4),v=new A.pR(w)
v.bo(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
m(d,e,f){this.a[e]=f},
j(d){var x=this.a
return C.d(x[0])+", "+C.d(x[1])+", "+C.d(x[2])+" @ "+C.d(x[3])}}
var z=a.updateTypes(["oQ(@)","p6(@)","~(iR,B)","rm(@)","tw(@)"])
A.atK.prototype={
$1(d){return new A.oQ(y.D.a(d),null)},
$S:z+0}
A.atL.prototype={
$1(d){return new A.p6(y.W.a(d),null)},
$S:z+1}
A.atM.prototype={
$1(d){return new C.nf(y.S.a(d),null)},
$S:152}
A.atN.prototype={
$1(d){return new C.nf(y.S.a(d),null)},
$S:152}
A.atO.prototype={
$1(d){return new A.rm(y.k.a(d),null)},
$S:z+3}
A.atP.prototype={
$1(d){return new A.p6(y.W.a(d),null)},
$S:z+1}
A.atQ.prototype={
$1(d){return new A.tw(y.w.a(d),null)},
$S:z+4}
A.atR.prototype={
$1(d){return new A.oQ(y.D.a(d),null)},
$S:z+0};(function installTearOffs(){var x=a._instance_2u
x(A.Qu.prototype,"gNT","aaR",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.C7,C.aJ)
w(C.y,[A.CE,A.Qu,A.pR])
w(C.aR,[A.oQ,A.rm,A.p6,A.tw])
x(A.Bo,C.x9)
x(A.a_5,C.r2)
w(C.bA,[A.atK,A.atL,A.atM,A.atN,A.atO,A.atP,A.atQ,A.atR])})()
C.c6(b.typeUniverse,JSON.parse('{"C7":{"aJ":[],"i":[]},"oQ":{"aR":["hm?"],"aT":["hm?"],"aT.T":"hm?","aR.T":"hm?"},"rm":{"aR":["av"],"aT":["av"],"aT.T":"av","aR.T":"av"},"p6":{"aR":["cS"],"aT":["cS"],"aT.T":"cS","aR.T":"cS"},"tw":{"aR":["aI"],"aT":["aI"],"aT.T":"aI","aR.T":"aI"},"Bo":{"a0":[],"i":[]},"a_5":{"an":["Bo"]}}'))
var y=(function rtii(){var x=C.t
return{D:x("hm"),k:x("av"),S:x("hq"),W:x("cS"),s:x("j<h>"),w:x("aI"),l:x("eY"),K:x("oQ?"),E:x("rm?"),h:x("nf?"),Z:x("p6?"),e:x("tw?")}})()}
$__dart_deferred_initializers__["QcxT70+vyJZuwo2B1iP0Wr2Lepc="] = $__dart_deferred_initializers__.current
