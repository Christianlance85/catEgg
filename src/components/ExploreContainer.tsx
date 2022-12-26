import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Full app coming soon. In the meantime, visit our site! <a target="_blank" rel="noopener noreferrer" href="https://wisportsheroics.com/">WiSportsHeroics</a></p>
    </div>
  );
};

export default ExploreContainer;
