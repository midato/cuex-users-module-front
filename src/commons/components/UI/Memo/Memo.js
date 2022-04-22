import * as React from 'react'
import { useState } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './Memo.css'

const MODULES = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ]
}

const FORMATS = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

const THEME = "snow"

const Memo = ({ label, placeholder }) => {
  const [memo, setMemo] = useState("")
  console.log(memo)
  console.log(MODULES)
  console.log(FORMATS)
  return (
    <>
      <label htmlFor="memo">{label}</label>
      <ReactQuill
        theme={THEME}
        onChange={setMemo}
        value={memo}
        modules={MODULES}
        formats={FORMATS}
        placeholder={placeholder}
      />
      {/*<ReactQuill
        theme={this.state.theme}
        onChange={this.handleChange}
        value={this.state.editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={'.app'}
        placeholder={this.props.placeholder}
      />*/}
    </>
  )
}

export default Memo
