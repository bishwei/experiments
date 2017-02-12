// @flow
import React, { PureComponent } from 'react';
import CodeMirror from 'codemirror';
import debounce from 'lodash/debounce';
import 'codemirror/lib/codemirror.css';
import styles from './styles.scss';

type PropType = {
  onChange: Function,
  type: string,
};

const EditorTypes = {
  js: {
    dep: System.import('codemirror/mode/javascript/javascript'),
    title: 'Javascript',
  },
  css: {
    dep: System.import('codemirror/mode/css/css'),
    title: 'CSS',
  },
  html: {
    dep: System.import('codemirror/mode/htmlmixed/htmlmixed'),
    title: 'HTML'
  }
};

class Editor extends PureComponent {
  componentWillMount() {
    this.initCM(this.props.type);
  }

  getTextAreaRef = ref => (this.textArea = ref);

  cm = null;
  textArea = null;

  handleChange = debounce((cm, change) => {
    const value = cm.getValue();
    this.props.onChange(value, change);
  }, 500);

  initCM = async (type: string) => {
    const editor = EditorTypes[type] || {};
    await editor.dep;
    this.cm = CodeMirror.fromTextArea(this.textArea, {
      lineNumbers: true,
      mode: type,
    });
    this.cm.on('change', this.handleChange);
  }

  props: PropType;

  render() {
    return (
      <section className={ styles.editor }>
        <h2>{ EditorTypes[this.props.type].title }</h2>
        <textarea ref={ this.getTextAreaRef } />
      </section>
    );
  }
}

export default Editor;
