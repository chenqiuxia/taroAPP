import Taro, { Component } from '@tarojs/taro'
import { WebView} from '@tarojs/components'
import './list.scss'

export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  onTap () {}
  config = {
    navigationBarTitleText: '首页de'
  }

  componentWillMount() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    console.log('这里是页面开启吗？')
  }

  componentDidHide() {
    console.log('这里是页面关闭吗？')
  }

  render() {
    return (
      <WebView src='https://mp.weixin.qq.com/'/>
    )
  }
}

