import React, { useEffect } from 'react'
import SectionPage from '../../components/minipages/sectionPage/SectionPage'
import BaseUrl from '../../utils/config'
import { useRouter } from 'next/router'
const Section = (users) => {
    let router = useRouter()
    let key = router.query.index
    console.log(key)
    useEffect(() => {
        if (!router.isReady) return;


    }, [router.isReady]);
    console.log(users)
    return (
        <SectionPage data={users} url={key}></SectionPage >
    )
}

export default Section
export async function getServerSideProps() {
    const res = await fetch(BaseUrl + "posts");
    const data = await res.json();

    return {
        props: {
            users: data,
        },
    };
}