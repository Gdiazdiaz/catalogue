function Tab(props) {
  const data = props;
  return (
    <div className="card-container" id={data.index}>
      <img className="card-pic" alt={data.name} src={data.imageUrl} />
      <div className="details-container">
        <h3 className="card-name">{data.name}</h3>
        <h4 className="card-filnumb">
          Movies:
          {data.films}
        </h4>
      </div>
    </div>
  );
}

export default Tab;
