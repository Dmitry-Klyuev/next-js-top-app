import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag={"h1"}>Hello</Htag>
            <Button appearance={'primary'} arrow='right'> OK </Button>
            <Button appearance={'ghost'} arrow='down'> No </Button>

        </>
    );
}
