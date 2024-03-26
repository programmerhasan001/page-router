import Layout from '@/components/layout'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())
export default function Home() {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

  console.log("isLoading", isLoading)
  console.log("data", data)

  if (error) return <div className="min-h-[30vh] bg-green-200"><h2 className='text-red-800 text-3xl'>Failed to load</h2></div>
  if (!data) return <div className="min-h-[30vh] bg-green-200"><h2 className='text-green-500 text-3xl'>Loading...</h2></div>

  return (
    <div className="min-h-[30vh] bg-green-200">
      <h2 className="text-3xl ml-4">Home page</h2>
      <table className="w-[500px] m-4 border border-[#444] border-collapse">
        <tr key="">
          <th className='border border-[#444] p-2'>Name</th>
          <th className='border border-[#444] p-2'>Email</th>
        </tr>
        {
          data.length > 0 && data.map(({name, email}) => (
            <tr key="">
              <td className='border border-[#444] p-2'>{name}</td>
              <td className='border border-[#444] p-2'>{email}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}

Home.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}