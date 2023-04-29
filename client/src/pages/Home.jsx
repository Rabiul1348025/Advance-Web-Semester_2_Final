import React from 'react'

import { Link } from 'react-router-dom'

// Function to render the blog landing page page
const Home = () => {
// Dummy data for testing
const posts = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    desc: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    img: "https://images.pexels.com/photos/2230540/pexels-photo-2230540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "qui est esse",
    desc: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    img: "https://images.pexels.com/photos/6605208/pexels-photo-6605208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    desc: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    img: "https://images.pexels.com/photos/8480751/pexels-photo-8480751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 4,
    title: "eum et est occaecati",
    desc: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    img: "https://images.pexels.com/photos/4993114/pexels-photo-4993114.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 5,
    title: "dolorem eum magni eos aperiam quia",
    desc: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    img: "https://images.pexels.com/photos/9475278/pexels-photo-9475278.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  {
    id: 6,
    title: "some post title",
    desc: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    img: "https://images.pexels.com/photos/8480751/pexels-photo-8480751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
]


  return (
    // Render Posts from API
    <section className='home'>
      <article className='posts'>

        {posts.map(post=>(
          <section className='post' key={post.id}>
            <section className='img'>
              <img src={post.img} alt=""/>
            </section>

            <article className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Continue reading </button>
              
            </article>
          </section>
        ))}
      </article>
    </section>
  )
}

export default Home