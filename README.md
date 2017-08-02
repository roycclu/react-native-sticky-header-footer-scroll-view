# react-native-sticky-header-footer-scroll-view

A `<StickyHeaderFooterScrollView>` wrapper that

- Takes a scrollview or listview
- Or any component and make it scrollable
- Takes a header and/or a footer and make them sticky
- Works on iOS and Android

## Add it to your project

iOS and Android

`yarn add react-native-sticky-header-footer-scroll-view`

or

`npm install react-native-sticky-header-footer-scroll-view --save`

Then:

- Whenever you want to use it within React code you can:

`import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';`

## Demo

![](https://user-images.githubusercontent.com/16176418/28650265-28fb3070-72ad-11e7-8ab5-893c2eae9797.png)

## Basic Usage

```
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

//Inside of a component's render() method:
render() {
  return (
    <StickyHeaderFooterScrollView
      renderStickyHeader={() => (
        <View style={...}>
          <Text>{`I'm a sticky header`}</Text>
        </View>
      )}
      renderStickyFooter={() => (
        <View style={...}>
          <Text>{`I'm a sticky footer`}</Text>
        </View>
      )}
    >
      <View style={{ height: 1200, backgroundColor: '#eee' }}>
        <Text>View made scrollable</Text>
      </View>
    </StickyHeaderFooterScrollView>
  )
}
```

| Prop | Description | Default |
|---|---|---|
|**`renderStickyHeader`**|A renderable function for the sticky header. |`null`|
|**`renderStickyFooter`**|A renderable function for the sticky footer. |`null`|
|**`contentBackgroundColor`**|Background color of the main component. |`transparent`|
|**`contentContainerStyle`**|Any style prop to pass to the body. |`null`|
|**`makeScrollable`**|Set true to make the component scrollable. (Do not set true if the input is a listview or flatlist) |`false`|

## Example

`cd example/StickyHeaderFooter`

`yarn`

`npm start`

`react-native run-ios` or `react-native run-android`

## Latest changes

### 2.0.7

- Fixes an issue to work with listview

### 2.0.4

- Fixes an issue with footer spacer
- Fixes a bug in the example
