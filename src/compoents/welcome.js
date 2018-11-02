import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
class Welcome extends Component {
  render() {
    return <View>Welcome {this.props.name} </View>
  }
}
export default Welcome