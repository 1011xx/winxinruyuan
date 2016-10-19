Page({
  data: {
  	id: '',
		list: {},
		imghidden: "show",
		imgshouhide: true	
	},

	onLoad: function(params) {
		console.log(params);
		var idd;
	 if(params.id){
	  	console.log(1)
	  	idd=params.id;
	  }else{
	  	idd='dA4g3MTLCCw%3D';
	  	
	  }
		var that=this;
		var urlzdy='http://ruyuanapp.htrdit.com/v2X/wish/wishDetail?loginUserId=&wishId='+idd;
	this.setData({
			id: params.id
		})
		 
		wx.request({
			//url: 'http://ruyuanapp.htrdit.com/v2X/wish/wishDetail?loginUserId=&wishId=dA4g3MTLCCw%3D',
			url:urlzdy,
			header: {
				'content-Type': 'application/json'
			},
			success: function(res) {
					
				setTimeout(function() {
				
					var dataArray = {};
					dataArray = res.data.result.wishInfo;
				
						var dataenclosure = res.data.result.wishInfo.enclosure;
						var x = dataenclosure.split(",")[0];
						if(x == "") {
							x = 1;
				   }
					dataArray.enclosure = x;
					that.setData({
						list: dataArray,
						loadingHidden: true
					});
					console.log(res.data.result.wishInfo);
					console.log(dataArray);
				}, 1500);
			},
			fail: function(error) {
				console.log(error);
			}
		});

	}
});
