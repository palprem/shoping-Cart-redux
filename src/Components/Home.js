import React from 'react'

const Home = (props) => {
    console.log("Home", props)
    return (
        <>
            <div className="text-center">
                {/* ---------------------------------- */}

                <div class="grid gap-x-4 gap-y-4 grid-cols-2 mx-5">
                    <div className="bg-gray-200 border rounded-md shadow-sm">
                        <ul className="d-flex">
                            <li><div className="img-wrapper item mx-5 ">
                                <img width="80" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000" alt="" />
                            </div></li>
                            <li>
                                <div className="text-wrapper item my-3">
                                    <p>I-Phone</p>
                                    <p>Price: $1000.00</p>
                                </div>
                            </li>
                            <li>
                                <div className="btn-wrapper item mt-4 ml-24">
                                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "I-Phome 11 Pro" })} className="bg-red-600 text-white text-sm p-1 rounded-md">Add To Cart</button>
                                </div>
                                <div className="btn-wrapper item my-2 ml-24">
                                    <button onClick={() => props.removeToCartHandler()} className="bg-green-600 text-white text-sm p-1 rounded-md">Remove To Cart</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-200 border rounded-md shadow-sm">
                        <ul className="d-flex">
                            <li><div className="img-wrapper item mx-5 ">
                                <img width="80" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000" alt="" />
                            </div></li>
                            <li>
                                <div className="text-wrapper item my-3">
                                    <p>I-Phone</p>
                                    <p>Price: $1000.00</p>
                                </div>
                            </li>
                            <li>
                                <div className="btn-wrapper item mt-4 ml-24">
                                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "I-Phome 11 Pro" })} className="bg-red-600 text-white text-sm p-1 rounded-md">Add To Cart</button>
                                </div>
                                <div className="btn-wrapper item my-2 ml-24">
                                    <button onClick={() => props.removeToCartHandler()} className="bg-green-600 text-white text-sm p-1 rounded-md">Remove To Cart</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-200 border rounded-md shadow-sm">
                        <ul className="d-flex">
                            <li><div className="img-wrapper item mx-5 ">
                                <img width="80" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000" alt="" />
                            </div></li>
                            <li>
                                <div className="text-wrapper item my-3">
                                    <p>I-Phone</p>
                                    <p>Price: $1000.00</p>
                                </div>
                            </li>
                            <li>
                                <div className="btn-wrapper item mt-4 ml-24">
                                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "I-Phome 11 Pro" })} className="bg-red-600 text-white text-sm p-1 rounded-md">Add To Cart</button>
                                </div>
                                <div className="btn-wrapper item my-2 ml-24">
                                    <button onClick={() => props.removeToCartHandler()} className="bg-green-600 text-white text-sm p-1 rounded-md">Remove To Cart</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-200 border rounded-md shadow-sm">
                        <ul className="d-flex">
                            <li><div className="img-wrapper item mx-5 ">
                                <img width="80" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000" alt="" />
                            </div></li>
                            <li>
                                <div className="text-wrapper item my-3">
                                    <p>I-Phone</p>
                                    <p>Price: $1000.00</p>
                                </div>
                            </li>
                            <li>
                                <div className="btn-wrapper item mt-4 ml-24">
                                    <button onClick={() => props.addToCartHandler({ price: 1000, name: "I-Phome 11 Pro" })} className="bg-red-600 text-white text-sm p-1 rounded-md">Add To Cart</button>
                                </div>
                                <div className="btn-wrapper item my-2 ml-24">
                                    <button onClick={() => props.removeToCartHandler()} className="bg-green-600 text-white text-sm p-1 rounded-md">Remove To Cart</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-dark"></div>
                    <div className="bg-dark"></div>
                    <div className="bg-dark"></div>
                    <div className="bg-dark"></div>
                </div>
            </div>
        </>
    )
}
export default Home;