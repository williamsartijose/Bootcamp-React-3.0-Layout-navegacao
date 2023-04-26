import ButtonIcon from 'components/ButtonIcon';
import HomeCard from 'components/HomeCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container ">
      <div className="products-container container">
        <div className="base-card search-container">
          <input className="search-input" value="Digite sua busca"></input>
          <ButtonIcon text="buscar" />
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <HomeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <HomeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <HomeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <HomeCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <HomeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
