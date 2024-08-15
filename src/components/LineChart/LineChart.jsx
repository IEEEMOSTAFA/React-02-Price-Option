
import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {

    const mathMarksData = [
        { "name": "Student 1", "marks": 78 },
        { "name": "Student 2", "marks": 85 },
        { "name": "Student 3", "marks": 92 },
        { "name": "Student 4", "marks": 88 },
        { "name": "Student 5", "marks": 76 },
        { "name": "Student 6", "marks": 95 },
        { "name": "Student 7", "marks": 89 },
        { "name": "Student 8", "marks": 84 },
        { "name": "Student 9", "marks": 90 },
        { "name": "Student 10", "marks": 83 }
      ]
      
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey="marks"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;