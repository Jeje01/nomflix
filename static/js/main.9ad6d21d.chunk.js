(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/bgDefault.87a0eb6a.png"},44:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(35),l=n.n(i),o=n(9),u=n(10),c=n(11),s=n(12),p=n(18),d=n(16),m=n(7),f=n.n(m),g=n(15),v=n(2),h=n(1),b=n(13);function x(){var e=Object(v.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]);return x=function(){return e},e}function E(){var e=Object(v.a)(["\n    font-size:16px;\n    font-weight: 600;\n"]);return E=function(){return e},e}function y(){var e=Object(v.a)(["\n    :not(:last-child){\n        margin-bottom: 50px;\n    }\n"]);return y=function(){return e},e}var _=h.default.div(y()),j=h.default.span(E()),O=h.default.div(x()),w=function(e){var t=e.title,n=e.children;return r.a.createElement(_,null,r.a.createElement(j,null,t),r.a.createElement(O,null,n))};function k(){var e=Object(v.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n    margin-top: 20px;\n"]);return k=function(){return e},e}var S=h.default.div(k()),T=function(){return r.a.createElement(S,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\ud83d\udd52"))};function R(){var e=Object(v.a)(["\n    color: ",";\n"]);return R=function(){return e},e}function M(){var e=Object(v.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n"]);return M=function(){return e},e}var U=h.default.div(M()),z=h.default.span(R(),(function(e){return e.color})),C=function(e){var t=e.text,n=e.color;return r.a.createElement(U,null,r.a.createElement(z,{color:n},t))};function N(){var e=Object(v.a)(["\n    font-size: 10px;\n    color:rgba(255, 255, 255, 0.5);\n"]);return N=function(){return e},e}function I(){var e=Object(v.a)(["\n    display: block;    \n    margin-bottom: 3px;\n"]);return I=function(){return e},e}function P(){var e=Object(v.a)(["\n    margin-bottom: 5px;\n    position:relative;\n    &:hover{\n        ","{\n            opacity: 0.3;\n        }\n        ","{\n            opacity: 1;\n        }\n    }\n\n"]);return P=function(){return e},e}function D(){var e=Object(v.a)(["\n    bottom:5px;\n    right: 5px;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.1s linear;\n"]);return D=function(){return e},e}function F(){var e=Object(v.a)(["\n    background-image: url(",");\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition:opacity 0.15s linear;\n"]);return F=function(){return e},e}function V(){var e=Object(v.a)(["\n    font-size: 12pxl\n"]);return V=function(){return e},e}var A=h.default.div(V()),B=h.default.div(F(),(function(e){return e.bgUrl})),L=h.default.span(D()),q=h.default.div(P(),B,L),J=h.default.span(I()),G=h.default.span(N()),H=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,o=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(p.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(A,null,r.a.createElement(q,null,r.a.createElement(B,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(29)}),r.a.createElement(L,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50")," ",l," / 10")),r.a.createElement(J,null,i.length>20?"".concat(i.substring(0,20),"..."):i),r.a.createElement(G,null,o)))};function K(){var e=Object(v.a)(["\n    padding: 20px;\n"]);return K=function(){return e},e}var Q=h.default.div(K()),W=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Movies | Nomflix")),i?r.a.createElement(T,null):r.a.createElement(Q,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Movies | Nomflix")),t&&t.length>0&&r.a.createElement(w,{title:"Now Playing"},t.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(w,{title:"Upcoming Movies"},a.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(w,{title:"Popular Movies"},n.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),l&&r.a.createElement(C,{color:"e74c3c",text:l})))},X=n(42),Y=n.n(X).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3290801bdd3d9df649ca3582d7d64517",language:"en-US"}}),Z=function(){return Y.get("movie/now_playing")},$=function(){return Y.get("movie/upcoming")},ee=function(){return Y.get("movie/popular")},te=function(e){return Y.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ne=function(e){return Y.get("search/movie",{params:{query:encodeURIComponent(e)}})},ae=function(){return Y.get("tv/top_rated")},re=function(){return Y.get("tv/popular")},ie=function(){return Y.get("tv/airing_today")},le=function(e){return Y.get("tv/".concat(e),{params:{append_to_response:"videos"}})},oe=function(e){return Y.get("search/tv",{params:{query:encodeURIComponent(e)}})},ue=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z();case 3:return t=e.sent,n=t.data.results,e.next=7,$();case 7:return a=e.sent,r=a.data.results,e.next=11,ee();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return console.log(this.state),r.a.createElement(W,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:l})}}]),n}(r.a.Component);function ce(){var e=Object(v.a)(["\n    padding: 20px;\n"]);return ce=function(){return e},e}var se=h.default.div(ce()),pe=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"TV Shows | Nomflix")),i?r.a.createElement(T,null):r.a.createElement(se,null,t&&t.length>0&&r.a.createElement(w,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(w,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(w,{title:"Airing Today"},a.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),l&&r.a.createElement(C,{color:"e74c3c",text:l})))},de=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae();case 3:return t=e.sent,n=t.data.results,e.next=7,re();case 7:return a=e.sent,r=a.data.results,e.next=11,ie();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return console.log(this.state),r.a.createElement(pe,{topRated:t,popular:n,airingToday:a,loading:i,error:l})}}]),n}(r.a.Component);function me(){var e=Object(v.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return me=function(){return e},e}function fe(){var e=Object(v.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 5px solid \n        ",";\n    transition:border-bottom 0.3s ease-in-out;\n"]);return fe=function(){return e},e}function ge(){var e=Object(v.a)(["\n    display:flex;\n"]);return ge=function(){return e},e}function ve(){var e=Object(v.a)(["\n    color: white;\n    position: fixed;\n    top:0;\n    left:0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0px 10px;\n    background-color:rgba(20, 20, 20, 0.8);\n    z-index: 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return ve=function(){return e},e}var he=h.default.header(ve()),be=h.default.ul(ge()),xe=h.default.li(fe(),(function(e){return e.current?"#3498db":"transparent"})),Ee=Object(h.default)(p.b)(me()),ye=Object(d.g)((function(e){var t=e.location.pathname;return r.a.createElement(he,null,r.a.createElement(be,null,r.a.createElement(xe,{current:"/"===t},r.a.createElement(Ee,{to:"/"},"Movies")),r.a.createElement(xe,{current:"/tv"===t},r.a.createElement(Ee,{to:"/tv"},"TV")),r.a.createElement(xe,{current:"/search"===t},r.a.createElement(Ee,{to:"/search"},"Search"))))}));function _e(){var e=Object(v.a)(["\n    all:unset;\n    font-size: 28px;\n    width: 100%;\n"]);return _e=function(){return e},e}function je(){var e=Object(v.a)(["\n    margin-bottom: 50px;\n    width: 100%;\n"]);return je=function(){return e},e}function Oe(){var e=Object(v.a)(["\n    padding: 0px 20px;\n"]);return Oe=function(){return e},e}var we=h.default.div(Oe()),ke=h.default.form(je()),Se=h.default.input(_e()),Te=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,l=e.handleSubmit,o=e.error,u=e.updateTerm;return r.a.createElement(we,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(ke,{onSubmit:l},r.a.createElement(Se,{placeholder:"Search Movies or TV Shows...",value:a,onChange:u})),i?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(w,{title:"Movie Results"},t.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(w,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),o&&r.a.createElement(C,{color:"e74c3c",text:o}),n&&t&&0===n.length&&r.a.createElement(C,{text:"Nothing found",color:"#95a5a6"})))},Re=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t&&t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;console.log(n),e.setState({searchTerm:n})},e.searchByTerm=Object(g.a)(f.a.mark((function t(){var n,a,r,i,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,t.next=4,ne(n);case 4:return a=t.sent,r=a.data.results,t.next=8,oe(n);case 8:i=t.sent,l=i.data.results,e.setState({movieResults:r,tvResults:l}),e.setState({loading:!0}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,l=e.error;return console.log(this.state),r.a.createElement(Te,{movieResults:t,tvResults:n,searchTerm:a,loading:i,error:l,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function Me(){var e=Object(v.a)(["\n    font-size: 17px;\n    opacity: 0.7;\n    line-height: 1.5;\n    width: 60%;\n"]);return Me=function(){return e},e}function Ue(){var e=Object(v.a)(["\n    margin: 0px 10px;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(v.a)([""]);return ze=function(){return e},e}function Ce(){var e=Object(v.a)(["\n    margin:20px 0;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(v.a)(["\n    font-size: 32px;\n    margin-bottom: 10px;\n    \n"]);return Ne=function(){return e},e}function Ie(){var e=Object(v.a)(["\n    width: 70%;\n    margin-left: 10%;\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(v.a)(["\n    width: 40%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    height: 100%;\n    border-radius: 5px;\n    box-shadow: 20px 20px 30px rgba(0, 0, 1, 0.7);\n\n"]);return Pe=function(){return e},e}function De(){var e=Object(v.a)(["\n    display: flex;\n    align-items: center;\n    margin-left: 10%;\n    position: relative;\n    z-index: 1;\n    height: 100%;\n"]);return De=function(){return e},e}function Fe(){var e=Object(v.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(2px);\n    opacity: 0.5;\n    z-index: 0;\n"]);return Fe=function(){return e},e}function Ve(){var e=Object(v.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n    display: flex;\n"]);return Ve=function(){return e},e}var Ae=h.default.div(Ve()),Be=h.default.div(Fe(),(function(e){return e.bgImage})),Le=h.default.div(De()),qe=h.default.div(Pe(),(function(e){return e.bgImage})),Je=h.default.div(Ie()),Ge=h.default.h3(Ne()),He=h.default.div(Ce()),Ke=h.default.span(ze()),Qe=h.default.span(Ue()),We=h.default.p(Me()),Xe=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement(T,null)):r.a.createElement(Ae,null,r.a.createElement(b.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Nomflix")),r.a.createElement(Be,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Le,null,r.a.createElement(qe,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),r.a.createElement(Je,null,r.a.createElement(Ge,null,t.original_title?t.original_title:t.original_name),r.a.createElement(He,null,r.a.createElement(Ke,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Qe,null,"\xb7"),r.a.createElement(Ke,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Qe,null,"\xb7"),r.a.createElement(Ke,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(We,null,t.overview))))},Ye=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var a;Object(o.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,loading:!0,error:null,isMovie:r.includes("/movie/")},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,l,o,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,te(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,le(i);case 16:u=e.sent,l=u.data;case 18:console.log(l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 24:return e.prev=24,this.setState({loading:!1,result:l}),e.finish(24);case 27:case"end":return e.stop()}}),e,this,[[6,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.loading,a=e.error;return r.a.createElement(Xe,{result:t,loading:n,error:a})}}]),n}(r.a.Component),Ze=function(){return r.a.createElement(p.a,null,r.a.createElement(ye,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:ue}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:de}),r.a.createElement(d.b,{path:"/search",component:Re}),r.a.createElement(d.b,{path:"/movie/:id",component:Ye}),r.a.createElement(d.b,{path:"/show/:id",component:Ye}),r.a.createElement(d.a,{from:"*",to:"/"})))},$e=n(43),et=n.n($e);function tt(){var e=Object(v.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color:rgba(20, 20, 20, 1);\n        color: white;\n        padding-top:50px;\n    }\n"]);return tt=function(){return e},e}var nt=Object(h.createGlobalStyle)(tt(),et.a),at=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,null),r.a.createElement(nt,null))}}]),n}(a.Component);l.a.render(r.a.createElement(at,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9ad6d21d.chunk.js.map