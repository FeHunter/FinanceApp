import { useEffect, useState } from 'react';
import { ItemCard } from '../../Application Components/List/ItemCard/ItemCard';
import { Input } from '../../Visual Components/Input/Input';
import { TextArea } from '../../Visual Components/Input/TextArea';
import { ToggleMenu } from '../../Visual Components/ToggleMenu/ToggleMenu';
import style from './List.module.css';
import { Card } from '../../Visual Components/Card/Card';

export function List() {
  // Data base
  const [status, setStatus] = useState(null);
  const url = 'https://finance-app-ae36c-default-rtdb.firebaseio.com';
  const resource = '/ItemList';

  // Item List
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [price, setPrice] = useState(0);

  async function SendData(data) {
    const body = JSON.stringify(data);
    const request = await fetch(`${url}${resource}.json`, {
      method: 'post',
      body: body,
    });
    // request.then(alert('Success!')).catch((err) => alert(err.message));
  }

  useEffect(() => {
    fetch(`${url}${resource}.json`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res != null ? setList(convertData(res)) : console.log('empty list');
      });
  }, []);

  function convertData(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);
    return objs.map((obj, index) => {
      return { id: ids[index], ...obj };
    });
  }

  function AddToList(complet) {
    const item = {
      name: name,
      about: about,
      price: price,
      isComplet: complet !== null ? complet : false,
    };
    let updateList = [...list];
    updateList.push(item);
    setList(updateList);
    SendData(updateList);
    // Clear input
    setName('');
    setAbout('');
    setPrice(0);
    setStatus('Add with success');
    console.log(updateList);
  }

  function RemoveFromList(item) {
    let updateList = [...list];
    updateList.splice(updateList.indexOf(item), 1);
    setList(updateList);
    const body = JSON.stringify(updateList);
    fetch(`${url}${resource}.json`, {
      method: 'put',
      body: body,
    });
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
              // onClickSend={AddToList}
              key={index}
              item={item[index]}
              onClick={() => {
                RemoveFromList(item);
              }}
              popUpContent={
                <div>
                  <h2>About the item:</h2>
                  <p>
                    <span style={{ color: '#abb2d1' }}>Name</span>
                    <br />
                    {item[index]?.name}
                  </p>
                  <p>
                    <span style={{ color: '#abb2d1' }}>Price</span>
                    <br />${item[index]?.price}
                  </p>
                  <p>
                    <span style={{ color: '#abb2d1' }}>Description</span> <br />
                    {item[index]?.about}
                  </p>
                </div>
              }
            />
          );
        })}
      </div>
    );
  };

  return (
    <Card title="Wishlist Items">
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
