import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'
import './index.scss'
import Item from '../../compoents/Item'
import url01 from '../../asset/image/01.png'
import url02 from '../../asset/image/02.jpeg'
import url03 from '../../asset/image/03.jpg'

export default class Index extends Component {
constructor () {
  super(...arguments)
  this.state = {
    list: [
      {description: 'one ', image: url01},
      {description: 'two ', image: url02},
      {description: 'two ', image: url03}
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
  add () {
  console.log('add the button')
  }

  render () {
    return (
      <View className='index'>
        <View className='item-wrapper'>
        {this.state.list.map((item) =>
          (<View className='item'>
          <Image src={item.image} className='item-image'></Image>
            <View className='flex-wrap description-con'>
              <Text className='item-text'><Text className='tips'>goods description:</Text>{item.description}</Text>
            <Button className='add' onClick={this.add} plain type='primary' size='mini'>添加到购物车</Button>
            </View>
          </View>)
        )}
        </View>
      </View>
    )
  }
}

