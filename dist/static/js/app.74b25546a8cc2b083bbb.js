webpackJsonp([1],{"/5VC":function(e,t){},"1/oy":function(e,t){},"1TVu":function(e,t){},"2+Q8":function(e,t){},"2uFj":function(e,t,n){"use strict";e.exports={firebase:{apiKey:"AIzaSyAk2SIyX16-0O9IAM_07SWqervVn5MbyAo",authDomain:"omaha-pickem.firebaseapp.com",databaseURL:"https://omaha-pickem.firebaseio.com",projectId:"omaha-pickem",storageBucket:"omaha-pickem.appspot.com",messagingSenderId:"701855472802",timestampsInSnapshots:!0}}},"9M+g":function(e,t){},B3oP:function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i=n("kxiW"),a=n.n(i),r={name:"App",methods:{logout:function(){this.$store.commit("updateUser",null),this.$router.replace("/")}},computed:{currentUser:function(){return a.a.auth().currentUser}},mounted:function(){}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"primary"}},[n("router-link",{attrs:{to:"/Main"}},[n("b-navbar-brand",[e._v("Omaha Pickem")])],1),e._v(" "),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e.$store.state.user?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:e.$store.state.user.name,right:""}},[n("b-dropdown-item",{on:{click:e.logout}},[e._v("Signout")])],1)],1):e._e()],1)],1),e._v(" "),n("br"),e._v(" "),n("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")(r,o,!1,function(e){n("k9aW")},null,null).exports,c=n("/ocq"),u=n("e6fC"),m=n("NYxO");s.a.use(m.a);var h=new m.a.Store({state:{user:null,bracketOneWinner:null,bracketTwoWinner:null},mutations:{updateUser:function(e,t){e.user=t},setBracketOneWinner:function(e,t){e.bracketOneWinner=t},setBracketTwoWinner:function(e,t){e.bracketTwoWinner=t}}}),v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Bracket 1")]),e._v(" "),n("main",{staticStyle:{"justify-content":"center"}},[n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.ore}},[e._v("Oregon St")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.nor}},[e._v("North Carolina")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.mis}},[e._v("Mississippi St")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.was}},[e._v("Washington")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game"},[e._v(" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game"},[e._v(" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.threeTop}},[e._v(e._s(e.games[0].loser)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.threeBottom}},[e._v(e._s(e.games[1].loser)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.fourTop}},[e._v(e._s(e.games[0].winner)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.fourBottom}},[e._v(e._s(e.games[1].winner)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.fiveTop}},[e._v(e._s(e.games[3].loser)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.fiveBottom}},[e._v(e._s(e.games[2].winner)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.sixTop}},[e._v(e._s(e.games[3].winner))]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.sixBottom}},[e._v(e._s(e.games[4].winner)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover"},[e._v(e._s(e.games[5].winner)+" ")]),e._v(" "),n("li",[e._v(" ")])])])])},staticRenderFns:[]};var p=n("VU/8")({name:"One",props:["initialGames","editable"],data:function(){return{}},mounted:function(){},computed:{games:function(){return this.initialGames}},methods:{em:function(){this.$emit("update",this.games)},propLoss:function(e,t){if(e)for(var n=t;n<this.games.length;n++)this.games[n].winner==e&&(this.games[n].winner=null),this.games[n].loser==e&&(this.games[n].loser=null)},ore:function(){this.editable&&(this.propLoss("North Carolina",1),this.propLoss("Oregon St",1),this.games[0].loser="North Carolina",this.games[0].winner="Oregon St")},nor:function(){this.editable&&(this.propLoss("North Carolina",1),this.propLoss("Oregon St",1),this.games[0].loser="Oregon St",this.games[0].winner="North Carolina")},mis:function(){this.editable&&(this.propLoss("Washington",2),this.propLoss("Mississippi St",2),this.games[1].loser="Washington",this.games[1].winner="Mississippi St")},was:function(){this.editable&&(this.propLoss("Mississippi St",2),this.propLoss("Washington",2),this.games[1].loser="Mississippi St",this.games[1].winner="Washington")},threeTop:function(){this.editable&&(this.propLoss(this.games[2].winner,3),this.propLoss(this.games[2].loser,3),this.games[2].winner=this.games[0].loser)},threeBottom:function(){this.editable&&(this.propLoss(this.games[2].winner,3),this.propLoss(this.games[2].loser,3),this.games[2].winner=this.games[1].loser)},fourTop:function(){this.editable&&(this.propLoss(this.games[3].winner,4),this.propLoss(this.games[3].loser,4),this.games[3].winner=this.games[0].winner,this.games[3].loser=this.games[1].winner)},fourBottom:function(){this.editable&&(this.propLoss(this.games[3].winner,4),this.propLoss(this.games[3].loser,4),this.games[3].winner=this.games[1].winner,this.games[3].loser=this.games[0].winner)},fiveTop:function(){this.editable&&(this.propLoss(this.games[4].winner,4),this.propLoss(this.games[4].loser,4),this.games[4].winner=this.games[3].loser)},fiveBottom:function(){this.editable&&(this.propLoss(this.games[4].winner,4),this.propLoss(this.games[4].loser,4),this.games[4].winner=this.games[2].winner)},sixTop:function(){this.editable&&(this.games[5].winner=this.games[3].winner,this.$store.commit("setBracketOneWinner",this.games[5].winner))},sixBottom:function(){this.editable&&(this.games[5].winner=this.games[4].winner,this.$store.commit("setBracketOneWinner",this.games[5].winner))}}},v,!1,function(e){n("QTr5")},"data-v-6f0950fc",null).exports,g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Bracket 2")]),e._v(" "),n("main",{staticStyle:{"justify-content":"center"}},[n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.ark}},[e._v("Arkansas")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.tex}},[e._v("Texas")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.tec}},[e._v("Texas Tech")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.flo}},[e._v("Florida")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game"},[e._v(" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game"},[e._v(" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.threeTop}},[e._v(e._s(e.games[0].loser)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.threeBottom}},[e._v(e._s(e.games[1].loser)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.fourTop}},[e._v(e._s(e.games[0].winner)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.fourBottom}},[e._v(e._s(e.games[1].winner)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.fiveTop}},[e._v(e._s(e.games[3].loser)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.fiveBottom}},[e._v(e._s(e.games[2].winner)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.sixTop}},[e._v(e._s(e.games[3].winner)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.sixBottom}},[e._v(e._s(e.games[4].winner)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover"},[e._v(e._s(e.games[5].winner)+" ")]),e._v(" "),n("li",[e._v(" ")])])])])},staticRenderFns:[]};var _=n("VU/8")({name:"One",props:["initialGames","editable"],data:function(){return{}},mounted:function(){},computed:{games:function(){return this.initialGames}},methods:{em:function(){this.$emit("update",this.games)},propLoss:function(e,t){if(e)for(var n=t;n<this.games.length;n++)this.games[n].winner==e&&(this.games[n].winner=null),this.games[n].loser==e&&(this.games[n].loser=null)},ark:function(){this.editable&&(this.propLoss("Texas",1),this.propLoss("Arkansas",1),this.games[0].loser="Texas",this.games[0].winner="Arkansas")},tex:function(){this.editable&&(this.propLoss("Texas",1),this.propLoss("Arkansas",1),this.games[0].loser="Arkansas",this.games[0].winner="Texas")},tec:function(){this.editable&&(this.propLoss("Florida",2),this.propLoss("Texas Tech",2),this.games[1].loser="Florida",this.games[1].winner="Texas Tech")},flo:function(){this.editable&&(this.propLoss("Texas Tech",2),this.propLoss("Florida",2),this.games[1].loser="Texas Tech",this.games[1].winner="Florida")},threeTop:function(){this.editable&&(this.propLoss(this.games[2].winner,3),this.propLoss(this.games[2].loser,3),this.games[2].winner=this.games[0].loser)},threeBottom:function(){this.editable&&(this.propLoss(this.games[2].winner,3),this.propLoss(this.games[2].loser,3),this.games[2].winner=this.games[1].loser)},fourTop:function(){this.editable&&(this.propLoss(this.games[3].winner,4),this.propLoss(this.games[3].loser,4),this.games[3].winner=this.games[0].winner,this.games[3].loser=this.games[1].winner)},fourBottom:function(){this.editable&&(this.propLoss(this.games[3].winner,4),this.propLoss(this.games[3].loser,4),this.games[3].winner=this.games[1].winner,this.games[3].loser=this.games[0].winner)},fiveTop:function(){this.editable&&(this.propLoss(this.games[4].winner,4),this.propLoss(this.games[4].loser,4),this.games[4].winner=this.games[3].loser)},fiveBottom:function(){this.editable&&(this.propLoss(this.games[4].winner,4),this.propLoss(this.games[4].loser,4),this.games[4].winner=this.games[2].winner)},sixTop:function(){this.editable&&(this.games[5].winner=this.games[3].winner,this.$store.commit("setBracketTwoWinner",this.games[5].winner))},sixBottom:function(){this.editable&&(this.games[5].winner=this.games[4].winner,this.$store.commit("setBracketTwoWinner",this.games[5].winner))}}},g,!1,function(e){n("/5VC")},"data-v-4d14f565",null).exports,d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Final")]),e._v(" "),n("main",{staticStyle:{"justify-content":"center"}},[n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-top teamHover",on:{click:e.top}},[e._v(e._s(e.$store.state.bracketOneWinner)+" ")]),e._v(" "),n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover",on:{click:e.bottom}},[e._v(e._s(e.$store.state.bracketTwoWinner)+" ")]),e._v(" "),n("li",[e._v(" ")])]),e._v(" "),n("ul",[n("li",[e._v(" ")]),e._v(" "),n("li",{staticClass:"game game-bottom teamHover"},[e._v(e._s(e.unsynced?null:e.winner)+" ")]),e._v(" "),n("li",[e._v(" ")])])])])},staticRenderFns:[]};var f=n("VU/8")({name:"Final",props:["initialWinner","editable"],data:function(){return{winner:this.initialWinner}},mounted:function(){},computed:{unsynced:function(){this.winner!=this.$store.state.bracketOneWinner&&this.winner!=this.$store.state.bracketTwoWinner&&(this.winner=null)}},watch:{initialWinner:function(e){this.winner=e}},methods:{em:function(){this.$emit("update",this.winner)},top:function(){this.editable&&(this.winner=this.$store.state.bracketOneWinner)},bottom:function(){this.editable&&(this.winner=this.$store.state.bracketTwoWinner)}}},d,!1,function(e){n("1TVu")},"data-v-48a83e87",null).exports,w=n("Xxa5"),b=n.n(w),k=n("exGp"),T=n.n(k),B={getBrackets:function(){var e=T()(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n=a.a.firestore()).settings({timestampsInSnapshots:!0}),e.next=5,n.collection("brackets").get();case 5:return e.sent.forEach(function(e){t.push({id:e.id,data:e.data()})}),e.abrupt("return",t);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),postBracket:function(){var e=T()(b.a.mark(function e(t,n){var s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((s=a.a.firestore()).settings({timestampsInSnapshots:!0}),i=this,void 0,!n){e.next=9;break}return s.collection("brackets").doc(n).set(t),e.abrupt("return",t.uid);case 9:return e.next=11,s.collection("brackets").doc().set(t);case 11:return e.sent,e.abrupt("return",i.findBracket(t.uid));case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),findBracket:function(){var e=T()(b.a.mark(function e(t){var n,s,i,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],(s=a.a.firestore()).settings({timestampsInSnapshots:!0}),i=s.collection("brackets"),r=i.where("uid","==",t),e.next=7,r.get();case 7:return e.sent.forEach(function(e){n.push({id:e.id,data:e.data()})}),e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getBracket:function(){var e=T()(b.a.mark(function e(t){var n,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=a.a.firestore()).settings({timestampsInSnapshots:!0}),e.next=4,n.collection("brackets").doc(t);case 4:return s=e.sent,e.next=7,s.get();case 7:if((i=e.sent).exists){e.next=12;break}return e.abrupt("return",null);case 12:return e.abrupt("return",{id:i.id,data:i.data()});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},x={components:{one:p,two:_,final:f},name:"Main",mounted:function(){var e=this;B.findBracket(this.$store.state.user.id).then(function(t){t[0]&&(e.bracketOne=t[0].data.bracketOne,e.bracketTwo=t[0].data.bracketTwo,e.bracketFinal=t[0].data.bracketFinal,e.bracketId=t[0].id,e.$store.commit("setBracketOneWinner",e.bracketOne[5].winner),e.$store.commit("setBracketTwoWinner",e.bracketTwo[5].winner))})},data:function(){return{content:"View All Brackets",page:1,bracketOne:[{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null}],bracketTwo:[{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null}],bracketFinal:null,bracketId:null,saving:!1}},computed:{started:function(){return console.log(this.saving),Date.now()>15291756e5&&this.saving}},methods:{save:function(){var e=this;this.$children[1].em(),this.$children[2].em(),this.$children[3].em(),e.saving=!0,B.postBracket({bracketOne:e.bracketOne,bracketTwo:e.bracketTwo,bracketFinal:e.bracketFinal,uid:e.$store.state.user.id,username:e.$store.state.user.name},e.bracketId).then(function(t){e.saving=!1,t[0]&&(e.bracketId=t[0].id)})},oneUpdate:function(e){this.bracketOne=e},twoUpdate:function(e){this.bracketTwo=e},finalUpdate:function(e){this.bracketFinal=e}}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",[n("b-row",[n("b-col",[n("router-link",{attrs:{to:"/ViewBrackets"}},[n("p",[e._v(e._s(e.content))])])],1)],1)],1),e._v(" "),n("h2",[e._v("Your Bracket:")]),e._v(" "),n("b-button",{attrs:{disabled:e.page<=1},on:{click:function(t){e.page--}}},[e._v(" < ")]),e._v(" "),e.saving?e._e():n("b-button",{attrs:{disabled:e.started},on:{click:e.save}},[e._v(" Save")]),e._v(" "),n("b-button",{attrs:{disabled:e.page>=3},on:{click:function(t){e.page++}}},[e._v(" > ")]),e._v(" "),n("div",{staticClass:"brackets"},[n("one",{directives:[{name:"show",rawName:"v-show",value:1==e.page,expression:"page==1"}],attrs:{initialGames:e.bracketOne,editable:!0},on:{update:e.oneUpdate}}),e._v(" "),n("two",{directives:[{name:"show",rawName:"v-show",value:2==e.page,expression:"page==2"}],attrs:{initialGames:e.bracketTwo,editable:!0},on:{update:e.twoUpdate}}),e._v(" "),n("final",{directives:[{name:"show",rawName:"v-show",value:3==e.page,expression:"page==3"}],attrs:{initialWinner:e.bracketFinal,editable:!0},on:{update:e.finalUpdate}})],1)],1)},staticRenderFns:[]};var L=n("VU/8")(x,C,!1,function(e){n("eqiE")},"data-v-164166f7",null).exports,$={name:"Home",data:function(){return{form:{email:"",password:""}}},methods:{signInWithReddit:function(){window.location="https://www.reddit.com/api/v1/authorize?client_id=ZmJX96wHgxC4Fg&response_type=token&state=kek&redirect_uri=https://serene-kepler-9a1365.netlify.com&scope=identity"}},mounted:function(){a.a.auth().currentUser&&this.$router.replace("/")}},W={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("b-button",{attrs:{variant:"primary"},on:{click:this.signInWithReddit}},[this._v("Sign In With Reddit")]),this._v(" "),t("router-link",{attrs:{to:"ViewBrackets"}},[t("b-button",{attrs:{variant:"primary"}},[this._v("View All Brackets")])],1)],1)},staticRenderFns:[]};var H=n("VU/8")($,W,!1,function(e){n("2+Q8")},"data-v-3c2e1a22",null).exports,O={name:"ViewBrackets",data:function(){return{brackets:[]}},mounted:function(){this.getData()},methods:{getData:function(){var e=T()(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,B.getBrackets().then(function(e){t.brackets=e});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/Main"}},[n("p",[e._v("Your Bracket")])]),e._v(" "),n("h2",[e._v("All Brackets")]),e._v(" "),e._l(e.brackets,function(t){return[n("router-link",{attrs:{to:{name:"Bracket",params:{bracketId:t.id}}}},[e._v(e._s(t.data.username)+": "+e._s(t.data.bracketFinal))]),e._v(" "),n("br")]})],2)},staticRenderFns:[]};var S=n("VU/8")(O,F,!1,function(e){n("B3oP")},null,null).exports,y={props:["bracketId"],components:{one:p,two:_,final:f},name:"Bracket",mounted:function(){var e=this;B.getBracket(this.bracketId).then(function(t){t&&(e.bracketOne=t.data.bracketOne,e.bracketTwo=t.data.bracketTwo,e.bracketFinal=t.data.bracketFinal,e.bracketId=t.id,e.$store.commit("setBracketOneWinner",e.bracketOne[5].winner),e.$store.commit("setBracketTwoWinner",e.bracketTwo[5].winner),e.username=t.data.username)})},data:function(){return{content:"View All Brackets",page:1,bracketOne:[{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null}],bracketTwo:[{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null},{winner:null,loser:null}],bracketFinal:null,username:null}},methods:{},computed:{}},A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-container",[n("b-row",[n("b-col",[n("router-link",{attrs:{to:"/ViewBrackets"}},[n("p",[e._v(e._s(e.content))])])],1)],1)],1),e._v(" "),n("h2",[e._v("Bracket: "+e._s(e.username))]),e._v(" "),n("b-button",{attrs:{disabled:e.page<=1},on:{click:function(t){e.page--}}},[e._v(" < ")]),e._v(" "),n("b-button",{attrs:{disabled:e.page>=3},on:{click:function(t){e.page++}}},[e._v(" > ")]),e._v(" "),n("div",{staticClass:"brackets"},[n("one",{directives:[{name:"show",rawName:"v-show",value:1==e.page,expression:"page==1"}],attrs:{initialGames:e.bracketOne,editable:!1}}),e._v(" "),n("two",{directives:[{name:"show",rawName:"v-show",value:2==e.page,expression:"page==2"}],attrs:{initialGames:e.bracketTwo,editable:!1}}),e._v(" "),n("final",{directives:[{name:"show",rawName:"v-show",value:3==e.page,expression:"page==3"}],attrs:{initialWinner:e.bracketFinal,editable:!1}})],1)],1)},staticRenderFns:[]};var I=n("VU/8")(y,A,!1,function(e){n("TYHQ")},"data-v-672811a4",null).exports,V=n("mtWM"),U=n.n(V),M={data:function(){return{}},mounted:function(){var e=this,t="bearer "+this.$route.hash.substr(1).split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{}).access_token;console.log(t),U.a.get("https://oauth.reddit.com/api/v1/me",{headers:{Authorization:t}}).then(function(t){e.$store.commit("updateUser",t.data),e.$router.replace("/Main")}).catch(function(t){e.$router.replace("/")})}},R={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var E=n("VU/8")(M,R,!1,function(e){n("k17j")},null,null).exports;n("Jmt5"),n("9M+g");s.a.use(c.a),s.a.use(u.a);var N=new c.a({routes:[{path:"/Main",name:"Main",component:L,meta:{requiresAuth:!0}},{path:"/",name:"Home",component:H},{path:"/ViewBrackets",name:"ViewBrackets",component:S},{path:"/Bracket/:bracketId",name:"Bracket",component:I,props:!0},{path:"/Auth/Reddit",name:"AuthReddit",component:E,props:!0}]});N.beforeEach(function(e,t,n){var s=h.state.user,i=e.matched.some(function(e){return e.meta.requiresAuth});"/access"==e.path.substring(0,7)&&n("/Auth/Reddit#access_token="+e.path.substring(14,e.path.indexOf("&")));i&&!s?n("/"):n()});var j=N,G=n("2uFj"),Q=n.n(G);s.a.config.productionTip=!1;a.a.initializeApp(Q.a.firebase),a.a.auth().onAuthStateChanged(function(e){new s.a({el:"#app",template:"<App/>",store:h,components:{App:l},router:j})})},QTr5:function(e,t){},TYHQ:function(e,t){},eqiE:function(e,t){},k17j:function(e,t){},k9aW:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.74b25546a8cc2b083bbb.js.map