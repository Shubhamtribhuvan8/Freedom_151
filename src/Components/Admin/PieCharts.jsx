import React, { useState, useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Pie = () => {
    const [student, setStudent] = useState(0);
    const [professional, setProfessional] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
		const studentCount = parseInt(localStorage.getItem('student'));
		const professionalCount = parseInt(localStorage.getItem('professional'));
		const totalCount = parseInt(localStorage.getItem('total'));

        setStudent(studentCount);
        setProfessional(professionalCount);
        setTotal(totalCount);
    }, []);

    const options = {
        title: {
            text: "Basic Column Chart For Freedom 151"
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Number of people registered", y: total },
                    { label: "Average group Count", y: 4 },
                    { label: "Professionals Count.", y: professional },
                    { label: "Students Count", y: student },
                ]
            }
        ]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Pie;
