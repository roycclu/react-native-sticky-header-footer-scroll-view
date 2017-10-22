/**
 * @Author: Roy Lu 卢骋震 <roycclu>
 * @Date:   2017-05-21T11:55:17+08:00
 * @Last modified by:   roycclu
 * @Last modified time: 2017-10-22T23:27:18+08:00
 */

import React, { Component } from "react";
import { Dimensions, View, ViewPropTypes, ScrollView } from "react-native";
import { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import PropTypes from "prop-types";

const { bool, func, number, string } = PropTypes;

const WINDOW = Dimensions.get("window");

const SCROLLVIEW_REF = "ScrollView";

// Properties accepted by `stickyHeaderScrollView`.
const propTypes = {
  renderStickyHeader: func,
  renderStickyFooter: func,
  additionalHeightReserve: number,
  makeScrollable: bool,
  fitToScreen: bool,
  contentBackgroundColor: string,
  contentContainerStyle: ViewPropTypes.style,
};

class StickyHeaderFooterScrollView extends Component {
  constructor(props) {
    super(props);
    this._bodyOffsetTop = 0;
    this._bodyHeight = 0;
    this._footerSpacerHeight = 0;
    this._bodyOffsetBottom = 0;
  }

  render() {
    const {
      renderStickyHeader,
      renderStickyFooter,
      additionalHeightReserve,
      makeScrollable,
      fitToScreen,
      contentBackgroundColor,
      contentContainerStyle,
      children,
    } = this.props;

    const stickyHeader = this._renderStickyHeader(renderStickyHeader, {
      contentBackgroundColor,
    });

    const scrollElement = makeScrollable ? (
      <ScrollView {...this.props} />
    ) : (
      <View {...this.props} />
    );

    const bodyComponent = this._wrapChildren(children, {
      contentBackgroundColor,
      contentContainerStyle,
      additionalHeightReserve,
    });

    const footerSpacer = fitToScreen ? (
      this._renderFooterSpacer({ contentBackgroundColor })
    ) : (
      <View />
    );

    const stickyFooter = this._renderStickyFooter(renderStickyFooter, {});

    return (
      <View>
        {React.cloneElement(
          scrollElement,
          { backgroundColor: contentBackgroundColor },
          bodyComponent,
          footerSpacer
        )}
        {stickyHeader}
        {stickyFooter}
      </View>
    );
  }

  _renderStickyHeader(renderStickyHeader, { contentBackgroundColor }) {
    return (
      <View
        style={[
          {
            position: "absolute",
            top: 0,
            width: Dimensions.get("window").width,
            backgroundColor: contentBackgroundColor,
          },
        ]}
        onLayout={e => {
          const { nativeEvent: { layout: { height } } } = e;
          if (this._bodyOffsetTop !== height) {
            this._bodyComponent.setNativeProps({
              style: { marginTop: height },
            });
            this._bodyOffsetTop = height;
          }
        }}>
        {renderStickyHeader()}
      </View>
    );
  }

  _wrapChildren(
    children,
    { contentBackgroundColor, contentContainerStyle, additionalHeightReserve }
  ) {
    const containerStyles = [{ backgroundColor: contentBackgroundColor }];

    if (contentContainerStyle) containerStyles.push(contentContainerStyle);

    return (
      <View
        style={containerStyles}
        ref={ref => (this._bodyComponent = ref)}
        onLayout={e => {
          const { nativeEvent: { layout: { height } } } = e;
          const footerSpacerHeight = Math.max(
            0,
            WINDOW.height - this._bodyOffsetBottom - this._bodyOffsetTop - height
          );
          if (!!this._footerSpacerComponent && this._footerSpacerHeight != footerSpacerHeight) {
            this._footerSpacerComponent.setNativeProps({
              style: { height: footerSpacerHeight - additionalHeightReserve },
            });
            this._footerSpacerHeight = footerSpacerHeight;
          }
        }}>
        {children}
      </View>
    );
  }

  _renderFooterSpacer({ contentBackgroundColor }) {
    return (
      <View
        ref={ref => (this._footerSpacerComponent = ref)}
        style={{ backgroundColor: contentBackgroundColor }}
      />
    );
  }

  _renderStickyFooter(renderStickyFooter) {
    if (renderStickyFooter == null) return null;
    return (
      <View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width: Dimensions.get("window").width,
          },
        ]}
        onLayout={e => {
          const { nativeEvent: { layout: { height } } } = e;
          if (this._bodyOffsetBottom !== height) {
            this._bodyComponent.setNativeProps({
              style: { marginBottom: height },
            });
            this._bodyOffsetBottom = height;
          }
        }}>
        {renderStickyFooter()}
      </View>
    );
  }
}

StickyHeaderFooterScrollView.propTypes = propTypes;

StickyHeaderFooterScrollView.defaultProps = {
  renderStickyHeader: () => {},
  renderStickyFooter: () => {},
  additionalHeightReserve: 0,
  makeScrollable: false,
  fitToScreen: true,
  contentContainerStyle: null,
  contentBackgroundColor: "transparent",
};

module.exports = StickyHeaderFooterScrollView;
