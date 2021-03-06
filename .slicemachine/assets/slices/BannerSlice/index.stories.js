import MyComponent from './../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Optimize viral applications","spans":[]}],"description":[{"type":"paragraph","text":"Aliqua duis commodo voluptate ad ex nisi sint amet aliqua. Dolor do voluptate ea consectetur laboris eiusmod elit cillum excepteur nostrud mollit minim. Voluptate labore qui et in sit aliquip elit laboris.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"implement visionary web-readiness","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _Grid = () => <MyComponent slice={{"variation":"grid","name":"grid","slice_type":"banner_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Deliver best-of-breed web services","spans":[]}],"description":[{"type":"paragraph","text":"Id non voluptate sint dolor consequat sunt consequat elit. Ipsum exercitation quis eiusmod amet.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"unleash innovative technologies","background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},"id":"_Grid"}} />
_Grid.storyName = 'grid'
