"use client";
import { Chart, Preloader } from "./components";
import { useEffect, useState } from "react";
import { subscribeToBTC } from "./utils/fetchData";
import type { ChartPoint } from "./components";

const Page = () => {
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let lastUpdate = 0;

    const unsubscribe = subscribeToBTC((data) => {
      const now = Date.now();
      if (now - lastUpdate > 500) {
        setChartData((prevData) => {
          const updated = [...prevData, data];
          return updated.slice(-30);
        });
        lastUpdate = now;
      }
      setLoading(false);
    });

    return () => unsubscribe && unsubscribe();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col bg-gray-900 max-h-screen">
      <h1 className="text-3xl font-bold text-center text-white my-8">
        Bitcoin Price Chart
      </h1>
      <Chart chartData={chartData} />
    </div>
  );
};

export default Page;
