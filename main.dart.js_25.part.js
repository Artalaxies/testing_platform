self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={aqW:function aqW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aqX:function aqX(){},aqY:function aqY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aqU:function aqU(){},aqV:function aqV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},yf:function yf(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.qb$=d
_.cg$=e
_.a8$=f
_.a=null},VY:function VY(d,e,f,g,h,i,j){var _=this
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
aOy(d,e,f,g,h){return new A.Xh(new A.aqV(f,h,g,d),B.h1(e,!0,!0,!0),null)},
Xh:function Xh(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[21],A)
C=c[2]
B=c[0]
A.aqW.prototype={
XL(d){var x=this.c
return d.tA(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bx(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.aqX.prototype={}
A.aqY.prototype={
Y3(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.ea(d/x)-1)
return 0},
a9M(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ab(d){var x=this,w=x.a,v=C.e.c4(d,w)
return new A.aqW(C.e.hg(d,w)*x.b,x.a9M(v*x.c),x.d,x.e)},
Sm(d){var x=this.b
return x*(C.e.hg(d-1,this.a)+1)-(x-this.d)}}
A.aqU.prototype={}
A.aqV.prototype={
IW(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.aqY(v,t+x.b,u+w,t,u,B.aD6(d.y))}}
A.yf.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a1c(0)}}
A.VY.prototype={
eA(d){if(!(d.e instanceof A.yf))d.e=new A.yf(!1,null,null)},
sYq(d){var x,w=this
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
u=a3.cr.IW(a5)
t=u.b
s=t>1e-10?u.a*C.d.hg(w,t):0
r=isFinite(v)?u.Y3(v):a4
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
a3.nR(o,r==null?0:C.e.H(p-r,0,a3.cp$))}else a3.nR(0,0)
n=u.Ab(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EK(s,m)){k=u.Sm(a6.gtG())
a3.k4=B.j4(a4,!1,a4,a4,k,0,0,k,a4)
a6.nZ()
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
for(;j>=s;--j){h=u.Ab(j)
p=h.c
g=a3.UG(a5.tA(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eW(0,n.XL(a5))
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
h=u.Ab(j)
e=h.c
d=a5.tA(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a8$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.UE(d,i)
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
a1=a6.Gf(a5,s,t,m,l)
a2=a3.iF(a5,Math.min(x,m),l)
a3.k4=B.j4(a3.pJ(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aX=!0
a6.nZ()}}
A.Xh.prototype={
b_(d){var x=new A.VY(this.f,y.v.a(d),B.z(y.e,y.g),0,null,null,B.av(y.d))
x.gaG()
x.gaY()
x.fr=!1
return x},
bc(d,e){e.sYq(this.f)},
Ge(d,e,f,g,h){var x,w
this.a1d(d,e,f,g,h)
x=this.f.IW(d)
w=this.d.gq6()
w.toString
x=x.Sm(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[A.aqW,A.aqX,A.aqU])
w(A.aqY,A.aqX)
w(A.aqV,A.aqU)
w(A.yf,B.f4)
w(A.VY,B.m9)
w(A.Xh,B.mg)})()
B.cc(b.typeUniverse,JSON.parse('{"yf":{"f4":[],"pZ":[],"fa":["E"],"lO":[]},"VY":{"m9":[],"cW":[],"aj":["E","f4"],"A":[],"O":[],"aB":[],"aj.1":"f4","aj.0":"E"},"Xh":{"mg":[],"aD":[],"i":[]}}'))
var y={d:B.v("d_"),x:B.v("k<f>"),g:B.v("E"),z:B.v("mf"),t:B.v("yf"),v:B.v("u6"),c:B.v("f4"),e:B.v("p")}}
$__dart_deferred_initializers__["wgjxHfAz5RZSQt1+tgYctDj0R4A="] = $__dart_deferred_initializers__.current
