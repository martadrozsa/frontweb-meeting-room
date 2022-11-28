import ContentLoader from 'react-content-loader'

const RoomDetailsLoader = () => (
  <ContentLoader viewBox="0 0 320 280" height={280} width={320} >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="180" />
  </ContentLoader>
)

RoomDetailsLoader.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
}

export default RoomDetailsLoader;