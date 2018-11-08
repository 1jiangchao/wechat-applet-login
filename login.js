const app = getApp();
Page({
  data: {
    array: [{
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }],
    src: ''
  },
  formSubmit: function (e) {
    console.log(e);
    var oldpwd = e.detail.value.oldpwd;
    var newpwd = e.detail.value.newpwd;
    if (oldpwd == '' || oldpwd == '' || newpwd == '') {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 1000
      })
    } else {
      var url = "";
      wx.showLoading({
        title: '正在登录中......',
      })
      wx.request({
        url: "",
        method: 'POST',
        data: {
          username: oldpwd,
          pwd: newpwd
        },
        header: {
          'sign': ''
        },
        success: (res) => {
          var wxSession = res.data.data;
          console.log(wxSession);
          wx.setStorageSync('PHPSESSID', wxSession);
          if (res.data.status == -1) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1000
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 2000,
              success: function () {
                setTimeout(function () {
                  wx.switchTab({
                    url: '',
                  })
                }, 1000)
              }
            })
          }
        }
      })
    }
  },
  toenroll: function (e) {
    console.log(e);
    wx.navigateTo({
      url: "",
    })
  }
})  