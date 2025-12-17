import { useEffect, useState } from "react";
import BearCard from "../bearCard/BearCard";
import useRequest from "../../hooks/useRequest";

export default function Catalog() {
    const [bears, setBears] = useState([]);
    const { request } = useRequest();

    useEffect(() => {
        const endpoint = "/jsonstore/bears";

        request(endpoint)
            .then(result => {
                const bearsArray = Object.values(result);
                setBears(bearsArray);
            })
            .catch(err => console.error("Failed to fetch bear catalog:", err));
    }, [request]);

    return (
        <main>
            <h2>Find your fur-ever friends</h2>
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