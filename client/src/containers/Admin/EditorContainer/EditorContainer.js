import React, { Component, Fragment } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {
    constructor(props) {
        super(props)
        this.quillRef = null;      // Quill instance
        this.reactQuillRef = null; // ReactQuill component
    }

    componentDidMount() {
        this.attachQuillRefs()
    }

    componentDidUpdate() {
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    }

    modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['blockquote', 'code-block'],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean']
        ],
    }

    render() {
        return <ReactQuill
            modules={this.modules}
            ref={(el) => { this.reactQuillRef = el }}
            theme={'snow'}
            onChange={this.props.change}
        />
    }
}

export default Editor;