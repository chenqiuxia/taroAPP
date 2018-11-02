import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Welcome from '../../compoents/welcome'
export default class Index extends Component {
constructor () {
  this.state = {
    myName: 'chrislee'
  }
}
  config = {
    navigationBarTitleText: '首页de'
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
    return (
      <View className='index'>
              <Welcome name={this.state.myName}/>
      </View>
    )
  }
}

