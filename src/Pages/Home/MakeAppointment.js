import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center  items-center'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='flex-1 hidden  lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />

            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-xl font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make Appointment Today </h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum pariatur animi odit, obcaecati provident! Recusandae velit adipisci repudiandae vitae aperiam, iusto nesciunt mollitia quaerat aut repellendus labore provident soluta eum nostrum excepturi vel! Explicabo.</p>
                <PrimaryButton>Get Started</PrimaryButton>

            </div>
        </section>
    );
};

export default MakeAppointment;