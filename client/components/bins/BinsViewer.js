import React from 'react';
import { markdown } from 'markdown';

class BinsViewer extends React.Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);

    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{__html: rawHTML}}></div>
      </div>
    );
  }
}

export default BinsViewer;
