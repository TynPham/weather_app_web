import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Spinner } from "../../icon";
import weatherApi from "../../api/weatherApi";
import { API_KEY } from "../../data";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartWeather() {
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dataWeather = useSelector((state) => state.weather);
  const lightMode = useSelector((state) => state.lightMode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const lat = dataWeather.coord?.lat;
        const lon = dataWeather.coord?.lon;
        if (lat && lon) {
          const params = {
            lat,
            lon,
            exclude: "minutely,daily",
            units: "metric",
            appid: API_KEY,
          };
          const response2 = await weatherApi.getTempAndPre(params);
          const hourlyData = response2.hourly;
          const today = new Date().toDateString();
          const hourlyDataToday = hourlyData.filter(
            (data) => new Date(data.dt * 1000).toDateString() === today
          );
          setHourlyData(hourlyDataToday);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataWeather]);

  const data = {
    labels: hourlyData.map((data) =>
      new Date(data.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
      })
    ),
    datasets: [
      {
        label: "Temperature (C)",
        data: hourlyData.map((data) => data.temp),
        fill: false,
        borderColor: "red",
        pointBackgroundColor: lightMode ? "#000" : "#fff",
        yAxisID: "y1",
      },
      {
        label: "Precipitation (mm)",
        data: hourlyData.map((data) => data.rain?.["1h"] || 0),
        fill: false,
        borderColor: "blue",
        pointBackgroundColor: lightMode ? "#000" : "#fff",
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: lightMode ? "#000" : "#fff",
        },
      },
    },
    scales: {
      y1: {
        grid: {
          color: "red",
        },
        type: "linear",
        position: "left",
        min: Math.min(...hourlyData.map((data) => data.temp)) - 2,
        max: Math.max(...hourlyData.map((data) => data.temp)) + 2,
        ticks: {
          callback: (value) => `${value.toFixed(2)}°C`,
          color: lightMode ? "#000" : "#fff",
        },
      },
      y2: {
        grid: {
          color: "blue",
        },
        type: "linear",
        position: "right",
        min: 0,
        max: Math.max(...hourlyData.map((data) => data.rain?.["1h"] || 0)) + 1,
        ticks: {
          callback: (value) => `${value.toFixed(2)} mm`,
          color: lightMode ? "#000" : "#fff",
        },
      },
      x: {
        grid: {
          color: "#000",
        },
        ticks: {
          color: lightMode ? "#000" : "#fff",
        },
      },
    },
  };

  return (
    <div>
      {loading && <Spinner />}
      {hourlyData.length > 0 && (
        <div className="md:p-4 px-1 py-2">
          <Line data={data} options={options} height={300} width={600} />
        </div>
      )}
    </div>
  );
}

export default ChartWeather;
