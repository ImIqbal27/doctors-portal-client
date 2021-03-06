import React, { useState } from 'react';
// import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {
    // const [date, setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='dentist chair' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected: </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;