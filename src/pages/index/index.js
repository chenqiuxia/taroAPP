import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Item from '../../compoents/Item'
export default class Index extends Component {
constructor () {
  super()
  this.state = {
    myName: 'chrislee',
    list: [
      {description: 'this is a description about some lecense ', image: '../../image/01.png'},
      {description: 'this is a description about some lecense ', image: '../../image/02.jpeg'}
    ]
  }
}
  config = {
    navigationBarTitleText: '商品列表'
  }

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    console.log('这里是页面开启吗？')
  }

  componentDidHide () {
    console.log('这里是页面关闭吗？')
   }

  render () {
  const {myName }=  this.state
    return (
      <View className='index'>
        <View>
          <Item name={myName}/>
          <View/>
      </View>
    )
  }
}

