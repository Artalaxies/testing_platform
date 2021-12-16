self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={apY:function apY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},apZ:function apZ(){},aq_:function aq_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},apW:function apW(){},apX:function apX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},xV:function xV(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.q9$=d
_.cg$=e
_.a6$=f
_.a=null},VR:function VR(d,e,f,g,h,i,j){var _=this
_.cr=d
_.aL=e
_.aJ=f
_.aN=$
_.dF=!0
_.cp$=g
_.U$=h
_.bK$=i
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
aMR(d,e,f,g,h){return new A.Xa(new A.apX(f,h,g,d),B.iK(e,!0,!0,!0),null)},
Xa:function Xa(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
A.apY.prototype={
XC(d){var x=this.c
return d.tC(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bt(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.apZ.prototype={}
A.aq_.prototype={
XV(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.e8(d/x)-1)
return 0},
a9G(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A4(d){var x=this,w=x.a,v=C.e.c5(d,w)
return new A.apY(C.e.hg(d,w)*x.b,x.a9G(v*x.c),x.d,x.e)},
Sa(d){var x=this.b
return x*(C.e.hg(d-1,this.a)+1)-(x-this.d)}}
A.apW.prototype={}
A.apX.prototype={
IN(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.aq_(v,t+x.b,u+w,t,u,B.aBu(d.y))}}
A.xV.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a15(0)}}
A.VR.prototype={
eB(d){if(!(d.e instanceof A.xV))d.e=new A.xV(!1,null,null)},
sYh(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a_()
w.cr=d},
pJ(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
c9(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.A.prototype.gac.call(a3)),a6=a3.aL
a6.aX=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.IN(a5)
t=u.b
s=t>1e-10?u.a*C.d.hg(w,t):0
r=isFinite(v)?u.XV(v):a4
t=a3.U$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bK$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.e.G(s-t,0,a3.cp$)
a3.nN(o,r==null?0:C.e.G(p-r,0,a3.cp$))}else a3.nN(0,0)
n=u.A4(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EE(s,m)){k=u.Sa(a6.gtI())
a3.k4=B.iL(a4,!1,a4,a4,k,0,0,k,a4)
a6.nW()
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
for(;j>=s;--j){h=u.A4(j)
p=h.c
g=a3.Ux(a5.tC(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eU(0,n.XC(a5))
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
p=B.r(a3).h("ai.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.A4(j)
e=h.c
d=a5.tC(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a6$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.Uv(d,i)
if(g==null)break}else g.eU(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.x=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bK$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.G7(a5,s,t,m,l)
a2=a3.iG(a5,Math.min(x,m),l)
a3.k4=B.iL(a3.pH(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aX=!0
a6.nW()}}
A.Xa.prototype={
b_(d){var x=new A.VR(this.f,y.v.a(d),B.x(y.e,y.g),0,null,null,B.as(y.d))
x.gaD()
x.gaY()
x.fr=!1
return x},
bc(d,e){e.sYh(this.f)},
G6(d,e,f,g,h){var x,w
this.a16(d,e,f,g,h)
x=this.f.IN(d)
w=this.d.gq3()
w.toString
x=x.Sa(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.z,[A.apY,A.apZ,A.apW])
w(A.aq_,A.apZ)
w(A.apX,A.apW)
w(A.xV,B.eW)
w(A.VR,B.lV)
w(A.Xa,B.m2)})()
B.dY(b.typeUniverse,JSON.parse('{"xV":{"eW":[],"pK":[],"eZ":["E"],"lx":[]},"VR":{"lV":[],"cP":[],"ai":["E","eW"],"A":[],"O":[],"az":[],"ai.1":"eW","ai.0":"E"},"Xa":{"m2":[],"aA":[],"i":[]}}'))
var y={d:B.y("d0"),x:B.y("j<e>"),g:B.y("E"),z:B.y("m1"),t:B.y("xV"),v:B.y("tK"),c:B.y("eW"),e:B.y("o")}}
$__dart_deferred_initializers__["fjpalJnpEqbnm6ELL0fx4cIDeZo="] = $__dart_deferred_initializers__.current
