import { useEffect, useState } from "react";
import BearCard from "../bearCard/BearCard";

export default function Catalog() {
    const [bears, setBears] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/bears")
            .then(res => res.json())
            .then(result => {
                const bearsArray = Object.values(result);
                setBears(bearsArray);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main>
            <h2>Find your perfect companion</h2>
            <h1>Bear Catalog</h1>

            <section className="cards">
                {bears.length === 0 && (
                    <h3 className="no-articles">No Added Bears Yet</h3>
                )}

                {bears.map(bear => (
                    <BearCard key={bear._id} {...bear} />
                ))}
            </section>
        </main>
    );
}
