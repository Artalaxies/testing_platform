self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ar6:function ar6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ar7:function ar7(){},ar8:function ar8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ar4:function ar4(){},ar5:function ar5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},yj:function yj(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.qa$=d
_.cg$=e
_.a8$=f
_.a=null},W8:function W8(d,e,f,g,h,i,j){var _=this
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
aOR(d,e,f,g,h){return new A.Xr(new A.ar5(f,h,g,d),B.h1(e,!0,!0,!0),null)},
Xr:function Xr(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[21],A)
C=c[2]
B=c[0]
A.ar6.prototype={
XU(d){var x=this.c
return d.tz(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bx(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.ar7.prototype={}
A.ar8.prototype={
Yc(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.ea(d/x)-1)
return 0},
a9X(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Af(d){var x=this,w=x.a,v=C.e.c2(d,w)
return new A.ar6(C.e.hg(d,w)*x.b,x.a9X(v*x.c),x.d,x.e)},
Sv(d){var x=this.b
return x*(C.e.hg(d-1,this.a)+1)-(x-this.d)}}
A.ar4.prototype={}
A.ar5.prototype={
J5(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.ar8(v,t+x.b,u+w,t,u,B.aDe(d.y))}}
A.yj.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a1m(0)}}
A.W8.prototype={
eA(d){if(!(d.e instanceof A.yj))d.e=new A.yj(!1,null,null)},
sYA(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a1()
w.cr=d},
pL(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
ca(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.A.prototype.gaf.call(a3)),a6=a3.aO
a6.aX=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.J5(a5)
t=u.b
s=t>1e-10?u.a*C.d.hg(w,t):0
r=isFinite(v)?u.Yc(v):a4
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
a3.nS(o,r==null?0:C.e.H(p-r,0,a3.cp$))}else a3.nS(0,0)
n=u.Af(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EP(s,m)){k=u.Sv(a6.gtF())
a3.k4=B.j8(a4,!1,a4,a4,k,0,0,k,a4)
a6.o_()
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
for(;j>=s;--j){h=u.Af(j)
p=h.c
g=a3.UN(a5.tz(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eW(0,n.XU(a5))
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
p=B.t(a3).h("aj.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Af(j)
e=h.c
d=a5.tz(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a8$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.UL(d,i)
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
a1=a6.Gm(a5,s,t,m,l)
a2=a3.iG(a5,Math.min(x,m),l)
a3.k4=B.j8(a3.pJ(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aX=!0
a6.o_()}}
A.Xr.prototype={
b0(d){var x=new A.W8(this.f,y.v.a(d),B.z(y.e,y.g),0,null,null,B.av(y.d))
x.gaG()
x.gaY()
x.fr=!1
return x},
bc(d,e){e.sYA(this.f)},
Gl(d,e,f,g,h){var x,w
this.a1n(d,e,f,g,h)
x=this.f.J5(d)
w=this.d.gq5()
w.toString
x=x.Sv(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[A.ar6,A.ar7,A.ar4])
w(A.ar8,A.ar7)
w(A.ar5,A.ar4)
w(A.yj,B.f5)
w(A.W8,B.m8)
w(A.Xr,B.mf)})()
B.cc(b.typeUniverse,JSON.parse('{"yj":{"f5":[],"q_":[],"fa":["E"],"lO":[]},"W8":{"m8":[],"cW":[],"aj":["E","f5"],"A":[],"P":[],"aB":[],"aj.1":"f5","aj.0":"E"},"Xr":{"mf":[],"aD":[],"i":[]}}'))
var y={d:B.v("d_"),x:B.v("k<f>"),g:B.v("E"),z:B.v("me"),t:B.v("yj"),v:B.v("u7"),c:B.v("f5"),e:B.v("p")}}
$__dart_deferred_initializers__["7QUjCrlap6FLgJfAAd1hx22HcD4="] = $__dart_deferred_initializers__.current
