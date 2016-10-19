Page({
  data: {
  
    list:[]
  },
  onLoad: function () {

    var that = this;
    wx.request({    
       url: 'http://zkfgg.applinzi.com/json.php',
       header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        setTimeout(function () {
          that.setData({
            list: res.data,
            loadingHidden: true
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  }
});
