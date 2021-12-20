self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
a5V(d){return A.b7Q(d)},
b7Q(d){var x=0,w=B.Y(y.b),v,u,t
var $async$a5V=B.U(function(e,f){if(e===1)return B.V(f,w)
while(true)switch(x){case 0:t=$.Ku()
t.aC(C.u,"readNFTData executed",null,null)
u=C.b.B(d,"ipfs")?C.b.Z("https://cloudflare-ipfs.com/ipfs/",C.c.gI(d.split("/"))):d
t.aC(C.u,u,null,null)
x=3
return B.a1($.aI6().aI(0,new A.aCX(u),y.w).aI(0,new A.aCY(),y.b),$async$a5V)
case 3:v=f
x=1
break
case 1:return B.W(v,w)}})
return B.X($async$a5V,w)},
aCX:function aCX(d){this.a=d},
aCY:function aCY(){},
apV:function apV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
apW:function apW(){},
apX:function apX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
apT:function apT(){},
apU:function apU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y_:function y_(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.q9$=d
_.cg$=e
_.a6$=f
_.a=null},
VG:function VG(d,e,f,g,h,i,j){var _=this
_.cr=d
_.aM=e
_.aK=f
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
aMX(d,e,f,g,h){return new A.X_(new A.apU(f,h,g,d),B.jD(e,!0,!0,!0),null)},
X_:function X_(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,J
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[20],A)
C=c[2]
B=c[0]
J=c[1]
A.apV.prototype={
Xz(d){var x=this.c
return d.tz(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bt(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.apW.prototype={}
A.apX.prototype={
XS(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.e9(d/x)-1)
return 0},
a9A(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A3(d){var x=this,w=x.a,v=C.e.c5(d,w)
return new A.apV(C.e.hf(d,w)*x.b,x.a9A(v*x.c),x.d,x.e)},
S9(d){var x=this.b
return x*(C.e.hf(d-1,this.a)+1)-(x-this.d)}}
A.apT.prototype={}
A.apU.prototype={
IL(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.apX(v,t+x.b,u+w,t,u,B.aBs(d.y))}}
A.y_.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a10(0)}}
A.VG.prototype={
eA(d){if(!(d.e instanceof A.y_))d.e=new A.y_(!1,null,null)},
sYe(d){var x,w=this
if(w.cr===d)return
if(B.H(d)===B.H(w.cr)){x=w.cr
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a0()
w.cr=d},
pI(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
c9(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.A.prototype.gac.call(a3)),a6=a3.aM
a6.aW=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cr.IL(a5)
t=u.b
s=t>1e-10?u.a*C.d.hf(w,t):0
r=isFinite(v)?u.XS(v):a4
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
n=u.A3(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EC(s,m)){k=u.S9(a6.gtF())
a3.k4=B.iO(a4,!1,a4,a4,k,0,0,k,a4)
a6.nV()
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
g=a3.Ut(a5.tz(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eU(0,n.Xz(a5))
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
d=a5.tz(h.d,e,e)
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
a1=a6.G5(a5,s,t,m,l)
a2=a3.iD(a5,Math.min(x,m),l)
a3.k4=B.iO(a3.pG(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aW=!0
a6.nV()}}
A.X_.prototype={
b_(d){var x=new A.VG(this.f,y.v.a(d),B.x(y.e,y.g),0,null,null,B.ar(y.d))
x.gaH()
x.gaX()
x.fr=!1
return x},
bd(d,e){e.sYe(this.f)},
G4(d,e,f,g,h){var x,w
this.a11(d,e,f,g,h)
x=this.f.IL(d)
w=this.d.gq3()
w.toString
x=x.S9(w)
return x}}
var z=a.updateTypes([])
A.aCX.prototype={
$1(d){return this.Xu(d)},
Xu(d){var x=0,w=B.Y(y.w),v,u=this,t,s
var $async$$1=B.U(function(e,f){if(e===1)return B.V(f,w)
while(true)switch(x){case 0:t=u.a
s=B.cM(J.a0(d.a,t))
x=s==null?3:4
break
case 3:x=5
return B.a1(B.aHk(B.iZ(t,0,null)),$async$$1)
case 5:s=f
case 4:d.nz("String",t,s)
v=s
x=1
break
case 1:return B.W(v,w)}})
return B.X($async$$1,w)},
$S:70}
A.aCY.prototype={
$1(d){return C.a_.cO(0,d)},
$S:114};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bP,[A.aCX,A.aCY])
x(B.z,[A.apV,A.apW,A.apT])
w(A.apX,A.apW)
w(A.apU,A.apT)
w(A.y_,B.eW)
w(A.VG,B.lU)
w(A.X_,B.m0)})()
B.dp(b.typeUniverse,JSON.parse('{"y_":{"eW":[],"pN":[],"eZ":["E"],"lx":[]},"VG":{"lU":[],"cS":[],"aj":["E","eW"],"A":[],"N":[],"ay":[],"aj.1":"eW","aj.0":"E"},"X_":{"m0":[],"az":[],"i":[]}}'))
var y=(function rtii(){var x=B.y
return{d:x("d8"),x:x("j<h>"),g:x("E"),z:x("m_"),t:x("y_"),v:x("tP"),c:x("eW"),w:x("h"),b:x("@"),e:x("o")}})()}
$__dart_deferred_initializers__["Z4LJ85KmIxeT9bsnbZJRhQIMuc0="] = $__dart_deferred_initializers__.current
