import React, { useEffect } from 'react'
import BlogPage from '../../components/minipages/blogPage/BlogPage'

import { useRouter } from 'next/router'
import BaseUrl from '../../utils/config'
import axios from 'axios'
import { useState } from 'react'
const BlogPost = (user) => {
    let [data, setData] = useState({})
    let router = useRouter()
    console.log(user)
    let key = +router.query.index
    useEffect(() => {
        if (!router.isReady) return;

        axios.get(BaseUrl + `posts/` + key).then(res => {
            setData(res.data)
        })
        // codes using router.query

    }, [router.isReady]);
    console.log(data, '...././../asdf')
    return (
        <BlogPage data={data}></BlogPage>
    )
}

export default BlogPost
// export async function getServerSideProps(context = GetServerSidePropsContext) {
//     const { req } = context;
//     let url = req.headers.referer;
//     console.log(url,)
//     let arr = url?.split('/');
//     let last = arr?.length - 1
//     console.log(arr[last])
//     const res = await fetch(BaseUrl + "posts" + arr);
//     const data = await res.json();

//     // url = `${arr[0]}//${arr[2]}`;


//     return {
//         props: {
//             users: data,
//         },
//     };
// }