import React from 'react'
import SectionPage from '../../components/minipages/sectionPage/SectionPage'
import BaseUrl from '../../utils/config'

const Section = (users) => {
    console.log(users)
    return (
        <SectionPage data={users}></SectionPage>
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