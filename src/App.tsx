import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

export interface TourType {
  id: number;
  name: string;
  info: string;
  image: string;
  price: number;
}

export type RemoveTourFunction = (id: number) => void;

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState<TourType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchTours()}
          >
            display tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
