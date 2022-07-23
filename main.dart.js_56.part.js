self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={CE:function CE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.y=g
_.z=h
_.Q=i
_.a=j},
b0a(d,e,f){return new A.Db(e,f,d)},
Db:function Db(d,e,f){this.a=d
this.b=e
this.d=f},
R4:function R4(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
p1:function p1(d,e){this.a=d
this.b=e},
rM:function rM(d,e){this.a=d
this.b=e},
pk:function pk(d,e){this.a=d
this.b=e},
tV:function tV(d,e){this.a=d
this.b=e},
BS:function BS(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.y=e
_.z=f
_.Q=g
_.c=h
_.d=i
_.e=j
_.a=k},
a_K:function a_K(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.cI$=d
_.ce$=e
_.a=null
_.b=f
_.c=null},
avx:function avx(){},
avy:function avy(){},
avz:function avz(){},
avA:function avA(){},
avB:function avB(){},
avC:function avC(){},
avD:function avD(){},
avE:function avE(){},
aOL(){var x=new Float64Array(4)
x[3]=1
return new A.qf(x)},
qf:function qf(d){this.a=d}},C,B,J
A=a.updateHolder(c[19],A)
C=c[0]
B=c[2]
J=c[1]
A.CE.prototype={
gadV(){var x=this,w=x.y,v=w==null
if(v&&x.z==null&&x.Q==null)return 40
if(v)w=x.z
return 2*(w==null?0:w)},
gadJ(){var x=this,w=x.y,v=w==null
if(v&&x.z==null&&x.Q==null)return 40
if(v)w=x.Q
return 2*(w==null?1/0:w)},
L(d,e){var x,w,v,u,t,s,r=this,q=null,p=C.O(e),o=p.RG.w.cP(q),n=r.d
if(n==null){x=o.b
x.toString
switch(C.va(x).a){case 0:n=p.ax
break
case 1:n=p.ay
break}}else switch(C.va(n).a){case 0:o=o.cP(p.ax)
break
case 1:o=o.cP(p.ay)
break}w=r.gadV()
v=r.gadJ()
x=A.b0a(B.pA,r.f,q)
u=r.c
if(u==null)u=q
else{t=e.W(y.l).f.q0(1)
s=p.rx.cP(o.b)
s=C.m3(new C.eQ(t,C.Eg(C.nB(u,q,q,B.bW,!0,o,q,q,B.b_),s,q),q),q,q)
u=s}return new A.BS(u,new C.cg(n,x,q,q,q,q,B.pE),q,new C.ax(w,v,w,v),B.ad,B.Z,q,q)}}
A.Db.prototype={
Tm(d){return new A.R4(this,d)},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(J.a7(e)!==C.I(w))return!1
if(e instanceof A.Db)if(e.a.k(0,w.a))if(e.d===w.d)if(B.a1.k(0,B.a1))x=!0
else x=!1
else x=!1
else x=!1
else x=!1
return x},
gu(d){return C.ac(this.a,null,this.d,B.a1,null,B.cY,!1,1,1,B.fO,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(d){var x=C.a([this.a.j(0)],y.s),w=!(this.d===B.pC&&!0)
if(w)x.push(this.d.j(0))
x.push(B.a1.j(0))
x.push("scale 1")
x.push("opacity 1")
x.push(B.fO.j(0))
return"DecorationImage("+B.c.bo(x,", ")+")"}}
A.R4.prototype={
Wp(d,e,f,g){var x,w,v,u,t=this,s=null,r=t.a,q=r.a.Y(g),p=q.a
if(p==null)p=q
x=t.c
w=x==null
if(w)v=s
else{v=x.a
if(v==null)v=x}if(p!==v){u=new C.hL(t.gO6(),s,r.b)
if(!w)x.R(0,u)
t.c=q
q.ai(0,u)}if(t.d==null)return
p=f!=null
if(p){d.bD(0)
d.fQ(0,f)}x=t.d
w=x.a
C.aSJ(B.a1,d,s,s,x.c,B.fO,r.d,!1,w,!1,!1,1,e,B.cY,x.b)
if(p)d.b7(0)},
abh(d,e){var x,w,v=this
if(J.e(v.d,d))return
x=v.d
if(x!=null)if(d.a.Hd(x.a)){w=x.b
x=w===w&&d.c==x.c}else x=!1
else x=!1
if(x){d.a.p(0)
return}x=v.d
if(x!=null)x.a.p(0)
v.d=d
if(!e)v.b.$0()},
p(d){var x=this,w=x.c
if(w!=null)w.R(0,new C.hL(x.gO6(),null,x.a.b))
w=x.d
if(w!=null)w.a.p(0)
x.d=null},
j(d){return"DecorationImagePainter(stream: "+C.d(this.c)+", image: "+C.d(this.d)+") for "+this.a.j(0)}}
A.p1.prototype={
eF(d){return C.a8F(this.a,this.b,d)}}
A.rM.prototype={
eF(d){var x=C.wo(this.a,this.b,d)
x.toString
return x}}
A.pk.prototype={
eF(d){var x=C.hd(this.a,this.b,d)
x.toString
return x}}
A.tV.prototype={
eF(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new C.eC(new Float64Array(3)),a3=new C.eC(new Float64Array(3)),a4=A.aOL(),a5=A.aOL(),a6=new C.eC(new Float64Array(3)),a7=new C.eC(new Float64Array(3))
this.a.TA(a2,a4,a6)
this.b.TA(a3,a5,a7)
x=1-a8
w=a2.l3(x).V(0,a3.l3(a8))
v=a4.l3(x).V(0,a5.l3(a8))
u=new Float64Array(4)
t=new A.qf(u)
t.bg(v)
t.va(0)
s=a6.l3(x).V(0,a7.l3(a8))
x=new Float64Array(16)
v=new C.aN(x)
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
v.bp(0,s)
return v}}
A.BS.prototype={
aG(){return new A.a_K(null,null,B.p)}}
A.a_K.prototype={
of(d){var x,w,v=this,u=null,t=v.CW
v.a.toString
x=y.K
v.CW=x.a(d.$3(t,u,new A.avx()))
t=v.cx
v.a.toString
w=y.Z
v.cx=w.a(d.$3(t,u,new A.avy()))
t=y.h
v.cy=t.a(d.$3(v.cy,v.a.y,new A.avz()))
v.db=t.a(d.$3(v.db,v.a.z,new A.avA()))
v.dx=y.E.a(d.$3(v.dx,v.a.Q,new A.avB()))
t=v.dy
v.a.toString
v.dy=w.a(d.$3(t,u,new A.avC()))
t=v.fr
v.a.toString
v.fr=y.e.a(d.$3(t,u,new A.avD()))
t=v.fx
v.a.toString
v.fx=x.a(d.$3(t,u,new A.avE()))},
L(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.ghX(),n=q.CW
n=n==null?p:n.ab(0,o.gn(o))
x=q.cx
x=x==null?p:x.ab(0,o.gn(o))
w=q.cy
w=w==null?p:w.ab(0,o.gn(o))
v=q.db
v=v==null?p:v.ab(0,o.gn(o))
u=q.dx
u=u==null?p:u.ab(0,o.gn(o))
t=q.dy
t=t==null?p:t.ab(0,o.gn(o))
s=q.fr
s=s==null?p:s.ab(0,o.gn(o))
r=q.fx
r=r==null?p:r.ab(0,o.gn(o))
return C.bB(n,q.a.r,B.m,p,u,w,v,p,t,x,s,r,p)}}
A.qf.prototype={
bg(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
Zu(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
va(d){var x,w,v=Math.sqrt(this.goo())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
goo(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gl(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
l3(d){var x=new Float64Array(4),w=new A.qf(x)
w.bg(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
a0(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gasc(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=B.d.a0(g,a4)
x=B.d.a0(d,a1)
w=B.d.a0(e,a2)
v=B.d.a0(f,a3)
u=B.d.a0(g,a3)
t=B.d.a0(e,a1)
s=B.d.a0(f,a4)
r=B.d.a0(d,a2)
q=B.d.a0(g,a2)
p=B.d.a0(f,a1)
o=B.d.a0(d,a3)
n=B.d.a0(e,a4)
m=B.d.a0(g,a1)
l=B.d.a0(d,a4)
k=B.d.a0(e,a3)
j=B.d.a0(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.qf(i)},
V(d,e){var x,w=new Float64Array(4),v=new A.qf(w)
v.bg(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
ac(d,e){var x,w=new Float64Array(4),v=new A.qf(w)
v.bg(this)
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
var z=a.updateTypes(["p1(@)","pk(@)","~(j4,z)","rM(@)","tV(@)"])
A.avx.prototype={
$1(d){return new A.p1(y.D.a(d),null)},
$S:z+0}
A.avy.prototype={
$1(d){return new A.pk(y.W.a(d),null)},
$S:z+1}
A.avz.prototype={
$1(d){return new C.nA(y.S.a(d),null)},
$S:162}
A.avA.prototype={
$1(d){return new C.nA(y.S.a(d),null)},
$S:162}
A.avB.prototype={
$1(d){return new A.rM(y.k.a(d),null)},
$S:z+3}
A.avC.prototype={
$1(d){return new A.pk(y.W.a(d),null)},
$S:z+1}
A.avD.prototype={
$1(d){return new A.tV(y.w.a(d),null)},
$S:z+4}
A.avE.prototype={
$1(d){return new A.p1(y.D.a(d),null)},
$S:z+0};(function installTearOffs(){var x=a._instance_2u
x(A.R4.prototype,"gO6","abh",2)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.CE,C.aL)
w(C.x,[A.Db,A.R4,A.qf])
w(C.aW,[A.p1,A.rM,A.pk,A.tV])
x(A.BS,C.xD)
x(A.a_K,C.rt)
w(C.bA,[A.avx,A.avy,A.avz,A.avA,A.avB,A.avC,A.avD,A.avE])})()
C.cc(b.typeUniverse,JSON.parse('{"CE":{"aL":[],"i":[]},"p1":{"aW":["hE?"],"aR":["hE?"],"aR.T":"hE?","aW.T":"hE?"},"rM":{"aW":["ax"],"aR":["ax"],"aR.T":"ax","aW.T":"ax"},"pk":{"aW":["cW"],"aR":["cW"],"aR.T":"cW","aW.T":"cW"},"tV":{"aW":["aN"],"aR":["aN"],"aR.T":"aN","aW.T":"aN"},"BS":{"a4":[],"i":[]},"a_K":{"an":["BS"]}}'))
var y=(function rtii(){var x=C.u
return{D:x("hE"),k:x("ax"),S:x("hI"),W:x("cW"),s:x("j<f>"),w:x("aN"),l:x("eQ"),K:x("p1?"),E:x("rM?"),h:x("nA?"),Z:x("pk?"),e:x("tV?")}})()}
$__dart_deferred_initializers__["O0oUx+6+npSrpar9fO1M9duwnQw="] = $__dart_deferred_initializers__.current
