import React from 'react'
import { Card } from 'reactstrap'
import Text from 'components/Text'
import Image from 'components/Image'
import Comments from 'components/Comments'

function Post({ title, imgUrl, postId }) {
  return (
    <Card className="mt-4">
      <Text as="h4" className="p-4 m-0">
        {title}
      </Text>
      <Image alt="butterfly" className="post-image" src={imgUrl} />
      <Comments postId={postId} />
    </Card>
  )
}

export default Post
