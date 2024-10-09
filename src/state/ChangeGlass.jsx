import React, { useState } from 'react'

const ChangeGlass = () => {
    let arrProduct = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "../../src/assets/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "../../src/assets/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "../../src/assets/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "../../src/assets/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "../../src/assets/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "../../src/assets/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "../../src/assets/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "../../src/assets/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "../../src/assets/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    let [selectedGlass, setGlasses] = useState(arrProduct[0])

    let changeGlass = (product) => {
        setGlasses(product)
    }


    return (
        <div style={{
            position: 'absolute',
            top: '18%',
            left: '23%',
            width: '55%',
            height: 'auto',
            transform: 'rotate(0deg)',
        }} className="container ">
            <div className='row'>
                <div style={{ marginRight: '120px' }} className="col-5">
                    <div className="card" >
                        <img src="../../src/assets/glassesImage/model.jpg" className="card-img-top" alt="..." />
                        <img src={selectedGlass.url} className="card-img-top" alt="..."
                            style={{
                                position: 'absolute',
                                top: '26%',
                                left: '23%',
                                width: '55%',
                                height: 'auto',
                                transform: 'rotate(0deg)',
                            }} />

                        <div className="card-body" style={{ position: 'absolute', top: '65%', backgroundColor: 'rgba(255, 193, 7, 0.3)' }}>
                            <h5 className="card-title text-info">
                                {selectedGlass.name}</h5>
                            <p className="card-text text-white">{selectedGlass.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="card">
                        <img src="../../src/assets/glassesImage/model.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="card p-2 mt-5">
                    <div className="col-12">
                        <div className="row">
                            {arrProduct.map((product) => (
                                <div className="col-2 mb-3" key={product.id}>
                                    <div className="card" onClick={() => changeGlass(product)}>
                                        <img src={product.url} className="card-img-top" alt="" />

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div></div>
            </div>
        </div>
    )
}

export default ChangeGlass
