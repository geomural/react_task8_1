import './App.css';
import List from './components/List'
import Details from './components/Details'
import React, {useState, useEffect} from 'react'

function App() {
  const [list, setList] = useState([]);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    //загрузка списка
    if (list.length === 0) {
      let initList = async () => {
        try {
          const response = await fetch(process.env.REACT_APP_LIST_URL);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const resultList = await response.json();
          setList(resultList);
        } catch (e) {
          console.error(e);
        }
      }
      initList();
    }
    return
  }, [list.length]);

  const chooseUser = (id, name) => {
    setUserInfo({id, name});
  }

  return (
    <div className="App">
      <List list={list} chooseUser={chooseUser}/>
      <Details info={userInfo}/>
    </div>
  );
}

export default App;