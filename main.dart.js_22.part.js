self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={aqD:function aqD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aqE:function aqE(){},aqF:function aqF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aqB:function aqB(){},aqC:function aqC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},y9:function y9(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.qb$=d
_.cg$=e
_.a8$=f
_.a=null},VV:function VV(d,e,f,g,h,i,j){var _=this
_.cr=d
_.aN=e
_.aL=f
_.aP=$
_.dG=!0
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
aGK(d,e,f,g,h){return new A.Xd(new A.aqC(f,h,g,d),B.hz(e,!0,!0,!0),null)},
Xd:function Xd(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[31],A)
C=c[2]
B=c[0]
A.aqD.prototype={
XK(d){var x=this.c
return d.tA(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bx(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.aqE.prototype={}
A.aqF.prototype={
Y2(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.ea(d/x)-1)
return 0},
a9L(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Aa(d){var x=this,w=x.a,v=C.e.c5(d,w)
return new A.aqD(C.e.hg(d,w)*x.b,x.a9L(v*x.c),x.d,x.e)},
Sl(d){var x=this.b
return x*(C.e.hg(d-1,this.a)+1)-(x-this.d)}}
A.aqB.prototype={}
A.aqC.prototype={
IW(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.aqF(v,t+x.b,u+w,t,u,B.aCB(d.y))}}
A.y9.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a1b(0)}}
A.VV.prototype={
eA(d){if(!(d.e instanceof A.y9))d.e=new A.y9(!1,null,null)},
sYp(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a0()
w.cr=d},
pL(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
ca(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.A.prototype.gaf.call(a3)),a6=a3.aN
a6.aW=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.IW(a5)
t=u.b
s=t>1e-10?u.a*C.d.hg(w,t):0
r=isFinite(v)?u.Y2(v):a4
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
a3.nP(o,r==null?0:C.e.H(p-r,0,a3.cp$))}else a3.nP(0,0)
n=u.Aa(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EJ(s,m)){k=u.Sl(a6.gtG())
a3.k4=B.j2(a4,!1,a4,a4,k,0,0,k,a4)
a6.nX()
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
for(;j>=s;--j){h=u.Aa(j)
p=h.c
g=a3.UF(a5.tA(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eV(0,n.XK(a5))
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
h=u.Aa(j)
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
if(a0){g=a3.UD(d,i)
if(g==null)break}else g.eV(0,d)
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
a1=a6.Ge(a5,s,t,m,l)
a2=a3.iE(a5,Math.min(x,m),l)
a3.k4=B.j2(a3.pJ(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aW=!0
a6.nX()}}
A.Xd.prototype={
b_(d){var x=new A.VV(this.f,y.v.a(d),B.z(y.e,y.g),0,null,null,B.as(y.d))
x.gaF()
x.gaX()
x.fr=!1
return x},
bc(d,e){e.sYp(this.f)},
Gd(d,e,f,g,h){var x,w
this.a1c(d,e,f,g,h)
x=this.f.IW(d)
w=this.d.gq6()
w.toString
x=x.Sl(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.y,[A.aqD,A.aqE,A.aqB])
w(A.aqF,A.aqE)
w(A.aqC,A.aqB)
w(A.y9,B.f3)
w(A.VV,B.m2)
w(A.Xd,B.m9)})()
B.cc(b.typeUniverse,JSON.parse('{"y9":{"f3":[],"pX":[],"f9":["E"],"lI":[]},"VV":{"m2":[],"cV":[],"aj":["E","f3"],"A":[],"N":[],"az":[],"aj.1":"f3","aj.0":"E"},"Xd":{"m9":[],"aB":[],"i":[]}}'))
var y={d:B.v("cZ"),x:B.v("j<h>"),g:B.v("E"),z:B.v("m8"),t:B.v("y9"),v:B.v("u1"),c:B.v("f3"),e:B.v("p")}}
$__dart_deferred_initializers__["nxAnaaq+asOxnuTTo/LnWYj3YTw="] = $__dart_deferred_initializers__.current
