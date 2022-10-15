export interface Post {
  //where to get these
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  description: string
  mainImage: {
    asset: {
      utsl: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}
