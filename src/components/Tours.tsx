import { TourType, RemoveTourFunction } from "../App";
import Tour from "./Tour";

interface TourProps {
  tours: TourType[];
  removeTour: RemoveTourFunction;
}

export default function Tours(props: TourProps) {
  const { tours, removeTour } = props;

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}
