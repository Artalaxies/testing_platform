self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={aq6:function aq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aq7:function aq7(){},aq8:function aq8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aq4:function aq4(){},aq5:function aq5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},yj:function yj(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.qc$=d
_.cg$=e
_.a8$=f
_.a=null},VZ:function VZ(d,e,f,g,h,i,j){var _=this
_.cr=d
_.aO=e
_.aL=f
_.aQ=$
_.dH=!0
_.cp$=g
_.U$=h
_.bM$=i
_.k4=null
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=j
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
aNx(d,e,f,g,h){return new A.Xg(new A.aq5(f,h,g,d),B.h1(e,!0,!0,!0),null)},
Xg:function Xg(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[21],A)
C=c[2]
B=c[0]
A.aq6.prototype={
XX(d){var x=this.c
return d.tB(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bx(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.aq7.prototype={}
A.aq8.prototype={
Yf(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.eb(d/x)-1)
return 0},
aa0(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ai(d){var x=this,w=x.a,v=C.e.c2(d,w)
return new A.aq6(C.e.hg(d,w)*x.b,x.aa0(v*x.c),x.d,x.e)},
Sw(d){var x=this.b
return x*(C.e.hg(d-1,this.a)+1)-(x-this.d)}}
A.aq4.prototype={}
A.aq5.prototype={
J6(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.aq8(v,t+x.b,u+w,t,u,B.aBY(d.y))}}
A.yj.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a1p(0)}}
A.VZ.prototype={
eA(d){if(!(d.e instanceof A.yj))d.e=new A.yj(!1,null,null)},
sYD(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a1()
w.cr=d},
pM(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
ca(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.A.prototype.gaf.call(a3)),a6=a3.aO
a6.aX=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.J6(a5)
t=u.b
s=t>1e-10?u.a*C.d.hg(w,t):0
r=isFinite(v)?u.Yf(v):a4
t=a3.U$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bM$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.e.H(s-t,0,a3.cp$)
a3.nU(o,r==null?0:C.e.H(p-r,0,a3.cp$))}else a3.nU(0,0)
n=u.Ai(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.ET(s,m)){k=u.Sw(a6.gtI())
a3.k4=B.ja(a4,!1,a4,a4,k,0,0,k,a4)
a6.o1()
return}t=a3.U$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.Ai(j)
p=h.c
g=a3.UO(a5.tB(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eW(0,n.XX(a5))
i=a3.U$
p=i.e
p.toString
t.a(p)
p.a=m
p.x=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.r(a3).h("aj.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Ai(j)
e=h.c
d=a5.tB(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a8$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.UM(d,i)
if(g==null)break}else g.eW(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.x=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bM$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.Go(a5,s,t,m,l)
a2=a3.iG(a5,Math.min(x,m),l)
a3.k4=B.ja(a3.pK(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aX=!0
a6.o1()}}
A.Xg.prototype={
b0(d){var x=new A.VZ(this.f,y.v.a(d),B.z(y.e,y.g),0,null,null,B.av(y.d))
x.gaG()
x.gaY()
x.fr=!1
return x},
bc(d,e){e.sYD(this.f)},
Gn(d,e,f,g,h){var x,w
this.a1q(d,e,f,g,h)
x=this.f.J6(d)
w=this.d.gq7()
w.toString
x=x.Sw(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[A.aq6,A.aq7,A.aq4])
w(A.aq8,A.aq7)
w(A.aq5,A.aq4)
w(A.yj,B.f6)
w(A.VZ,B.mc)
w(A.Xg,B.mj)})()
B.cc(b.typeUniverse,JSON.parse('{"yj":{"f6":[],"q_":[],"fc":["E"],"lR":[]},"VZ":{"mc":[],"cW":[],"aj":["E","f6"],"A":[],"P":[],"aB":[],"aj.1":"f6","aj.0":"E"},"Xg":{"mj":[],"aD":[],"i":[]}}'))
var y={d:B.u("d_"),x:B.u("k<f>"),g:B.u("E"),z:B.u("mi"),t:B.u("yj"),v:B.u("ub"),c:B.u("f6"),e:B.u("o")}}
$__dart_deferred_initializers__["bjy+GcRzSiIdQwWC32XesmIa3WA="] = $__dart_deferred_initializers__.current
