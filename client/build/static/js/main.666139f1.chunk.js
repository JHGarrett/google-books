(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(66)},36:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(22),r=a.n(o),s=a(26),c=a(7);var i=function(){return l.a.createElement("div",{className:"container mt-3 text-center"},l.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-info"},l.a.createElement("h1",{className:"display-4 font-weight-bold text-white"},"Google Books Search"),l.a.createElement("h3",{className:"font-weight-bold text-white"},"Search for and Save Books that you like.")))};a(36);var m=function(){return l.a.createElement("nav",{className:"nav navbar-expand-lg navbar-dark"},l.a.createElement("a",{className:"nav-link text-info",href:"/"},l.a.createElement("h3",null,"Google Books")),l.a.createElement("a",{className:"nav-link mt-2 text-info",href:"/"},"Search"),l.a.createElement("a",{className:"nav-link mt-2 text-info",href:"/saved"},"Saved"))},d=a(23),u=a(24),h=a(29),v=a(25),f=a(30);var E=function(e){return l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Book Search"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:e.onClick},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Book"),l.a.createElement("input",{type:"text",className:"form-control",value:e.value,onChange:e.onChange,placeholder:"Example: Harry Potter",required:!0})),l.a.createElement("button",{className:"btn btn-sm float-right btn-info",type:"submit"},"Search")))))};var k=function(e){var t=e.children;return l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Results"),l.a.createElement("div",{className:"card-body"},t)))};var p=function(e){return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{src:e.thumbnail,className:"card-img",alt:e.title,style:{width:"200px"}})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},"Written By: ",e.author),l.a.createElement("p",{className:"card-text"},"Desc: ",e.description)),l.a.createElement("a",{href:e.href,className:"btn btn-primary",role:"button"},"View"),"/"===window.location.pathname?l.a.createElement("span",{"data-index":e.index,className:"save btn btn-success",onClick:e.save},"Save"):l.a.createElement("span",{"data-index":e.index,className:"delete btn btn-danger",onClick:e.delete},"Delete"))))};var b=function(e){var t=e.children;return l.a.createElement("div",{className:"container mt-3"},l.a.createElement("div",{className:"card"},l.a.createElement("h5",{className:"card-header"},"Saved Results"),l.a.createElement("div",{className:"card-body"},t)))},g=a(9),N=a.n(g),S={searchBooks:function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getSavedBooks:function(){return N.a.get("/api/books/saved")},deleteBook:function(e){return N.a.delete("/api/books/delete/"+e)},saveBook:function(e,t){return N.a.post("/api/books/"+e,t)}},w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={results:[],savedBooks:[],bookSearch:""},a.handleSearch=function(e){e.preventDefault(),a.state.bookSearch&&S.searchBooks(a.state.bookSearch).then(function(e){return a.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value;a.setState({bookSearch:t})},a.handleSave=function(e){var t=e.target.attributes.getNamedItem("data-index").value,n=a.state.results[t];console.log(n);var l={title:n.volumeInfo.title,link:n.volumeInfo.previewLink,thumbnail:n.volumeInfo.imageLinks.thumbnail,author:n.volumeInfo.authors[0],description:n.volumeInfo.description,key:n.id};S.saveBook(l.key,l).then(S.getSavedBooks().then(function(e){a.setState({savedBooks:e.data}),console.log("In state",a.state.savedBooks),console.log("Length",a.state.savedBooks.length)}))},a.handleDelete=function(e){var t=e.target.attributes.getNamedItem("data-index").value,n=a.state.savedBooks[t];console.log(n._id),S.deleteBook(n._id).then(window.location.reload())},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.getSavedBooks().then(function(t){e.setState({savedBooks:t.data})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,"/"===window.location.pathname?l.a.createElement("div",null,l.a.createElement(E,{value:this.state.bookSearch,onChange:this.handleInputChange,onClick:this.handleSearch}),l.a.createElement(k,null,this.state.results.length?this.state.results.map(function(t,a){return l.a.createElement(p,{key:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors?t.volumeInfo.authors[0]:"Anonymous",href:t.volumeInfo.previewLink,thumbnail:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:"http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg",description:t.volumeInfo.description,save:e.handleSave,index:a})}):l.a.createElement("h3",null,"No Results to Display"))):l.a.createElement(b,null,this.state.savedBooks.length?this.state.savedBooks.map(function(t,a){return l.a.createElement(p,{key:t._id,title:t.title,author:t.author,href:t.link,thumbnail:t.thumbnail?t.thumbnail:"http://blogs.smithsonianmag.com/design/files/2013/03/smiley-face-1.jpg",description:t.description,delete:e.handleDelete,index:a})}):l.a.createElement("h3",null,"No Saved Books")))}}]),t}(n.Component);var y=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(i,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:w}),l.a.createElement(c.a,{exact:!0,path:"/saved",component:w}))))};r.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.666139f1.chunk.js.map