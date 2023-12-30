"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const t = await fetch("/api/user/name");
    console.log("T", t);
    fetch("/api/user/name")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  type User = {
    id: number;
    name: string;
  };

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
