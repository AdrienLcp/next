import Home from './page'

const HomeLayout: React.FC = () => {

  const url = process.env.BASE_URL

  return (
    <div>
      <Home url={url} />
    </div>
  )
}

export default HomeLayout
