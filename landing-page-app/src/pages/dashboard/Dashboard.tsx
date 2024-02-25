import { Hero, Chips } from 'ui-complib';

function Dashboard() {

    return (
        <>
            <h1>this is dashboard page</h1>
            <Hero title="We invest in the world’s potential" description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth." links={[{ type: 'primary', text: 'Learn more', postfixIcon: 'right-arrow' }]} />
            <hr />
            <Chips />
            <hr />
            <Hero title="We invest in the world’s potential" description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth." />
            <h1>this is h1</h1>
        </>
    )
}

export default Dashboard;
