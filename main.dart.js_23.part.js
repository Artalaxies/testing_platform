self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={aqh:function aqh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aqi:function aqi(){},aqj:function aqj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aqf:function aqf(){},aqg:function aqg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},yR:function yR(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.fP$=d
_.cc$=e
_.aa$=f
_.a=null},WU:function WU(d,e,f,g,h,i,j){var _=this
_.cF=d
_.aB=e
_.aH=f
_.aT=$
_.dN=!0
_.ck$=g
_.R$=h
_.bI$=i
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
aNq(d,e,f,g,h){return new A.Yc(new A.aqg(f,h,g,d),B.h0(e,!0,!0,!0),null)},
Yc:function Yc(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[22],A)
C=c[2]
B=c[0]
A.aqh.prototype={
Y7(d){var x=this.c
return d.tK(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bu(B.a(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.aqi.prototype={}
A.aqj.prototype={
Yq(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.e7(d/x)-1)
return 0},
aa2(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ag(d){var x=this,w=x.a,v=C.e.bW(d,w)
return new A.aqh(C.e.hm(d,w)*x.b,x.aa2(v*x.c),x.d,x.e)},
SC(d){var x=this.b
return x*(C.e.hm(d-1,this.a)+1)-(x-this.d)}}
A.aqf.prototype={}
A.aqg.prototype={
IV(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.aqj(v,t+x.b,u+w,t,u,B.aC8(d.y))}}
A.yR.prototype={
j(d){return"crossAxisOffset="+B.d(this.x)+"; "+this.a1E(0)}}
A.WU.prototype={
ez(d){if(!(d.e instanceof A.yR))d.e=new A.yR(!1,null,null)},
sYO(d){var x,w=this
if(w.cF===d)return
if(B.I(d)===B.I(w.cF)){x=w.cF
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a0()
w.cF=d},
pX(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
c4(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.C.prototype.gae.call(a3)),a6=a3.aB
a6.aS=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.cF.IV(a5)
t=u.b
s=t>1e-10?u.a*C.d.hm(w,t):0
r=isFinite(v)?u.Yq(v):a4
t=a3.R$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bI$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.e.G(s-t,0,a3.ck$)
a3.o6(o,r==null?0:C.e.G(p-r,0,a3.ck$))}else a3.o6(0,0)
n=u.Ag(s)
m=n.a
l=m+n.c
if(a3.R$==null)if(!a3.ED(s,m)){k=u.SC(a6.gtS())
a3.k4=B.jc(a4,!1,a4,a4,k,0,0,k,a4)
a6.od()
return}t=a3.R$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.Ag(j)
p=h.c
g=a3.UR(a5.tK(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.R$
p.toString
p.eS(0,n.Y7(a5))
i=a3.R$
p=i.e
p.toString
t.a(p)
p.a=m
p.x=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.r(a3).i("aj.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Ag(j)
e=h.c
d=a5.tK(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).aa$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.UP(d,i)
if(g==null)break}else g.eS(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.x=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bI$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.G8(a5,s,t,m,l)
a2=a3.iM(a5,Math.min(x,m),l)
a3.k4=B.jc(a3.pV(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aS=!0
a6.od()}}
A.Yc.prototype={
b_(d){var x=new A.WU(this.f,y.v.a(d),B.A(y.e,y.g),0,null,null,B.aw(y.d))
x.gaJ()
x.gaW()
x.fr=!1
return x},
b6(d,e){e.sYO(this.f)},
G7(d,e,f,g,h){var x,w
this.a1F(d,e,f,g,h)
x=this.f.IV(d)
w=this.d.gqi()
w.toString
w=x.SC(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.y,[A.aqh,A.aqi,A.aqf])
w(A.aqj,A.aqi)
w(A.aqg,A.aqf)
w(A.yR,B.f1)
w(A.WU,B.mj)
w(A.Yc,B.mr)})()
B.c6(b.typeUniverse,JSON.parse('{"yR":{"f1":[],"qf":[],"fa":["E"],"lY":[]},"WU":{"mj":[],"cE":[],"aj":["E","f1"],"C":[],"P":[],"aA":[],"aj.1":"f1","aj.0":"E"},"Yc":{"mr":[],"aB":[],"i":[]}}'))
var y={d:B.t("cR"),x:B.t("j<h>"),g:B.t("E"),z:B.t("mq"),t:B.t("yR"),v:B.t("us"),c:B.t("f1"),e:B.t("n")}}
$__dart_deferred_initializers__["eBOJiUvngfr8IduSjbzSUt3sxeU="] = $__dart_deferred_initializers__.current
