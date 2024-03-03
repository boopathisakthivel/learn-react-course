
function Card(props: { title: string }) {
    return (
        <h1 className="p-2 md:p-6 bg-white">{props.title}</h1>
    );
}

// responsive - mobile first
// tailwind css, own css
// npm build, publish

export { Card };