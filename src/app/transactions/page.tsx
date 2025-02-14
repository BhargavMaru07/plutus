import Container from '@/components/Container'
import TransactionCard from '@/components/TransactionCard'
import React from 'react'

function page() {

    const data: { status: "success" | "pending" | "failed" }[] = [
        {
            status: "success"
        },
        {
            status: "success"
        }, {
            status: "failed"
        }, {
            status: "success"
        }, {
            status: "pending"
        }, {
            status: "success"
        }, {
            status: "success"
        }, {
            status: "failed"
        }, {
            status: "success"
        }, {
            status: "success"
        }, {
            status: "pending"
        }, {
            status: "success"
        },
    ]

    return (
        <div className='overflow-auto'>
            <Container Title='Transactions'>
                <div className='flex px-2 py-1 rounded-lg'>

                    <div className='flex items-center gap-2 w-1/5'>
                        <p className='font-semibold'>currency</p>
                    </div>
                    <div className='w-1/5 flex justify-start items-center'>
                        <p className='font-semibold'>Transaction ID</p>

                    </div>
                    <div className='w-1/4 flex gap-2 items-center justify-around'>
                        <p className='font-semibold'>from</p>
                        <p className='font-semibold'>to</p>


                    </div>
                    <div className='w-1/6 flex justify-end items-center'>
                        <p className='font-semibold'>Status</p>
                    </div>
                    <div className='w-1/5 flex flex-col items-end'>
                        <p className='font-semibold'>Amount</p>
                    </div>
                </div>
                <hr className='w-full border-1 border-white mb-5 mt-1' />
                <div className='flex flex-col gap-2'>
                {data.map((item, idx) => (
                    <TransactionCard key={idx} status={item.status} />
                ))}
                </div>
            </Container>
        </div>
    )
}

export default page
