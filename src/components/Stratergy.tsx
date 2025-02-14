import React, { FormEvent } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { RotateCcw } from 'lucide-react'
import { useUser } from '@clerk/nextjs'


function Stratergy() {

    const {user} = useUser();

    const [data, setData] = React.useState({
        duration: "Select Duration",
        maxProfit: 0,
        maxLoss: 0,
        totalAmount: 0
    })

    const [formData, setFormData] = React.useState({ ...data });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setData({ ...formData });

      if (!user) {
        console.error("User not authenticated");
        return;
      }
      
      const payload = {
        duration: formData.duration,
        maxProfit: formData.maxProfit,
        maxLoss: formData.maxLoss,
        totalAmount: formData.totalAmount,
        userId: user.id, // Make sure user.id exists
      };

      console.log("Sending request with payload:", payload);

      try {
        const response = await fetch("/api/strategy/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok) {
          console.log("Strategy created:", result);
          setData({ ...formData });
        } else {
          console.error("Error:", result.message);
        }
      } catch (error) {
        console.error("Failed to create strategy:", error);
      }
    };


    return (
        <div className="w-full bg-white dark:bg-theme_gray_2F2F2F-dark rounded-lg flex flex-col gap-4 px-5 py-4">
            <form onSubmit={handleSubmit}>
                <div className='w-full h-1/2 flex flex-col gap-4'>
                    <div className='w-full flex justify-between'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{formData.duration}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Investment Duration</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    onValueChange={(value) => (setFormData(prev => ({ ...prev, duration: value })))}
                                >
                                    <DropdownMenuRadioItem value="3 Month">3 Month</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="6 Month">6 Month</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="9 Month">9 Month</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="12 Month">12Month</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="theme_red">Revoke<span><RotateCcw size={28} /></span></Button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full flex gap-2 justify-between'>
                            <div className='w-2/3 bg-theme_gray-light dark:bg-theme_gray-dark h-full p-2 rounded-lg'>
                                <label htmlFor="prfinp">Max Profit</label>
                                <div className='w-full flex'>
                                    <input className='w-full bg-transparent outline-none' id='prfinp' type="number" max={100} min={0} defaultValue={0}
                                        onChange={(e) => { setFormData(prev => ({ ...prev, maxProfit: Number(e.target.value) })) }}
                                    />
                                    <strong>%</strong>
                                </div>
                            </div>
                            <div className='w-2/3 bg-theme_gray-light dark:bg-theme_gray-dark h-full p-2 rounded-lg'>
                                <label htmlFor="lossinp">Max Loss</label>
                                <div className='w-full flex'>
                                    <input className='w-full bg-transparent outline-none' id='lossinp' type="number" max={100} min={0} defaultValue={0}
                                        onChange={(e) => { setFormData(prev => ({ ...prev, maxLoss: Number(e.target.value) })) }}
                                    />
                                    <strong>%</strong>
                                </div>
                            </div>
                        </div>
                        <div className='w-full bg-theme_gray-light dark:bg-theme_gray-dark p-2 rounded-lg'>
                            <label htmlFor="totalmount">Total Amount</label>
                            <input className='w-full bg-transparent outline-none' id='totalmount' type="number" placeholder='Enter Amount'
                                onChange={(e) => { setFormData(prev => ({ ...prev, totalAmount: Number(e.target.value) })) }}
                            />
                        </div>
                    </div>
                    <Button type='submit'>Create Stratergy</Button>
                </div>
            </form>
            <hr className='border-1 border-white' />


            {/* to show created stargey or existinf statergy */}
            <div className='w-full h-1/2 flex flex-col gap-4'>
                <div className='w-full flex justify-between'>
                    <p>Duration : <span>{data.duration}</span></p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='w-full flex gap-2 justify-between'>
                        <div className='w-2/3 bg-theme_gray-light dark:bg-theme_gray-dark h-full p-2 rounded-lg'>
                            <p>Max Profit</p>
                            <div className='w-full flex justify-between'>
                                <p>{data.maxProfit}</p>
                                <p>%</p>
                            </div>
                        </div>
                        <div className='w-2/3 bg-theme_gray-light dark:bg-theme_gray-dark h-full p-2 rounded-lg'>
                            <p>Max Loss</p>
                            <div className='w-full flex justify-between'>
                                <p>{data.maxLoss}</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-theme_gray-light dark:bg-theme_gray-dark p-2 rounded-lg'>
                        <p>Total Amount</p>
                        <div className='w-full flex justify-between'>
                            <p>{data.totalAmount}</p>
                            <p>$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Stratergy





