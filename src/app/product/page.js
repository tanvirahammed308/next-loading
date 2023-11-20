import React from 'react';
import { resolve } from 'styled-jsx/css';

const timeTaken=async()=>{

    await new Promise((resolve)=>{
        setTimeout(resolve,5000)
    })
}
const Page = async() => {
    await timeTaken();
    return (
        <div>
            this is product page
        </div>
    );
};

export default Page;