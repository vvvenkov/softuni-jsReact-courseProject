import { useEffect, useState } from "react";
import BearCard from "../bearCard/BearCard";

export default function Home() {
    const [bears, setBears] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/bears")
            .then(res => res.json())
            .then(data => {
                const firstThree = Object.values(data).slice(0, 3);
                setBears(firstThree);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main>
            <h2>When time is not a luxury you can afford...</h2>
            <h1>Latest Bears</h1>

            <section className="cards">
                {bears.map(bear => (
                    <BearCard key={bear._id} {...bear} />
                ))}
            </section>
        </main>
    );
}
