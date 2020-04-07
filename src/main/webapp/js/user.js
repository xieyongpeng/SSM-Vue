new Vue({
    el:"#app",
    data:{
    	user:{
            id:"",
            username:"",
            password:"",
            email:"",
            age:"",
            sex:""
        },
        userList:[]
    },
    methods:{
    	findAll: function(){
    		// 在当前方法中定义一个变量，表明是vue对象
    		var _this = this;
    		axios.get("/ssmVue/user/findAll")
    			.then(function(response){
    				// 响应数据给userList赋值(响应数据需要放到消息体中)
    				_this.userList = response.data;
    				console.log(response);
    			})
    			.catch(function (error){
    				alert(error);
    			})
    	},
	    findById:function (userid) {
	    	var _this = this;
	    	axios.get("/ssmVue/user/findById",{params:{id:userid}})
	    		.then(function (response){
	    			_this.user = response.data;
	    			$("#myModal").modal("show");
	    		})
	    		.catch(function (){
	    			alert(error);
	    		})
	    },
	    update:function (user) {// post请求
	      var _this = this;
	      axios.post("/ssmVue/user/updateUser",_this.user)
	      	.then(function (){
	      		_this.findAll();
	      	})
	      	.catch(function (){
	      		alert(error);
	      	})
	    }
    },
    created: function() {// 当我们页面加载的时候触发请求(创建完Vue对象后触发)，查询所有
    	this.findAll();
    }
});