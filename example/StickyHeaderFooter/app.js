/**
 * @Author: Roy Lu 卢骋震 <roycclu>
 * @Date:   2017-07-24T18:38:04+08:00
 * @Last modified by:   roycclu
 * @Last modified time: 2017-07-26T23:27:01+08:00
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
          <View style={{ height: 80, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#223A5E', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{color: 'white', fontSize: 20}}>{`Sticky header`}</Text>
          </View>
        )}
        renderStickyFooter={() => (
          <View style={{ height: 60, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#223A5E', borderTopWidth: 1, borderTopColor: '#ccc'  }}>
            <Text style={{color: 'white', fontSize: 18}}>{`Sticky footer`}</Text>
          </View>
        )}
      >
        <View style={{ height: 600, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 18}}>View made scrollable</Text>
        </View>
      </StickyHeaderFooterScrollView>
    )
  }
}

export default App;
