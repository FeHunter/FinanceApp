import { useState } from "react";
import { ItemCard } from "../../Application Components/List/ItemCard/ItemCard";

export function DefaultList (){

    const [list, setList] = useState([]);

    function AddToList (){
        let newList = [];
        newList = [... list];
        const item = {
            id: newList.length,
            name: `item ${(Math.random() * 9).toFixed(2)}`,
            price: 10,
            about: 'texto about',
        };
        newList.push(item);
        setList(newList);
    };

    function RemoveFromList (item){
        let newList = [];
        newList = [... list];
        newList.splice(newList.indexOf(item), 1);
        setList(newList);
    };

    return (
        <div style={{width: '100%'}}>
            {list.map((item, index)=>{return <ItemCard key={index} item={item} onClick={()=>{RemoveFromList(item)}}/>})}
        </div>
    );
}