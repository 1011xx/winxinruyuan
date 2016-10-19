Page({
	data: {
		current: 0,
		list: [],
		loadingHidden: false,
		refreshHidden: true,
		loadmoreHidden: true,
		imghidden: "show",
		imgshouhide: true,
		i: 1,
		swiper: {
			indicatorDots: false,
			autoplay: false,
			interval: 0,
			duration: 300
		}
	},

	onLoad: function() {
		// console.log('loaded.');
		var that = this;
		wx.request({
			url: 'http://ruyuanapp.htrdit.com/v2X/find/getWishList?queryType=2&page=1',
			/*//http://ruyuanapp.htrdit.com/v2X/wish/getOthersWishList?loginUserId=&orderType=1&page=1&otherUserId=oaNwcXHL%2BzE%3D&displayType=4
			
			//http://ruyuanapp.htrdit.com/v2X/wish/wishDetail?loginUserId=&wishId=dA4g3MTLCCw%3D
			//"http://ruyuanapp.htrdit.com/v2X/wish/shareWishPage?wishId=vrjwWSI%2BJNo%3D"
//wishCreaterId:"HxmaXrCU3Ds="*/
			header: {
				'content-Type': 'application/json'
			},
			success: function(res) {
				setTimeout(function() {
					//console.log(res.data);
					var dataArray = [];
					dataArray = res.data.result.wishList;
					for(var i = 0; i < res.data.result.wishList.length; i++) {
						var dataenclosure = res.data.result.wishList[i].enclosure;
						var x = dataenclosure.split(",")[0];
						if(x == "") {
							x = 1;
						}
						dataArray[i].enclosure = x;
						var datacid = res.data.result.wishList[i].wishCreaterId;
						var datacid1 = datacid.replace('/', '%2F');
						var datacid2 = datacid1.replace('=', '%3D');
						//var dataurl='loginUserId=&orderType=1&page=1&otherUserId='+datacid2+'&displayType=4';
						//console.log(dataurl);
						dataArray[i].wishCreaterId = datacid2;
						console.log(dataArray[i].wishCreaterId);
						/*var xqyurl=res.data.result.wishList[i].Contact("")*/
						var datawid = res.data.result.wishList[i].wishId;
						var datawid1 = datawid.replace('/', '%2F');
						var datawid2 = datawid1.replace('=', '%3D');
						//var dataurl='loginUserId=&orderType=1&page=1&otherUserId='+datacid2+'&displayType=4';
						//console.log(dataurl);
						dataArray[i].wishId= datawid2;
						console.log(dataArray[i].wishId);

					}
					//console.log(dataarrayimg[9]);
					that.setData({
						list: dataArray,
						loadingHidden: true
					});
					console.log(res.data.result.wishList);
					//console.log(Page.data.list);

				}, 1500);
			},
			fail: function(error) {
				console.log(error);
			}
		});

	},
	actionToupper: function() {
		var that = this;
		if(that.data.i==1){
			this.setData({
			refreshHidden: false,
			i:that.data.i
		});
		}else{
			this.setData({
			refreshHidden: false,
			i:that.data.i-1
		});
		}
		
		var y = 'http://ruyuanapp.htrdit.com/v2X/find/getWishList?queryType=2&page=' + that.data.i;
		wx.request({
			
			url: y,
			header: {
				'content-Type': 'application/json'
			},
			success: function(res) {
				setTimeout(function() {
					var dataArray = [];
					dataArray = res.data.result.wishList;
					for(var i = 0; i < res.data.result.wishList.length; i++) {
						var dataenclosure = res.data.result.wishList[i].enclosure;
						var x = dataenclosure.split(",")[0];
						if(x == "") {
							x = 1;
						}
						dataArray[i].enclosure = x;
						var datacid = res.data.result.wishList[i].wishCreaterId;
						var datacid1 = datacid.replace('/', '%2F');
						var datacid2 = datacid1.replace('=', '%3D');
						
						dataArray[i].wishCreaterId = datacid2;
						console.log(dataArray[i].wishCreaterId);
						

					}
					//console.log(dataarrayimg[9]);
					that.setData({
						list: dataArray.concat(that.data.list),
						refreshHidden: true
					
					});
					console.log(res.data.result.wishList);
				}, 1500);

			},

			fail: function(error) {
				console.log(error);
			}

		});
	},

	onPullDownRefresh: function() {
		console.log(0);
	},

	actionTolower: function() {
	var that = this;
		this.setData({
			loadmoreHidden: false,
			i:that.data.i+1
		});
		var y = 'http://ruyuanapp.htrdit.com/v2X/find/getWishList?queryType=2&page=' + that.data.i;
		wx.request({
			
			url: y,
			header: {
				'content-Type': 'application/json'
			},
			success: function(res) {
				setTimeout(function() {
					var dataArray = [];
					dataArray = res.data.result.wishList;
					for(var i = 0; i < res.data.result.wishList.length; i++) {
						var dataenclosure = res.data.result.wishList[i].enclosure;
						var x = dataenclosure.split(",")[0];
						if(x == "") {
							x = 1;
						}
						dataArray[i].enclosure = x;
						var datacid = res.data.result.wishList[i].wishCreaterId;
						var datacid1 = datacid.replace('/', '%2F');
						var datacid2 = datacid1.replace('=', '%3D');
						
						dataArray[i].wishCreaterId = datacid2;
						console.log(dataArray[i].wishCreaterId);
						

					}
					//console.log(dataarrayimg[9]);
					that.setData({
						list: dataArray.concat(that.data.list),
						refreshHidden: true
					
					});
					console.log(res.data.result.wishList);
				}, 1500);

			},

			fail: function(error) {
				console.log(error);
			}

		});
	},


   switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },

  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  }
    
});