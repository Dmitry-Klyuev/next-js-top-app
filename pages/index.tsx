import { Htag, Button, P, Tag, Rating } from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <Htag tag={"h1"}>{count}</Htag>
            <Button appearance={'primary'} arrow='right' onClick={()=>setCount(x => x+1)}> OK </Button>
            <Button appearance={'ghost'} arrow='down'> No </Button>
            <P size='s'>small text</P>
            <P>medium text</P>
            <P size='l'>Large text</P>
            <Tag color='ghost' size='s'>Ghost</Tag>
            <Tag size='s' color='red'>Red</Tag>
            <Tag color='green'>Green</Tag>
            <Tag color='primary'>Primary</Tag>
            <Rating rating={3}/ >
        </>
    );
}
