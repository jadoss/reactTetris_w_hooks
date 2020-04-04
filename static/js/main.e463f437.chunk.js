(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{14:function(n,e,t){n.exports=t(22)},21:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(7),c=t.n(a),i=t(1),u=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},l=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tetromino.length;a+=1)for(var c=0;c<n.tetromino[a].length;c+=1)if(0!==n.tetromino[a][c]&&(!e[a+n.pos.y+o]||!e[a+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[a+n.pos.y+o][c+n.pos.x+r][1]))return!0},f=t(12),s={0:{shape:[[0]],color:"0,0,0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},d=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return s[n]},p=function(n,e){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)((function(){d(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(d((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};c((function(n){return t(n)}))}),[n,e]),[a,c,s]};var b=t(2),m=t(3),v=t(8),g=t.n(v);function x(){var n=Object(b.a)(["\n    display: flex;\n    align-items: flex-start;\n    padding: 40px;\n    margin: 0 auto;\n    max-width: 900px;\n\n    aside {\n        width: 100%;\n        max-width: 200px;\n        display: block;\n        padding: 0 20px;\n    }\n"]);return x=function(){return n},n}function h(){var n=Object(b.a)(["\n    width: 100vw;\n    height: 100vh;\n    background: url(",") #000;\n    background-size: cover;\n    overflow: hidden;\n"]);return h=function(){return n},n}var O=m.a.div(h(),g.a),y=m.a.div(x());function j(){var n=Object(b.a)(["\n    width: auto;\n    height: auto;\n    background: rgba(",", 0.8);\n    border: ",";\n    border-bottom-color: rgba(",", 0.2);\n    border-right-color: rgba(",", 1);\n    border-top-color: rgba(",", 1);\n    border-left-color: rgba(",", 0.4);\n"]);return j=function(){return n},n}var E=m.a.div(j(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),w=o.a.memo((function(n){var e=n.type;return o.a.createElement(E,{type:e,color:s[e].color})}));function S(){var n=Object(b.a)(["\n    display: grid;\n    grid-template-rows: repeat(\n        ",",\n        calc(25vw / ",")\n    );\n    grid-template-columns: repeat(",", 1fr);\n    grid-gap: 1px;\n    border: 2px solid #333;\n    width: 100%;\n    max-width: 25vw;\n    background: #111;\n"]);return S=function(){return n},n}var k=m.a.div(S(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),I=function(n){var e=n.stage;return o.a.createElement(k,{width:e[0].length,height:e.length},e.map((function(n){return n.map((function(n,e){return o.a.createElement(w,{key:e,type:n[0]})}))})))};function J(){var n=Object(b.a)(["\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    margin: 0 0 20px 0;\n    padding: 20px;\n    border: 4px solid #333;\n    min-height: 30px;\n    width: 100%;\n    border-radius: 20px;\n    color: ",";\n    background: #000;\n    font-family: Pixel, Ariel, Velvetica, sans-serif;\n    font-size: 0.8rem;\n"]);return J=function(){return n},n}var L=m.a.div(J(),(function(n){return n.gameOver?"red":"#999"})),A=function(n){var e=n.gameOver,t=n.text;return o.a.createElement(L,{gameOver:e},t)};function T(){var n=Object(b.a)(["\n    box-sizing: border-box;\n    margin: 0 0 20px 0;\n    padding: 20px;\n    min-height: 30px;\n    width: 100%;\n    border-radius: 20px;\n    border: none;\n    color: white;\n    background: #333;\n    font-family: Pixel, Ariel, Helvetica, sans-seriff;\n    font-size: 1rem;\n    outline: none;\n    cursor: pointer;\n"]);return T=function(){return n},n}var Z=m.a.button(T()),z=function(n){var e=n.callback;return o.a.createElement(Z,{onClick:e},"Start Game")},C=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),b=Object(i.a)(c,2),m=b[0],v=b[1],g=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:s[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1],a=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},c=Object(r.useCallback)((function(){o({pos:{x:4,y:0},tetromino:d().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,r=n.collided;o((function(n){return Object(f.a)({},n,{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:r})}))},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,e);for(var c=r.pos.x,i=1;l(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-e),void(r.pos.x=c);o(r)}]}(),x=Object(i.a)(g,4),h=x[0],j=x[1],E=x[2],w=x[3],S=p(h,E),k=Object(i.a)(S,3),J=k[0],L=k[1],T=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],m=[40,100,300,1200],v=Object(r.useCallback)((function(){n>0&&(a((function(e){return e+m[n-1]*(p+1)})),f((function(e){return e+n})))}),[p,m,n]);return Object(r.useEffect)((function(){v()}),[v,n,o]),[o,a,l,f,p,b]}(k[2]),Z=Object(i.a)(T,6),C=Z[0],G=Z[1],M=Z[2],R=Z[3],K=Z[4],N=Z[5];console.log("re-render");var P=function(n){l(h,J,{x:n,y:0})||j({x:n,y:0})},V=function(){console.log(t),M>10*(K+1)&&(N((function(n){return n+1})),a(1e3/(K+1)+200)),l(h,J,{x:0,y:1})?(h.pos.y<1&&(console.log("GAME OVER!"),v(!0),a(null)),j({x:0,y:0,collided:!0})):j({x:0,y:1,collided:!1})},B=function(n){var e=n.keyCode;m||(37===e?P(-1):39===e?P(1):40===e?(console.log("interval off"),a(null),V()):38===e&&w(J,1))};return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){V()}),t),o.a.createElement(O,{role:"button",tabIndex:"0",onKeyDown:function(n){return B(n)},onKeyUp:function(n){var e=n.keyCode;m||40===e&&(console.log("interval off"),0===K?a(1e3):K>0&&a(1e3/K+200))}},o.a.createElement(y,null,o.a.createElement(I,{stage:J}),o.a.createElement("aside",null,m?o.a.createElement(A,{gameOver:m,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(A,{text:"Score: ".concat(C)}),o.a.createElement(A,{text:"Rows: ".concat(M)}),o.a.createElement(A,{text:"Level: ".concat(K)})),o.a.createElement(z,{callback:function(){L(u()),a(1e3),E(),v(!1),G(0),N(0),R(0)}}))))},G=function(){return o.a.createElement(C,null)};t(21);c.a.render(o.a.createElement(G,null),document.getElementById("root"))},8:function(n,e,t){n.exports=t.p+"static/media/bg.2810fe6b.png"}},[[14,1,2]]]);
//# sourceMappingURL=main.e463f437.chunk.js.map