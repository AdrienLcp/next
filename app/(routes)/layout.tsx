import { NextPage } from 'next'
import Home from './page'

interface Props {
  params: {
    userId: string
  }
}

const HomeLayout: NextPage<Props> = async ({ params }) => {

  const url = process.env.BASE_URL

  return <Home url={url} />
}

export default HomeLayout
