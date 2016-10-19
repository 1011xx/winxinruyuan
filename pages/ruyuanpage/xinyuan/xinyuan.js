Page({
	data: {
		id: '',
		list: {},
		content: ''
	},

	onLoad: function(params) {
		// console.log('loaded.');
		var that = this;
		var iid;
		if(params.id){
			iid=params.id;
		}else{
			iid='pt%2FLCPBBrQ8%3D';
		}
		
		var y = 'http://ruyuanapp.htrdit.com/v2X/wish/getOthersWishList?loginUserId=&orderType=1&page=1&otherUserId=' + iid + '&displayType=4';
		this.setData({
			id: params.id
		})
		wx.request({
			url: y,
			success: function(res) {
        console.log(res.data.result);
				var fzobj=res.data.result;
				for(var i = 0; i < res.data.result.wishList.length; i++) {						
						var dataenclosure = res.data.result.wishList[i].enclosure;
						var x = dataenclosure.split(",")[0];
						if(x==""){
							x=1;
						}
						fzobj.wishList[i].enclosure=x;
					}
				that.setData({
					list: fzobj,
					loadingHidden: true
				});

			}
		})

	},

	onReady: function() {

	}

});