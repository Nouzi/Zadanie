import { useEffect, useState } from 'react'
import React from 'react'


import { Button, Stack, Typography} from '@mui/material'
import lib from './lib'

import CreateItem from './components/CreateItem'
import { Box } from '@mui/system'



function Items() {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    let loadItems = async () => {
        const response = await lib.get('https://62b1cfb120cad3685c8389b6.mockapi.io/api/v1/Items');
        setItems(response.data);
    }


        let deleteItem = (id) => {
        lib.delete(`${id}`).then(
            (response) => {
                console.log(response)
            }
        );
    }


    useEffect(() => { loadItems() },[]);


    // noinspection JSValidateTypes
    return (
        <Typography component="div">

            <Box display="flex" justifyContent="center" padding={2}
                 sx={{
                     backgroundColor: 'Gray',
                 }}>

                <CreateItem/>
            </Box>


            {items.map((item) => {
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

                        <form>
                                    <small onClick={ () => deleteItem( item.id ) }>Delete Item</small>
                        </form>
                    </Stack>
                )
            })}


        </Typography>
    )
}

export default  Items
