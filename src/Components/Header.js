import React from 'react'

const Header = (props) => {
    console.log("Home", props.data)
    return (
        <>
            <div className="text-center">
                <div className="py-4 bg-dark text-green-700 text-2xl font-bold">
                    <h1>Shoping Cart</h1>
                </div>
                {/* ---------------------------------- */}
                <div className=" grid gap-x-4 gap-y-4 grid-cols-6" >
                    <div className="">
                    </div>
                    <div className="">
                    </div>
                    <div className="">
                    </div>
                    <div className="">
                    </div>
                    <div className="">
                    </div>
                    <div className="">
                        <div className="">
                            <span className="absolute text-gray-600 font-bold bg-yellow-300 rounded-full  p-1 ">{props.data.length}</span>
                        </div>
                        <img className="relative mx-5" width="60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJRTvnYtzlpT6MhGJA2R6UVP2FX0nLm90pg&usqp=CAU" alt="" />
                    </div>
                </div>
                {/* ---------------------------------- */}
            </div>
        </>
    )
}
export default Header;