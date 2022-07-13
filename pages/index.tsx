import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag={"h1"}>Hello</Htag>
            <Button appearance={'primary'}> OK </Button>
            <Button appearance={'ghost'}> No </Button>

        </>
    );
}
