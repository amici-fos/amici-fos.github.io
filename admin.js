$('form').on('submit',function(e){
  e.preventDefault();
  data=$(this).serializeArray();
  console.log(data);
  submittarget="/admin/add";
  $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
  $.post(submittarget,{data:data},function(e){
    console.log(e);
  });
})


var app4 = new Vue({
  el: '#mainapp',
  data: {
    todos: [

    ],
    keywords:"new content",
    content:"sample content,write here",
  },
  methods: {
    reverseMessage: function () {
      this.todos=[]
      keys = this.keywords.split('\n');
      for (i = 0; i < keys.length; i++) {
      this.todos.push({'text':keys[i],'found':'red-text','count':0});
  }
},
analysecontent: function(){
  docMap=this.content.toLowerCase().replace(/\s+\n+/g,' ').trim();
  console.log(_.values(this.todos));
  for (i = 0; i < this.todos.length; i++) {

item_to_search=this.todos[i].text;
count= docMap.split(item_to_search).length - 1
pos= docMap.indexOf(item_to_search);
if (pos>=0){
  this.todos[i].found='green-text';
  this.todos[i].count=count;
}
else{
  this.todos[i].found='red-text';
  this.todos[i].count=0;
}

}
}


  }
})
