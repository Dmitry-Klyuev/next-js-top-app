import { Htag, Button, P } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag={"h1"}>Hello</Htag>
            <Button appearance={'primary'} arrow='right'> OK </Button>
            <Button appearance={'ghost'} arrow='down'> No </Button>
            <P size='s'>small text</P>
            <P>medium text</P>
            <P size='l'>Large text</P>
        </>
    );
}
