'use strict';

const React = require('react');
const {
  Platform,
} = require('react-native');
const UIExplorerBlock = require('./UIExplorerBlock');
const UIExplorerPage = require('./UIExplorerPage');
const View = require('View');
const invariant = require('fbjs/lib/invariant');

class UIExplorerModuleContainer extends React.Component {

  renderExample(example, i) {
    // Filter platform-specific examples
    var {title, description, platform} = example;
    if (platform) {
      if (Platform.OS !== platform) {
        return null;
      }
      title += ' (' + platform + ' only)';
    }
    return (
      <UIExplorerBlock
        key={i}
        title={title}
        description={description}>
        {example.render()}
      </UIExplorerBlock>
    );
  }

    
  renderModule(module, i) {
    // Filter platform-specific modules
    var {title, description, platform} = module;
    if (platform) {
      if (Platform.OS !== platform) {
        return null;
      }
      title += ' (' + platform + ' only)';
    }
    return (
      <UIExplorerBlock
        key={i}
        title={title}
        description={description}>
        {module.render()}
      </UIExplorerBlock>
    );
  }

  render(): ReactElement<any> {
    if (!this.props.module.modules) {
      if (!this.props.module.examples) {      
        return <this.props.module 
          passProps = {this.props.passProps}
        />
      }
      else{
        return (
          <UIExplorerPage title={this.props.title}>
            {this.props.module.examples.map(this.renderExample)}
          </UIExplorerPage>
        );        
      }
    }

    return (
      <UIExplorerPage title={this.props.title}>
        {this.props.module.modules.map(this.renderModule)}
      </UIExplorerPage>
    );
  }
}

module.exports = UIExplorerModuleContainer;
