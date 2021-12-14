self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={alm:function alm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aln:function aln(){},alo:function alo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},alk:function alk(){},all:function all(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},wS:function wS(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.pm$=d
_.c7$=e
_.af$=f
_.a=null},U4:function U4(d,e,f,g,h,i,j){var _=this
_.cg=d
_.aJ=e
_.az=f
_.aF=$
_.dr=!0
_.cp$=g
_.W$=h
_.bQ$=i
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
aH7(d,e,f,g,h){return new A.Vk(new A.all(f,h,g,d),B.kh(e,!0,!0,!0),null)},
Vk:function Vk(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[17],A)
C=c[2]
B=c[0]
A.alm.prototype={
VX(d){var x=this.c
return d.rQ(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bm(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.aln.prototype={}
A.alo.prototype={
Wf(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.dY(d/x)-1)
return 0},
a7C(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
z6(d){var x=this,w=x.a,v=C.e.bM(d,w)
return new A.alm(C.e.iM(d,w)*x.b,x.a7C(v*x.c),x.d,x.e)},
QH(d){var x=this.b
return x*(C.e.iM(d-1,this.a)+1)-(x-this.d)}}
A.alk.prototype={}
A.all.prototype={
Hx(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.alo(v,t+x.b,u+w,t,u,B.awb(d.y))}}
A.wS.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a_u(0)}}
A.U4.prototype={
ez(d){if(!(d.e instanceof A.wS))d.e=new A.wS(!1,null,null)},
sWE(d){var x,w=this
if(w.cg===d)return
if(B.H(d)===B.H(w.cg)){x=w.cg
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a_()
w.cg=d},
p1(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
c_(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.y.prototype.gaj.call(a3)),a6=a3.aJ
a6.aP=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cg.Hx(a5)
t=u.b
s=t>1e-10?u.a*C.d.iM(w,t):0
r=isFinite(v)?u.Wf(v):a4
t=a3.W$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bQ$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.e.G(s-t,0,a3.cp$)
a3.n9(o,r==null?0:C.e.G(p-r,0,a3.cp$))}else a3.n9(0,0)
n=u.z6(s)
m=n.a
l=m+n.c
if(a3.W$==null)if(!a3.Dr(s,m)){k=u.QH(a6.grY())
a3.k4=B.iA(a4,!1,a4,a4,k,0,0,k,a4)
a6.nj()
return}t=a3.W$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.z6(j)
p=h.c
g=a3.SX(a5.rQ(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.W$
p.toString
p.eH(0,n.VX(a5))
i=a3.W$
p=i.e
p.toString
t.a(p)
p.a=m
p.x=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.q(a3).h("ap.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.z6(j)
e=h.c
d=a5.rQ(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).af$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.SV(d,i)
if(g==null)break}else g.eH(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.x=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bQ$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.EV(a5,s,t,m,l)
a2=a3.il(a5,Math.min(x,m),l)
a3.k4=B.iA(a3.p_(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aP=!0
a6.nj()}}
A.Vk.prototype={
aX(d){var x=new A.U4(this.f,y.v.a(d),B.w(y.e,y.g),0,null,null,B.ar(y.d))
x.gaE()
x.gaQ()
x.fr=!1
return x},
ba(d,e){e.sWE(this.f)},
EU(d,e,f,g,h){var x,w
this.a_v(d,e,f,g,h)
x=this.f.Hx(d)
w=this.d.gph()
w.toString
x=x.QH(w)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[A.alm,A.aln,A.alk])
w(A.alo,A.aln)
w(A.all,A.alk)
w(A.wS,B.eN)
w(A.U4,B.lv)
w(A.Vk,B.lH)})()
B.ek(b.typeUniverse,JSON.parse('{"wS":{"eN":[],"fu":["F"],"l9":[]},"U4":{"lv":[],"d3":[],"ap":["F","eN"],"y":[],"M":[],"ax":[],"ap.1":"eN","ap.0":"F"},"Vk":{"lH":[],"aD":[],"j":[]}}'))
var y={d:B.B("cT"),x:B.B("k<h>"),g:B.B("F"),z:B.B("lG"),t:B.B("wS"),v:B.B("t0"),c:B.B("eN"),e:B.B("n")}}
$__dart_deferred_initializers__["IY5/D4C7MLGa6JDKK56BbURLtR8="] = $__dart_deferred_initializers__.current
