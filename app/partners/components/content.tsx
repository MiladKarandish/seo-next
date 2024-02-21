"use client";

import { getPartners } from "@/services/partners";
import { useEffect, useState } from "react";

const PartnersContent = () => {
  const [partners, setPartners] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getPartners();
      setPartners(res);
    })();
  }, []);

  return (
    <div>
      <h1>Partners</h1>

      <ul>
        {partners.map((partner) => (
          <div key={partner.id}>
            <p>{partner.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PartnersContent;
