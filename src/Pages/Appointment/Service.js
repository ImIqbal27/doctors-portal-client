import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
            <div class="card-body">
                <h2 class="text-xl text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span> {slots[0]}</span>
                            :
                            <span className='text-red-500'>Try Another Date.</span>
                    }
                </p>
                <p>{slots.length}{slots.length > 1 ? ' spaces' : ' space'}  available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        class="btn btn-sm btn-secondary text-white uppercase  bg-gradient-to-r from-secondary to-primary"
                        onClick={() => setTreatment(service)}>
                        Book Appointment
                    </label>
                </div>
            </div>
           
        </div>
    );
};

export default Service;