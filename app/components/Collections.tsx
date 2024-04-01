"use client";
import { getCollections } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const fakeData = [
  {
    _id: "1",
    image: "/product1.jpg",
    title: "",
    products: 10,
  },
  {
    _id: "2",
    image: "/product2.jpg",
    title: "",
    products: 20,
  },
  {
    _id: "3",
    image: "/product3.jpg",
    title: "",
    products: 15,
  },
  {
    _id: "4",
    image: "/product4.jpg",
    title: "",
    products: 8,
  },
];

const Collections = async () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {!fakeData || fakeData.length === 0 ? (
        <p>No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {fakeData?.map((i: CollectionType) => (
            <Link href={`/collections/${i._id}`} key={i._id}>
              <Image
                src={i.image}
                alt={i.title}
                width={350}
                height={400}
                className="rounded-lg cursor-pointer h-[400px] object-cover"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
