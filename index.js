import React, {useState} from 'react';

function Deneme () {

    const [count, setCount] = useState (0);

    const handleClickEkle = (quantity) => {
        setCount (count + quantity);
    };

    const handleClickCikar = (quantity) => {
        setCount (count - quantity);
    };

    return (
        <div>
            HomePage
            <br />
            {count}
            <button onClick={()=> handleClickEkle (1)}>ekle</button>
            <button onClick = { () => handleClickCikar (1)}>çıkar</button>



        </div>
    );

}

export default Deneme;


