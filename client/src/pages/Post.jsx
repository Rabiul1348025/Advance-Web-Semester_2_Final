import React from 'react'

import { Link } from 'react-router-dom'
import Edit from '../img/edit.jpg'
import Delete from '../img/delete.png'

import Menu from "../components/Menu"

// Function to render a blog post
const Post = () => {
  return (
    <article className='post-page'>
      <section className='content'>
          <img src='https://images.pexels.com/photos/755044/pexels-photo-755044.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt=''/>
          <section className='user'>
            <img src='https://images.pexels.com/photos/16070544/pexels-photo-16070544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <article className='info'>
              <label className='info'>
                Putin
              </label>
              <p>Posted 3 Days ago.</p>
            </article>
            <section className='edit'>
              <Link to={`/create?edit=1`}>
                <img src={Edit} alt=''/>
              </Link>
              <img src={Delete} alt=''/>
            </section>
          </section>
          <h1>1914 translation by H. Rackham</h1>
          <p>
            <p>
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            </p>
            <br/>
            <p>
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
            </p>
          </p>
      </section>
      <section className='menu'>
          <Menu/>
      </section>
    </article>
  )
}

export default Post