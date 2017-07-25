# react-native-sticky-header-footer-scroll-view

A `<StickyHeaderFooterScrollView>` wrapper that

- Takes any component and make it scrollable
- Takes a header and/or a footer and makes it sticky
- Works on iOS and Android

## Add it to your project

iOS and Android

run `yarn add react-native-sticky-header-footer-scroll-view`

or

run `npm install react-native-sticky-header-footer-scroll-view --save`

Then:

- Whenever you want to use it within React code you can: `import
StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';`

## Demo

## Basic Usage

```
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

//Inside of a component's render() method:
render() {
  return (
    <StickyHeaderFooterScrollView
      renderStickyHeader={() => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{`I'm a sticky header`}</Text>
        </View>
      )}
      renderStickyFooter={() => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#ccc'  }}>
          <Text>{`I'm a sticky footer`}</Text>
        </View>
      )}
    >
      <ScrollView style={{ height: 1200, backgroundColor: '#eee' }}>
        <Text>Scroll Me</Text>
      </ScrollView>
    </StickyHeaderFooterScrollView>
  )
}
```

## Example

`cd example/StickyHeaderFooter`

`yarn`

`npm start`

`react-native run-ios` or `react-native run-android`
