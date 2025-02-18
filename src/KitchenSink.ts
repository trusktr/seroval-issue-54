import { element, Element } from '@lume/element';
import type { StencilElementAttributes } from '@lume/element/dist/stencil.js';

type KitchenSinkAttributes = 'foo';

export type KitchenSink = InstanceType<typeof KitchenSink>;

export const KitchenSink = element('kitchen-sink')(
  class extends Element {
    foo = 123;
  },
);

declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'kitchen-sink': StencilElementAttributes<InstanceType<typeof KitchenSink>, KitchenSinkAttributes>;
    }
  }
}
