import path from 'path';
import {Bundler} from '@parcel/plugin';

export default new Bundler({
  async bundle(graph) {
    let assets = Array.from(graph.nodes.values())
      .filter(node => node.type === 'asset')
      .map(node => node.value);

    return {
      bundles: [
        {
          type: 'js',
          filePath: 'bundle.js',
          assets
        }
      ]
    };
  }
});
