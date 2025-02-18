import { Component, h } from '@stencil/core';
import '../../KitchenSink.js';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return <kitchen-sink>foo</kitchen-sink>;
  }
}
