Page({
  data: {
      files: [],
      showTopTips: false,
      isAgree: false,
      formData: {},

      index: 0,
      multiArray: [
      ['大学城', '五山', '国际校区'],
       ['C1', 'C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15']
      ],
      objectMultiArray: [
      [
        {
          id: 0,
          name: '大学城'
        },
        {
          id: 1,
          name: '五山'
        },
        {
          id: 2,
          name: '国际校区'
        }
      ], 
      [
        {
          id: 0,
          name: 'C1'
        },
        {
          id: 1,
          name: 'C2'
        },
        {
          id: 2,
          name: 'C3'
        },
        {
          id: 3,
          name: 'C4'
        },
        {
          id: 4,
          name: 'C5'
        },
        {
          id: 5,
          name: 'C6'
        },
        {
          id: 6,
          name: 'C7'
        },
        {
          id: 7,
          name: 'C8'
        },
        {
          id: 8,
          name: 'C9'
        },
        {
          id: 9,
          name: 'C10'
        },
        {
          id: 10,
          name: 'C11'
        },
        {
          id: 11,
          name: 'C12'
        },
        {
          id: 12,
          name: 'C13'
        },
        {
          id: 13,
          name: 'C14'
        },
        {
          id: 14,
          name: 'C15'
        },
      ]
    ],
      multiIndex: [0, 0],
      customItem: '全部'

  },


    //商品名称价格等输入
    formInputChange(e) {
        const {field} = e.currentTarget.dataset
        this.setData({
            [`formData.${field}`]: e.detail.value
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
                    title: '提交成功'
                })
            }
        })
    },
  
    //以下为选择器
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
    bindMultiPickerColumnChange: function (e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      var data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['C1', 'C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15'];
              break;
            case 1:
              data.multiArray[1] = ['北一', '北二', '北三','北六','北八','北九','北十','北十一','北十二','北十三','北十四','北十五','北十六','北十七','北十八','西一','西二','西三','西四','西五','西六','西七','西八','西九','西十','西十一','西十二','西十三','西十四','西十五','西十六','西十七','西十八','西十九','西二十','西二十一','研一','研二','研三','研四','研五','研六','西一留学生公寓','成教楼'];

              break;
            case 2:
              data.multiArray[1] = ['D5d', 'D5f', 'D5e','D5g'];

          }
          data.multiIndex[1] = 0;
          console.log(data.multiIndex);
          break;
      }
      this.setData(data);
    }
})