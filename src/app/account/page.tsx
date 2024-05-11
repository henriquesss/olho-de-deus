"use client";

import React, { useState, useContext, useEffect } from "react";
import { Header } from "@components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import { IEstimate } from "../../interfaces/Estimate";

// Firebase stuff
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase";

export default function AccountPage() {
  const { user } = useContext(AuthContext) ?? {};

  const [userEstimates, setUserEstimatives] = useState<IEstimate[]>([]);
  const [reloadData, setReloadData] = useState<boolean>(false);

  useEffect(() => {
    const getEstimatives = async () => {
      try {
        const estimateCollectionRef = collection(db, "estimates");

        if (user) {
          const estimateQuery = query(
            estimateCollectionRef,
            where("createdBy", "==", user.uid),
          );

          const snapshot: QuerySnapshot = await getDocs(estimateQuery);

          const snapshotEstimates: IEstimate[] = snapshot.docs.map((doc) => ({
            // ...doc.data(),
            id: doc.id,
            description: doc.data().description,
            stack: doc.data().stack,
            time: doc.data().time,
            devs: doc.data().devs,
          }));

          setUserEstimatives(snapshotEstimates);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getEstimatives();
  }, [reloadData, user]);

  const handleDelete = async (estimativeId: string) => {
    try {
      await deleteDoc(doc(db, "estimates", estimativeId));
      setReloadData(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto py-5">
          <div className="flex flex-col items-center justify-center h-[400px]">
            <p className="text-2xl font-bold mb-5">Account</p>
            <div className="flex flex-col items-center mb-10">
              {user ? (
                <>
                  <p className="text-xl font-bold mr-2">{user.email}</p>
                  {/* <p className="text-gray-700">
                    member since {formatUnixDateString(user?.metadata.creationTime)}
                  </p> */}
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <p className="font-bold mb-5">Your estimates until now</p>

            <div className="relative overflow-x-auto w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stack
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Devs
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userEstimates.map((estimate: IEstimate) => (
                    <>
                      <tr
                        key={estimate.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {estimate.description.substr(0, 35)}...
                        </th>
                        <td className="px-6 py-4">
                          {estimate.stack.toString()}
                        </td>
                        <td className="px-6 py-4">{estimate.devs}</td>
                        <td className="px-6 py-4">{estimate.time} (days)</td>
                        <td className="px-6 py-4">
                          <button
                            className="text-red-500"
                            onClick={() => handleDelete(estimate.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {userEstimates.length == 0 && (
              <p className="mt-4">
                It looks like you havent posted any estimates yet
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
