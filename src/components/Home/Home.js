import React from 'react'
import Post from 'components/Post'

function Home() {
  const posts = [
    {
      id: 1,
      title: 'The butterfly',
      imgUrl:
        'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/butterfly_16x9_0.jpg?itok=jZ3DYvGK',
    },
    {
      id: 2,
      title: 'True JEEP',
      imgUrl:
        'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2020/wrangler/vlp/gallery-carousel/Overview-Gallery-01-Desktop.jpg.image.1440.jpg',
    },
  ]
  return (
    <>
      {posts.map(({ id, title, imgUrl }) => (
        <Post key={id} title={title} imgUrl={imgUrl} postId={id} />
      ))}
    </>
  )
}

export default Home
