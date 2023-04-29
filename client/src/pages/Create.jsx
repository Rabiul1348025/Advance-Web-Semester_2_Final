import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

// Function to create new blog post
const Create = () => {

  const [value, setValue] = useState('')
// Rendering create blog post
  return (
    <article className='new-post'>
      <section className="content">
        <h1 className="post-title">Write new blog post</h1>
        <input type="text" className="form-control" placeholder="Post Title"/>
        <section className="editor-container">
          <ReactQuill theme="snow"  className="editor" value={value} onChange={setValue}/>
        </section>
      </section>
      <aside className='menu'>
        <section className="item">
          <h2>Publish</h2>
          <label>
            <b>Status:</b> Draft
          </label>
          <label>
            <b>Visibility:</b> Public
          </label>
          <input type="file" name='' alt='' id='file' style={{display:"none"}}/>
          <label htmlFor='file' className='file'>Upload Image</label>
          <section className='buttons'>
            <button>Save Draft</button>
            <button>Update</button>
          </section>
        </section>
        <section className="item">
          <h1>Category</h1>

          <section className="category">
            <input type="radio" className="" alt='' id='Art' name='cat'/>
            <label htmlFor='Art'>Art</label>
          </section>

          <section className="category">
            <input type="radio" className="" alt='' id='Design' name='cat'/>
            <label htmlFor='Design'>Design</label>
          </section>
          
          <section className="category">
            <input type="radio" className="" alt='' id='Economics' name='cat'/>
            <label htmlFor='Economics'>Economics</label>
          </section>
          
          <section className="category">
            <input type="radio" className="" alt='' id='Health' name='cat'/>
            <label htmlFor='Health'>Health</label>
          </section>
          
          <section className="category">
            <input type="radio" className="" alt='' id='People' name='cat'/>
            <label htmlFor='People'>People</label>
          </section>
          
          <section className="category">
            <input type="radio" className="" alt='' id='Politics' name='cat'/>
            <label htmlFor='Politics'>Politics</label>
          </section>
          
          <section className="category">
            <input type="radio" className="" alt='' id='Science' name='cat'/>
            <label htmlFor='Science'>Science</label>
          </section>
          
          <section className="category">
            <input type="radio" className="" alt='' id='technology' name='cat'/>
            <label htmlFor='technology'>Technology</label>
          </section>
          
        </section>
      </aside>
    </article>
  )
}

export default Create