function Tab(props) {
    const data = props;
    let dataID = '';
    let num = data.index%3;
    if(data.index%3===0){
        console.log(data.index%3);
        dataID = 'color1';
    }
    else {
        console.log(data.index%3);
        dataID = 'color2';
    }
    console.log(num);
    return(
        <div className="card-container"  id={dataID}>
            <img className="card-pic" src={data.imageUrl}/>
            <div className="details-container">
                <h3 className="card-name">{data.name}</h3>
                <h4 className="card-filnumb">Movies: {data.films}</h4>
            </div>
        </div>
    );
}

export default Tab;