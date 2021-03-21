import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      srcSet: props.srcSet,
      errored: false,
    };
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        srcSet: null,
        src: this.props.fallbackSrc,
        errored: true,
      });
    }
  };

  render() {
    const { src, srcSet } = this.state;
    const { src: _1, fallbackSrc: _2, ...props } = this.props;

    return (
      <img
        src={src}
        onError={this.onError}
        alt={props.alt}
        {...props}
        srcSet={srcSet}
      />
    );
  }
}
