import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends React.Component {
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          options={{ mode: 'markdown', lineNumbers: true }}
          onChange={this.onEditorChange.bind(this)}
          />
      </div>
    );
  }
}

export default BinsEditor;
