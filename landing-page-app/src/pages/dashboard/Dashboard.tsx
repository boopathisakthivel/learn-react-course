import { Hero, Chips } from 'ui-complib';

function Dashboard() {

    return (
        <>
            <Hero title="We invest in the world’s potential" description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth." links={[{ type: 'primary', text: 'Learn more', postfixIcon: 'right-arrow' }]} />
            <hr />
            <Chips />
            <hr />
            <Hero title="We invest in the world’s potential" description="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth." />
        </>
    )
}

export default Dashboard;
