import Link from 'next/link'
import { useRouter } from 'next/router'

const post = ({post}) => {
    const router = useRouter()
    const {id} = router.query;

    return (
        <div>
            <h1>`This is a post ${id}`</h1>
        </div>
    )
}

export default post;