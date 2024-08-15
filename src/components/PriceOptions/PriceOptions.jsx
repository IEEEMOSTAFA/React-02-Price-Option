import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym access",
            "Free parking",
            "Complimentary water bottle"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym access",
            "Group fitness classes",
            "Free Wi-Fi",
            "Free parking",
            "Complimentary water bottle",
            "Monthly progress tracking",
            "Access to pool"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym access",
            "Group fitness classes",
            "Free Wi-Fi",
            "Personal training sessions",
            "Access to sauna and steam room",
            "Towel service",
            "Free parking",
            "Complimentary water bottle",
            "Monthly progress tracking",
            "Access to pool",
            "Guest passes",
            "24/7 gym access"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 100,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym access",
            "Group fitness classes",
            "Free Wi-Fi",
            "Personal training sessions",
            "Access to sauna and steam room",
            "Towel service",
            "Nutrition consultation",
            "Private locker",
            "VIP lounge access",
            "Free parking",
            "Complimentary water bottle",
            "Monthly progress tracking",
            "Access to pool",
            "Guest passes",
            "24/7 gym access",
            "Priority class booking",
            "Massage therapy",
            "Exclusive member events",
            "Personalized fitness plan"
          ]
        }
    ];
      
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-6">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-4 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option} />)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
