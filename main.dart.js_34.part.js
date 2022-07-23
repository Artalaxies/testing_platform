self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aNL(d,e,f){return new A.Tn(f,d,e,null)},
b8l(d,e,f,g,h){var x=null,w=B.a9(d).i("af<1,dU>")
return B.eB(B.a3(new B.af(d,new A.aDP(!0,e,f,g),w),!0,w.i("az.E")),x,x,x,x)},
Tn:function Tn(d,e,f,g){var _=this
_.c=d
_.e=e
_.r=f
_.a=g},
Tm:function Tm(d,e,f,g){var _=this
_.e=d
_.b=e
_.c=f
_.a=g},
aDP:function aDP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDO:function aDO(d,e){this.a=d
this.b=e},
b9M(d,e,f){var x={},w=y.c
x.a=B.a([new A.jv(d)],w)
if(d.length===0)return B.a([],w)
D.c.a7(e,new A.aEQ(x,f))
return x.a},
iw:function iw(){},
j6:function j6(){},
jv:function jv(d){this.a=d},
pR:function pR(){},
aj8:function aj8(){},
aEQ:function aEQ(d,e){this.a=d
this.b=e},
Rx:function Rx(){},
adH:function adH(d,e,f){this.a=d
this.b=e
this.c=f},
DA:function DA(d,e,f){this.d=d
this.b=e
this.a=f},
a_c:function a_c(){},
aur:function aur(d,e,f){this.a=d
this.b=e
this.c=f},
zX:function zX(d,e){this.b=d
this.a=e}},C,B,D,E
A=a.updateHolder(c[17],A)
C=c[78]
B=c[0]
D=c[2]
E=c[34]
A.Tn.prototype={
L(d,e){var x,w=this,v=null,u=A.b9M(w.c,C.VO,C.HZ),t=B.O(e).R8.z
t=t==null?v:t.aY(0,w.r)
x=B.O(e).R8.z
x=x==null?v:x.aY(0,w.r).ako(C.a4F,D.it).aY(0,v)
return B.aHY(A.b8l(u,x,w.e,t,!0),v,v,D.bW,!0,v,v,D.b8,v,v,1,D.b_)}}
A.Tm.prototype={}
A.iw.prototype={
k(d,e){if(e==null)return!1
return this.jD(e)},
jD(d){return d instanceof A.iw&&d.a===this.a}}
A.j6.prototype={
k(d,e){if(e==null)return!1
return this.jD(e)},
jD(d){return d instanceof A.j6&&this.BK(d)&&d.b===this.b}}
A.jv.prototype={
j(d){return"TextElement: '"+this.a+"'"},
k(d,e){if(e==null)return!1
return e instanceof A.jv&&this.BK(e)},
jD(d){return d instanceof A.jv&&this.BK(d)}}
A.pR.prototype={}
A.aj8.prototype={}
A.Rx.prototype={
A3(d,e,f){var x=B.a([],y.c)
D.c.a7(e,new A.adH(this,x,f))
return x}}
A.DA.prototype={
j(d){return"EmailElement: '"+this.d+"' ("+this.a+")"},
k(d,e){if(e==null)return!1
return this.jD(e)},
jD(d){return d instanceof A.DA&&this.BJ(d)&&d.d===this.d}}
A.a_c.prototype={
A3(d,e,f){var x=B.a([],y.c)
D.c.a7(e,new A.aur(this,f,x))
return x}}
A.zX.prototype={
j(d){return"LinkElement: '"+this.b+"' ("+this.a+")"},
k(d,e){if(e==null)return!1
return e instanceof A.zX&&this.BJ(e)},
jD(d){return d instanceof A.zX&&this.BJ(d)}}
var z=a.updateTypes(["~(iw)","dU(iw)","~(pR)"])
A.aDP.prototype={
$1(d){var x,w,v=null
if(d instanceof A.j6){x=d.a
w=B.Zv(v)
w.a3=new A.aDO(this.c,d)
return new A.Tm(B.tZ(B.aHY(B.eB(v,w,v,this.b,x),v,v,v,v,v,v,v,v,v,v,v),D.fb,v,v,v),D.id,v,v)}else return B.eB(v,v,v,this.d,d.a)},
$S:z+1}
A.aDO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.aEQ.prototype={
$1(d){var x=this.a
x.a=d.A3(0,x.a,this.b)},
$S:z+2}
A.adH.prototype={
$1(d){var x,w,v,u,t,s=this
if(d instanceof A.jv){x=$.aV_()
w=d.a
v=x.eE(w)
if(v==null)s.b.push(d)
else{x=v.b
u=x[0]
u.toString
t=D.b.jQ(w,u,"")
w=x[1]
u=w
if((u==null?null:u.length!==0)===!0){w=w
w.toString
s.b.push(new A.jv(w))}x=x[2]
w=x
if((w==null?null:w.length!==0)===!0){x=x
x.toString
x=D.b.jQ(x,B.aj("mailto:",!0,!1,!1),"")
s.b.push(new A.DA(x,"mailto:"+x,x))}if(t.length!==0)D.c.M(s.b,s.a.A3(0,B.a([new A.jv(t)],y.c),s.c))}}else s.b.push(d)},
$S:z+0}
A.aur.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=this
if(d instanceof A.jv){x=$.aVR()
w=d.a
v=x.eE(w)
if(v==null)o.c.push(d)
else{x=v.b
u=x[0]
u.toString
t=D.b.jQ(w,u,"")
w=x[1]
u=w
if((u==null?null:u.length!==0)===!0){w=w
w.toString
o.c.push(new A.jv(w))}x=x[2]
w=x
if((w==null?null:w.length!==0)===!0){s=x
x=s.length-1
w=s[x]
if(w==="."){s=D.b.K(s,0,x)
r="."}else r=null
if(!D.b.bb(s,$.aVm()))q="http://"+s
else q=s
p=D.b.jQ(s,B.aj("https?://",!0,!1,!1),"")
x=o.c
x.push(new A.zX(q,p))
if(r!=null)x.push(new A.jv(r))}if(t.length!==0)D.c.M(o.c,o.a.A3(0,B.a([new A.jv(t)],y.c),o.b))}}else o.c.push(d)},
$S:z+0};(function aliases(){var x=A.iw.prototype
x.BK=x.jD
x=A.j6.prototype
x.BJ=x.jD})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Tn,B.aL)
x(A.Tm,E.lC)
w(B.bA,[A.aDP,A.aEQ,A.adH,A.aur])
x(A.aDO,B.dP)
w(B.x,[A.iw,A.pR,A.aj8])
w(A.iw,[A.j6,A.jv])
w(A.pR,[A.Rx,A.a_c])
w(A.j6,[A.DA,A.zX])})()
B.cc(b.typeUniverse,JSON.parse('{"Tn":{"aL":[],"i":[]},"Tm":{"lC":[],"k9":[],"dU":[]},"j6":{"iw":[]},"jv":{"iw":[]},"Rx":{"pR":[]},"DA":{"j6":[],"iw":[]},"a_c":{"pR":[]},"zX":{"j6":[],"iw":[]}}'))
var y={c:B.u("j<iw>")};(function constants(){var x=a.makeConstList
C.HZ=new A.aj8()
C.It=new A.a_c()
C.HH=new A.Rx()
C.VO=B.a(x([C.It,C.HH]),B.u("j<pR>"))
C.LQ=new B.k(4286755327)
C.Lj=new B.k(4282682111)
C.L4=new B.k(4280908287)
C.L3=new B.k(4280902399)
C.a4s=new B.bC([100,C.LQ,200,C.Lj,400,C.L4,700,C.L3],B.u("bC<n,k>"))
C.a4F=new B.TC(C.a4s,4282682111)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"beu","aV_",()=>B.aj("^(.*?)((mailto:)?[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z][A-Z]+)",!1,!0,!1))
x($,"bfO","aVR",()=>B.aj("^(.*?)((?:https?:\\/\\/|www\\.)[^\\s/$.?#].[^\\s]*)",!1,!0,!1))
x($,"bf6","aVm",()=>B.aj("^(https?:\\/\\/)",!1,!1,!1))})()}
$__dart_deferred_initializers__["2N+qHhz0JfWv1I+HHm49Z4J/FK4="] = $__dart_deferred_initializers__.current
