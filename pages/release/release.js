Component({
    data: {
        files: [],
        showTopTips: false,
        checkboxItems: [
            {name: '同步至楼内专区', value: '0', checked: true}
        ],
        categories: ["课本", "日用品", "电子产品"],
        categoryIndex: 0,
  
        isAgree: false,
        formData: {}
    },
    methods:{
        onLoad() {
            this.setData({
                selectFile: this.selectFile.bind(this),
                uplaodFile: this.uplaodFile.bind(this)
            })
        },
        chooseImage: function (e) {
            var that = this;
            wx.chooseImage({
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    that.setData({
                        files: that.data.files.concat(res.tempFilePaths)
                    });
                }
            })
        },
        previewImage: function(e){
            wx.previewImage({
                current: e.currentTarget.id, // 当前显示图片的http链接
                urls: this.data.files // 需要预览的图片http链接列表
            })
        },
        selectFile(files) {
            console.log('files', files)
            // 返回false可以阻止某次文件上传
        },
        uplaodFile(files) {
            console.log('upload files', files)
            // 文件上传的函数，返回一个promise
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('some error')
                }, 1000)
            })
        },
        uploadError(e) {
            console.log('upload error', e.detail)
        },
        uploadSuccess(e) {
            console.log('upload success', e.detail)
        },


         //复选列表项
         checkboxChange: function (e) {
          console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      
          var checkboxItems = this.data.checkboxItems, values = e.detail.value;
          for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
              checkboxItems[i].checked = false;
      
              for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                  if(checkboxItems[i].value == values[j]){
                      checkboxItems[i].checked = true;
                      break;
                  }
              }
          }
      
          this.setData({
              checkboxItems: checkboxItems,
              [`formData.checkbox`]: e.detail.value
          });
      },
      //商品名称价格等输入
      formInputChange(e) {
          const {field} = e.currentTarget.dataset
          this.setData({
              [`formData.${field}`]: e.detail.value
          })
      },
      
      //   bindCategoryCodeChange: function(e){
      //       console.log('picker category code 发生选择改变，携带值为', e.detail.value);
      
      //       this.setData({
      //         categoryCodeIndex: e.detail.value
      //       })
      //   },
      bindCategoryChange: function(e) {
          console.log('picker categoryIndex 发生选择改变，携带值为', e.detail.value);
      
          this.setData({
              categoryIndex: e.detail.value
          })
      },
      //最后提交
      submitForm() {
          this.selectComponent('#form').validate((valid, errors) => {
              console.log('valid', valid, errors)
              if (!valid) {
                  const firstError = Object.keys(errors)
                  if (firstError.length) {
                      this.setData({
                          error: errors[firstError[0]].message
                      })
                  }
              } else {
                  wx.showToast({
                      title: '发布成功'
                  })
              }
          })
      },
    }
    
  })