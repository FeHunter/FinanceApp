import { useEffect, useState } from 'react';
import { ItemCard } from '../../Application Components/List/ItemCard/ItemCard';
import { Input } from '../../Visual Components/Input/Input';
import { TextArea } from '../../Visual Components/Input/TextArea';
import { ToggleMenu } from '../../Visual Components/ToggleMenu/ToggleMenu';
import style from './List.module.css';
import { Card } from '../../Visual Components/Card/Card';
import { UpdateItemForm } from './ItemCard/UpdateItemForm/UpdateItemForm';

export function List({title, urlResource, balance}) {
  // Data base
  const [status, setStatus] = useState(null);
  const url = 'https://finance-app-ae36c-default-rtdb.firebaseio.com';
  const resource = `/${urlResource}`;

  // Item List
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  async function SendData(data) {
    try {
      const response = await fetch(`${url}${resource}.json`, {
        method: 'put',
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  useEffect(() => {
    fetch(`${url}${resource}.json`)
      .then((res) => res.json())
      .then((res) => {
        res != null ? setList(convertData(res)) : console.log('empty list');
      })
      .catch((error) => console.error('Error fetching data:', error));

      CalculateTotalPriceOfWishList();
  }, []);

  function convertData(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);
    return objs.map((obj, index) => {
      return { id: ids[index], ...obj };
    });
  }

  async function AddToList() {
    const item = {
      name: name,
      about: about,
      price: price,
      isComplet: false,
    };
  
    try {
      // Adiciona o novo item ao Firebase
      await SendData([...list, item]);
  
      // Atualiza o estado local
      setList((prevList) => [...prevList, item]);
  
      // Limpa os campos do formulário
      setName('');
      setAbout('');
      setPrice(0);
      setStatus('Added with success');
    } catch (error) {
      console.error('Error adding item to the list:', error);
      setStatus('Failed to add item');
    }
  }

  async function UpdateList(item) {
    let updateList = [...list];
    const index = updateList.indexOf(item);
    updateList[index].isComplet = !updateList[index].isComplet;
    try {
      // Adiciona o novo item ao Firebase
      await SendData([...list]);
      // Atualiza o estado local
      setList((prevList) => [...prevList]);
    } catch (error) {
      console.error('Error adding item to the list:', error);
      setStatus('Failed to add item');
    }
  }

  function RemoveFromList(item) {
    let updateList = [...list];
    const index = updateList.indexOf(item);
    updateList.splice(index, 1);
    setList(updateList);
    SendData(updateList);
  }

  useEffect(()=>{
    CalculateTotalPriceOfWishList();
  }, [list]);
  function CalculateTotalPriceOfWishList (){
    let total = 0;
    for (let i=0; i < list.length; i++){
      if (!list[i].isComplet){
        total += parseFloat(list[i].price);
      }
    }
    setTotalPrice(parseFloat(total).toFixed(2));
  }

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  }, [document.documentElement.clientWidth, document]);

  const FormAddToList = () => {
    return (
      <div className={style.formContent}>
        <span className={style.boxform}>
          <p>Name</p>
          <Input
            placeholder="set a name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </span>
        <span className={style.boxform}>
          <p>Price</p>
          <Input
            placeholder="100"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </span>
        <span className={style.boxform}>
          <p>About</p>
          <TextArea
            placeholder="about the item..."
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
        </span>
        <span className={style.boxform}>
          <button
            onClick={() => {
              AddToList();
            }}
          >
            Add to list
          </button>
          <p>Status: {status}</p>
        </span>
      </div>
    );
  };

  const MyListItens = () => {
    return (
      <div className={style.itemsGrid}>
        {list.map((item, index) => {
          return (
            <ItemCard
              onClickSend={()=>{UpdateList(item)}}
              key={index}
              item={item}
              onClick={() => {
                RemoveFromList(item);
              }}
              popUpWindowContent={ <UpdateItemForm item={item}/> }
            />
          );
        })}
      </div>
    );
  };

  return (
    <Card 
      title={title}
      myBalance={balance}
      info={totalPrice}
    >
      <div className={style.listContend}>
        {/* Add item to the list */}

        {width >= 900 ? (
          <div className={style.formAndList}>
            {FormAddToList()}
            {MyListItens()}
          </div>
        ) : (
          <ToggleMenu title="Add to list" view={false}>
            {FormAddToList()}
          </ToggleMenu>
        )}

        {/* View item of the list */}
        {width < 900 ? (
          <ToggleMenu title="My item list" view={true}>
            {MyListItens()}
          </ToggleMenu>
        ) : null}
      </div>
    </Card>
  );
}
