self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
b9L(d,e){var w,v=new B.ae($.ab,x.f),u=new B.aU(v,x.D),t=$.aUX().$0()
C.j6.HM(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.ch(t,"progress",new A.aEM(e),!1,w)
B.ch(t,"error",new A.aEN(u,d),!1,w)
B.ch(t,"load",new A.aEO(t,u,d),!1,w)
t.send()
return v},
aDG:function aDG(){},
aEM:function aEM(d){this.a=d},
aEN:function aEN(d,e){this.a=d
this.b=e},
aEO:function aEO(d,e,f){this.a=d
this.b=e
this.c=f},
ba7(d,e){var w=B.aV()
if(w)return A.b9L(d.j(0),e)
else return A.b5Q(new A.aEV(d,e),x.s)},
b5Q(d,e){var w=new B.ae($.ab,e.h("ae<0>")),v=d.$1(new A.aC6(new B.JI(w,e.h("JI<0>")),e))
if(v!=null)throw B.c(B.dC(v))
return w},
aEV:function aEV(d,e){this.a=d
this.b=e},
aC6:function aC6(d,e){this.a=d
this.b=e},
ts:function ts(d,e){this.a=d
this.b=e},
akl:function akl(d){this.a=d},
lJ:function lJ(d,e){this.a=d
this.b=e},
a0O:function a0O(){}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[36],A)
B=c[0]
J=c[1]
C=c[2]
A.ts.prototype={
qy(d){return new B.bu(this,x.B)},
uG(d,e,f){var w=null,v=B.aOG(w,w,w,x.h)
return B.aGX(new B.mx(v,B.t(v).h("mx<1>")),this.a6e(e,f,v),e.a,w,e.b)},
a6e(d,e,f){return A.ba7(B.atk().a7(d.a),new A.akl(f))},
k(d,e){if(e==null)return!1
if(J.a7(e)!==B.H(this))return!1
return e instanceof A.ts&&e.a===this.a&&e.b===this.b},
gv(d){return B.a5(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.lJ.prototype={}
A.a0O.prototype={}
var z=a.updateTypes([])
A.aDG.prototype={
$0(){return new XMLHttpRequest()},
$S:422}
A.aEM.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:52}
A.aEN.prototype={
$1(d){this.a.iH(new B.wp(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:52}
A.aEO.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.iH(new B.wp(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.dt(x.n.a(B.aIh(o.response)),0,null)
v=B.aLL(w,p.c)
p.b.cH(0,v)}catch(q){u=B.ak(q)
t=B.aM(q)
p.b.mi(u,t)}},
$S:52}
A.aEV.prototype={
$1(d){d.$1(new B.CP(this.a.j(0),this.b))
return null},
$S:423}
A.aC6.prototype={
$1(d){var w=this.a
if(d==null)w.iH(new B.HT("operation failed"))
else w.cH(0,d)},
$S(){return this.b.h("~(0)")}}
A.akl.prototype={
$2(d,e){this.a.G(0,new A.lJ(d,e))},
$S:93};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aDG,B.e6)
u(B.bE,[A.aEM,A.aEN,A.aEO,A.aEV,A.aC6])
v(A.ts,B.eE)
v(A.akl,B.fu)
v(A.a0O,B.x)
v(A.lJ,A.a0O)
w(A.a0O,B.aC)})()
B.cc(b.typeUniverse,JSON.parse('{"ts":{"eE":["aGY"],"eE.T":"aGY"},"aGY":{"eE":["aGY"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.v("r7"),s:B.v("iB"),h:B.v("lJ"),g:B.v("ig"),B:B.v("bu<ts>"),D:B.v("aU<iB>"),f:B.v("ae<iB>")};(function lazyInitializers(){var w=a.lazy
w($,"bf_","aUX",()=>new A.aDG())})()}
$__dart_deferred_initializers__["52LJJWY2KMMmzz66W6avzBQ6zVs="] = $__dart_deferred_initializers__.current
