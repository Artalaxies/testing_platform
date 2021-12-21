self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
a6q(d){return A.b8R(d)},
b8R(d){var x=0,w=B.Y(y.b),v,u,t
var $async$a6q=B.U(function(e,f){if(e===1)return B.V(f,w)
while(true)switch(x){case 0:t=$.KG()
t.aE(C.v,"readNFTData executed",null,null)
u=C.b.w(d,"ipfs")?C.b.Z("https://cloudflare-ipfs.com/ipfs/",C.c.gI(d.split("/"))):d
t.aE(C.v,u,null,null)
x=3
return B.a3($.aJ2().aK(0,new A.aDW(u),y.w).aK(0,new A.aDX(),y.b),$async$a6q)
case 3:v=f
x=1
break
case 1:return B.W(v,w)}})
return B.X($async$a6q,w)},
aDW:function aDW(d){this.a=d},
aDX:function aDX(){},
aqv:function aqv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aqw:function aqw(){},
aqx:function aqx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aqt:function aqt(){},
aqu:function aqu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y7:function y7(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.qb$=d
_.cg$=e
_.a8$=f
_.a=null},
VS:function VS(d,e,f,g,h,i,j){var _=this
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
aNU(d,e,f,g,h){return new A.Xb(new A.aqu(f,h,g,d),B.ic(e,!0,!0,!0),null)},
Xb:function Xb(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,J
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[21],A)
C=c[2]
B=c[0]
J=c[1]
A.aqv.prototype={
XJ(d){var x=this.c
return d.tA(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bx(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.aqw.prototype={}
A.aqx.prototype={
Y1(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.ea(d/x)-1)
return 0},
a9L(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A9(d){var x=this,w=x.a,v=C.e.c5(d,w)
return new A.aqv(C.e.hg(d,w)*x.b,x.a9L(v*x.c),x.d,x.e)},
Sk(d){var x=this.b
return x*(C.e.hg(d-1,this.a)+1)-(x-this.d)}}
A.aqt.prototype={}
A.aqu.prototype={
IV(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.aqx(v,t+x.b,u+w,t,u,B.aCt(d.y))}}
A.y7.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a1a(0)}}
A.VS.prototype={
eA(d){if(!(d.e instanceof A.y7))d.e=new A.y7(!1,null,null)},
sYo(d){var x,w=this
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
u=a3.cr.IV(a5)
t=u.b
s=t>1e-10?u.a*C.d.hg(w,t):0
r=isFinite(v)?u.Y1(v):a4
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
n=u.A9(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EI(s,m)){k=u.Sk(a6.gtG())
a3.k4=B.iX(a4,!1,a4,a4,k,0,0,k,a4)
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
for(;j>=s;--j){h=u.A9(j)
p=h.c
g=a3.UE(a5.tA(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.eV(0,n.XJ(a5))
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
h=u.A9(j)
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
if(a0){g=a3.UC(d,i)
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
a1=a6.Gd(a5,s,t,m,l)
a2=a3.iD(a5,Math.min(x,m),l)
a3.k4=B.iX(a3.pJ(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aW=!0
a6.nX()}}
A.Xb.prototype={
b_(d){var x=new A.VS(this.f,y.v.a(d),B.z(y.e,y.g),0,null,null,B.at(y.d))
x.gaF()
x.gaX()
x.fr=!1
return x},
bc(d,e){e.sYo(this.f)},
Gc(d,e,f,g,h){var x,w
this.a1b(d,e,f,g,h)
x=this.f.IV(d)
w=this.d.gq6()
w.toString
x=x.Sk(w)
return x}}
var z=a.updateTypes([])
A.aDW.prototype={
$1(d){return this.XE(d)},
XE(d){var x=0,w=B.Y(y.w),v,u=this,t,s
var $async$$1=B.U(function(e,f){if(e===1)return B.V(f,w)
while(true)switch(x){case 0:t=u.a
s=B.cQ(J.a1(d.a,t))
x=s==null?3:4
break
case 3:x=5
return B.a3(B.aIg(B.j7(t,0,null)),$async$$1)
case 5:s=f
case 4:d.nA("String",t,s)
v=s
x=1
break
case 1:return B.W(v,w)}})
return B.X($async$$1,w)},
$S:76}
A.aDX.prototype={
$1(d){return C.a2.cP(0,d)},
$S:144};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bK,[A.aDW,A.aDX])
x(B.y,[A.aqv,A.aqw,A.aqt])
w(A.aqx,A.aqw)
w(A.aqu,A.aqt)
w(A.y7,B.f2)
w(A.VS,B.m1)
w(A.Xb,B.m8)})()
B.cs(b.typeUniverse,JSON.parse('{"y7":{"f2":[],"pY":[],"f6":["E"],"lH":[]},"VS":{"m1":[],"cV":[],"aj":["E","f2"],"A":[],"O":[],"az":[],"aj.1":"f2","aj.0":"E"},"Xb":{"m8":[],"aB":[],"i":[]}}'))
var y=(function rtii(){var x=B.w
return{d:x("d_"),x:x("j<h>"),g:x("E"),z:x("m7"),t:x("y7"),v:x("u_"),c:x("f2"),w:x("h"),b:x("@"),e:x("p")}})()}
$__dart_deferred_initializers__["75/t1hq0hDNX7+Caz1feuyKBLP0="] = $__dart_deferred_initializers__.current
