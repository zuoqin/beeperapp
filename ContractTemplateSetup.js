'use strict';

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
const UIExplorerBlock = require('UIExplorerBlock');
const UIExplorerPage = require('UIExplorerPage');

const {
  Picker,
  Text,
  TouchableWithoutFeedback,
} = ReactNative;

const Item = Picker.Item;

class ContractTemplateSetup extends React.Component {
  static title = 'Contract Template Setup';
  static description = 'Contract Template Setup Management';

  state = {
    selected1: 'key1',
    selected2: 'key1',
    selected3: 'key1',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };

  render() {
    return (
      <UIExplorerPage title="<Picker>">
        <UIExplorerBlock title="Basic Picker">
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this, 'selected1')}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </UIExplorerBlock>
        <UIExplorerBlock title="Disabled picker">
          <Picker style={styles.picker} enabled={false} selectedValue={this.state.selected1}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </UIExplorerBlock>
        <UIExplorerBlock title="Dropdown Picker">
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange.bind(this, 'selected2')}
            mode="dropdown">
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </UIExplorerBlock>
        <UIExplorerBlock title="Picker with prompt message">
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected3}
            onValueChange={this.onValueChange.bind(this, 'selected3')}
            prompt="Pick one, just one">
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </UIExplorerBlock>
        <UIExplorerBlock title="Picker with no listener">
          <Picker style={styles.picker}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
          <Text>
            Cannot change the value of this picker because it doesn't update selectedValue.
          </Text>
        </UIExplorerBlock>
        <UIExplorerBlock title="Colorful pickers">
          <Picker
            style={[styles.picker, {color: 'white', backgroundColor: '#333'}]}
            selectedValue={this.state.color}
            onValueChange={this.onValueChange.bind(this, 'color')}
            mode="dropdown">
            <Item label="red" color="red" value="red" />
            <Item label="green" color="green" value="green" />
            <Item label="blue" color="blue" value="blue" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.color}
            onValueChange={this.onValueChange.bind(this, 'color')}
            mode="dialog">
            <Item label="red" color="red" value="red" />
            <Item label="green" color="green" value="green" />
            <Item label="blue" color="blue" value="blue" />
          </Picker>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  }

  changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DIALOG
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
}

var styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});

module.exports = ContractTemplateSetup;