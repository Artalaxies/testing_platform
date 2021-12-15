self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={apO:function apO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},apP:function apP(){},apQ:function apQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},apM:function apM(){},apN:function apN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},xP:function xP(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.q7$=d
_.cg$=e
_.ab$=f
_.a=null},VH:function VH(d,e,f,g,h,i,j){var _=this
_.cr=d
_.aM=e
_.aK=f
_.aN=$
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
aMQ(d,e,f,g,h){return new A.X0(new A.apN(f,h,g,d),B.jG(e,!0,!0,!0),null)},
X0:function X0(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[17],A)
C=c[2]
B=c[0]
A.apO.prototype={
Xt(d){var x=this.c
return d.tz(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bw(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.apP.prototype={}
A.apQ.prototype={
XN(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.ea(d/x)-1)
return 0},
a9w(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A1(d){var x=this,w=x.a,v=C.e.c5(d,w)
return new A.apO(C.e.hh(d,w)*x.b,x.a9w(v*x.c),x.d,x.e)},
S7(d){var x=this.b
return x*(C.e.hh(d-1,this.a)+1)-(x-this.d)}}
A.apM.prototype={}
A.apN.prototype={
II(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.apQ(v,t+x.b,u+w,t,u,B.aBI(d.y))}}
A.xP.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a11(0)}}
A.VH.prototype={
eB(d){if(!(d.e instanceof A.xP))d.e=new A.xP(!1,null,null)},
sYc(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a_()
w.cr=d},
pI(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
ca(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.z.prototype.gae.call(a3)),a6=a3.aM
a6.aX=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.II(a5)
t=u.b
s=t>1e-10?u.a*C.d.hh(w,t):0
r=isFinite(v)?u.XN(v):a4
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
o=C.e.G(s-t,0,a3.cp$)
a3.nK(o,r==null?0:C.e.G(p-r,0,a3.cp$))}else a3.nK(0,0)
n=u.A1(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.Ex(s,m)){k=u.S7(a6.gtF())
a3.k4=B.iR(a4,!1,a4,a4,k,0,0,k,a4)
a6.nT()
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
for(;j>=s;--j){h=u.A1(j)
p=h.c
g=a3.Ur(a5.tz(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eU(0,n.Xt(a5))
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
h=u.A1(j)
e=h.c
d=a5.tz(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ab$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.Up(d,i)
if(g==null)break}else g.eU(0,d)
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
a1=a6.G0(a5,s,t,m,l)
a2=a3.iF(a5,Math.min(x,m),l)
a3.k4=B.iR(a3.pG(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aX=!0
a6.nT()}}
A.X0.prototype={
aZ(d){var x=new A.VH(this.f,y.v.a(d),B.x(y.e,y.g),0,null,null,B.ar(y.d))
x.gaC()
x.gaW()
x.fr=!1
return x},
b9(d,e){e.sYc(this.f)},
G_(d,e,f,g,h){var x,w
this.a12(d,e,f,g,h)
x=this.f.II(d)
w=this.d.gq2()
w.toString
x=x.S7(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.y,[A.apO,A.apP,A.apM])
w(A.apQ,A.apP)
w(A.apN,A.apM)
w(A.xP,B.f_)
w(A.VH,B.lW)
w(A.X0,B.m3)})()
B.dY(b.typeUniverse,JSON.parse('{"xP":{"f_":[],"pJ":[],"f3":["E"],"lz":[]},"VH":{"lW":[],"cQ":[],"ai":["E","f_"],"z":[],"N":[],"aw":[],"ai.1":"f_","ai.0":"E"},"X0":{"m3":[],"ax":[],"i":[]}}'))
var y={d:B.B("cV"),x:B.B("k<h>"),g:B.B("E"),z:B.B("m2"),t:B.B("xP"),v:B.B("tG"),c:B.B("f_"),e:B.B("o")}}
$__dart_deferred_initializers__["7/MPDhu3VZa5dwcofiZRNhZCUA0="] = $__dart_deferred_initializers__.current
