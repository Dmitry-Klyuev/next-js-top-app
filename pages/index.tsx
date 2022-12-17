import {Htag, Button, P, Tag, Rating} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import axios from "axios";
import {GetStaticProps} from "next";

function Home({menu} :HomeProps): JSX.Element {
    console.log(menu);
    const [rating, setRating] = useState<number>(1);
    return (
        <div>
            <Htag tag={"h1"}>Заголовок</Htag>
            <Button appearance={'primary'} arrow="right"> OK </Button>
            <Button appearance={'ghost'} arrow="down"> No </Button>
            <P size="s">small text</P>
            <P size='m'>medium text</P>
            <P size="l">Large text</P>
            <Tag color="ghost" size="s">Ghost</Tag>
            <Tag size="s" color="red">Red</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="primary">Primary</Tag>
            <Rating rating={rating} setRating={setRating} isEditable={true}/>
            <ul>
                {menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}
            </ul>
        </div>
    );
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};