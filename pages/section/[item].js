import { useRouter } from 'next/router'
let Item = () => {
    let router = useRouter()
    let key = router.query.item
    return (
        <div>
            <h1>Item is  {key}</h1>
        </div>
    )
}
export default Item