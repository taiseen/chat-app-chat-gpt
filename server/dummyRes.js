const dataSet = [
    'Health Care Analysis',
    'Appointment Data',
    'Customer Info',
    'Health New Data, Health New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New Data Health New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New DataHealth New Data Health New Data',
    'Bangladesh',
    'Dhaka'
];

const getRandomDataset = () => {
    const randomIndex = Math.floor(Math.random() * dataSet.length);
    return dataSet[randomIndex];
};


const dummyData = async (req, res) => {

    try {

        // data sent to frontend...
        res.json({ role: "ai", content: getRandomDataset() });

    } catch (error) {
        console.log(error);
    }
}

export default dummyData;