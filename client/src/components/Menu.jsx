import React from 'react'

const menu = () => {

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
      ]

  return (
    <aside className='menu'>
        <h1>Related posts you may like</h1>
        {posts.map(post=>(
            <section className="post" key={post.id}>
                <img src={post.img} alt=""/>
                <h3>{post.title}</h3>
                <button className="">Continue Reading</button>
            </section>
        ))}
    </aside>
  )
}

export default menu