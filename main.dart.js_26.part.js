self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={lv:function lv(d){this.b=null
this.a=d},mV:function mV(){},S7:function S7(){},HZ:function HZ(d,e){this.a=d
this.b=e},yu:function yu(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.B=d
_.P=e
_.X=f
_.an=g
_.t=h
_.D=i
_.S=j
_.bj=_.O=null
_.cm=k
_.cj=l
_.cS=m
_.dI=null
_.d5=n
_.go=_.fy=_.fT=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=o
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},aoK:function aoK(){},aoL:function aoL(d,e,f){this.a=d
this.b=e
this.c=f},
at1(d,e,f,g,h){var x
if(C.c.eO(e,new A.at3())){x=B.a9(e).i("af<1,hI?>")
x=B.a3(new B.af(e,new A.at4(),x),!1,x.i("az.E"))}else x=null
return new A.HX(e,f,g,d,h,x,null)},
d6:function d6(d,e){this.b=d
this.c=e},
iM:function iM(d,e){this.a=d
this.b=e},
HX:function HX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.y=i
_.a=j},
at3:function at3(){},
at4:function at4(){},
a5c:function a5c(d,e,f,g){var _=this
_.p3=d
_.p4=!1
_.R8=e
_.d=_.c=_.b=_.a=_.cx=_.ch=null
_.e=$
_.f=f
_.r=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
aBh:function aBh(d,e){this.a=d
this.b=e},
aBg:function aBg(d,e,f){this.a=d
this.b=e
this.c=f},
aBi:function aBi(){},
aBj:function aBj(d){this.a=d},
aBf:function aBf(){},
aBe:function aBe(){},
aBk:function aBk(){},
Bj:function Bj(d,e){this.a=d
this.b=e},
a6X:function a6X(){}},B,J,C,E,D
A=a.updateHolder(c[28],A)
B=c[0]
J=c[1]
C=c[2]
E=c[66]
D=c[48]
A.lv.prototype={
j(d){var x=this.rH(0)
return x+"; default vertical alignment"}}
A.mV.prototype={
GD(d,e){return null},
j(d){return"TableColumnWidth"}}
A.S7.prototype={
zQ(d,e){return 0},
zN(d,e){return 0},
GD(d,e){return 1},
j(d){return"FlexColumnWidth("+B.kw(1)+")"}}
A.HZ.prototype={
j(d){return"TableCellVerticalAlignment."+this.b}}
A.yu.prototype={
sajW(d){var x=this.an
if(x===d)return
if(x.ga4(x)&&d==null)return
this.an=d==null?B.ec(null,null,y.p,y.w):d
this.a_()},
sakV(d){if(this.t===d)return
this.t=d
this.a_()},
sbR(d,e){if(this.D===e)return
this.D=e
this.a_()},
sajh(d,e){if(J.e(this.S,e))return
this.S=e
this.aI()},
sXp(d){var x,w,v,u=this,t=u.O
if(t==null?d==null:t===d)return
u.O=d
t=u.bj
if(t!=null)for(x=t.length,w=0;w<x;++w){v=t[w]
if(v!=null)v.p(0)}t=u.O
u.bj=t!=null?B.bt(t.length,null,!1,y.G):null},
so1(d){if(d.k(0,this.cm))return
this.cm=d
this.aI()},
sakY(d){if(this.cj===d)return
this.cj=d
this.a_()},
sAn(d,e){return},
ev(d){if(!(d.e instanceof A.lv))d.e=new A.lv(C.j)},
Zt(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=o.B
if(e===n&&d===o.P)return
if(d===0||e.length===0){o.P=d
x=n.length
if(x===0)return
for(w=0;w<n.length;n.length===x||(0,B.K)(n),++w){v=n[w]
if(v!=null)o.iV(v)}o.X=0
C.c.sl(o.B,0)
o.a_()
return}u=B.d5(null,null,y.x)
for(t=0;t<o.X;++t)for(n=t*d,s=0;x=o.P,s<x;++s){r=s+t*x
q=s+n
x=o.B[r]
if(x!=null)x=s>=d||q>=e.length||!J.e(x,e[q])
else x=!1
if(x){x=o.B[r]
x.toString
u.E(0,x)}}for(t=0;n=t*d,n<e.length;){for(s=0;s<d;++s){q=s+n
x=o.P
p=e[q]
if(p!=null)x=s>=x||t>=o.X||!J.e(o.B[s+t*x],p)
else x=!1
if(x)if(!u.A(0,e[q])){x=e[q]
x.toString
o.ev(x)
o.a_()
o.qD()
o.aK()
o.Bx(x)}}++t}u.a7(0,o.galJ())
o.P=d
o.X=C.f.hs(e.length,d)
o.B=B.a3(e,!0,y.B)
o.a_()},
JO(d,e,f){var x=this,w=d+e*x.P,v=x.B[w]
if(v==f)return
if(v!=null)x.iV(v)
C.c.m(x.B,w,f)
if(f!=null)x.i2(f)},
aC(d){var x,w,v,u
this.dZ(d)
for(x=this.B,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
if(u!=null)u.aC(d)}},
aq(d){var x,w,v,u,t,s=this
s.dF(0)
x=s.bj
if(x!=null){for(w=x.length,v=0;v<w;++v){u=x[v]
if(u!=null)u.p(0)}s.bj=B.bt(s.O.length,null,!1,y.G)}for(x=s.B,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){t=x[v]
if(t!=null)J.aKX(t)}},
bF(d){var x,w,v,u
for(x=this.B,w=x.length,v=0;v<x.length;x.length===w||(0,B.K)(x),++v){u=x[v]
if(u!=null)d.$1(u)}},
bn(d){var x,w,v,u=this
for(x=0,w=0;w<u.P;++w){v=u.an.h(0,w)
if(v==null)v=u.t
x+=v.zQ(u.yD(w),1/0)}return x},
bl(d){var x,w,v,u=this
for(x=0,w=0;w<u.P;++w){v=u.an.h(0,w)
if(v==null)v=u.t
x+=v.zN(u.yD(w),1/0)}return x},
be(d){var x,w,v,u,t,s,r=this,q=r.CD(B.hb(1/0,d))
for(x=0,w=0;w<r.X;++w){for(v=0,u=0;t=r.P,u<t;++u){s=r.B[u+w*t]
if(s!=null)v=Math.max(v,s.aA(C.bk,q[u],s.gc7()))}x+=v}return x},
bk(d){return this.be(d)},
ek(d){return this.dI},
yD(d){return this.ajV(d)},
ajV(d){var x=this
return B.Mm(function(){var w=d
var v=0,u=1,t,s,r,q
return function $async$yD(e,f){if(e===1){t=f
v=u}while(true)switch(v){case 0:s=0
case 2:if(!(s<x.X)){v=4
break}r=x.P
q=x.B[w+s*r]
v=q!=null?5:6
break
case 5:v=7
return q
case 7:case 6:case 3:++s
v=2
break
case 4:return B.JO()
case 1:return B.JP(t)}}},y.x)},
CD(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=y.i,a4=B.bt(a2.P,0,!1,a3),a5=B.bt(a2.P,0,!1,a3),a6=B.bt(a2.P,null,!1,y.s)
for(x=a7.b,w=0,v=0,u=0,t=0;s=a2.P,t<s;++t){r=a2.an.h(0,t)
if(r==null)r=a2.t
q=a2.yD(t)
p=r.zN(q,x)
a4[t]=p
w+=p
a5[t]=r.zQ(q,x)
o=r.GD(0,q)
if(o!=null){a6[t]=o
u+=o}else v+=p}n=a7.a
if(u>0){m=isFinite(x)?x:n
if(w<m){l=m-v
for(t=0;t<s;++t){a3=a6[t]
if(a3!=null){k=l*a3/u
a3=a4[t]
if(a3<k){w+=k-a3
a4[t]=k}}}}}else if(w<n){j=(n-w)/s
for(t=0;t<s;++t)a4[t]=a4[t]+j
w=n}if(w>x){i=w-x
h=s
while(!0){if(!(i>1e-10&&u>1e-10))break
for(g=0,t=0;t<s;++t){a3=a6[t]
if(a3!=null){f=a4[t]
e=f-i*a3/u
d=a5[t]
if(e<=d){i-=f-d
a4[t]=d
a6[t]=null;--h}else{i-=f-e
a4[t]=e
g+=a3}}}u=g}while(!0){if(!(i>1e-10&&h>0))break
j=i/h
for(a0=0,t=0;t<s;++t){a3=a4[t]
f=a5[t]
a1=a3-f
if(a1>0)if(a1<=j){i-=a1
a4[t]=f}else{i-=j
a4[t]=a3-j;++a0}}h=a0}}return a4},
cw(d){var x,w,v,u,t,s,r,q,p,o=this
if(o.X*o.P===0)return d.b6(C.u)
x=o.CD(d)
w=C.c.uD(x,0,new A.aoK())
for(v=y.L,u=0,t=0;t<o.X;++t){for(s=0,r=0;q=o.P,r<q;++r){p=o.B[r+t*q]
if(p!=null){q=p.e
q.toString
v.a(q)
q=o.cj
switch(q.a){case 3:return C.u
case 0:case 1:case 2:s=Math.max(s,p.hP(B.kH(null,x[r])).b)
break
case 4:break}}}u+=s}return d.b6(new B.Z(w,u))},
bX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=y.k.a(B.E.prototype.gaf.call(a0)),a2=a0.X,a3=a0.P
if(a2*a3===0){a0.k1=a1.b6(C.u)
return}x=a0.CD(a1)
w=y.i
v=B.bt(a3,0,!1,w)
switch(a0.D.a){case 0:v[a3-1]=0
for(u=a3-2;u>=0;--u){t=u+1
v[u]=v[t]+x[t]}a0.fT=new B.c0(v,B.a9(v).i("c0<1>"))
s=C.c.gN(v)+C.c.gN(x)
break
case 1:v[0]=0
for(u=1;u<a3;++u){t=u-1
v[u]=v[t]+x[t]}a0.fT=v
s=C.c.gJ(v)+C.c.gJ(x)
break
default:s=null}t=a0.d5
C.c.sl(t,0)
a0.dI=null
for(r=y.L,q=0,p=0;p<a2;++p,q=e){t.push(q)
o=B.bt(a3,0,!1,w)
for(n=p*a3,m=0,l=!1,k=0,j=0,u=0;u<a3;++u){i=a0.B[u+n]
if(i!=null){h=i.e
h.toString
r.a(h)
g=a0.cj
switch(g.a){case 3:i.cT(0,B.kH(null,x[u]),!0)
g=a0.cS
g.toString
f=i.w5(g,!0)
g=i.k1
if(f!=null){k=Math.max(k,f)
j=Math.max(j,g.b-f)
o[u]=f
l=!0}else{m=Math.max(m,g.b)
h.a=new B.p(v[u],q)}break
case 0:case 1:case 2:i.cT(0,B.kH(null,x[u]),!0)
m=Math.max(m,i.k1.b)
break
case 4:break}}}if(l){if(p===0)a0.dI=k
m=Math.max(m,k+j)}for(e=q+m,h=q+k,u=0;u<a3;++u){i=a0.B[u+n]
if(i!=null){g=i.e
g.toString
r.a(g)
d=a0.cj
switch(d.a){case 3:g.a=new B.p(v[u],h-o[u])
break
case 0:g.a=new B.p(v[u],q)
break
case 1:g.a=new B.p(v[u],q+(m-i.k1.b)/2)
break
case 2:g.a=new B.p(v[u],e-i.k1.b)
break
case 4:i.eV(0,B.kH(m,x[u]))
g.a=new B.p(v[u],q)
break}}}}t.push(q)
a0.k1=a1.b6(new B.Z(s,q))},
d7(d,e){var x,w,v,u
for(x=this.B.length-1,w=y.r;x>=0;--x){v=this.B[x]
if(v!=null){u=v.e
u.toString
w.a(u)
if(d.lh(new A.aoL(e,u,v),u.a,e))return!0}}return!1},
b2(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
if(k.X*k.P===0){x=k.S
if(x!=null){w=e.a
v=e.b
u=k.k1.a
x.Wq(d.gcN(d),new B.D(w,v,w+u,v+0),E.k6,E.k6)}return}if(k.O!=null){t=d.gcN(d)
for(x=e.a,w=e.b,v=k.d5,u=k.geW(),s=0;s<k.X;++s){r=k.O
if(r.length<=s)break
r=r[s]
if(r!=null){q=k.bj
if(q[s]==null)q[s]=r.u3(u)
r=k.bj[s]
r.toString
q=v[s]
r.ik(t,new B.p(x,w+q),k.cm.FC(new B.Z(k.k1.a,v[s+1]-q)))}}}for(x=y.r,w=e.a,v=e.b,p=0;u=k.B,p<u.length;++p){o=u[p]
if(o!=null){u=o.e
u.toString
u=x.a(u).a
d.dW(o,new B.p(u.a+w,u.b+v))}}if(k.S!=null){x=k.k1.a
u=k.d5
r=C.c.gJ(u)
q=u.length
n=q-1
B.dY(1,n,q,null,null)
m=B.e8(u,1,n,B.a9(u).c)
u=k.fT
u.toString
l=J.MS(u,1)
u=k.S
u.toString
u.Wq(d.gcN(d),new B.D(w,v,w+x,v+r),l,m)}}}
A.d6.prototype={
j(d){var x=""+"TableRow(",w=this.b
if(w!=null)x+=w.j(0)+", "
w=this.c
x=w.length===0?x+"no children":x+B.d(w)
x+=")"
return x.charCodeAt(0)==0?x:x}}
A.iM.prototype={}
A.HX.prototype={
cz(d){return new A.a5c(D.X6,B.d5(null,null,y.h),this,C.aq)},
aW(d){var x,w,v,u,t=this,s=null,r=t.c,q=r.length
r=q!==0?r[0].c.length:0
x=t.d
w=d.W(y.I)
w.toString
w=w.f
v=B.Bx(d,s)
u=B.a([],y.n)
if(x==null)x=B.ec(s,s,y.p,y.w)
u=new A.yu(D.X5,r,q,x,t.e,w,t.r,v,t.w,s,u,B.ay(y.v))
u.gaD()
u.gaT()
u.CW=!1
r=B.a([],y.q)
C.c.sl(r,u.P*u.X)
u.B=r
u.sXp(t.y)
return u},
b0(d,e){var x,w=this
e.sajW(w.d)
e.sakV(w.e)
x=d.W(y.I)
x.toString
e.sbR(0,x.f)
e.sajh(0,w.r)
e.sXp(w.y)
e.so1(B.Bx(d,null))
e.sakY(w.w)
e.sAn(0,null)}}
A.a5c.prototype={
gH(){return y.S.a(B.bI.prototype.gH.call(this))},
hi(d,e){var x,w,v=this,u={}
v.p4=!0
v.pg(d,e)
u.a=-1
x=v.f
x.toString
x=y._.a(x).c
w=B.a9(x).i("af<1,iM>")
v.p3=B.a3(new B.af(x,new A.aBh(u,v),w),!1,w.i("az.E"))
v.Ri()
v.p4=!1},
jJ(d,e){var x=y.S
x.a(B.bI.prototype.gH.call(this))
if(!(d.e instanceof A.lv))d.e=new A.lv(C.j)
if(!this.p4)x.a(B.bI.prototype.gH.call(this)).JO(e.a,e.b,d)},
jM(d,e,f){},
jP(d,e){y.S.a(B.bI.prototype.gH.call(this)).JO(e.a,e.b,null)},
aN(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
h.p4=!0
x=y.O
w=B.B(y.Y,x)
for(v=h.p3,u=v.length,t=0;t<u;++t)v[t].toString
u=C.c.ga2(v)
s=new B.fF(u,new A.aBi(),B.a9(v).i("fF<1>"))
r=B.a([],y.R)
for(v=e.c,q=h.R8,p=y.J,o=0;o<v.length;++o){n=v[o]
m=s.q()
l=m?u.gF(u).b:C.X7
m=n.c
k=m.length
j=B.a(new Array(k),p)
for(i=0;i<k;++i)j[i]=new A.Bj(i,o)
r.push(new A.iM(null,h.XI(l,m,q,j)))}for(;s.q();)h.IM(u.gF(u).b,C.w8,q)
for(v=w.gaP(w),u=v.ga2(v),v=new B.fF(u,new A.aBj(B.N(x)),B.q(v).i("fF<w.E>"));v.q();)h.IM(u.gF(u),C.w8,q)
h.p3=r
h.Ri()
q.aV(0)
h.m4(0,e)
h.p4=!1},
Ri(){var x,w,v=y.S.a(B.bI.prototype.gH.call(this)),u=this.p3
u=u.length!==0?J.bU(u[0].b):0
x=this.p3
w=B.a9(x).i("j_<1,F>")
v.Zt(u,B.a3(new B.j_(x,new A.aBf(),w),!0,w.i("w.E")))},
bF(d){var x,w,v,u
for(x=this.p3,w=B.a9(x),w=w.i("@<1>").al(w.i("b8")),x=new B.mf(C.c.ga2(x),new A.aBk(),C.ej,w.i("mf<1,2>")),v=this.R8,w=w.z[1];x.q();){u=x.d
if(u==null)u=w.a(u)
if(!v.v(0,u))d.$1(u)}},
jH(d){this.R8.E(0,d)
this.l8(d)
return!0}}
A.Bj.prototype={
k(d,e){if(e==null)return!1
if(J.a7(e)!==B.I(this))return!1
return e instanceof A.Bj&&this.a===e.a&&this.b===e.b},
gu(d){return B.ac(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.a6X.prototype={}
var z=a.updateTypes(["L(L)","z(d6)","hI?(d6)","iM(d6)","z(iM)","w<F>(iM)","m<b8>(iM)"])
A.aoK.prototype={
$2(d,e){return d+e},
$S:96}
A.aoL.prototype={
$2(d,e){return this.c.cg(d,e)},
$S:8}
A.at3.prototype={
$1(d){return d.b!=null},
$S:z+1}
A.at4.prototype={
$1(d){return d.b},
$S:z+2}
A.aBh.prototype={
$1(d){var x,w,v,u={}
u.a=0
x=this.a;++x.a
w=d.c
v=B.a9(w).i("af<1,b8>")
return new A.iM(null,B.a3(new B.af(w,new A.aBg(u,x,this.b),v),!1,v.i("az.E")))},
$S:z+3}
A.aBg.prototype={
$1(d){return this.c.uP(d,new A.Bj(this.a.a++,this.b.a))},
$S:513}
A.aBi.prototype={
$1(d){return!0},
$S:z+4}
A.aBj.prototype={
$1(d){return!this.a.v(0,d)},
$S:514}
A.aBf.prototype={
$1(d){return J.fj(d.b,new A.aBe(),y.x)},
$S:z+5}
A.aBe.prototype={
$1(d){var x=d.gH()
x.toString
return y.x.a(x)},
$S:515}
A.aBk.prototype={
$1(d){return d.b},
$S:z+6};(function installTearOffs(){var x=a._instance_1u
var w
x(w=A.yu.prototype,"gbm","bn",0)
x(w,"gbr","bl",0)
x(w,"gbQ","be",0)
x(w,"gc7","bk",0)})();(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(A.lv,B.f1)
v(B.x,[A.mV,A.d6,A.iM,A.a6X])
w(A.S7,A.mV)
w(A.HZ,B.lK)
w(A.yu,B.F)
v(B.eJ,[A.aoK,A.aoL])
w(A.HX,B.aE)
v(B.bA,[A.at3,A.at4,A.aBh,A.aBg,A.aBi,A.aBj,A.aBf,A.aBe,A.aBk])
w(A.a5c,B.bI)
w(A.Bj,A.a6X)
x(A.a6X,B.aD)})()
B.cc(b.typeUniverse,JSON.parse('{"lv":{"f1":[],"cY":[]},"S7":{"mV":[]},"HZ":{"a_":[]},"yu":{"F":[],"E":[],"Y":[],"at":[]},"HX":{"aE":[],"i":[]},"a5c":{"bI":[],"b8":[],"a5":[]}}'))
var y=(function rtii(){var x=B.u
return{k:x("ax"),r:x("f1"),v:x("cO"),I:x("fJ"),h:x("b8"),R:x("j<iM>"),J:x("j<Bj>"),n:x("j<L>"),q:x("j<F?>"),O:x("m<b8>"),Y:x("nT"),x:x("F"),S:x("yu"),_:x("HX"),L:x("lv"),w:x("mV"),i:x("L"),p:x("n"),G:x("p6?"),B:x("F?"),s:x("L?")}})();(function constants(){var x=a.makeConstList
D.ek=new A.S7()
D.afO=B.a(x([]),B.u("j<d6>"))
D.X6=B.a(x([]),y.R)
D.X5=B.a(x([]),y.q)
D.afR=new A.HZ(0,"top")
D.ir=new A.HZ(1,"middle")})()}
$__dart_deferred_initializers__["dIhfnyAt+dk9ZsQNR5HRAc/aI6E="] = $__dart_deferred_initializers__.current
