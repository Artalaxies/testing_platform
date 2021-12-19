self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={apM:function apM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},apN:function apN(){},apO:function apO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},apK:function apK(){},apL:function apL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},xX:function xX(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.q6$=d
_.cf$=e
_.a6$=f
_.a=null},VD:function VD(d,e,f,g,h,i,j){var _=this
_.cr=d
_.aM=e
_.aJ=f
_.aO=$
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
aML(d,e,f,g,h){return new A.WW(new A.apL(f,h,g,d),B.jB(e,!0,!0,!0),null)},
WW:function WW(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[19],A)
C=c[2]
B=c[0]
A.apM.prototype={
Xx(d){var x=this.c
return d.tx(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bt(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.apN.prototype={}
A.apO.prototype={
XQ(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.e9(d/x)-1)
return 0},
a9y(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A3(d){var x=this,w=x.a,v=C.e.c5(d,w)
return new A.apM(C.e.hf(d,w)*x.b,x.a9y(v*x.c),x.d,x.e)},
S8(d){var x=this.b
return x*(C.e.hf(d-1,this.a)+1)-(x-this.d)}}
A.apK.prototype={}
A.apL.prototype={
IK(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.apO(v,t+x.b,u+w,t,u,B.aBi(d.y))}}
A.xX.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a0Z(0)}}
A.VD.prototype={
eA(d){if(!(d.e instanceof A.xX))d.e=new A.xX(!1,null,null)},
sYc(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a0()
w.cr=d},
pF(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
c9(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.A.prototype.gac.call(a3)),a6=a3.aM
a6.aW=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.IK(a5)
t=u.b
s=t>1e-10?u.a*C.d.hf(w,t):0
r=isFinite(v)?u.XQ(v):a4
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
a3.nM(o,r==null?0:C.e.G(p-r,0,a3.cp$))}else a3.nM(0,0)
n=u.A3(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EC(s,m)){k=u.S8(a6.gtD())
a3.k4=B.iM(a4,!1,a4,a4,k,0,0,k,a4)
a6.nU()
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
for(;j>=s;--j){h=u.A3(j)
p=h.c
g=a3.Ut(a5.tx(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eU(0,n.Xx(a5))
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
h=u.A3(j)
e=h.c
d=a5.tx(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a6$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.Ur(d,i)
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
a1=a6.G4(a5,s,t,m,l)
a2=a3.iD(a5,Math.min(x,m),l)
a3.k4=B.iM(a3.pD(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aW=!0
a6.nU()}}
A.WW.prototype={
b_(d){var x=new A.VD(this.f,y.v.a(d),B.y(y.e,y.g),0,null,null,B.ar(y.d))
x.gaH()
x.gaX()
x.fr=!1
return x},
bd(d,e){e.sYc(this.f)},
G3(d,e,f,g,h){var x,w
this.a1_(d,e,f,g,h)
x=this.f.IK(d)
w=this.d.gq0()
w.toString
x=x.S8(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.z,[A.apM,A.apN,A.apK])
w(A.apO,A.apN)
w(A.apL,A.apK)
w(A.xX,B.eW)
w(A.VD,B.lU)
w(A.WW,B.m1)})()
B.dw(b.typeUniverse,JSON.parse('{"xX":{"eW":[],"pM":[],"eZ":["E"],"lx":[]},"VD":{"lU":[],"cR":[],"aj":["E","eW"],"A":[],"O":[],"ay":[],"aj.1":"eW","aj.0":"E"},"WW":{"m1":[],"az":[],"i":[]}}'))
var y={d:B.w("d8"),x:B.w("j<h>"),g:B.w("E"),z:B.w("m0"),t:B.w("xX"),v:B.w("tM"),c:B.w("eW"),e:B.w("o")}}
$__dart_deferred_initializers__["o0t2XyC2SfJxWuY4cPLtPY51kyE="] = $__dart_deferred_initializers__.current
