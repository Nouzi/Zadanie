import {Stack, Typography} from "@mui/material";
import React, {useState} from "@types/react";
import lib from "../lib";

function Item()  {
    const [items, setItems] = useState([]);

    let loadItems = async () => {
        setLoading(true);
        const response = await lib.get('https://62b1cfb120cad3685c8389b6.mockapi.io/api/v1/Items');
        setItems(response.data);
        setLoading(false);
    }

   items.map((item) => {
    //TODO zmeniť kód na unix dátum pomocou Day.js ||
    // FIXME upraviť kód aby sa zobrazoval dátum, ktorý sa vyberie z inputu a nesnažiť sa transformovať ho len z apička
    const unixTime = item.date;
    /*           const date = new Date(unixTime*1000);
              let itemDate = date.toLocaleDateString("SK"); */
    /*    console.log(unixTime) */


    return (
        <Stack key={item.id} textAlign="center" spacing={1} margin={4} padding={2}
               sx={{
                   backgroundColor: 'gray',
                   color: 'white',
               }}>

            <Typography component="p">{item.title}</Typography>
            <Typography component="p">{item.text}</Typography>
            <Typography component="p">{unixTime}</Typography>
            {/*<form onClick={deleteItem}>
                                    <Button type="delete">Delete Item</Button>
                                </form>*/}
        </Stack>
    )})
}


