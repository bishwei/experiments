import React, { PureComponent } from 'react';
import Editor from './Editor';
import Result from './Result';

import styles from './styles.scss';

class CodeEditor extends PureComponent {
  state = { css: '', js: '', html: '' };

  handleJSChange = js => this.setState({ js });
  handleCSSChange = css => this.setState({ css });
  handleHTMLChange = html => this.setState({ html });

  render() {
    return (
      <div className={ styles.codeEditor }>
        <section className={ styles.editorPane }>
          <Editor type='js' onChange={ this.handleJSChange } />
          <Editor type='css' onChange={ this.handleCSSChange } />
          <Editor type='html' onChange={ this.handleHTMLChange } />
        </section>
        <section className={ styles.resultPane }>
          <Result { ...this.state } />
        </section>
      </div>
    );
  }
}
export default CodeEditor;
