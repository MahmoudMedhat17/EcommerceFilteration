import { MessageCircle, ThumbsUp } from 'lucide-react';


const blogsArr = [
    {
        id:1,
        title:"My Amazing Blog Title 1",
        publisher:"Publish by Jordan",
        comments:200,
        likes:120
    },
    {
        id:2,
        title:"My Amazing Blog Title 2",
        publisher:"Publish by Ahmed",
        comments:300,
        likes:100
    },
    {
        id:3,
        title:"My Amazing Blog Title 3",
        publisher:"Publish by John",
        comments:100,
        likes:400
    },
];
const Blogs = () => {

  return (
    <div className="border-2 border-gray-200 p-4 rounded-md">
      <h3 className="font-bold text-xl">Popular Blogs</h3>
      <div className="p-2">
        {
            blogsArr.map((blog)=>(
                <div key={blog.id} className="space-y-2">
                    <h4 className='font-semibold'>{blog.title}</h4>
                    <p className='text-gray-500'>{blog.publisher}</p>
                    <div className='flex gap-20'>
                        <p className='flex items-center gap-2 font-medium'>
                            <MessageCircle/>
                            {blog.comments}
                        </p>
                        <p className='flex items-center gap-2 font-medium'>
                            <ThumbsUp/>
                            {blog.likes}
                        </p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Blogs;