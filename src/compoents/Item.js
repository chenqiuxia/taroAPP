import Taro, { Component } from '@tarojs/taro'
import { View,Image, Text } from '@tarojs/components'

class Item extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const {image} = this.props.image
    const {description} = this.props.description
    return (
      <View>
        <Text>{description}</Text>
        <Image src={image}></Image>
      </View>
    )
  }
}
export default Item
