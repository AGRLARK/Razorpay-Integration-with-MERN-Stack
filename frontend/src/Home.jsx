import React from 'react'
import { Box, Stack } from '@chakra-ui/react';
import Card from './Card';
import axios from "axios";

const Home = () => {

    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://localhost:4000/api/getkey");

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        });

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Anurag Gupta",
            description: "AGRLARK SHOP",
            image: "https://avatars.githubusercontent.com/u/133891539?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                "name": "Shankar Gupta",
                "email": "shankargupta@example.com",
                "contact": "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#6fsc22"
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <div>
            <h1 style={{ fontSize: "48px", backgroundColor: "violet", fontWeight: "bold", textAlign: "center" }}> AGRLARK SHOPPING</h1>

            <Box>
                <Stack h={'100vh'} alignItems={'center'} justifyContent={'center'} direction={["column", "row"]}>
                    <Card amount={150000} img={'https://t4.ftcdn.net/jpg/06/01/14/23/360_F_601142328_VnY6DMf1sC0RULodemaCSrvXSlFhO1lA.jpg'} checkoutHandler={checkoutHandler} />
                    <Card amount={80000} img={'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673189/Croma%20Assets/Communication/Mobiles/Images/300652_0_ncocr2.png'} checkoutHandler={checkoutHandler} />

                </Stack>
            </Box>
        </div>
    )
}

export default Home