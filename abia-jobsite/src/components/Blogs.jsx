import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Blog() {

  return (
    <>
      <Header />
      <div className='w-[100%] border border-green-800 p-5'>
        <div className='w-[100%] border border-green-800 pl-20 py-6 flex flex-col gap-[10px]'>
          <h1 className='text-4xl font-serif text-green-800'>InSights and Carrer Advice</h1>
          <p>Explore articles,tips and real stories to power your carrer journey</p>
          <div className='flex gap-[10px]'>
            <input className='border border-green-800' type="text" />
            <button className='border border-green-800 px-2'>Search</button>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[80%] border border-green-800'>
            <button className='mt-4 border border-green-800 px-4 py-1 font-medium'>Search</button>
            <div className='flex mt-4'>
              <div>
                <div>
                  <figure className=' border-green-800 border-4 w-[40.5vw] h-[40vh]'>

                  </figure>
                  <div>
                    <p>Title</p>
                    <p>Short description of the post</p>
                    <p>date   -    Author</p>
                  </div>
                </div>
                <div className='flex gap-[5px]  '>
                  <div>
                    <div className='border-4 border-green-800 w-[20vw] h-[20vh] '></div>
                    <div>
                      <p>Title</p>
                      <p>Short description of the post</p>
                      <p>Date  -  Author</p>
                    </div>
                  </div>
                  <div>
                    <div className='border-4 border-green-800 w-[20vw] h-[20vh] '></div>
                    <div>
                      <p>Title</p>
                      <p>Short description of the post</p>
                      <p>Date  -  Author</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-[30px] pl-6'>
                <div>
                  <div className='border-4 border-green-800 w-[20vw] h-[20vh] '></div>
                  <div>
                    <p>Title</p>
                    <p>Short description of the post</p>
                    <p>Date  -  Author</p>
                  </div>
                </div>
                <div>
                  <div className='border-4 border-green-800 w-[20vw] h-[20vh]'></div>
                  <div>
                    <p>Title</p>
                    <p>Short description of the post</p>
                    <p>Date  -  Author</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className='w-[20%] flex flex-col gap-[20px] border border-green-800 pl-2'>
            <p className='text-2xl font-serif'>Categories</p>
            <p>Career Tips</p>
            <p>Interview Advice</p>
            <p>Enterprenership <br /> Guides</p>
            <p>Success Stories</p>
            <p>Empowerment</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Blog
