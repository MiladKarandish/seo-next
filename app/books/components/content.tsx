"use client";

import { getPartners } from "@/services/partners";
import { useEffect, useState } from "react";

const BooksContent = () => {
  const [books, setBooks] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getPartners();
      setBooks(res);
    })();
  }, []);

  return (
    <div>
      <h1>Books</h1>

      <ul>
        {books.map((partner) => (
          <div key={partner.id}>
            <p>{partner.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BooksContent;
