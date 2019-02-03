// @flow
import * as React from 'react'

export default function WrapStory(storyFn: () => React.Node) {
  return <>{storyFn()}</>
}
