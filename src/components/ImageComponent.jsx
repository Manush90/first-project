import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return <img className={this.props.className} src={this.props.src} alt={this.props.alt}></img>;
  }
}
export default ImageComponent;
