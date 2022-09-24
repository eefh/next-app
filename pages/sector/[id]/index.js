import Head from "next/head";
import { useRouter } from 'next/router';
import PostList from '../../../components/PostList';
import Create from '../../../components/Create';
import {server} from '../../../config/index';
import SectorTitle from "../../../components/SectorTitle";
const categories = ['gaming-general', 'gaming-news', 'multiplayer-games', 'mobile-games', 'retro-games', 'rpg-games',
'comics-and-film', 'technology', 'business-and-finance', 'science-and-math', 'outdoors', 'sports',
'food-and-cooking', 'artwork-critique', 'literature', 'music', 'fashion', 'graphic-design',
'japan', 'north-america', 'africa', 'south-america', 'asia', 'europe', 'random', 'diy', 'cool',
'zerblog', 'zerlog-star', 'debate', 'left', 'right', 'twitter', 'ideologies', 'activism', 'lgbt',
'advice', 'current-news', 'paranormal', 'travel', 'fitness'];
const sector = ({posts}) => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <Head>
                <title>{`Zerlog | ${id}`}</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6336001957803262"
     crossorigin="anonymous"></script>
            </Head>
            <SectorTitle title={id}/>
            <Create/>
            <PostList {...posts}/>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    if (categories.some(i => i === context.params.id)){
        const res = await fetch(`${server}/api/${context.params.id}`);
        const posts = await res.json();
        return {
            props: {
                posts,
            },
        }
    } else {
        return null;
    }
}

export default sector;

