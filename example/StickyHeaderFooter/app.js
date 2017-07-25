/**
 * @Author: Roy Lu 卢骋震 <roycclu>
 * @Date:   2017-07-24T18:38:04+08:00
 * @Last modified by:   roycclu
 * @Last modified time: 2017-07-25T11:44:37+08:00
 */



'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

class App extends Component {
  constructor(props: Props) {
    super(props);
  }
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
}

export default App;
