const DATA_LIST = 'catalogue/src/redux/home/home/DATA_LIST';
const API_URL ='https://api.disneyapi.dev/characters/';

const homeReducer = (state=[], action) => {
    switch (action.type) {
        case DATA_LIST:
            return action.dataList;
        default:
            return state;
    }
}

const getData = async () => {
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      const data2 = data.data;
      for(let i=1; i<data2.length; i+=4){
        data2[i].index = "color";
    }
    for(let j=2; j<data2.length; j+=4){
      data2[j].index = "color";
    }
    return data2;
    } catch (error) {
      return error;
    }
  };

export const dataList = () => async (dispatch) => {
    const dataList = await getData();
    dispatch({
        type: DATA_LIST,
        dataList,
    });
};

export default homeReducer;