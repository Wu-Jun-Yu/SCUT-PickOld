Page({
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['二手交易', '楼内专区', ' 跨校区代送']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  }

})
