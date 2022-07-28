import {Htag, Button, P, Tag, Rating} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(1);
    return (
        <>
            <Htag tag={"h1"}>Заголовок</Htag>
            <Button appearance={'primary'} arrow="right"> OK </Button>
            <Button appearance={'ghost'} arrow="down"> No </Button>
            <P size="s">small text</P>
            <P>medium text</P>
            <P size="l">Large text</P>
            <Tag color="ghost" size="s">Ghost</Tag>
            <Tag size="s" color="red">Red</Tag>
            <Tag color="green">Green</Tag>
            <Tag color="primary">Primary</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    );
}
