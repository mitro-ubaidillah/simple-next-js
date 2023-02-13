import React from 'react';

const InputField = ({ onChange, value, onLength, onMin, onMax, onTotal, onCetak }) => {
    return (
        <div className='py-5 flex flex-col w-full'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" value={value} onChange={onChange} />
            <div className="btn-group mt-5">
                <button className="btn" onClick={onLength}>Jumlah Input</button>
                <button className="btn" onClick={onMin}>Bilangan Terkecil</button>
                <button className="btn" onClick={onMax}>Bilangan Terbesar</button>
            </div>
            <div className='btn-group mt-5'>
                <button className="btn">Bilangan Yang Sama</button>
                <button className="btn">Index pada bilangan yang sama</button>
            </div>
            <div className='btn-group mt-5'>
                <button className="btn" onClick={onTotal}>Jumlah Bilangan Genap & Ganjil</button>
                <button className="btn" onClick={onCetak}>Tampilkan Bilangan Genap dan Ganjil</button>
            </div>
        </div>
    );
}

export default InputField;
