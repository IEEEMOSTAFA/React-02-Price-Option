
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
// import Spinner from '../Spinner/Spinner';
import { TailSpin } from 'react-loader-spinner'
import { useState } from 'react';
const LineChart = () => {
    const [loading, setLoading] = useState(true); 
    const studentMarksData = [
        { "name": "Student 1", "mathMarks": 78, "physicsMarks": 82, "chemistryMarks": 85 },
        { "name": "Student 2", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 80 },
        { "name": "Student 3", "mathMarks": 92, "physicsMarks": 91, "chemistryMarks": 94 },
        { "name": "Student 4", "mathMarks": 88, "physicsMarks": 87, "chemistryMarks": 88 },
        { "name": "Student 5", "mathMarks": 76, "physicsMarks": 79, "chemistryMarks": 82 },
        { "name": "Student 6", "mathMarks": 95, "physicsMarks": 94, "chemistryMarks": 90 },
        { "name": "Student 7", "mathMarks": 89, "physicsMarks": 86, "chemistryMarks": 87 },
        { "name": "Student 8", "mathMarks": 84, "physicsMarks": 80, "chemistryMarks": 81 },
        { "name": "Student 9", "mathMarks": 90, "physicsMarks": 89, "chemistryMarks": 92 },
        { "name": "Student 10", "mathMarks": 83, "physicsMarks": 77, "chemistryMarks": 84 }
    ];
    
      
    return (
        <div>
            {
                loading && <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
            }
            
            <LChart width={800} height={400} data={studentMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='purple'></Line>
                {/* <Line dataKey={'chemistryMarks'}></Line> */}
            </LChart>
            setLoading(false);
        </div>
    );
};

export default LineChart;