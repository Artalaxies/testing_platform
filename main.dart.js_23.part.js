self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={arR:function arR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},arS:function arS(){},arT:function arT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},arP:function arP(){},arQ:function arQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},zg:function zg(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.ql$=d
_.bW$=e
_.a1$=f
_.a=null},Xx:function Xx(d,e,f,g,h,i,j){var _=this
_.c3=d
_.Z=e
_.a8=f
_.aX=$
_.cR=!0
_.bG$=g
_.T$=h
_.bH$=i
_.fy=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=j
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
aPk(d,e,f,g,h){return new A.YP(new A.arQ(f,h,g,d),B.ho(e,!0,!0,!0),null)},
YP:function YP(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
A=a.updateHolder(c[21],A)
C=c[2]
B=c[0]
A.arR.prototype={
Yp(d){var x=this.c
return d.tH(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bo(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.arS.prototype={}
A.arT.prototype={
YI(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.e0(d/x)-1)
return 0},
aat(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
AJ(d){var x=this,w=x.a,v=C.f.bM(d,w)
return new A.arR(C.f.hs(d,w)*x.b,x.aat(v*x.c),x.d,x.e)},
SR(d){var x=this.b
return x*(C.f.hs(d-1,this.a)+1)-(x-this.d)}}
A.arP.prototype={}
A.arQ.prototype={
Jd(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.arT(v,t+x.b,u+w,t,u,B.aDM(d.x))}}
A.zg.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a21(0)}}
A.Xx.prototype={
ev(d){if(!(d.e instanceof A.zg))d.e=new A.zg(!1,null,null)},
sZ5(d){var x,w=this
if(w.c3===d)return
if(B.I(d)===B.I(w.c3)){x=w.c3
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a_()
w.c3=d},
pV(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bX(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.E.prototype.gaf.call(a3)),a6=a3.Z
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.c3.Jd(a5)
t=u.b
s=t>1e-10?u.a*C.d.hs(w,t):0
r=isFinite(v)?u.YI(v):a4
t=a3.T$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bH$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.G(s-t,0,a3.bG$)
a3.nZ(o,r==null?0:C.f.G(p-r,0,a3.bG$))}else a3.nZ(0,0)
n=u.AJ(s)
m=n.a
l=m+n.c
if(a3.T$==null)if(!a3.F2(s,m)){k=u.SR(a6.gtN())
a3.fy=B.jo(a4,!1,a4,a4,k,0,0,k,a4)
a6.o5()
return}t=a3.T$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.AJ(j)
p=h.c
g=a3.Vb(a5.tH(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.T$
p.toString
p.eV(0,n.Yp(a5))
i=a3.T$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.q(a3).i("al.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.AJ(j)
e=h.c
d=a5.tH(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a1$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.V9(d,i)
if(g==null)break}else g.eV(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bH$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.Gn(a5,s,t,m,l)
a2=a3.iP(a5,Math.min(x,m),l)
a3.fy=B.jo(a3.pT(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.o5()}}
A.YP.prototype={
aW(d){var x=new A.Xx(this.f,y.v.a(d),B.B(y.e,y.g),0,null,null,B.ay(y.d))
x.gaD()
x.gaT()
x.CW=!1
return x},
b0(d,e){e.sZ5(this.f)},
Gm(d,e,f,g,h){var x,w
this.a22(d,e,f,g,h)
x=this.f.Jd(d)
w=this.d.gqi()
w.toString
w=x.SR(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.x,[A.arR,A.arS,A.arP])
w(A.arT,A.arS)
w(A.arQ,A.arP)
w(A.zg,B.f9)
w(A.Xx,B.mK)
w(A.YP,B.mS)})()
B.cc(b.typeUniverse,JSON.parse('{"zg":{"f9":[],"oi":[],"f2":["F"],"l_":[],"cY":[]},"Xx":{"mK":[],"cB":[],"al":["F","f9"],"E":[],"Y":[],"at":[],"al.1":"f9","al.0":"F"},"YP":{"mS":[],"aE":[],"i":[]}}'))
var y={d:B.u("cO"),x:B.u("j<f>"),g:B.u("F"),z:B.u("mR"),t:B.u("zg"),v:B.u("uT"),c:B.u("f9"),e:B.u("n")}}
$__dart_deferred_initializers__["AWyVaSN75zop5QJsd531ep9P7Ow="] = $__dart_deferred_initializers__.current
